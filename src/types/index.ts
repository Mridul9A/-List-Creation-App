// File: src/types/index.ts
export interface AnimalItem {
  id: string;
  title: string;
  description: string;
}

export interface ListData {
  lists: {
    name: string;
    items: AnimalItem[];
  }[];
}