const { Client } = require('discord.js')
const config = require('./config.json')

const client = new Client()

client.on('ready', () => {
    console.log(`${client.user.tag} is ready to serve on ${client.channels.size} channels for ${client.users.size} users`)
})

client.on('message', (message) => {
    if (message.author.bot) return
    console.log("message recieved")
    config.channels.forEach(channel => {
        if (message.channel.id === channel.id) {
            console.log("Channel found!")
            console.log(channel)
            console.log(client.emojis.find('name', 'x'))
            emojis = channel.reacts.map(name => {client.emojis.find(emoji => emoji.name === name)})
            console.log(emojis)
            emojis.forEach(emoji => {
                console.log("Adding emoji " + emoji.name)
                message.react(emoji)
            })
        }
    });
})

client.login(config.token)