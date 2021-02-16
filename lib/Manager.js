const Employee = require( './Employee' )

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


module.exports = Manager