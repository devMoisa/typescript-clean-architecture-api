import { Entrepreneur } from "../../../../domain/entities/entrepreneur/entrepreneur.entity";
import { IEntrepreneurRepository } from "../../../../domain/ientrepreneur.repository";

export class CreateEntrepreneurUseCase {
  constructor(private entrepreneurRepo: IEntrepreneurRepository) {}

  async execute(
    input: ICreateEntrepreneurInput
  ): Promise<ICreateEntrepreneurOutput> {
    const entrepreneur = new Entrepreneur(input);
    await this.entrepreneurRepo.insert(entrepreneur);
    return entrepreneur.toJSON();
  }
}

type ICreateEntrepreneurInput = {
  name: string;
  surname: string;
  sex: string;
  email: string;
  contact: string;
  companyName: string;
  companyWebSiteURL: string;
};

type ICreateEntrepreneurOutput = {
  name: string;
  surname: string;
  sex: string;
  email: string;
  contact: string;
  companyName: string;
  companyWebSiteURL: string;
};
