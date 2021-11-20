import { Users } from './IAuthResponse';
export interface Icar {
    id:           number;
    brand:        string;
    model:        string;
    year:         number;
    type_car:     string;
    transmission: string;
    price:        number;
    image:        string;
    user?:         Users;
}
