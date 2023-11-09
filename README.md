## Introduction

An Instagram automation software that simplifies and automates various actions on the platform, providing a user-friendly command-line interface.

## Core Features

- **Secure Login:** Users can securely log in to their Instagram accounts, ensuring the safety of their credentials.
- **Data Export:**

  - **Followers List:** Export your list of followers to a JSON file.
  - **Followings List:** Export your list of followings to a JSON file.

- **Follow Management:**

  - **Whitelist:** people you don't want to unfollow.
  - **Identify Non-Followers:** Detect who does not follow you back and unfollow.
  - **Target User:** Follow someone else's followers or followings

## Upcoming Features

- Two-Factor Authentication (2FA)
- Approve Pending-requests.
- Detect blocked users and unblock.
- Auto like and comment on feed.
- Edit account. (username, biography, email, gender etc.)
- Upload photo.
- Upload story.
- Send direct messages.
- Target location add people and like posts.
- Whitelist people you don't want to unfollow.

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

- `start` - run application
- `clean` - remove coverage data, transpiled files
- `build` - transpile TypeScript to JavaScript
- `format` - format source files

## Instagram Action Blocked

Action blocks are typically caused by the exceeded number of actions you perform in a window of time — per hour or day. Once you exceed the allowed hourly or daily actions limits, your actions get blocked by Instagram.

### How long do you get temporarily blocked on Instagram?

If you haven’t been given a date with your action blocked message, the temporary ban can last from a couple hours to a couple days and onward to four weeks. I’ve never heard of a ban lasting longer than four weeks. If you have been given a date, the action block typically ends at the same time of day as when you first received it.

## Contributing

Even the smallest change is appreciated. It can be a typo error or fixing a bug. Nothing is too small to be helpful.

If you noticed a bug or have a question, [open an issue][issues]. I'll try to answer it as fast as possible.

## License

This project is licensed under the MIT License - see the [LICENSE][license] file for details.

---

> ## Disclaimer: Risk of Account Ban
>
> I'm almost certain that automating user activity violates instagram's TOS, which can result in a permanent ban. Only you are responsible for your accounts.

[readme]: https://github.com/ferhatkefsiz/ig-toolkit#readme
[issues]: https://github.com/ferhatkefsiz/ig-toolkit/issues
[email]: mailto:hi@ferhat.io
[license]: https://github.com/ferhatkefsiz/ig-toolkit/blob/master/LICENSE
