import {
  Entrepreneur,
  EntrepreneurProps,
} from "../../domain/entities/entrepreneur/entrepreneur.entity";
import { EntrepreneurInMemoryRepository } from "./entrepreneur-in-memory.repository";

describe("EntrepreneurInMemoryRepository", () => {
  it("should bla bla", () => {
    const entrepreneurRepository = new EntrepreneurInMemoryRepository();
    const entrepreneurProps: EntrepreneurProps = {
      name: "Moises",
      surname: "Miranda",
      sex: "MALE",
      email: "john@doe.com",
      contact: "+5515123456",
      companyName: "CleanCompany",
      companyWebSiteURL: "www.cleancompany.com.br",
    };

    const entrepreneur = new Entrepreneur(entrepreneurProps);
    entrepreneurRepository.insert(entrepreneur);

    expect(entrepreneurRepository.items).toHaveLength(1);
    expect(entrepreneurRepository.items).toStrictEqual([entrepreneur]);
  });
});
