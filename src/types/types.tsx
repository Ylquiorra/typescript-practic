export interface IAddress {
  street: string;
  city: string;
  zipcode: string;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: IAddress;
}

export interface ITodos {
  id: number;
  title: string;
  completed: boolean;
}
