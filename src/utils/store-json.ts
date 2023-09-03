import fs from "fs"

/**
 * @param filePath - The path to the JSON file.
 * @param data - The data to be written to the file.
 * @returns Promise<void>
 */
export async function storeToJSON(filePath: string, data: any): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    const jsonData = JSON.stringify(data, null, 2)

    fs.writeFile(filePath, jsonData, (err) => {
      if (err) {
        reject(err)
      } else {
        resolve()
      }
    })
  })
}
