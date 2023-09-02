import inquirer from "inquirer"

export const prompt = () => {
  return inquirer.prompt([
    {
      name: "CHOICE_OPTIONS",
      type: "list",
      message: "Select your option",
      choices: [{ name: "Get Info Account", value: "GET_INFO" }],
    },
  ])
}
