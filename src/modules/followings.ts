import { ig } from "./login"
import { storeJSON } from "../utils/store-json"

export async function fetchFollowings(): Promise<void> {
  try {
    const followingsFeed = ig.feed.accountFollowing()

    let allFollowings: any = []
    let followingsFeedPage = await followingsFeed.items()

    allFollowings = allFollowings.concat(followingsFeedPage)

    while (followingsFeed.isMoreAvailable()) {
      followingsFeedPage = await followingsFeed.items()
      allFollowings = allFollowings.concat(followingsFeedPage)
    }

    const usernames = allFollowings.map((following: any) => `https://www.instagram.com/${following.username}`)

    storeJSON("./data/followings.json", usernames)
  } catch (error: any) {
    console.error("Operation failed:", error.message)
  }
}
