const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const employee = [];

function startMenu() {
    console.log("Build your Team!!");

    inquirer.prompt([
        {
            message: " Enter the new team member's name",
            name: "name",
            validate: nameInput =>{
                if (nameInput){
                    return true;
                } else {
                    console.log("Please enter the name for the new member");
                    return false

                }
            }
        },
        {
            type: "list",
            message: "Pick your members role",
            choices:[
                "Manager",
                "Engineer",
                "Intern"
            ],
            name: "role",
            validate: roleInput => {
                if (roleInput) {
                    return true;
                } 
                else {
                    console.log ("Please select at least one role.");
                    return false;
                }
            }              
        },
        {
            type: "input",
            message: "Enter team member's ID",
            name: "id",
            validate: idInput =>{
                if (!idInput) {
                    return "Please enter at least one value."
                }
                else if (isNaN(idInput)) {
                    return "Please enter a numeric value."
                }
                return true;
            }
        },
        {
            type: "input",
            name: "Email",
            message: "What is the employee's email?",
            validate: emailInput => {
                if (!emailInput) {
                    return "Please enter at least one value."
                }
                const emailRegex = emailInput.match(/\S+@\S+\.\S+/);
                if (!emailRegex) {
                    return "Please enter a valid email address."
                }
                return true;
            }
        }
    ])
    .then(function({name,role,id,email}){
        let roleInfo = "";
        if (role === "Engineer"){
            roleInfo = "GitHub username";

        } else if (role === "Intern"){
            roleInfo = "school name";
        } else {
            roleInfo = "office number"
        }
        inquirer.prompt([{
            type: "input",
            message: `Enter team member's ${roleInfo}`,
            name: "roleInfo",
            validate: roleInfoInput =>{
                if (roleInfoInput){
                    return true
                } else{
                    console.log ("Enter the role");
                    return false
                }
            }

        }])

    })
};

startMenu();