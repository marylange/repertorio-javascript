/*
    O not permite testar o contrário de algo. Queremos testar que 5 não é um número par.
*/

test('cinco não é número par', () => {
    expect(numerosPares()).not.toBe(5);
});

/*
    Outro ex:

    Este código testa que domingo é um dia da semana, mas não um dia útil:
*/

const workdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const weekDays = ['Sunday', ...workdays, 'Saturday'];

test('Sunday is a week day', () => {
    expect(weekdays).toContain('Sunday');
});

test('Sunday is not a workday', () => {
    expect(workdays).not.toContain('Sunday');
});
