import { IgApiClient } from "instagram-private-api"

export const ig = new IgApiClient()

export async function login(username: string, password: string): Promise<void> {
  try {
    ig.state.generateDevice(username)
    await ig.account.login(username, password)
    console.log(`Logged in as ${username}`)
  } catch (error: any) {
    console.error("Login failed:", error.message)
  }
}
