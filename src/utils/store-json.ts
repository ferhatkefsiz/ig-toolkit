import chalk from "chalk"
import fs from "fs"

export async function storeJSON(filePath: string, data: any): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    const jsonData = JSON.stringify(data, null, 2)

    fs.writeFile(filePath, jsonData, (err) => {
      if (err) {
        console.error(`${chalk.red("Error writing to " + filePath)}: ${err.message}`)
        reject(err)
      } else {
        console.log(`Data written to ${filePath}`)
        resolve()
      }
    })
  })
}
