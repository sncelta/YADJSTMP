# Discord.js v14 template
Simple discord.js bot template with 4 example commands.

**In case you're lazy to initialize the whole project by yourself, just like me**



### Commands
- ```alloptions.js (/options <string> <number> <boolean> <user> <channel> <integer> <role> <mentionable> <attachment)``` has every option type initialized, and methods to parse eachother.
- ```choices.js (/choices)``` is a template for command/s, having [choices](https://discordjs.guide/slash-commands/advanced-creation.html#choices) as one of it's options.
- ```morebasic.js (/hello)``` is a simple command that makes the bot say "Hello there" once the command is executed, without any options.
- ```subcommands.js (/say channel <channel> <text>)``` is a example of command with [subcommands](https://discordjs.guide/slash-commands/advanced-creation.html#subcommands). Additionally, it has ```channel``` and ```text``` options, to make the bot send message in a channel, both specified by the executor.

# Getting started

## Prerequisites
- [Node.js](https://nodejs.org/en/download/)
- Code editor (like [Visual Studio Code](https://code.visualstudio.com/download))
- discord.js — ```npm install discord.js```
- Bot application in Discord — [Setup bot application](https://discordjs.guide/preparations/setting-up-a-bot-application.html)
- Basic/intermediate experience and knowledge about JavaScript [resources to get started with JavaScript](https://github.com/sncelta/discordjs-v14-template/edit/main/README.md#learn-javascript)
- [Git](https://git-scm.com/downloads) (optionally)

### Learn JavaScript:
- [W3Schools](https://www.w3schools.com/js/)
- [Javascript.Info](https://javascript.info/)
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript)

### discord.js Guide
- [discord.js Guide](https://discordjs.guide/)

Though I left some comments in the code to explain some things, they may be inaccurate or hard to understand, so refer to the docs too.

## Use
After you are sure you have done everything listed here, download the source code and extract it somewhere.

Alternatively, you can use [Git](https://git-scm.com/downloads):

```git clone https://github.com/sncelta/discordjs-v14-template.git``` (NO NEED TO CREATE NEW FOLDER FOR THE SOURCE CODE.)

```cd``` to the folder with source code (if the folder is not located on C disk, firstly type the drive letter (example. ```D:```), and then ```cd``` to the folder)

Since ```.gitignore``` hides ```node_modules```, you should install it by typing ```npm install``` in the terminal. **MAKE SURE YOU DID STEPS ABOVE**

Create ```config.json``` file and put the following contents:
```
{
	"token": "<bot token>",
	"clientId": "<bot's client id, can be found in OAuth section in your bot on the developer portal>",
	"guildId": "<guild id/s where you want to run the bot"
}
```

## Using the bot

After you are done, start the bot by typing:

```node init.js```

However, if you edited any command, you must deploy commands by typing:

```node deploy-commands.js```

in the terminal

...and then you can start the bot.

## Result

Your directory will look like that:

```commands/
events/
node_modules/
eslintrc.json
.gitignore
config.json
deploy-commands.js
init.js
package.json/
package_lock.json/
```

If there are no errors, you'll see 

```Ready! Logged in as <bot name>```

after starting the bot, and

```Started refreshing <amount of commands> application (/) commands.
Successfully reloaded ${data.length} application (/) commands.
```

if the commands were deployed succesfully. But you still can get errors while executing the command, rather than while deploying them.

# FAQ

Q: Do I have to credit you?

A: Not necessary. I don't really care. What I want is to make it faster for people to start making their bot without having to initialize other things.

Q: An comment is unclear or has grammar errors!

A: You can open an issue and state the file and line of the comment. Or you can also make an pull request if you're an developer.

Q: Add more examples!

A: Same as with previous question. Either a pull request or an issue.

Q: The code is hard!

A: I tried making it as much readable for beginners as possible. If you are still not capable of reading it properly, you most likely lack JavaScript knowledge.

Q: How to fix this and that error?

A: If you edited the template then all you can do is google it, use services like [Reddit](https://reddit.com) and [Stack Overflow](https://stackoverflow.com). Else make an issue.

Q: Version?

A: v14. It won't be moved to v12/v13, only newer ones.

Q: I don't want to specify the guild. I want to deploy the commands globally!

A: [Registering slash commands](https://discordjs.guide/creating-your-bot/command-deployment.html) is what you need.

Q: I want the template to be written in TypeScript!

A: Right now I don't feel like migrating it to TS. I love TS, but I still can't get used to discord.ts. Not like you can't do it yourself: Fork & Pull Request.
