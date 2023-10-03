import chalk from "chalk"
import inquirer from "inquirer"

import { followOtherFollowers } from "@modules/followOtherFollowers"
import { followOtherFollowings } from "@modules/followOtherFollowings"

export async function followOther(): Promise<void> {
  try {
    const prompt = await inquirer.prompt([
      {
        name: "username",
        type: "input",
        message: "Enter target username:",
        validate: function (value) {
          if (value.length) {
            return true
          } else {
            return "Please enter your username."
          }
        },
      },
    ])

    const { username } = prompt
    console.log("targetUsername: ", username)

    // TODO: Is there an account with the name the user entered?
    // TODO: Check for account access

    const choice = await inquirer.prompt([
      {
        name: "CHOICE_OPTIONS",
        type: "list",
        message: "Select your decision",
        choices: [
          { name: `Follow ${username}'s followers`, value: "TARGET_FOLLOWERS" },
          { name: `Follow ${username}'s followings`, value: "TARGET_FOLLOWINGS" },
        ],
      },
    ])

    switch (choice.CHOICE_OPTIONS) {
      case "TARGET_FOLLOWERS":
        await followOtherFollowers(username)
        break

      case "TARGET_FOLLOWINGS":
        await followOtherFollowings(username)
        break
    }

    console.log("Following process completed.")
  } catch (error: any) {
    console.error(chalk.red(`Error: ${error.message}`))
  }
}
