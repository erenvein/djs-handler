import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import Client from "../../structures/client";
import SlashCommand from "../../structures/slashCommand";


export default new class PingCommand extends SlashCommand {
    constructor() {
        super({
            name: 'ping',
            data: new SlashCommandBuilder().setName('ping').setDescription('shows the bot ping'),
            ownerOnly: false
        })
    }

    exec(client: Client, interaction: CommandInteraction) {
        return interaction.reply({ content: `Pong!`})
    }
    
}