const Employee = require('../lib/Employee');

test('create and employee class', () => {
    const employee = new Employee('Blerand','BI','Gmail');

    expect(employee.name).toBe('Blerand');
    expect(employee.id).toBe('BI');
    expect(employee.email).toBe('Gmail');

});

test('get the name from the string', () => {
    const employee = new Employee ('Blerand','BI','Gmail');

    expect(employee.getName ()).toBe('Blerand');
    expect(employee.getId ()).toBe('BI');
    expect(employee.getEmail ()).toBe('Gmail');
    expect(employee.getRole ()).toBe('Employee')

});