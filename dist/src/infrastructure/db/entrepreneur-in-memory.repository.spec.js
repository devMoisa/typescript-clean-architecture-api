"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const entrepreneur_entity_1 = require("../../domain/entrepreneur.entity");
const entrepreneur_in_memory_repository_1 = require("./entrepreneur-in-memory.repository");
describe("EntrepreneurInMemoryRepository", () => {
    it("should bla bla", () => {
        const entrepreneurRepository = new entrepreneur_in_memory_repository_1.EntrepreneurInMemoryRepository();
        const entrepreneurProps = {
            name: "Moises",
            surname: "Miranda",
            sex: "MALE",
            email: "john@doe.com",
            contact: "+5515123456",
            companyName: "CleanCompany",
            companyWebSiteURL: "www.cleancompany.com.br",
        };
        const entrepreneur = new entrepreneur_entity_1.Entrepreneur(entrepreneurProps);
        entrepreneurRepository.insert(entrepreneur);
        expect(entrepreneurRepository.items).toHaveLength(1);
        expect(entrepreneurRepository.items).toStrictEqual([entrepreneur]);
    });
});
