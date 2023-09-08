import inquirer from "inquirer"
import figlet from "figlet"
import chalk from "chalk"
import dotenv from "dotenv"

import { login } from "./modules/login"
import { logout } from "./modules/logout"
import { fetchFollowers } from "./modules/followers"
import { fetchFollowings } from "./modules/followings"
import { fetchUnfollowers } from "./modules/unfollowers"
import { followOther } from "./modules/followOther"

dotenv.config()

async function main() {
  const usernameENV = process.env.IG_USERNAME
  const passwordENV = process.env.IG_PASSWORD

  console.log(chalk["red"](figlet.textSync("ig-toolkit", { horizontalLayout: "universal smushing" })))

  let credentials

  if (usernameENV && passwordENV) {
    credentials = { username: usernameENV, password: passwordENV }
  } else {
    credentials = await inquirer.prompt([
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
  }

  console.log(`You entered as username: ${credentials.username} and password: ${credentials.password}`)

  const loginSuccessful = await login(credentials.username, credentials.password)

  if (!loginSuccessful) {
    console.log(chalk.redBright("Login failed. Exiting."))
    return
  }

  const choice = await inquirer.prompt([
    {
      name: "CHOICE_OPTIONS",
      type: "list",
      message: "Select your option",
      choices: [
        { name: "Get Followers", value: "GET_FOLLOWERS" },
        { name: "Get Followings", value: "GET_FOLLOWINGS" },
        { name: "Detect Who Doesn’t Follow You Back and Unfollow", value: "GET_UNFOLLOWERS" },
        { name: "Follow someone else's followers or followings", value: "FOLLOW_OTHER" },
      ],
    },
  ])

  switch (choice.CHOICE_OPTIONS) {
    case "GET_FOLLOWERS":
      await fetchFollowers()
      break

    case "GET_FOLLOWINGS":
      await fetchFollowings()
      break

    case "GET_UNFOLLOWERS":
      await fetchFollowers()
      await fetchFollowings()
      await fetchUnfollowers()
      break

    case "FOLLOW_OTHER":
      await followOther()
      break
  }

  await logout()
}

main()
