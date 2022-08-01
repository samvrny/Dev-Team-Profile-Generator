const inquirer = require('inquirer');
const Employee = require('./lib/Employee.js');

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
    .then(({name, email, id}) => {
        this.employee = new Employee(name, email, id)
        console.log(this.employee);
    });
}

new Profile().initializePrompts();