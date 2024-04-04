#! /usr/bin/env node
import inquirer from "inquirer";
let todolist = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "list",
            message: "Add something in your todo list",
            type: "input",
        },
        {
            name: "add",
            message: "Do you want to add more?",
            type: "confirm",
            default: "true",
        },
    ]);
    condition = addTask.add;
    todolist.push(addTask.list);
    for (let i = 0; i < todolist.length; i++) {
        console.log(`${i + 1}. ${todolist[i]}`);
    }
}
let choices = await inquirer.prompt({
    message: "Do you want to delete something from your list?",
    type: "list",
    choices: ["Yes", "No"],
    name: "wantToDelete"
});
if (choices.wantToDelete === "Yes") {
    let yourAnswer = await inquirer.prompt({
        message: "Enter index number",
        type: "number",
        name: "indexNo"
    });
    if (yourAnswer.indexNo <= todolist.length) {
        let toDelete = yourAnswer.indexNo - 1;
        todolist.splice(toDelete, 1);
        for (let j = 0; j < todolist.length; j++) {
            console.log(`${j + 1}. ${todolist[j]}`);
        }
    }
    else {
        console.log("The number you enter doesn't exist!!!");
    }
}
