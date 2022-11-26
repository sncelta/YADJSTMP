# YADJSTMP
Simple discord bot template written in discord.js v14.

**In case you're lazy to initialize the whole project by yourself, just like me**.

## Table of contents:
- [Features](https://github.com/sncelta/YADJSTMP#features)
- [Commands](https://github.com/sncelta/YADJSTMP/README.md#commands)
- [Getting started](https://github.com/sncelta/YADJSTMP/README.md#getting-started)
	- [Prerequisites](https://github.com/sncelta/YADJSTMP/README.md#prerequisites)
	- [Learn JavaScript](https://github.com/sncelta/YADJSTMP/README.md#learn-javascript)
	- [discord.js Guide](https://github.com/sncelta/YADJSTMP/README.md#discordjs-guide)
- [Install & Usage](https://github.com/sncelta/YADJSTMP/README.md#install)
	- [Install](https://github.com/sncelta/YADJSTMP/README.md#install)
		- [node_modules](https://github.com/sncelta/YADJSTMP/README.md#node_modules)
		- [config.json](https://github.com/sncelta/YADJSTMP/README.md#configjson)
	- [Usage](https://github.com/sncelta/YADJSTMP/README.md#usage)
		- [Node.js](https://github.com/sncelta/YADJSTMP/README.md#Nodejs)
- [Result](https://github.com/sncelta/YADJSTMP/README.md#result)
	- [Logging in](https://github.com/sncelta/YADJSTMP/README.md#logging-in)
- [Notes](https://github.com/sncelta/YADJSTMP/README.md#notes)
- [FAQ](https://github.com/sncelta/YADJSTMP/README.md#faq)
- [Changelog](https://github.com/sncelta/YADJSTMP/blob/main/changelog.md)

## Features
- JavaScript;
- [Node.js](https://nodejs.org/)
- Command handler;
- Event handler;
- 4 commands;
- [ESLint](https://eslint.org/)

## Commands
1. [alloptions.js](https://github.com/sncelta/YADJSTMP/blob/main/commands/alloptions.js) ```/options <string> <number> <boolean> <user> <channel> <integer> <role> <mentionable> <attachment>``` has every option type initialized, and methods to parse eachother.
2. [choices.js](https://github.com/sncelta/YADJSTMP/blob/main/commands/choices.js) ```/choices <choice>``` is a template for command/s, having [choices](https://discordjs.guide/slash-commands/advanced-creation.html#choices) as one of it's options.
3. [morebasic.js](https://github.com/sncelta/YADJSTMP/blob/main/commands/morebasic.js) ```(/hello)``` is a simple command that makes the bot say "Hello there" once the command is executed, without any options.
4. [subcommands.js](https://github.com/sncelta/YADJSTMP/blob/main/commands/subcommands.js) ```(/say channel <channel> <text>)``` is a example of command with [subcommands](https://discordjs.guide/slash-commands/advanced-creation.html#subcommands). Additionally, it has ```channel``` and ```text``` options, to make the bot send message in a channel, both specified by the executor.

# Getting started

### Prerequisites
- [Node.js](https://nodejs.org/en/download/)
- Code editor (like [Visual Studio Code](https://code.visualstudio.com/download))
- discord.js — ```npm install discord.js```
- Bot application in Discord — [Setup bot application](https://discordjs.guide/preparations/setting-up-a-bot-application.html)
- Basic/intermediate experience and knowledge about JavaScript [resources to get started with JavaScript](https://github.com/sncelta/YADJSTMP/edit/main/README.md#learn-javascript)
- [Git](https://git-scm.com/downloads) (optionally)

### Learn JavaScript:
- [W3Schools](https://www.w3schools.com/js/)
- [Javascript.Info](https://javascript.info/)
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript)

### discord.js Guide
- [discord.js Guide](https://discordjs.guide/)

Though I left some comments in the code to explain some things, they may be inaccurate or hard to understand, so refer to the docs too.

# Install & Usage
## Install
After you are sure you have done everything listed here, download the source code and extract it somewhere.
### Source control
Use [Git](https://git-scm.com/downloads):

Click "Use this template" → "Create new repository"

```git clone https://github.com/<your-username>/<repo-name>.git```
### Contribute
If you want to just contribute, then simply fork my repository;

Then, clone the forked repository:
```git clone https://github.com/your-username/YADJSTMP.git```

Whenever you're finished with the changes in your forked repository, commit to the repo and open a pull request.

I recommend Visual Studio Code as a editor.

[Download Visual Studio Code](https://code.visualstudio.com/Download)

[Visual Studio Code: Docs - Source control](https://code.visualstudio.com/docs/sourcecontrol/overview)
### node_modules
Since ```.gitignore``` hides ```node_modules```, you should install it by typing ```npm install``` in the terminal.
### config.json
Create ```config.json``` file and put the following contents:
```
{
	"token": "<bot token>",
	"clientId": "<bot's client id, can be found in OAuth section in your bot on the developer portal>",
	"guildId": "<guild id/s where you want to run the bot"
}
```

## Usage

### Node.js
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

### Logging in
If there are no errors, you'll see 

```Ready! Logged in as <bot name>```

after starting the bot, and

```Started refreshing <amount of commands> application (/) commands.
Successfully reloaded {amount of commands} application (/) commands.
```

if the commands were deployed succesfully. But you still can get errors while executing the command, rather than while deploying them.

## Notes

Always add ```node_modules``` and ```config.json``` to ```.gitignore```!

# FAQ

Q: Do I have to credit you?

A: Nope and I don't care. What I want is to make it faster for people to start making their bot without having to initialize other things.

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
