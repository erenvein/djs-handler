export default class Listener {
    public name: string;
    public once: boolean;
    public constructor(data:{name: string; once?: boolean;}) {
        this.name = data.name;
        this.once = data.once || false;
    }
}
