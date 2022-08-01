const inquirer = require('inquirer');
const Manager = require('./lib/Manager.js');

function Profile() {
    this.employeeArr = []
    this.employee;
}

Profile.prototype.initializePrompts = function() {
    inquirer
    .prompt([
        {
            type: 'text',
            name: 'name',
            message: 'What is the team managers name?'
        },
        {
            type: 'text',
            name: 'email',
            message: 'Please enter the team managers email adress'
        },
        {
            type: 'text',
            name: 'id',
            message: 'Please enter the managers employee ID'
        },
        {
            type: 'text',
            name: 'office',
            message: 'please enter the managers office number'
        }
    ])
    .then(({name, email, id, office}) => {
        this.employee = new Manager(name, email, id, office);
        this.employee.role = this.employee.getRole();
        this.employeeArr.push(this.employee);
        console.table(this.employeeArr); //logs the current employee, which is the manager.
    });
}

new Profile().initializePrompts();