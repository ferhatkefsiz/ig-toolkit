import { ig } from "@modules/login"
import { storeJSON } from "@utils/store-json"

export async function fetchFollowers(): Promise<void> {
  try {
    const followersFeed = ig.feed.accountFollowers()

    let allFollowers: any = []
    let followersFeedPage = await followersFeed.items()

    allFollowers = allFollowers.concat(followersFeedPage)

    while (followersFeed.isMoreAvailable()) {
      followersFeedPage = await followersFeed.items()
      allFollowers = allFollowers.concat(followersFeedPage)
    }

    const usernames = allFollowers.map((follower: any) => `https://www.instagram.com/${follower.username}`)

    storeJSON("./data/followers.json", usernames)
  } catch (error: any) {
    console.error("Operation failed:", error.message)
  }
}
