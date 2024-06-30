import { EntrepreneurInMemoryRepository } from "../../../../infrastructure/db/entrepreneur-in-memory.repository";
import { GetAllEntrepreneurUseCase } from "./getAll-entrepreneur.use-case";

describe("GetAllEntrepreneur UseCase Test Suit", () => {
  it("should get data usecase", async () => {
    const repository = new EntrepreneurInMemoryRepository();
    const getAllEntrepreneurUseCase = new GetAllEntrepreneurUseCase(repository);
    const output = await getAllEntrepreneurUseCase.execute();

    expect(output).toStrictEqual([]);
    expect(output).toHaveLength(0);
  });
});
