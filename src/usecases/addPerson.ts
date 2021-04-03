import { Person } from "../models/Person";

export interface AddPersonModel {
  cpf: string,
  name: string,
  age: number,
  email: string
}

export interface Addperson {
  add (person: AddPersonModel): Person;
};