const Discord = require('discord.js');
const Handler = require('@yaas/command-handler');

module.exports = class Bot {
  constructor(token, customOptions, clientOptions) {
    // Must put empty object in `clientOptions` if not using any
    this.client = new Discord.Client(clientOptions);
    this.CH = new Handler(customOptions);
    this.token = token;

    if (!this.CH.folder) {
      throw new Error('Folder required!');
    }

    if (!this.token) {
      throw new Error('Cannot login bot without token!');
    }

    this.client.on('ready', () => {
      console.info('Ready!');
    });

    this.client.on('message', message => {
      if (message.author.bot) return;
      const args = message.content.split(/\s+/g);
      const command = args.shift();
      const cmd = this.CH.get(command);
      return cmd ? cmd.run(this.client, message, args) : null;
    });

    this.client.login(this.token);
  }
};
