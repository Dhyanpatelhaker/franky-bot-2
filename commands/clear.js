module.exports = {
    name: 'clear',
    description: "clears messages!",
    async execute(message, args) {
        if(!args[0]) return message.reply("please enter the amount of messages that you whant to clear!");
        if(isNaN(args[0])) return message.reply("please enter a real number!");

        if(args[0] > 100) return message.reply("you cant delete more than 100!");
        if(args[0] < 1) return message.reply("you must delete at least 1 message!");
        
        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        })
    }
}