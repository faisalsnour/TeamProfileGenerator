var inquirer = require('inquirer')
const fs = require('fs');



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

var employeesList = []

var allCode = ""

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


    if(managerInfo.options === "Add engineer"){
        getEngineerInfo()
    }
    if (managerInfo.options === "Finish building my team"){
        console.log(employees)
        addToList()
        fs.writeFile('profile3.html',`${generateHTML()}`, (err) =>
        err ? console.error(err) : console.log('Success!'))
    }
    if(managerInfo.options === "Add intern"){
        getInternInfo()
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
        addToList()
        fs.writeFile('profile3.html',`${generateHTML()}`, (err) =>
        err ? console.error(err) : console.log('Success!'))
    }
    if(engineerInfo.options === "Add intern"){
        getInternInfo()
    }
    if(engineerInfo.options === "Add engineer"){
        getEngineerInfo()
    }
}

async function getInternInfo() {
   let internInfo = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Enter the intern's name"
    },
    {
        name: "id",
        message: "Enter the intern's employee ID"
    },
    {
        name: "email",
        message: "enter the intern's email"
    },
    {
        name:"school",
        message: "Enter the intern's school name"
    },
    {
        name: "options",
        type: "list",
        message: "what do you want to do next?",
        choices: ["Add engineer","Add intern", "Finish building my team"]
    }
    ])

    employees.push(new Intern(internInfo.name, internInfo.id, internInfo.email, internInfo.school))

    if(internInfo.options === "Finish building my team")
    {
        console.log(employees)
        addToList()
        fs.writeFile('profile3.html',`${generateHTML()}`, (err) =>
        err ? console.error(err) : console.log('Success!'))
    }
    if(internInfo.options ==="Add engineer"){
        getEngineerInfo()
    }
    if(internInfo.options === "Add intern"){
        getInternInfo()
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

function generateHTML(){
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>
    <body>
        <header style="background-color:#3078C6;">
            <h1 style="color: white; text-align: center; padding-top: 20px; padding-bottom: 20px;">My team</h1>
        </header>
        <div class="container" style="position: relative;">
            <div class="row">
            ${displayList()}
              <!-- </div> -->
            </div> <!--end of row -->
        </div> <!--end of container-->
    </body>
    </html>`
}

function addToList(){
    for(i=0; i<employees.length; i++){
        if(employees[i].getRole() === "Engineer"){
            employeesList.push(`  <div class="card " style="width: 18rem; margin: 20px;">
            <!-- <div class="card-body" style="background-color: violet;"> -->
            <div id="cardTitle" style="background-color: #3078C6; color: white; margin: 0px; padding-left: 20px;">
                <h4 id="engineerName">${employees[i].getName()}</h4>
                <h4 id="engineerTitle"><i class="fas fa-tools"></i> ${employees[i].getRole()}</h4>
            </div>
            <div id="engineerInfo" style="background-color: whitesmoke;">
                <div style="padding: 20px;"> 
                    <p>ID: <span id="engineerID">${employees[i].getId()}</span></p>
                    <p>Email: <a id="engineerEmail" href="mailto:${employees[i].getEmail()}" target="_blank">${employees[i].getEmail()}</a></p>
                    <p>Github Account: <a id="engineerGithub" href="https://github.com/${employees[i].getGithub()}" target="_blank">${employees[i].getGithub()}</a></p>
                </div>
            </div>
        </div>`)
        }
        if(employees[i].getRole() === "Manager"){
            employeesList.push(`
            <div class="card " style="width: 18rem; margin: 20px;">
            <div id="cardTitle" style="background-color: #3078C6; color: white; margin: 0px; padding-left: 20px;">
                <h4 id="managerName">${employees[i].getName()}</h4>
                <h4 id="managerTitle"><i class="fas fa-coffee"></i> ${employees[i].getRole()}</h4>
            </div>
            <div id="managerInfo" style="background-color: whitesmoke;">
                <div style="padding: 20px;"> 
                    <p>ID: <span id="managerID">${employees[i].getId()}</span></p>
                    <p>Email: <a id="managerEmail" href="mailto:${employees[i].getEmail()}" target="_blank">${employees[i].getEmail()}</a></p>
                    <p>Office number: <span id="managerOffice">${employees[i].getOffice()}</span></p>
                </div>
            </div>
        </div> <!-- end of manager card-->`)
        }
        if(employees[i].getRole() === "Intern"){
            employeesList.push(`
            <div class="card " style="width: 18rem; margin: 20px;">
            <div id="cardTitle" style="background-color: #3078C6; color: white; margin: 0px; padding-left: 20px;">
                <h4 id="internName">${employees[i].getName()}</h4>
                <h4 id="internTitle"><i class="fas fa-user-graduate"></i> ${employees[i].getRole()}</h4>
            </div>
            <div id="internInfo" style="background-color: whitesmoke;">
                <div style="padding: 20px;"> 
                    <p>ID: <span id="internID">${employees[i].getId()}</span></p>
                    <p>Email: <a id="internEmail" href="mailto:${employees[i].getEmail()}" target="_blank">${employees[i].getEmail()}</a></p>
                    <p>School name: <span id="internSchool">${employees[i].getSchool()}</span></a></p>
                </div>
            </div>
        </div>`)
        }
    }
}

 

function displayList(){
    for(j=0; j<employeesList.length; j++){
      allCode +=  employeesList[j]
    }
    return allCode
}


main()