const { CLIENT_RENEG_LIMIT } = require('tls')

const Discord = require('discord.js'),
    client = new Discord.Client({
        fetchAllMembers: true
    }),
    config = require ('./config.json'),
    fs = require('fs')
client.login(config.token)

client.on('ready', () => {
    client.user.setActivity('Chaine twitch', {type: 'STREAMING', url: 'https://www.twitch.tv/staffl1ve'})
})