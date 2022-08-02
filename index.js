const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHyperText')
const Engineer = require('./lib/Engineer.js');
const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern.js');

//this function sets the array for the employee data to be stored in
function Profile() {
    this.employeeArr = [] 
    this.employee;
}

//this part prompts for the managers name
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

//this part asks a user with prompts if they would like to add more members to their team (emploees or interns) or if they are finished building their team
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
                this.writePage();
            }
        })
};

//this part prompts users qith questions about engineers
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
            this.secondaryPrompts();
        })
};

//this part prompts users with questions about interns
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
            this.secondaryPrompts();
        })
};

//this part calls to generate an HTML file out of the employees selected in the above prompts
Profile.prototype.writePage = function() {
    const pageHTML = generateHTML(this.employeeArr);
    fs.writeFile('./dist/index.html', pageHTML, err => {
        if(err) throw err;
    });
};

//this initializes the employee prompts
new Profile().initializePrompts();
    