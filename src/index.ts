import inquirer from "inquirer"
import figlet from "figlet"
import chalk from "chalk"
import dotenv from "dotenv"

import { login } from "./modules/login"
import { logout } from "./modules/logout"
import { fetchFollowers } from "./modules/followers"

dotenv.config()

async function main() {
  console.log(chalk["red"](figlet.textSync("ig-toolkit", { horizontalLayout: "universal smushing" })))

  const credentials = await inquirer.prompt([
    {
      name: "username",
      type: "input",
      message: "Enter your username:",
      validate: function (value) {
        if (value.length) {
          return true
        } else {
          return "Please enter your username."
        }
      },
    },
    {
      type: "password",
      name: "password",
      message: "Enter your password:",
      mask: "*",
      validate: function (value) {
        if (value.length >= 8) {
          return true
        } else {
          return "Password must be at least 8 characters long."
        }
      },
    },
  ])

  await login(credentials.username, credentials.password)

  const choice = await inquirer.prompt([
    {
      name: "CHOICE_OPTIONS",
      type: "list",
      message: "Select your option",
      choices: [{ name: "Get Followers", value: "GET_FOLLOWERS" }],
    },
  ])

  switch (choice.CHOICE_OPTIONS) {
    case "GET_FOLLOWERS":
      await fetchFollowers()
      break
  }

  await logout()
}

main()
