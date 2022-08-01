const Intern = require('../lib/Intern');

test('creates an intern employee object, and defines its school', () => {
    const intern = new Intern('Rosy');

    expect(intern.school).toEqual(expect.stringContaining(intern.school));
});

test('get the interns role', () => {
    const intern = new Intern('Rosy');

    expect(intern.getRole()).toBe('Intern');
});