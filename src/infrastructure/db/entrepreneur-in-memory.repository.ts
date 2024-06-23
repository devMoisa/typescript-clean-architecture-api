import { Entrepreneur } from "../../domain/entities/entrepreneur/entrepreneur.entity";
import { IEntrepreneurRepository } from "../../domain/ientrepreneur.repository";

export class EntrepreneurInMemoryRepository implements IEntrepreneurRepository {
  items: Entrepreneur[] = [];

  async insert(data: Entrepreneur): Promise<void> {
    this.items.push(data);
  }
  async findAll(): Promise<Entrepreneur[]> {
    return this.items;
  }
}
