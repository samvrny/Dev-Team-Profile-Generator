const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer.js');
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
        this.secondaryPrompts();
        //console.table(this.employeeArr); //logs the current employee, which is the manager.
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
                return;
                //this is where the call to generate the HTML page will be.
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
            this.employeeArr.push(this.employee);
            //console.table(this.employeeArr)
            this.secondaryPrompts();
        })
};

new Profile().initializePrompts();