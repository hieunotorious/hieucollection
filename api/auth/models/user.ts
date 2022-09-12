export type LoginType ={
    username : string;
    password : string;
}
export type User = {
    username : string;
    password : string;
    name : string;
    id : string;
    address : string;
    phone : string;
    birthday : string;
    gender : Gender;

}

export enum Gender{
    male = "MALE",
    female = "FEMALE",
    other = "OTHER",
}