import { EntrepreneurInMemoryRepository } from "../../../../infrastructure/db/entrepreneur-in-memory.repository";
import { CreateEntrepreneurUseCase } from "./create-entrepreneur.use-case";

describe("CreateEntrepreneurUseCase Tests Suit", () => {
  const repository = new EntrepreneurInMemoryRepository();
  let createUseCase: CreateEntrepreneurUseCase;

  beforeEach(() => {
    createUseCase = new CreateEntrepreneurUseCase(repository);
  });

  it("should create the data", async () => {
    const output = await createUseCase.execute({
      name: "John",
      email: "john@doe.com",
      surname: "Doe",
      companyName: "CleanArchCompany",
      companyWebSiteURL: "www.cleanarchtecture.com",
      contact: "+551599123456",
      sex: "MALE",
    });

    expect(output).toStrictEqual({
      id: repository.items[0].id,
      name: "John",
      email: "john@doe.com",
      surname: "Doe",
      companyName: "CleanArchCompany",
      companyWebSiteURL: "www.cleanarchtecture.com",
      contact: "+551599123456",
      sex: "MALE",
    });
  });
});
