const Manager = require('../lib/Manager');

test('create a manager class', () => {
    const manager = new Manager('John','Doe','Doejohn','Number_1');

    expect(manager.name).toBe('John');
    expect(manager.id).toBe('Doe');
    expect(manager.email).toBe('Doejohn');
    expect(manager.officeNumber).toBe('Number_1');

});

test('get the name from the string', () => {
    const manager = new Manager ('John','Doe','Doejohn','Number_1');

    expect(manager.getName ()).toBe('John');
    expect(manager.getId ()).toBe('Doe');
    expect(manager.getEmail ()).toBe('Doejohn');
    expect(manager.getRole ()).toBe('Manager');
    expect(manager.getOfficeNumber ()).toBe('Number_1');
});