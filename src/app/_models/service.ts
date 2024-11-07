import { Tag } from "./tags";

export interface Service  {
    id: number;
    name: string;
    summary: string;
    description: string;
    tags: Tag[];
    pictures: string[];
  };
  