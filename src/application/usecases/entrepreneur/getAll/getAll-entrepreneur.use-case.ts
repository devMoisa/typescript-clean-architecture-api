import { IEntrepreneurRepository } from "../../../../domain/ientrepreneur.repository";

export class GetAllEntrepreneurUseCase {
  constructor(private readonly entrepreurRepo: IEntrepreneurRepository) {}
  async execute(): Promise<IGetAllEntrepreneurOutput[]> {
    const list = await this.entrepreurRepo.findAll();
    return list.map((item) => item.toJSON());
  }
}

type IGetAllEntrepreneurOutput = {
  name: string;
  surname: string;
  sex: string;
  email: string;
  contact: string;
  companyName: string;
  companyWebSiteURL: string;
};
