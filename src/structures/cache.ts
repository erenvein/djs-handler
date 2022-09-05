import { Collection } from "discord.js";
import { SlashCommand } from "../lib/interface";

export default class CacheManager {
    public commands: Collection<string, SlashCommand>
    public constructor() {
        this.commands = new Collection();
    }
}