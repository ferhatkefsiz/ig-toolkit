import { ig } from "./login"

export async function logout(): Promise<void> {
  try {
    await ig.account.logout()
    console.log("Logged out")
  } catch (error: any) {
    console.error("Logout failed:", error.message)
  }
}
