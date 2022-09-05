import { REST, Routes } from "discord.js";
import Client from "../../structures/client";
import Listener from "../../structures/listener";
import config from '../../config.json'

export default new class ReadyListener extends Listener {
    constructor() {
        super({
            name: 'ready',
            once: false
        })
    }

    async exec(client: Client) {
        try {
            const body = client.cache.commands.map(a => a.data)
            const rest = new REST().setToken(config.token);
     await rest.put( Routes.applicationCommands(client.user!.id), { body: body });
            console.log(`Websocket Connected`);
        } catch {}
    
        console.log('Ready!')
    }
}