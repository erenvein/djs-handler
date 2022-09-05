import { Client, ClientOptions } from "discord.js";
import SlashCommandHandler from "../handlers/commandHandler";
import ListenerHandler from "../handlers/listenerHandler";
import { Cache } from "../lib/interface";
import CacheManager from "./cache";

export default class EvilsClient extends Client {
    public cache: Cache;
    public constructor(ClientOptions: ClientOptions) {   
        super(ClientOptions);
        this.cache = new CacheManager();
        new SlashCommandHandler(this, 'commands')
        new ListenerHandler(this, 'listeners')
    }
}