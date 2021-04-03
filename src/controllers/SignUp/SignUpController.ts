import { Controller } from "../../protocols/controller";
import { HttpRequest, HttpResponse } from "../../protocols/http";
import { SingUpvalidator } from "./SignUpValidator";

export class SignUpPersonController implements Controller {
    
    constructor (private singUpvalidator: SingUpvalidator){}

    async handle(httpRequest: HttpRequest<any>) : Promise<HttpResponse> {
        
        const errors = this.singUpvalidator.validation(httpRequest.body);
        
        if(errors) {
            return {
                status: 400,
                body: errors
            }
        }
    }
}