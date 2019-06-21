# This is a prebuilt discord.js based bot.

To use:

Simply install it:
```
$ npm i github:yaas-dev/prebuilt-bot
```

And then create this file structure:
```
.
├── index.js
├── package.json    ~ This assumes you already did npm init
└── commands
    └── test.js
```

In `index.js`:
```js
const Bot = require('bot-package');
const bot = new Bot(
  'token string',
  {
    folder: __dirname + '/commands/'.
    prefix: ['>']
  }
);
```
And in `commands/test.js`:
```js
module.exports = class command { // Class name doesn't matter
  constructor() {
    this.name = 'test'; // This is how you call it
    this.aliases = [];  // Leave empty if no aliases necessary. Make sure not to make on with the same name other places.
  }

  async run(client, message, args) {  // The main body, but make sure to place parameters in this order.
    message.reply('This works!');
  }
}
```
Now you can call the command you created with `>test` and the bot will mention you with '@you, This works!'