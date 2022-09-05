import { Collection, CommandInteraction } from "discord.js";
import type Client from '../structures/client';


export interface SlashCommand {
    name: string;
    ownerOnly?: boolean;
    data: any;
    exec: (client: Client, interaction: CommandInteraction) => any | Promise<any>;
}


export interface Cache {
    commands: Collection<string, SlashCommand>;
}