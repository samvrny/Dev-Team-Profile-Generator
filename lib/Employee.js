class Employee { 
        constructor(name = '', email = '', id = '') {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return `${this.name}`
    }
    getEmail() {
        return `${this.email}`
    }
    getId() {
        return `${this.id}`
    }  
    getRole() {
        return 'employee'
    }
}

module.exports = Employee;