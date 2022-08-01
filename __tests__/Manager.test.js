const Manager = require('../lib/Manager');

test('creates a manager employee object, and defines its officeNumber', () => {
    const manager = new Manager('Rosy');

    expect(manager.officeNumber).toEqual(expect.stringContaining(manager.officeNumber));
});

test('gets the managers role', () => {
    const manager = new Manager('Rosy');

    expect(manager.getRole()).toBe('Manager');
});