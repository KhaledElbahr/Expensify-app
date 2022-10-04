const add = (a, b) => a + b;

const generateGreating = (name = 'Anonymous') => `Hello ${name}!`;

// test(message, callback)
test('should add two numbers', () => {
    const result = add(3, 4);
    // if(result !== 7) {
    //     throw new Error(`You added 4 and 3. The result was ${result}. Expect 7`);
    // }
    expect(result).toBe(7);
});

test('should generate greeting from name', () => {
    const result = generateGreating('khaled');

    expect(result).toBe('Hello khaled!')
});

test('should generate greeting for no name', () => {
    const result = generateGreating();

    expect(result).toBe('Hello Anonymous!')
});