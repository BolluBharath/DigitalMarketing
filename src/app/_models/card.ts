import { Tag } from "./tags";

export interface Card {
    id: number;
    name: string;
    summary: string;
    description: string;
    pictures: string[];
    tags: Tag[];
}