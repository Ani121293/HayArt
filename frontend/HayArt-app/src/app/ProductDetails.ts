export class ProductDetails {
  id: number;
  constructor(
    public product_name: string,
    public pr_name: string,
    public size: string,
    public weight: string,
    public image: string,
    public types: string[],
    public images: string[]
    ){}
}
