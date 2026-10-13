# developer.myparcel.nl

MyParcel has two developer portals: this one, and [myparcelnl/developer-portal](https://github.com/myparcelnl/developer-portal) (developer.myparcel.com). When you change content that both have, such as an SDK page or a plugin manual, check the other one too.

## Agent skills

Use these skills when they are available:

| Task                                   | Skill                                               |
| -------------------------------------- | --------------------------------------------------- |
| Create or change a `.md` file          | `ai-basekit:documentation`                          |
| Write prose                            | `external-integrations-basekit:writing-style`       |
| Open a pull request or a stack of them | `external-integrations-basekit:github-pull-request` |

If one is missing, tell the user once. MyParcel employees install them with:

```
/plugin marketplace add mypadev/ai-plugins
/plugin install ai-basekit@myparcel-claude-code-marketplace
/plugin install external-integrations-basekit@myparcel-claude-code-marketplace
```

Without the skills, follow [Writing](#writing) and [Pull requests](#pull-requests).

## Pages

- Front matter, headings and components: see `src/contributing.md`. Containers are only `::: tip` and `::: note`.
- English pages are in `src/`, Dutch pages in `src/nl/`. When you add a page, always add its variant in the other language. At minimum, that variant holds only front matter that refers to the existing page, for example `src/nl/documentatie/51.javascript-sdk.md`:

  ```yaml
  ---
  title: JS SDK
  languages:
    - en: documentation/51.javascript-sdk.html
  ---
  ```

  "Redirecting" in `src/contributing.md` describes the options.

- A full translation, such as `src/nl/documentatie/10.woocommerce.md`, gets the same change as its English page, in the same pull request. A variant with only front matter needs only its `title` updated.

## Writing

- Simplified Technical English (ASD-STE100): one idea per sentence, active voice, present tense, "you" for the reader. No em dashes.
- Use the names the product, the API and the code use. Never invent a term, an identifier or a code example.
- Use obvious placeholders such as `<api-key>`, never a value that looks real.
- Name the major version of a MyParcel plugin, SDK or API, such as v11. Name a minor or patch version only as a requirement (the first version with a feature or a bug fix) or in a changelog.
- Do not copy implementation code or configuration from a repository. Link to the source instead: every copy must be kept in sync. When a reader needs a list of allowed values, show the list and link to its source next to it: the code is always the most true. Code examples show how to use the public API. Translations of a page are not copies.
- When you change a heading or move a page, update the navigation and every link to it.

## Pull requests

1. Branch from `main`. Run the build before you open the pull request.
2. Title: a conventional commit, for example `docs(php-sdk): mark the php sdk guide as v10`.
3. Body, in this order:
   - One sentence on what the pull request does.
   - The changes, one line each. Not a list of files.
   - References: `Fixes INT-1234` or `Refs INT-1234` for the Jira ticket (MyParcel employees), `Fixes #123` only for a GitHub issue the pull request closes.
   - The AI disclaimer, when an AI agent wrote any of it. It says that an AI agent wrote it, which sections a person wrote by hand, and whether a person reviewed the output:
     ```
     > [!NOTE]
     > An AI agent wrote this pull request. A person wrote the "Installation" section by hand. A person reviewed the changes.
     ```
     Without a review, write "No person has reviewed the changes yet."
4. Split large work into a stack of small pull requests with [`gh stack`](https://gh.io/stacks).

Never put a credential or customer data in a pull request, a commit, a page, an image or a screenshot.
