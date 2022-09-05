export default class SlashCommand {
    public name: string;
    public ownerOnly: boolean;
    public data: any;
    public constructor(data: { name: string, data: any; ownerOnly?: boolean; }) {
        this.name = data.name;
        this.ownerOnly = data?.ownerOnly || false;
        this.data = data.data;
    }
}
