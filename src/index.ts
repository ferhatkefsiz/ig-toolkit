import dotenv from "dotenv"
import figlet from "figlet"
import chalk from "chalk"

import { login } from "./modules/login"
import { logout } from "./modules/logout"

// Load environment variables from the .env file
dotenv.config()

// IIFE  https://developer.mozilla.org/en-US/docs/Glossary/IIFE
;(async () => {
  console.log(chalk["red"](figlet.textSync("ig-toolkit", { horizontalLayout: "universal smushing" })))

  const username = process.env.IG_USERNAME || ""
  const password = process.env.IG_PASSWORD || ""

  await login(username, password)
  console.log("hello world")

  await logout()
})()
