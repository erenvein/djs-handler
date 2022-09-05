import Client from './structures/client';
import config from './config.json'
import { Partials } from 'discord.js';

const client = new Client({
    intents: 32767,
    partials: [Partials.User],
});

client.login(config.token)