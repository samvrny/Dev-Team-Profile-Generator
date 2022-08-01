const Engineer = require('../lib/Engineer');

test('creates a new engineer object, and defines its github', () => {
    const engineer = new Engineer('Rosy');

    expect(engineer.github).toEqual(expect.stringContaining(engineer.github));
});

