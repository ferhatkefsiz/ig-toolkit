import fs from "fs"

export async function createDirectory(value: string) {
  if (!fs.existsSync(value)) {
    fs.mkdirSync(value, { recursive: true })
  }
}
