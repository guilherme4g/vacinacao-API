import { SignUpPersonController } from "../../src/controllers/SignUp/SignUpController";
import { SingUpvalidator } from "../../src/controllers/SignUp/SignUpValidator";


// sut => system under test => sistema em teste
const makeSut = () => {
  const singUpvalidatorStub = new SingUpvalidator();
  const sut = new SignUpPersonController(singUpvalidatorStub);
  return {
    singUpvalidatorStub,
    sut
  };
}

describe('Person Controller', () => {

  test('Should call validation with correct values', async () => {
    const { sut, singUpvalidatorStub } = makeSut();
    const validationSpy = jest.spyOn(singUpvalidatorStub, "validation");
    const httpRequest = {
      body: {
        name: 'any_name',
        cpf: 'any_cpf',
        age: 27,
        email: 'any_email'
      }
    }
    const httpResponse = await sut.handle(httpRequest);
    expect(validationSpy).toHaveBeenCalledWith({
      name: 'any_name',
      cpf: 'any_cpf',
      age: 27,
      email: 'any_email'
    });
  });

  test('Should return 400 if name is not provided', async () => {
    const { sut, singUpvalidatorStub } = makeSut();
    const validationSpy = jest.spyOn(singUpvalidatorStub, "validation");
    validationSpy.mockReturnValue(['Missing param: name']);
    const httpRequest = {
      body: {
        cpf: 'any_cpf',
        age: 27,
        email: 'any_email'
      }
    }
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.status).toBe(400);
    expect(httpResponse.body).toContain('Missing param: name');
  });
});