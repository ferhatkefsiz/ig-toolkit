import { ig } from "./login"
import chalk from "chalk"
import { storeJSON } from "../utils/store-json"
import { sleepRandom } from "../utils/sleep"
import { readJSON } from "../utils/read-json"

export async function fetchUnfollowers(): Promise<void> {
  try {
    const [followers, followings, whitelisted] = await Promise.all([
      readJSON("./data/followers.json"),
      readJSON("./data/followings.json"),
      readJSON("./data/whitelisted.json"),
    ])

    const unfollowersList = await followings.filter(
      (following: any) =>
        !followers.includes(following) &&
        !whitelisted.map((user: any) => `https://www.instagram.com/${user}`).includes(following),
    )

    await storeJSON("./data/unfollowers.json", unfollowersList)

    const unfollowers: any = await readJSON("./data/unfollowers.json")

    for (const unfollower of unfollowers) {
      // this makes "https://www.instagram.com/username" to "username"
      const username = unfollower.split("/").slice(-1)[0]

      const userId = await ig.user.getIdByUsername(username)
      await ig.friendship.destroy(userId)

      console.log(chalk.yellowBright(`Unfollowed ${unfollower}`))

      await sleepRandom()
    }

    console.log("Unfollow process completed.")
  } catch (error: any) {
    console.error(chalk.red(`Error: ${error.message}`))
  }
}
