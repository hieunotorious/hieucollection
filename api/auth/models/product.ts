export type ProductType = {
  id: string;
  img: string;
  name: string;
  review: number;
  price: number;
  rating: number;
  description?: string;
  brand: BrandType;
  sale?: number;
  category: CategoryType;
  available: boolean;
};

export enum BrandType {
  marvel_legend = "MARVEL_LEGEND",
  mcfarlane = "MCFARLANE",
  shf = "SHF",
  figma = "FIGMA",
  dc_collectibles = "DC_COLLECTIBLES",
  mattel = "MATTEL",
  figuart = "FIGUART",
}

export enum CategoryType {
  action_figure = "ACTION_FIGURE",
  statue = "STATUE",
}
