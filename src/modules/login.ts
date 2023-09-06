import chalk from "chalk"
import { IgApiClient } from "instagram-private-api"

export const ig = new IgApiClient()

export async function login(username: string, password: string): Promise<boolean> {
  try {
    ig.state.generateDevice(username)
    console.log("Logging into account")

    await ig.account.login(username, password)
    console.log(chalk.bgGreen(`Logged in as ${username}`))
    return true
  } catch (error: any) {
    console.error(chalk.bgRed`Login failed: ${error.message}`)
    return false
  }
}
