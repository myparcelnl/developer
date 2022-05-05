# Contributing

## 0. Requirements

- [Node 16](https://nodejs.org/)
- [Yarn](https://classic.yarnpkg.com/)

## 1. Basics

- Fork this repository and clone it to your machine
- Install dependencies using Yarn:
  ```bash
  yarn
  ```

## 2. Make your changes

- Try to conform to our code style. Make sure to enable ESLint in your editor.
- You should make only one change in each branch.

## 3. Add or update tests

Run tests with the following command:

```bash
yarn run test:coverage
```

- Coverage % needs to be equal to or greater than that of the previous commit.
- If you added a new file, the corresponding test(s) should go
  inside `<filename>.spec.ts` in the same directory.

## 4. Commit

Make as many commits as you'd like. We use [Conventional Commits]
and [semantic-release] to simplify the process of releasing updates by
automating release notes and changelogs based on the rules
of [@commitlint/config-conventional].

Your branch will be squashed into one single valid commit before merging.

## 5. Create a pull request

- Keep your pull requests focused on single subjects
- Please explain what you changed and why
- We will review your code and thoroughly test it before squashing and merging
  your pull request

[@commitlint/config-conventional]: https://github.com/conventional-changelog/commitlint
[Conventional Commits]: https://www.conventionalcommits.org/en/v1.0.0/#summary
[semantic-release]: https://github.com/semantic-release/semantic-release
