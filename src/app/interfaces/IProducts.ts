export interface IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  color: string;
  image: number[];
  categoryId: number;
  gender: string;
  category: ICategory;
  brand: string;
  brandProduct: IBrand;
  variations: IVariation[];
}

interface IVariation {
  size: string;
  quantity: number;
}

interface IBrand {
  id: string;
  name: string;
}

interface ICategory {
  id: number
  name: string;
}

export interface ICreateProductInput {
  name: string;
  price: number;
  color: string;
  description: string;
  image: number[];
  categoryId: number;
  brand: string;
  gender: string;
  variations: {
    size: string;
    quantity: number;
  }[];

  brandProduct: {
    id: string;
    name: string;
  };
}

export interface IDatabaseProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  color: string;
  image: number[];
  categoryId: number;
  gender: string;
  category: {
    name: string;
  };
  brand: {
    name: string;
  };
  variations: {
    size: string;
    quantity: number;
  }[];
}


export interface IDatabaseProductFilter {
  id: string;
  name: string;
  description: string;
  price: number;
  color: string;
  image: number[];
  categoryId: number;
  gender: string;
  category: ICategory;
  brand: IBrand;
  variations: IVariation[];
}
