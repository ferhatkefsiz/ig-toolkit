import fs from "fs/promises"

export async function readJSON(filePath: string) {
  const data = await fs.readFile(filePath, "utf-8")
  return JSON.parse(data)
}
