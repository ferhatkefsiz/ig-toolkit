import { ig } from "./login"
import chalk from "chalk"
import { sleepRandom } from "../utils/sleep"

export async function followOtherFollowings(username: string): Promise<void> {
  try {
    const targetUsername = `${username}`

    const user = await ig.user.searchExact(targetUsername)
    const followingsFeed = ig.feed.accountFollowing(user.pk)

    let allFollowings: any = []
    let followingsFeedPage = await followingsFeed.items()

    allFollowings = allFollowings.concat(followingsFeedPage)

    while (followingsFeed.isMoreAvailable()) {
      followingsFeedPage = await followingsFeed.items()
      allFollowings = allFollowings.concat(followingsFeedPage)
    }

    const usernames = allFollowings.map((following: any) => following.username)

    for (const profile of usernames) {
      try {
        const userId = await ig.user.getIdByUsername(profile)
        await ig.friendship.create(userId)
        const index = usernames.indexOf(profile)

        console.log(chalk.yellowBright(`Followed - ${profile} - ${index} / ${usernames.length}`))
        await sleepRandom()
      } catch (error: any) {
        console.error(`Error following profile: ${profile}`)
        console.error(error.message)
      }
    }

    console.log("Follow process completed.")
  } catch (error: any) {
    console.error(chalk.red(`Error: ${error.message}`))
  }
}
