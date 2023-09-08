import { ig } from "./login"
import chalk from "chalk"
import { sleepRandom } from "../utils/sleep"

export async function followOtherFollowers(username): Promise<void> {
  try {
    const targetUsername = `${username}`

    const user = await ig.user.searchExact(targetUsername)
    const followersFeed = ig.feed.accountFollowers(user.pk)

    let allFollowers: any = []
    let followersFeedPage = await followersFeed.items()

    allFollowers = allFollowers.concat(followersFeedPage)

    while (followersFeed.isMoreAvailable()) {
      followersFeedPage = await followersFeed.items()
      allFollowers = allFollowers.concat(followersFeedPage)
    }

    const usernames = allFollowers.map((follower: any) => follower.username)

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
