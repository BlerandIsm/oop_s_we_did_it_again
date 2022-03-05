const Engineer = require('../lib/Engineer');

test('create an engineer class', () => {
    const engineer = new Engineer('Lebron','J','Goat','Lebronhub');

    expect(engineer.name).toBe('Lebron');
    expect(engineer.id).toBe('J');
    expect(engineer.email).toBe('Goat');
    expect(engineer.github).toBe('Lebronhub');

});

test('get the name from the string', () => {
    const engineer = new Engineer ('Lebron','J','Goat','Lebronhub');

    expect(engineer.getName ()).toBe('Lebron');
    expect(engineer.getId ()).toBe('J');
    expect(engineer.getEmail ()).toBe('Goat');
    expect(engineer.getRole ()).toBe('Engineer');
    expect(engineer.getGithub ()).toBe('Lebronhub');

});