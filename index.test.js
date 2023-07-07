const getFestivals = require('./index');

test("the array should not be empty", async() => {
    const festivals = await getFestivals();
    expect(festivals).not.toBeNull();
    expect(festivals).toBeInstanceOf(Array);
})