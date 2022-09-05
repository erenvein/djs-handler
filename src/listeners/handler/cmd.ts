import { Interaction, InteractionType } from "discord.js";
import { SlashCommand } from "../../lib/interface";
import Client from "../../structures/client";
import Listener from "../../structures/listener";
import config from '../../config.json'

export default new class interactionCreateListener extends Listener {
    constructor() {
        super({
            name: 'interactionCreate',
            once: false
        })
    }

    exec(client: Client, interaction: Interaction) {
       if(interaction.type != InteractionType.ApplicationCommand) return;

        const cmd = client.cache.commands.get(interaction.commandName) as SlashCommand;

        if(!cmd) return;

        if(cmd.ownerOnly == true) {
        if(!config.owners.includes(interaction.user.id)) return;
        }

        try {
            cmd.exec(client, interaction);
        } catch(e) {
            console.log(e);

            interaction.reply({ ephemeral: true, content: 'Error!'})
        }
        

    }
}