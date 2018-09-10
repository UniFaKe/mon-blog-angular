export class Post {
    created_at: string;
    loveIts: number;

    constructor(public title: string, public content: string) {
        this.created_at = new Date().toJSON();
        this.loveIts = 0;
    }
}