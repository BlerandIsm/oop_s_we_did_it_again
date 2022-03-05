const Intern = require('../lib/Intern');

test('create an intern class', () => {
    const intern = new Intern('Messi','L','Lmessi','UM');

    expect(intern.name).toBe('Messi');
    expect(intern.id).toBe('L');
    expect(intern.email).toBe('Lmessi');
    expect(intern.school).toBe('UM');
});

test('get the name from the string', () => {
    const intern = new Intern ('Messi','L','Lmessi','UM');
    expect(intern.getName ()).toBe('Messi');
    expect(intern.getId ()).toBe('L');
    expect(intern.getEmail ()).toBe('Lmessi');
    expect(intern.getRole ()).toBe('Intern');
    expect(intern.getSchool()).toBe('UM');
});