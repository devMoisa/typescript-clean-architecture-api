export type EntrepreneurProps = {
  name: string;
  surname: string;
  sex: string;
  email: string;
  contact: string;
  companyName: string;
  companyWebSiteURL: string;
};

export class Entrepreneur {
  public readonly id: string;
  public props: Required<EntrepreneurProps>;

  constructor(props: EntrepreneurProps, id?: string) {
    this.id = id || crypto.randomUUID();
    this.props = {
      ...props,
    };
  }

  updateName(value: string) {
    this.props.name = value;
  }
  updateSurname(value: string) {
    this.props.surname = value;
  }
  updateSex(value: string) {
    this.props.sex = value;
  }
  updateEmail(value: string) {
    this.props.email = value;
  }
  updateContact(value: string) {
    this.props.contact = value;
  }
  updateCompanyName(value: string) {
    this.props.companyName = value;
  }
  updateCompanyWebSiteURL(value: string) {
    this.props.companyWebSiteURL = value;
  }

  public get name() {
    return this.props.name;
  }
  private set name(value: string) {
    this.props.name = value;
  }

  public get surname() {
    return this.props.surname;
  }
  private set surname(value: string) {
    this.props.surname = value;
  }

  public get sex() {
    return this.props.sex;
  }
  private set sex(value: string) {
    this.props.sex = value;
  }

  public get email() {
    return this.props.email;
  }
  private set email(value: string) {
    this.props.email = value;
  }

  public get contact() {
    return this.props.contact;
  }
  private set contact(value: string) {
    this.props.contact = value;
  }

  public get companyName() {
    return this.props.companyName;
  }
  private set companyName(value: string) {
    this.props.companyName = value;
  }

  public get companyWebSiteURL() {
    return this.props.companyWebSiteURL;
  }
  private set companyWebSiteURL(value: string) {
    this.props.companyWebSiteURL = value;
  }

  toJSON() {
    return {
      id: this.id,
      ...this.props,
    };
  }
}
