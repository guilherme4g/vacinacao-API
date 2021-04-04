import { Controller } from "../../protocols/controller";
import { HttpRequest, HttpResponse } from "../../protocols/http";
import { SingUpvalidator } from "./SignUpValidator";
import { AddPerson } from "../../usecases/addPerson";

export class SignUpPersonController implements Controller {
    
  constructor (private singUpvalidator: SingUpvalidator, private addPerson: AddPerson){}

  async handle(httpRequest: HttpRequest<any>) : Promise<HttpResponse> {
    try {
      const errors = this.singUpvalidator.validation(httpRequest.body);
    
      if(errors) {
        return {
          status: 400,
          body: errors
        }
      }
      
      const person = await this.addPerson.add(httpRequest.body);

    } catch (error) {
      return {
        status: 500,
        body: 'Internal Server Error'
      }
    }
  }
}