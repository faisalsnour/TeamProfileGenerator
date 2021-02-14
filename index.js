

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
    constructor(name,id, email,role, officNumber)
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

