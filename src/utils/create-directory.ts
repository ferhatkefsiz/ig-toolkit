import fs from "fs"

async function createDirectory(value: string) {
  if (!fs.existsSync(value)) {
    fs.mkdirSync(value, { recursive: true })
  }
}

export default createDirectory
