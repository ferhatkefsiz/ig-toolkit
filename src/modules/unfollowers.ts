import fs from "fs/promises"
import { ig } from "./login"
import chalk from "chalk"
import { storeToJSON } from "../utils/store-json"
import { sleepRandom } from "../utils/sleep"

export async function fetchUnfollowers(): Promise<void> {
  try {
    const followersData = await fs.readFile("./dist/data/followers.json", "utf-8")
    const followingsData = await fs.readFile("./dist/data/followings.json", "utf-8")

    const followers = JSON.parse(followersData)
    const followings = JSON.parse(followingsData)

    const unfollowers = await followings.filter((following) => !followers.includes(following))

    await storeToJSON("./dist/data/unfollowers.json", unfollowers)
      .then(() => {
        console.log(chalk.green("Data written to ./dist/data/unfollowers.json"))
      })
      .catch((err) => {
        console.error(`${chalk.red("Error writing to ./dist/data/unfollowers.json")}: ${err.message}`)
      })

    const unfollowersData = await fs.readFile("./dist/data/unfollowers.json", "utf-8")

    const usersToUnfollowers = JSON.parse(unfollowersData)

    for (const usersToUnfollower of usersToUnfollowers) {
      // this makes "https://www.instagram.com/username" to "username"
      const username = usersToUnfollower.split("/").slice(-1)[0]

      await ig.friendship.destroy(username)

      console.log(chalk.yellowBright(`Unfollowed ${usersToUnfollower}`))

      await sleepRandom()
    }

    console.log("Unfollow process completed.")
  } catch (error: any) {
    console.error(chalk.red(`Error: ${error.message}`))
  }
}
