## Introduction

The `ig-toolkit` is a TypeScript project that allows you to perform various Instagram-related tasks, such as fetching followers and more. This tool simplifies these tasks and provides an easy-to-use command-line interface.

## Features

- Login to your Instagram account securely.
- Fetch your followers list.
- [More features will be added as the project develops]

## Prerequisites

This project requires the following tools:

- [Node.js](https://nodejs.org/en/) - As an open-source, cross-platform JavaScript runtime environment.
- [Yarn](https://classic.yarnpkg.com/en/docs/install#mac-stable) - Fast, Reliable and Secure Dependency Manaagement

## Installation

**Step 1. Clone the code into a fresh folder**

```
$ git clone https://github.com/ferhatkefsiz/ig-toolkit.git
```

**Step 2. Install dependencies**

```
$ yarn install
```

**Step 3. Setup env file (OPTIONAL)**

Create a new file named `.env` by duplicating `.env.example`. Update the new file with the Instagram credentials. It should look similar to this:

```
IG_USERNAME"[INSERT_INSTAGRAM_USERNAME]"
IG_PASSWORD="[INSERT_INSTAGRAM_PASSWORD]"
```

## Available scripts

- `clean` - remove coverage data, transpiled files,
- `build` - transpile TypeScript to JavaScript,
- `format` - format source files,

## Contributing

Want to contribute to making this project better for others? Thanks! There are plenty of ways you can help.

Before you do anything else, please read the [README][readme] of this project first. It will highlight the key features and help you understand the project structure. The rest of this document will help make the contribution process easier.

### Where do I go from here?

If you noticed a bug or have a question, [open an issue][issues]. I'll try to answer it as fast as possible.

### Can I submit a Pull Request?

Pull requests to fix issues, add improvements, or other features are always appreciated! Good pull requests should be focused and avoid unrelated commits. Including helpful descriptions, titles, and screenshots will make it easier to review.

### What can I contribute to?

Even the smallest change is appreciated. It can be a typo error or fixing a bug. Nothing is too small to be helpful. You can also reach out to [my email][email] if you want to work on an issue.

## License

This project is licensed under the MIT License - see the [LICENSE][license] file for details.

[readme]: https://github.com/ferhatkefsiz/ig-toolkit#readme
[issues]: https://github.com/ferhatkefsiz/ig-toolkit/issues
[email]: mailto:hello@ferhat.io
[license]: https://github.com/ferhatkefsiz/ig-toolkit/LICENSE
