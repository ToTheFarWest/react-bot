const { Client } = require('discord.js')
const config = require('./config.json')
const emoji = require('node-emoji')

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
            channel.reacts.forEach(name => {
              react = client.emojis.find(e => e.name === name) || emoji.get(name)
              message.react(react)
            })
        }
    });
})

client.login(config.token)