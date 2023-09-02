import fs from "fs"

async function createDirectory(value: string) {
  // Check if the directory specified by 'value' exists
  if (!fs.existsSync(value)) {
    // If the directory doesn't exist, create it
    // The 'mkdirSync' function is synchronous and will create the directory immediately
    // 'recursive: true' option allows creating parent directories if they don't exist
    fs.mkdirSync(value, { recursive: true })
  }
}

export default createDirectory
