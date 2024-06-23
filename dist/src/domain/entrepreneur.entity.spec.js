"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const entrepreneur_entity_1 = require("./entrepreneur.entity");
describe("Entrepreneur Entity", () => {
    let entrepreneurProps = {
        name: "Moises",
        surname: "Miranda",
        sex: "MALE",
        email: "john@doe.com",
        contact: "+5515123456",
        companyName: "CleanCompany",
        companyWebSiteURL: "www.cleancompany.com.br",
    };
    let entrepreneurSUT;
    beforeEach(() => {
        entrepreneurSUT = new entrepreneur_entity_1.Entrepreneur(entrepreneurProps);
    });
    it("should property id has already been defined", () => {
        expect(entrepreneurSUT.id).toBeDefined();
    });
    it("should contruct the object", () => {
        expect(entrepreneurProps).toStrictEqual(Object.assign({}, entrepreneurProps));
    });
    it("should SUT update name method", () => {
        entrepreneurSUT.updateName("Cleiton");
        expect(entrepreneurSUT.name).toBe("Cleiton");
    });
    it("should SUT update surname method", () => {
        entrepreneurSUT.updateSurname("Saegatti");
        expect(entrepreneurSUT.surname).toBe("Saegatti");
    });
    it("should SUT update sex method", () => {
        entrepreneurSUT.updateSex("FEMALE");
        expect(entrepreneurSUT.sex).toBe("FEMALE");
    });
    it("should SUT update email method", () => {
        entrepreneurSUT.updateEmail("doe@john.com");
        expect(entrepreneurSUT.email).toBe("doe@john.com");
    });
    it("should SUT update contact method", () => {
        entrepreneurSUT.updateContact("+5515123465764");
        expect(entrepreneurSUT.contact).toBe("+5515123465764");
    });
    it("should SUT update companyName method", () => {
        entrepreneurSUT.updateCompanyName("CompanyClean");
        expect(entrepreneurSUT.companyName).toBe("CompanyClean");
    });
    it("should SUT update companyWebSiteURL method", () => {
        entrepreneurSUT.updateCompanyWebSiteURL("www.companyclean.com.br");
        expect(entrepreneurSUT.companyWebSiteURL).toBe("www.companyclean.com.br");
    });
});
