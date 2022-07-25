const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../', '.env') });

const { get } = require('https');
const Papa = require('papaparse');
const fs = require('fs');
const { transpose, directories } = require('./helper.cjs');

/**
 * Imports translations for the app from a dedicated Google Sheet and converts them to JSON files for use with vue-i18n.
 */
function importTranslations() {
  // Google Sheets document id.
  const documentId = process.env.TRANSLATIONS_DOC_ID;
  const sheetId = process.env.TRANSLATIONS_SHEET_ID;

  if (!documentId || !sheetId) {
    throw new Error('Document and sheet id must be present.');
  }

  get(`https://docs.google.com/spreadsheets/d/${documentId}/gviz/tq?tqx=out:csv&gid=${sheetId}`, (res) => {
    let data = '';
    res.setEncoding('utf-8');

    res.on('data', (stream) => {
      data += stream;
    });

    res.on('end', () => {
      const parsed = Papa.parse(data.toString(), { quoteChar: '"' }).data;
      const [keys, ...translations] = transpose(parsed);

      translations.forEach((translation) => {
        // Remove the first keys from both arrays.
        const [language, ...strings] = translation;
        const [, ...translationKeys] = keys;

        const translationsObject = Object.fromEntries(keys.map((_, i) => [translationKeys[i], strings[i]]));

        translationsObject['lang'] = language;

        // Delete empty translations so vue-i18n can handle fallback strings.
        Object
          .keys(translationsObject)
          .forEach((item) => {
            const translation = translationsObject[item];

            if (!translation || !translation.length) {
              delete translationsObject[item];
            }
          });

        const filePath = path.resolve(__dirname, directories.translationsDir, `${language}.json`);
        console.info(`Created "${path.relative('../', filePath)}"`);
        const jsonData = JSON.stringify(translationsObject, null, 2);

        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }

        fs.mkdirSync(filePath.replace(path.basename(filePath), ''), { recursive: true });

        fs.writeFileSync(filePath, `${jsonData}\n`);
      });
    });
  });
}

importTranslations();
