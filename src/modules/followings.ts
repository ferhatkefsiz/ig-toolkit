import { ig } from "./login"
import chalk from "chalk"
import { storeToJSON } from "../utils/store-json"
import { createDirectory } from "../utils/create-directory"

export async function fetchFollowings(): Promise<void> {
  try {
    await createDirectory("./dist/data")
    const followingsFeed = ig.feed.accountFollowing()

    let allFollowings: any = []
    let followingsFeedPage = await followingsFeed.items()

    allFollowings = allFollowings.concat(followingsFeedPage)

    while (followingsFeed.isMoreAvailable()) {
      followingsFeedPage = await followingsFeed.items()
      allFollowings = allFollowings.concat(followingsFeedPage)
    }

    const usernames = allFollowings.map((following: any) => `https://www.instagram.com/${following.username}`)

    storeToJSON("./dist/data/followings.json", usernames)
      .then(() => {
        console.log(chalk.green("Data written to ./dist/data/followings.json"))
      })
      .catch((err) => {
        console.error(`${chalk.red("Error writing to ./dist/data/followings.json")}: ${err.message}`)
      })
  } catch (error: any) {
    console.error("Operation failed:", error.message)
  }
}
