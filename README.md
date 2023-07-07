# Get French winter festivals
by Mehdi AL SID CHEIKH

The purpose of this library is to get every winter festival in France. 
You will be able to get their name, their debut date and ending date, the location and the type of the festival.

## Local development

```bash
npm install
```

```bash
npm run test
```

In order to test the function, you can create a directory build with the file index.js.
In this file, add the code below :
```bash
const getFestivals = require('../index');

(async() => {
    console.log(await getFestivals())
})();
```

Finally, run the command below, to see every french winter festival.
```bash
node build/index.js
```
