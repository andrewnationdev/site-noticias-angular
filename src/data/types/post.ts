import { IPost } from "./schema";

export class Post implements IPost {
    id: number = 0;
    title: string = "";
    excerpt: string = "";
    content: string = "";
    date: string = "";
    author: string = "";
    category: string = "";
}