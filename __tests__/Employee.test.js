const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Rosy', '0', 'frank@gmail.com');

    expect(employee.name).toBe('Rosy');
    expect(employee.id).toBe('0');
    expect(employee.email).toBe('frank@gmail.com');
});

test('gets a name for the employee', () => {
    const employee = new Employee('Rosy');
    expect(employee.getName()).toEqual(expect.stringContaining(employee.name));
});

test('gets an email address for the employee', () => {
    const employee = new Employee('Rosy');
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email));
});

test('gets employee id', () => {
    const employee = new Employee('Rosy');
    expect(employee.getId()).toEqual(expect.stringContaining(employee.id));
});

test('gets employees role', () => {
    const employee = new Employee('Rosy');
    expect(employee.getRole()).toBe('employee');
});