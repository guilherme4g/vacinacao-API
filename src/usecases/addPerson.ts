import { Person } from "../models/Person";

export interface AddPersonModel {
  cpf: string,
  name: string,
  age: number,
  email: string
}

export interface AddPerson {
  add (person: AddPersonModel): Promise<Person>;
};