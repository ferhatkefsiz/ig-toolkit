import chalk from "chalk"

// https://stackoverflow.com/a/7228322
export function randomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export async function sleep(seconds = 2) {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, seconds * 1000)
  })
}

export async function sleepRandom() {
  const random = randomNumber(2, 6) // wait for min 2 and max 6 seconds
  console.log(chalk.dim(`Sleeping ${random}secs to prevent getting temp blocked`))

  await sleep(random)
}
