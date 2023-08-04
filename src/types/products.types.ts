export type getProductProps = {
  smcCode: string;
  country: string;
}

export type Product = {
  color: string;
  description: string;
  images: string[];
  material: string;
  name: string;
  price: number;
  sellable_in: string[];
  sellable_retail: boolean;
  sizes: string[];
  style: string;
}