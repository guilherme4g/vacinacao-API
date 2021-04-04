import { AddPerson, AddPersonModel } from "../../usecases/addPerson";

export class AddPersonRepository implements AddPerson {
  add(person: AddPersonModel) {
    return Promise.resolve(null);
  }
}