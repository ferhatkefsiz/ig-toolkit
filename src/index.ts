import dotenv from "dotenv"
import figlet from "figlet"
import chalk from "chalk"

import { login } from "./modules/login"
import { logout } from "./modules/logout"
import { prompt } from "./helpers/prompt"
import createDirectory from "./utils/create-directory"

// Load environment variables from the .env file
dotenv.config()

// IIFE  https://developer.mozilla.org/en-US/docs/Glossary/IIFE
;(async () => {
  console.log(chalk["red"](figlet.textSync("ig-toolkit", { horizontalLayout: "universal smushing" })))

  const username = process.env.IG_USERNAME || ""
  const password = process.env.IG_PASSWORD || ""

  await login(username, password)

  // Use this directory to generate json files (`followers.json`, `following.json`)
  createDirectory("./dist/data")

  await prompt().then((res) => {
    if (res.CHOICE_OPTIONS === "GET_INFO") {
      console.log("getting info account")
    }
  })

  await logout()
})()
