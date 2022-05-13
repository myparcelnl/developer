import {
  __publicField,
  __spreadProps,
  __spreadValues,
  init_define_DOCSEARCH_OPTIONS,
  init_define_EXTERNAL_LINK_ICON_LOCALES,
  init_define_MZ_ZOOM_OPTIONS
} from "./chunk-GA4Y2YCU.js";

// dep:@myparcel_sdk
init_define_DOCSEARCH_OPTIONS();
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_MZ_ZOOM_OPTIONS();

// node_modules/@myparcel/sdk/dist/index.mjs
init_define_DOCSEARCH_OPTIONS();
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_MZ_ZOOM_OPTIONS();
var ApiException = class extends Error {
  constructor(error) {
    super(error.message);
    __publicField(this, "data");
    Object.setPrototypeOf(this, ApiException.prototype);
    this.name = "ApiException";
    this.data = error;
  }
};
var UserException = class extends Error {
  constructor(message) {
    super(message);
    __publicField(this, "name", "user");
    Object.setPrototypeOf(this, UserException.prototype);
    this.name = "UserException";
  }
};
var addParameters = (path, parameters) => {
  if (parameters) {
    const parameterSets = Object.entries(parameters).map(([key, value]) => `${key}=${value}`);
    if (parameterSets.length) {
      path += `?${parameterSets.join("&")}`;
    }
  }
  return path;
};
function isOfType(value, property) {
  return value && value[property] !== void 0;
}
var BASE_URL = "https://api.myparcel.nl";
var AbstractClient = class {
  constructor(config) {
    __publicField(this, "baseUrl");
    __publicField(this, "headers");
    __publicField(this, "_requiredHeaders", []);
    var _a, _b;
    this.baseUrl = (_a = config == null ? void 0 : config.baseUrl) != null ? _a : BASE_URL;
    this.headers = (_b = config == null ? void 0 : config.headers) != null ? _b : {};
  }
  get requiredHeaders() {
    return this._requiredHeaders;
  }
  set requiredHeaders(value) {
    this._requiredHeaders = value;
  }
  async doRequest(endpoint, options) {
    options = AbstractClient.normalizeOptions(options);
    this.validateHeaders(endpoint, options);
    const response = await this.request(endpoint, options);
    if (isOfType(response, "errors")) {
      throw new ApiException(response);
    }
    return response.data[endpoint.getProperty()];
  }
  getHeaders() {
    return __spreadValues({
      Accept: "application/json",
      "Content-Type": "application/json"
    }, this.headers);
  }
  createUrl(endpoint, options) {
    let urlPath = endpoint.getPath();
    if (options == null ? void 0 : options.path) {
      urlPath = this.substitutePath(urlPath, options.path);
    }
    if (urlPath.includes("/:")) {
      throw new UserException(`One or more path variables are missing in ${urlPath}`);
    }
    if (options == null ? void 0 : options.parameters) {
      urlPath = addParameters(urlPath, options.parameters);
    }
    return `${this.baseUrl}/${urlPath}`;
  }
  substitutePath(urlPath, pathVariables) {
    if (pathVariables) {
      Object.entries(pathVariables).forEach(([key, value]) => {
        urlPath = urlPath.replace(`:${key}`, String(value));
      });
    }
    return urlPath;
  }
  validateHeaders(endpoint, options) {
    const missingHeaders = this.requiredHeaders.filter((header) => {
      var _a;
      return !(header.toLowerCase() in ((_a = options == null ? void 0 : options.headers) != null ? _a : []));
    });
    if (missingHeaders.length) {
      throw new UserException(`Required headers are missing: ${missingHeaders.join(", ")}`);
    }
  }
  static normalizeOptions(options) {
    if (options.headers) {
      options.headers = Object.entries(options.headers).reduce((acc, [key, header]) => __spreadProps(__spreadValues({}, acc), {
        [key.toLowerCase()]: header
      }), {});
    }
    if (options.parameters) {
      options.parameters = Object.entries(options.parameters).reduce((acc, [key, parameter]) => __spreadProps(__spreadValues({}, acc), {
        [key.toLowerCase()]: parameter.toString()
      }), {});
    }
    return options;
  }
};
var FetchClient = class extends AbstractClient {
  constructor() {
    super(...arguments);
    __publicField(this, "request", async (endpoint, options) => {
      const config = {
        method: endpoint.method,
        headers: __spreadValues(__spreadValues({}, this.getHeaders()), endpoint.getHeaders())
      };
      if (isOfType(options, "body")) {
        config.body = JSON.stringify(options.body);
      }
      const request = await fetch(this.createUrl(endpoint, options), config);
      return request.json();
    });
  }
};
var AbstractEndpoint = class {
  getHeaders() {
    return {};
  }
  getPath() {
    return this.path;
  }
  getProperty() {
    return this.property;
  }
};
var AbstractPublicEndpoint = class extends AbstractEndpoint {
};
var AbstractPrivateEndpoint = class extends AbstractEndpoint {
};
function createMyParcelSdk(client, endpoints) {
  if (!endpoints.length) {
    throw new UserException("At least one endpoint must be passed.");
  }
  return endpoints.reduce((acc, endpoint) => __spreadProps(__spreadValues({}, acc), {
    [endpoint.name]: async (options) => {
      return client.doRequest(endpoint, options != null ? options : {});
    }
  }), {});
}
var createPrivateSdk = (client, endpoints) => {
  client.requiredHeaders = ["Authorization"];
  return createMyParcelSdk(client, endpoints);
};
var createPublicSdk = (client, endpoints) => createMyParcelSdk(client, endpoints);
var POST_NL_ID = 1;
var POST_NL_NAME = "postnl";
var POST_NL_HUMAN = "PostNL";
var BPOST_ID = 2;
var BPOST_NAME = "bpost";
var BPOST_HUMAN = "bpost";
var CHEAP_CARGO_ID = 3;
var CHEAP_CARGO_NAME = "cheapcargo";
var CHEAP_CARGO_HUMAN = "Cheap Cargo";
var DPD_ID = 4;
var DPD_NAME = "dpd";
var DPD_HUMAN = "DPD";
var INSTABOX_ID = 5;
var INSTABOX_NAME = "instabox";
var INSTABOX_HUMAN = "Instabox";
var DHL_ID = 6;
var DHL_NAME = "dhl";
var DHL_HUMAN = "DHL";
var BOL_COM_ID = 7;
var BOL_COM_NAME = "bol.com";
var BOL_COM_HUMAN = "Bol.com";
var UPS_ID = 8;
var UPS_NAME = "ups";
var UPS_HUMAN = "UPS";
var POSTNL = {
  NAME: POST_NL_NAME,
  ID: POST_NL_ID,
  HUMAN: POST_NL_HUMAN
};
var BPOST = {
  NAME: BPOST_NAME,
  ID: BPOST_ID,
  HUMAN: BPOST_HUMAN
};
var CHEAP_CARGO = {
  NAME: CHEAP_CARGO_NAME,
  ID: CHEAP_CARGO_ID,
  HUMAN: CHEAP_CARGO_HUMAN
};
var DPD = {
  NAME: DPD_NAME,
  ID: DPD_ID,
  HUMAN: DPD_HUMAN
};
var INSTABOX = {
  NAME: INSTABOX_NAME,
  ID: INSTABOX_ID,
  HUMAN: INSTABOX_HUMAN
};
var DHL = {
  NAME: DHL_NAME,
  ID: DHL_ID,
  HUMAN: DHL_HUMAN
};
var BOL_COM = {
  NAME: BOL_COM_NAME,
  ID: BOL_COM_ID,
  HUMAN: BOL_COM_HUMAN
};
var UPS = {
  NAME: UPS_NAME,
  ID: UPS_ID,
  HUMAN: UPS_HUMAN
};
var ALL$3 = [CHEAP_CARGO, DPD, INSTABOX, DHL, BOL_COM, UPS];
var carriers = Object.freeze({
  __proto__: null,
  POST_NL_ID,
  POST_NL_NAME,
  POST_NL_HUMAN,
  BPOST_ID,
  BPOST_NAME,
  BPOST_HUMAN,
  CHEAP_CARGO_ID,
  CHEAP_CARGO_NAME,
  CHEAP_CARGO_HUMAN,
  DPD_ID,
  DPD_NAME,
  DPD_HUMAN,
  INSTABOX_ID,
  INSTABOX_NAME,
  INSTABOX_HUMAN,
  DHL_ID,
  DHL_NAME,
  DHL_HUMAN,
  BOL_COM_ID,
  BOL_COM_NAME,
  BOL_COM_HUMAN,
  UPS_ID,
  UPS_NAME,
  UPS_HUMAN,
  POSTNL,
  BPOST,
  CHEAP_CARGO,
  DPD,
  INSTABOX,
  DHL,
  BOL_COM,
  UPS,
  ALL: ALL$3
});
var AFGHANISTAN = "AF";
var ALAND_ISLANDS = "AX";
var ALBANIA = "AL";
var ALGERIA = "DZ";
var AMERICAN_SAMOA = "AS";
var AMERICAN_VIRGIN_ISLANDS = "VI";
var ANDORRA = "AD";
var ANGOLA = "AO";
var ANGUILLA = "AI";
var ANTARCTICA = "AQ";
var ANTIGUA_AND_BARBUDA = "AG";
var ARGENTINA = "AR";
var ARMENIA = "AM";
var ARUBA = "AW";
var AUSTRALIA = "AU";
var AUSTRIA = "AT";
var AZERBAIJAN = "AZ";
var BAHAMAS = "BS";
var BAHRAIN = "BH";
var BANGLADESH = "BD";
var BARBADOS = "BB";
var BELARUS = "BY";
var BELGIUM = "BE";
var BELIZE = "BZ";
var BENIN = "BJ";
var BERMUDA = "BM";
var BHUTAN = "BT";
var BOLIVIA = "BO";
var BOSNIA_AND_HERZEGOVINA = "BA";
var BOTSWANA = "BW";
var BOUVET_ISLAND = "BV";
var BRAZIL = "BR";
var BRITISH_INDIAN_OCEAN_TERRITORY = "IO";
var BRITISH_VIRGIN_ISLANDS = "VG";
var BRUNEI_DARUSSALAM = "BN";
var BULGARIA = "BG";
var BURKINA_FASO = "BF";
var BURUNDI = "BI";
var CABO_VERDE = "CV";
var CAMBODIA = "KH";
var CAMEROON = "CM";
var CANADA = "CA";
var CAYMAN_ISLANDS = "KY";
var CENTRAL_AFRICAN_REPUBLIC = "CF";
var CHAD = "TD";
var CHILE = "CL";
var CHINA = "CN";
var CHRISTMAS_ISLAND = "CX";
var COCOS_ISLANDS = "CC";
var COLOMBIA = "CO";
var COMOROS = "KM";
var CONGO_BRAZZAVILLE = "CG";
var CONGO_KINSHASA = "CD";
var COOK_ISLANDS = "CK";
var COSTA_RICA = "CR";
var CROATIA = "HR";
var CUBA = "CU";
var CURACAO = "CW";
var CYPRUS = "CY";
var CZECH_REPUBLIC = "CZ";
var COTE_D_IVOIRE = "CI";
var DENMARK = "DK";
var DJIBOUTI = "DJ";
var DOMINICA = "DM";
var DOMINICAN_REPUBLIC = "DO";
var DUTCH_ANTILLES = "BQ";
var ECUADOR = "EC";
var EGYPT = "EG";
var EL_SALVADOR = "SV";
var EQUATORIAL_GUINEA = "GQ";
var ERITREA = "ER";
var ESTONIA = "EE";
var ESWATINI = "SZ";
var ETHIOPIA = "ET";
var FALKLAND_ISLANDS = "FK";
var FAROE_ISLANDS = "FO";
var FIJI = "FJ";
var FINLAND = "FI";
var FRANCE = "FR";
var FRENCH_GUIANA = "GF";
var FRENCH_POLYNESIA = "PF";
var FRENCH_SOUTHERN_TERRITORIES = "TF";
var GABON = "GA";
var GAMBIA = "GM";
var GEORGIA = "GE";
var GERMANY = "DE";
var GHANA = "GH";
var GIBRALTAR = "GI";
var GREECE = "GR";
var GREENLAND = "GL";
var GRENADA = "GD";
var GUADELOUPE = "GP";
var GUAM = "GU";
var GUATEMALA = "GT";
var GUERNSEY = "GG";
var GUINEA = "GN";
var GUINEA_BISSAU = "GW";
var GUYANA = "GY";
var HAITI = "HT";
var HEARD_ISLAND_AND_MCDONALD_ISLANDS = "HM";
var HOLY_SEE = "VA";
var HONDURAS = "HN";
var HONG_KONG = "HK";
var HUNGARY = "HU";
var ICELAND = "IS";
var INDIA = "IN";
var INDONESIA = "ID";
var IRAN = "IR";
var IRAQ = "IQ";
var IRELAND = "IE";
var ISLE_OF_MAN = "IM";
var ISRAEL = "IL";
var ITALY = "IT";
var JAMAICA = "JM";
var JAPAN = "JP";
var JERSEY = "JE";
var JORDAN = "JO";
var KAZAKHSTAN = "KZ";
var KENYA = "KE";
var KIRIBATI = "KI";
var KOREA = "KR";
var KOSOVO = "XK";
var KUWAIT = "KW";
var KYRGYZSTAN = "KG";
var LAO_PEOPLE_DEMOCRATIC_REPUBLIC = "LA";
var LATVIA = "LV";
var LEBANON = "LB";
var LESOTHO = "LS";
var LIBERIA = "LR";
var LIBYA = "LY";
var LIECHTENSTEIN = "LI";
var LITHUANIA = "LT";
var LUXEMBOURG = "LU";
var MACAO = "MO";
var MADAGASCAR = "MG";
var MALAWI = "MW";
var MALAYSIA = "MY";
var MALDIVES = "MV";
var MALI = "ML";
var MALTA = "MT";
var MARSHALL_ISLANDS = "MH";
var MARTINIQUE = "MQ";
var MAURITANIA = "MR";
var MAURITIUS = "MU";
var MAYOTTE = "YT";
var MEXICO = "MX";
var MICRONESIA = "FM";
var MOLDOVA = "MD";
var MONACO = "MC";
var MONGOLIA = "MN";
var MONTENEGRO = "ME";
var MONTSERRAT = "MS";
var MOROCCO = "MA";
var MOZAMBIQUE = "MZ";
var MYANMAR = "MM";
var NAMIBIA = "NA";
var NAURU = "NR";
var NEPAL = "NP";
var NETHERLANDS = "NL";
var NEW_CALEDONIA = "NC";
var NEW_ZEALAND = "NZ";
var NICARAGUA = "NI";
var NIGER = "NE";
var NIGERIA = "NG";
var NIUE = "NU";
var NORFOLK_ISLAND = "NF";
var NORTHERN_MARIANA_ISLANDS = "MP";
var NORTH_MACEDONIA = "MK";
var NORWAY = "NO";
var OMAN = "OM";
var PAKISTAN = "PK";
var PALAU = "PW";
var PALESTINE = "PS";
var PANAMA = "PA";
var PAPUA_NEW_GUINEA = "PG";
var PARAGUAY = "PY";
var PERU = "PE";
var PHILIPPINES = "PH";
var PITCAIRN = "PN";
var POLAND = "PL";
var PORTUGAL = "PT";
var PUERTO_RICO = "PR";
var QATAR = "QA";
var ROMANIA = "RO";
var RUSSIAN_FEDERATION = "RU";
var RWANDA = "RW";
var REUNION = "RE";
var SAINT_BARTHELEMY = "BL";
var SAINT_HELENA = "SH";
var SAINT_KITTS_AND_NEVIS = "KN";
var SAINT_LUCIA = "LC";
var SAINT_MARTIN = "MF";
var SAINT_PIERRE_AND_MIQUELON = "PM";
var SAINT_VINCENT_AND_THE_GRENADINES = "VC";
var SAMOA = "WS";
var SAN_MARINO = "SM";
var SAO_TOME_AND_PRINCIPE = "ST";
var SAUDI_ARABIA = "SA";
var SENEGAL = "SN";
var SERBIA = "RS";
var SEYCHELLES = "SC";
var SIERRA_LEONE = "SL";
var SINGAPORE = "SG";
var SINT_MAARTEN = "SX";
var SLOVAKIA = "SK";
var SLOVENIA = "SI";
var SOLOMON_ISLANDS = "SB";
var SOMALIA = "SO";
var SOUTH_AFRICA = "ZA";
var SOUTH_GEORGIA_AND_THE_SOUTH_SANDWICH_ISLANDS = "GS";
var SOUTH_SUDAN = "SS";
var SPAIN = "ES";
var SRI_LANKA = "LK";
var SUDAN = "SD";
var SURINAME = "SR";
var SVALBARD_AND_JAN_MAYEN = "SJ";
var SWEDEN = "SE";
var SWITZERLAND = "CH";
var SYRIAN_ARAB_REPUBLIC = "SY";
var TAIWAN = "TW";
var TAJIKISTAN = "TJ";
var TANZANIA = "TZ";
var THAILAND = "TH";
var TIMOR_LESTE = "TL";
var TOGO = "TG";
var TOKELAU = "TK";
var TONGA = "TO";
var TRINIDAD_AND_TOBAGO = "TT";
var TUNISIA = "TN";
var TURKEY = "TR";
var TURKMENISTAN = "TM";
var TURKS_AND_CAICOS_ISLANDS = "TC";
var TUVALU = "TV";
var UGANDA = "UG";
var UKRAINE = "UA";
var UNITED_ARAB_EMIRATES = "AE";
var UNITED_KINGDOM = "GB";
var UNITED_STATES_MINOR_OUTLYING_ISLANDS = "UM";
var UNITED_STATES_OF_AMERICA = "US";
var URUGUAY = "UY";
var UZBEKISTAN = "UZ";
var VANUATU = "VU";
var VENEZUELA = "VE";
var VIETNAM = "VN";
var WALLIS_AND_FUTUNA = "WF";
var WESTERN_SAHARA = "EH";
var YEMEN = "YE";
var ZAMBIA = "ZM";
var ZIMBABWE = "ZW";
var countries = Object.freeze({
  __proto__: null,
  AFGHANISTAN,
  ALAND_ISLANDS,
  ALBANIA,
  ALGERIA,
  AMERICAN_SAMOA,
  AMERICAN_VIRGIN_ISLANDS,
  ANDORRA,
  ANGOLA,
  ANGUILLA,
  ANTARCTICA,
  ANTIGUA_AND_BARBUDA,
  ARGENTINA,
  ARMENIA,
  ARUBA,
  AUSTRALIA,
  AUSTRIA,
  AZERBAIJAN,
  BAHAMAS,
  BAHRAIN,
  BANGLADESH,
  BARBADOS,
  BELARUS,
  BELGIUM,
  BELIZE,
  BENIN,
  BERMUDA,
  BHUTAN,
  BOLIVIA,
  BOSNIA_AND_HERZEGOVINA,
  BOTSWANA,
  BOUVET_ISLAND,
  BRAZIL,
  BRITISH_INDIAN_OCEAN_TERRITORY,
  BRITISH_VIRGIN_ISLANDS,
  BRUNEI_DARUSSALAM,
  BULGARIA,
  BURKINA_FASO,
  BURUNDI,
  CABO_VERDE,
  CAMBODIA,
  CAMEROON,
  CANADA,
  CAYMAN_ISLANDS,
  CENTRAL_AFRICAN_REPUBLIC,
  CHAD,
  CHILE,
  CHINA,
  CHRISTMAS_ISLAND,
  COCOS_ISLANDS,
  COLOMBIA,
  COMOROS,
  CONGO_BRAZZAVILLE,
  CONGO_KINSHASA,
  COOK_ISLANDS,
  COSTA_RICA,
  CROATIA,
  CUBA,
  CURACAO,
  CYPRUS,
  CZECH_REPUBLIC,
  COTE_D_IVOIRE,
  DENMARK,
  DJIBOUTI,
  DOMINICA,
  DOMINICAN_REPUBLIC,
  DUTCH_ANTILLES,
  ECUADOR,
  EGYPT,
  EL_SALVADOR,
  EQUATORIAL_GUINEA,
  ERITREA,
  ESTONIA,
  ESWATINI,
  ETHIOPIA,
  FALKLAND_ISLANDS,
  FAROE_ISLANDS,
  FIJI,
  FINLAND,
  FRANCE,
  FRENCH_GUIANA,
  FRENCH_POLYNESIA,
  FRENCH_SOUTHERN_TERRITORIES,
  GABON,
  GAMBIA,
  GEORGIA,
  GERMANY,
  GHANA,
  GIBRALTAR,
  GREECE,
  GREENLAND,
  GRENADA,
  GUADELOUPE,
  GUAM,
  GUATEMALA,
  GUERNSEY,
  GUINEA,
  GUINEA_BISSAU,
  GUYANA,
  HAITI,
  HEARD_ISLAND_AND_MCDONALD_ISLANDS,
  HOLY_SEE,
  HONDURAS,
  HONG_KONG,
  HUNGARY,
  ICELAND,
  INDIA,
  INDONESIA,
  IRAN,
  IRAQ,
  IRELAND,
  ISLE_OF_MAN,
  ISRAEL,
  ITALY,
  JAMAICA,
  JAPAN,
  JERSEY,
  JORDAN,
  KAZAKHSTAN,
  KENYA,
  KIRIBATI,
  KOREA,
  KOSOVO,
  KUWAIT,
  KYRGYZSTAN,
  LAO_PEOPLE_DEMOCRATIC_REPUBLIC,
  LATVIA,
  LEBANON,
  LESOTHO,
  LIBERIA,
  LIBYA,
  LIECHTENSTEIN,
  LITHUANIA,
  LUXEMBOURG,
  MACAO,
  MADAGASCAR,
  MALAWI,
  MALAYSIA,
  MALDIVES,
  MALI,
  MALTA,
  MARSHALL_ISLANDS,
  MARTINIQUE,
  MAURITANIA,
  MAURITIUS,
  MAYOTTE,
  MEXICO,
  MICRONESIA,
  MOLDOVA,
  MONACO,
  MONGOLIA,
  MONTENEGRO,
  MONTSERRAT,
  MOROCCO,
  MOZAMBIQUE,
  MYANMAR,
  NAMIBIA,
  NAURU,
  NEPAL,
  NETHERLANDS,
  NEW_CALEDONIA,
  NEW_ZEALAND,
  NICARAGUA,
  NIGER,
  NIGERIA,
  NIUE,
  NORFOLK_ISLAND,
  NORTHERN_MARIANA_ISLANDS,
  NORTH_MACEDONIA,
  NORWAY,
  OMAN,
  PAKISTAN,
  PALAU,
  PALESTINE,
  PANAMA,
  PAPUA_NEW_GUINEA,
  PARAGUAY,
  PERU,
  PHILIPPINES,
  PITCAIRN,
  POLAND,
  PORTUGAL,
  PUERTO_RICO,
  QATAR,
  ROMANIA,
  RUSSIAN_FEDERATION,
  RWANDA,
  REUNION,
  SAINT_BARTHELEMY,
  SAINT_HELENA,
  SAINT_KITTS_AND_NEVIS,
  SAINT_LUCIA,
  SAINT_MARTIN,
  SAINT_PIERRE_AND_MIQUELON,
  SAINT_VINCENT_AND_THE_GRENADINES,
  SAMOA,
  SAN_MARINO,
  SAO_TOME_AND_PRINCIPE,
  SAUDI_ARABIA,
  SENEGAL,
  SERBIA,
  SEYCHELLES,
  SIERRA_LEONE,
  SINGAPORE,
  SINT_MAARTEN,
  SLOVAKIA,
  SLOVENIA,
  SOLOMON_ISLANDS,
  SOMALIA,
  SOUTH_AFRICA,
  SOUTH_GEORGIA_AND_THE_SOUTH_SANDWICH_ISLANDS,
  SOUTH_SUDAN,
  SPAIN,
  SRI_LANKA,
  SUDAN,
  SURINAME,
  SVALBARD_AND_JAN_MAYEN,
  SWEDEN,
  SWITZERLAND,
  SYRIAN_ARAB_REPUBLIC,
  TAIWAN,
  TAJIKISTAN,
  TANZANIA,
  THAILAND,
  TIMOR_LESTE,
  TOGO,
  TOKELAU,
  TONGA,
  TRINIDAD_AND_TOBAGO,
  TUNISIA,
  TURKEY,
  TURKMENISTAN,
  TURKS_AND_CAICOS_ISLANDS,
  TUVALU,
  UGANDA,
  UKRAINE,
  UNITED_ARAB_EMIRATES,
  UNITED_KINGDOM,
  UNITED_STATES_MINOR_OUTLYING_ISLANDS,
  UNITED_STATES_OF_AMERICA,
  URUGUAY,
  UZBEKISTAN,
  VANUATU,
  VENEZUELA,
  VIETNAM,
  WALLIS_AND_FUTUNA,
  WESTERN_SAHARA,
  YEMEN,
  ZAMBIA,
  ZIMBABWE
});
var MORNING_ID = 1;
var MORNING_NAME = "morning";
var STANDARD_ID = 2;
var STANDARD_NAME = "standard";
var EVENING_ID = 3;
var EVENING_NAME = "evening";
var PICKUP_ID = 4;
var PICKUP_NAME = "pickup";
var MORNING = {
  ID: MORNING_ID,
  NAME: MORNING_NAME
};
var STANDARD = {
  ID: STANDARD_ID,
  NAME: STANDARD_NAME
};
var EVENING = {
  ID: EVENING_ID,
  NAME: EVENING_NAME
};
var PICKUP = {
  ID: PICKUP_ID,
  NAME: PICKUP_NAME
};
var ALL$2 = [MORNING, STANDARD, EVENING, PICKUP];
var deliveryTypes = Object.freeze({
  __proto__: null,
  MORNING_ID,
  MORNING_NAME,
  STANDARD_ID,
  STANDARD_NAME,
  EVENING_ID,
  EVENING_NAME,
  PICKUP_ID,
  PICKUP_NAME,
  MORNING,
  STANDARD,
  EVENING,
  PICKUP,
  ALL: ALL$2
});
var PACKAGE_ID = 1;
var PACKAGE_NAME = "package";
var MAILBOX_ID = 2;
var MAILBOX_NAME = "mailbox";
var LETTER_ID = 3;
var LETTER_NAME = "letter";
var DIGITAL_STAMP_ID = 4;
var DIGITAL_STAMP_NAME = "digital_stamp";
var PACKAGE = {
  ID: PACKAGE_ID,
  NAME: PACKAGE_NAME
};
var MAILBOX = {
  ID: MAILBOX_ID,
  NAME: MAILBOX_NAME
};
var LETTER = {
  ID: LETTER_ID,
  NAME: LETTER_NAME
};
var DIGITAL_STAMP = {
  ID: DIGITAL_STAMP_ID,
  NAME: DIGITAL_STAMP_NAME
};
var ALL$1 = [PACKAGE, MAILBOX, LETTER, DIGITAL_STAMP];
var packageTypes = Object.freeze({
  __proto__: null,
  PACKAGE_ID,
  PACKAGE_NAME,
  MAILBOX_ID,
  MAILBOX_NAME,
  LETTER_ID,
  LETTER_NAME,
  DIGITAL_STAMP_ID,
  DIGITAL_STAMP_NAME,
  PACKAGE,
  MAILBOX,
  LETTER,
  DIGITAL_STAMP,
  ALL: ALL$1
});
var MYPARCEL_ID = 1;
var MYPARCEL_NAME = "myparcel";
var MYPARCEL_HUMAN = "MyParcel";
var SENDMYPARCEL_ID = 2;
var SENDMYPARCEL_NAME = "belgie";
var SENDMYPARCEL_HUMAN = "SendMyParcel";
var FLESPAKKET_ID = 3;
var FLESPAKKET_NAME = "flespakket";
var FLESPAKKET_HUMAN = "Flespakket";
var MYPARCEL = {
  ID: MYPARCEL_ID,
  NAME: MYPARCEL_NAME,
  HUMAN: MYPARCEL_HUMAN
};
var SENDMYPARCEL = {
  ID: SENDMYPARCEL_ID,
  NAME: SENDMYPARCEL_NAME,
  HUMAN: SENDMYPARCEL_HUMAN
};
var FLESPAKKET = {
  ID: FLESPAKKET_ID,
  NAME: FLESPAKKET_NAME,
  HUMAN: FLESPAKKET_HUMAN
};
var ALL = [MYPARCEL, SENDMYPARCEL, FLESPAKKET];
var platforms = Object.freeze({
  __proto__: null,
  MYPARCEL_ID,
  MYPARCEL_NAME,
  MYPARCEL_HUMAN,
  SENDMYPARCEL_ID,
  SENDMYPARCEL_NAME,
  SENDMYPARCEL_HUMAN,
  FLESPAKKET_ID,
  FLESPAKKET_NAME,
  FLESPAKKET_HUMAN,
  MYPARCEL,
  SENDMYPARCEL,
  FLESPAKKET,
  ALL
});
var PrivateGetEndpoints = ((PrivateGetEndpoints2) => {
  PrivateGetEndpoints2["GET_SHIPMENT"] = "getShipment";
  PrivateGetEndpoints2["GET_SHIPMENTS"] = "getShipments";
  return PrivateGetEndpoints2;
})(PrivateGetEndpoints || {});
var PrivatePostEndpoints = ((PrivatePostEndpoints2) => {
  PrivatePostEndpoints2["POST_SHIPMENTS"] = "postShipments";
  return PrivatePostEndpoints2;
})(PrivatePostEndpoints || {});
var GetShipment = class extends AbstractPrivateEndpoint {
  constructor() {
    super(...arguments);
    __publicField(this, "method", "GET");
    __publicField(this, "name", PrivateGetEndpoints.GET_SHIPMENT);
    __publicField(this, "path", "shipments/:id");
    __publicField(this, "property", "shipments");
  }
};
var GetShipments = class extends AbstractPrivateEndpoint {
  constructor() {
    super(...arguments);
    __publicField(this, "method", "GET");
    __publicField(this, "name", PrivateGetEndpoints.GET_SHIPMENTS);
    __publicField(this, "path", "shipments");
    __publicField(this, "property", "shipments");
  }
};
var PostShipments = class extends AbstractPrivateEndpoint {
  constructor() {
    super(...arguments);
    __publicField(this, "method", "POST");
    __publicField(this, "name", PrivatePostEndpoints.POST_SHIPMENTS);
    __publicField(this, "path", "shipments");
    __publicField(this, "property", "ids");
  }
};
var PublicGetEndpoints = ((PublicGetEndpoints2) => {
  PublicGetEndpoints2["GET_CARRIER"] = "getCarrier";
  PublicGetEndpoints2["GET_CARRIERS"] = "getCarriers";
  PublicGetEndpoints2["GET_DELIVERY_OPTIONS"] = "getDeliveryOptions";
  PublicGetEndpoints2["GET_PICKUP_LOCATIONS"] = "getPickupLocations";
  return PublicGetEndpoints2;
})(PublicGetEndpoints || {});
var GetCarrier = class extends AbstractPublicEndpoint {
  constructor() {
    super(...arguments);
    __publicField(this, "method", "GET");
    __publicField(this, "name", PublicGetEndpoints.GET_CARRIER);
    __publicField(this, "path", "carriers/:carrier");
    __publicField(this, "property", "carriers");
  }
};
var GetCarriers = class extends AbstractPublicEndpoint {
  constructor() {
    super(...arguments);
    __publicField(this, "method", "GET");
    __publicField(this, "name", PublicGetEndpoints.GET_CARRIERS);
    __publicField(this, "path", "carriers");
    __publicField(this, "property", "carriers");
  }
};
var GetDeliveryOptions = class extends AbstractPublicEndpoint {
  constructor() {
    super(...arguments);
    __publicField(this, "method", "GET");
    __publicField(this, "name", PublicGetEndpoints.GET_DELIVERY_OPTIONS);
    __publicField(this, "path", "delivery_options");
    __publicField(this, "property", "deliveries");
  }
  getHeaders() {
    return __spreadProps(__spreadValues({}, super.getHeaders()), { Accept: "application/json;version=2.0" });
  }
};
var GetPickupLocations = class extends AbstractPublicEndpoint {
  constructor() {
    super(...arguments);
    __publicField(this, "method", "GET");
    __publicField(this, "name", PublicGetEndpoints.GET_PICKUP_LOCATIONS);
    __publicField(this, "path", "pickup_locations");
    __publicField(this, "property", "pickup_locations");
  }
};
export {
  AbstractClient,
  AbstractEndpoint,
  AbstractPrivateEndpoint,
  AbstractPublicEndpoint,
  ApiException,
  BASE_URL,
  carriers as CARRIERS,
  countries as COUNTRIES,
  deliveryTypes as DELIVERY_TYPES,
  FetchClient,
  GetCarrier,
  GetCarriers,
  GetDeliveryOptions,
  GetPickupLocations,
  GetShipment,
  GetShipments,
  packageTypes as PACKAGE_TYPES,
  platforms as PLATFORMS,
  PostShipments,
  PrivateGetEndpoints,
  PrivatePostEndpoints,
  PublicGetEndpoints,
  UserException,
  createMyParcelSdk,
  createPrivateSdk,
  createPublicSdk
};
//# sourceMappingURL=@myparcel_sdk.js.map
