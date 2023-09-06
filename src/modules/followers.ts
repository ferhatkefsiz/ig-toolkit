import { ig } from "./login"
import chalk from "chalk"
import { storeToJSON } from "../utils/store-json"
import { createDirectory } from "../utils/create-directory"

export async function fetchFollowers(): Promise<void> {
  try {
    await createDirectory("./dist/data")
    const followersFeed = ig.feed.accountFollowers()

    let allFollowers: any = []
    let followersFeedPage = await followersFeed.items()

    allFollowers = allFollowers.concat(followersFeedPage)

    while (followersFeed.isMoreAvailable()) {
      followersFeedPage = await followersFeed.items()
      allFollowers = allFollowers.concat(followersFeedPage)
    }

    const usernames = allFollowers.map((follower: any) => `https://www.instagram.com/${follower.username}`)

    storeToJSON("./dist/data/followers.json", usernames)
      .then(() => {
        console.log(chalk.green("Data written to ./dist/data/followers.json"))
      })
      .catch((err) => {
        console.error(`${chalk.red("Error writing to ./dist/data/followers.json")}: ${err.message}`)
      })
  } catch (error: any) {
    console.error("Operation failed:", error.message)
  }
}
