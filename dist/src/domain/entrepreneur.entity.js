"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entrepreneur = void 0;
class Entrepreneur {
    constructor(props, id) {
        this.id = id || crypto.randomUUID();
        this.props = Object.assign({}, props);
    }
    updateName(value) {
        this.props.name = value;
    }
    updateSurname(value) {
        this.props.surname = value;
    }
    updateSex(value) {
        this.props.sex = value;
    }
    updateEmail(value) {
        this.props.email = value;
    }
    updateContact(value) {
        this.props.contact = value;
    }
    updateCompanyName(value) {
        this.props.companyName = value;
    }
    updateCompanyWebSiteURL(value) {
        this.props.companyWebSiteURL = value;
    }
    get name() {
        return this.props.name;
    }
    set name(value) {
        this.props.name = value;
    }
    get surname() {
        return this.props.surname;
    }
    set surname(value) {
        this.props.surname = value;
    }
    get sex() {
        return this.props.sex;
    }
    set sex(value) {
        this.props.sex = value;
    }
    get email() {
        return this.props.email;
    }
    set email(value) {
        this.props.email = value;
    }
    get contact() {
        return this.props.contact;
    }
    set contact(value) {
        this.props.contact = value;
    }
    get companyName() {
        return this.props.companyName;
    }
    set companyName(value) {
        this.props.companyName = value;
    }
    get companyWebSiteURL() {
        return this.props.companyWebSiteURL;
    }
    set companyWebSiteURL(value) {
        this.props.companyWebSiteURL = value;
    }
    toJSON() {
        return Object.assign({ id: this.id }, this.props);
    }
}
exports.Entrepreneur = Entrepreneur;
