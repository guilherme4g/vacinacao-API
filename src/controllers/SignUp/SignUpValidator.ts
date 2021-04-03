import { Validation } from "../../protocols/validation";
import { AddPersonModel } from "../../usecases/addPerson";

export class SingUpvalidator implements Validation<AddPersonModel> {

    validation(body: AddPersonModel) {
        return null;
    }
}