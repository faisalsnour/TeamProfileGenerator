var inquirer = require('inquirer')


class Employee {
    constructor(name, id, email, role = "Employee" ){
        this.name = name
        this.id = id
        this.email = email
        this.role = role
    }

    getName() {
        return this.name
    }

    getId()
    {
        return this.id
    }

    getEmail()
    {
        return this.email
    }

    getRole(){
        return this.role
    }
}

class Manager extends Employee{
    constructor(name,id, email, officNumber)
    {
        super(name, id, email, "Manager")

        this.officNumber = officNumber;
    }
    getRole(){
        return this.role
    }

    getOffice(){
        return this.officNumber
    }

}

class Engineer extends Employee{
    constructor(name, id, email, github)
    {
        super(name, id, email, "Engineer")
        this.github = github
    }

    getGithub(){
        return this.github
    }

    getRole(){
        return this.role
    }
}

class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email, "Intern")
        this.school = school
    }
    getSchool(){
        return this.school
    }
    getRole(){
        return this.role
    }
}


var employees = []

async function main(){

  const managerInfo = await inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "Enter the manager name"
        },
        {
            name: "id",
            message: "Enter employee ID"
        },
        {
            name: "email",
            message: "enter employee's email"
        },
        {
            name:"office",
            message: "Enter office number"
        },
        {
            name: "options",
            type: "list",
            message: "what do you want to do next?",
            choices: ["Add engineer","Add intern", "Finish building my team"]
        }
    ])

    employees.push(new Manager(managerInfo.name,managerInfo.id, managerInfo.email, managerInfo.office))


    if(managerInfo.options == "Add engineer"){
        getEngineerInfo()
    }
    if (managerInfo.options == "Finish building my team"){
        console.log(employees)
    }
    // console.log(employees)
}

async function getEngineerInfo() {
    let engineerInfo = await inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "Enter the engineer's name"
        },
        {
            name: "id",
            message: "Enter the engineer employee ID"
        },
        {
            name: "email",
            message: "enter the engineer's email"
        },
        {
            name:"github",
            message: "Enter the engineer's github account"
        },
        {
            name: "options",
            type: "list",
            message: "what do you want to do next?",
            choices: ["Add engineer","Add intern", "Finish building my team"]
        }
    ])

    employees.push(new Engineer(engineerInfo.name, engineerInfo.id, engineerInfo.email, engineerInfo.github))

    if(engineerInfo.options === "Finish building my team")
    {
        console.log(employees)
    }
}

function displayManager(name,id, email, office){
    let man = new Manager(name, id, email, office) 

    console.log('Thanks for providing the information')

    console.log(`Manager name: ${man.name} 
    Manger id: ${man.id}
    Manager email: ${man.email}
    Manager role: ${man.role}
    Manager office number: ${man.officNumber}`)
}




main()