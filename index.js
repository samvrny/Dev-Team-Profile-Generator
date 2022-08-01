const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHyperText')
const Engineer = require('./lib/Engineer.js');
const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern.js')

function Profile() {
    this.employeeArr = [] //if it doesnt work to have all the employee data in one array, three can be made, one each for managers, engineers, and interns. This will avoid possible problems when making the actual HTML
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
            name: 'officeNumber',
            message: 'please enter the managers office number'
        }
    ])
    .then(({name, email, id, officeNumber}) => {
        this.employee = new Manager(name, email, id, officeNumber);
        this.employee.role = this.employee.getRole();
        this.employeeArr.push(this.employee);
        this.secondaryPrompts();
    })
};

Profile.prototype.secondaryPrompts = function() {
    inquirer
        .prompt({
            type: 'list',
            name: 'proceed',
            message: 'Would you like to add an Engineer or Intern to your team, or are you finished adding team members?',
            choices: ['Add Engineer', 'Add Intern', 'Finish Team']
        })
        .then(({proceed}) => {
            if(proceed === 'Add Engineer') {
                this.engineerPrompts();
            } 
            else if(proceed === 'Add Intern') {
                this.internPrompts();
            } else {
                // return;
                this.writePage();
            }
        })
};

Profile.prototype.engineerPrompts = function() {
    inquirer
        .prompt([
            {
                type: 'text',
                name: 'name',
                message: 'Please enter the engineers name'
            },
            {
                type: 'text',
                name: 'email',
                message: 'Please enter the engineers email address'
            },
            {
                type: 'text',
                name: 'id',
                message: 'Please enter the engineers employee ID'
            },
            {
                type: 'text',
                name: 'github',
                message: 'Please enter the engineers github username'
            }
        ])
        .then(({name, email, id, github}) => {
            this.employee = new Engineer(name, email, id, github);
            this.employee.role = this.employee.getRole();
            this.employeeArr.push(this.employee);
            //console.table(this.employeeArr)
            this.secondaryPrompts();
        })
};

Profile.prototype.internPrompts = function() {
    inquirer
        .prompt([
            {
                type: 'text',
                name: 'name',
                message: 'Please enter the interns name'
            },
            {
                type: 'text',
                name: 'email',
                message: 'Please enter the interns email address'
            },
            {
                type: 'text',
                name: 'id',
                message: 'Please enter the interns employee ID'
            },
            {
                type: 'text',
                name: 'school',
                message: 'Please enter the interns school'
            } 
        ])
        .then(({name, email, id, school}) => {
            this.employee = new Intern(name, email, id, school);
            this.employee.role = this.employee.getRole();
            this.employeeArr.push(this.employee);
            //console.table(this.employeeArr)
            this.secondaryPrompts();
        })
};

Profile.prototype.writePage = function() {
    //console.table(this.employeeArr)
    const pageHTML = generateHTML(this.employeeArr);
}

new Profile().initializePrompts();
    