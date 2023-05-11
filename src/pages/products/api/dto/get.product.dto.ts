import { Nutritions } from "../types";

export type ProductDto = {
  id: number;
  name: string;
  genus: string;
  family: string;
  order: string;
  nutritions: Nutritions;
};
