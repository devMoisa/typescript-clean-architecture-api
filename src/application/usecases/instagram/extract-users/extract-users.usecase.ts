import { PuppeteerService } from "../../../../infrastructure/service/puppeteer/puppeteer.service";

export class ExtractUsersInstagramUseCase {
  constructor(private readonly puppeteerService: PuppeteerService) {}

  async execute(): Promise<void> {
    await this.puppeteerService.createPage();
    await this.puppeteerService.navigateTo("https://www.youtube.com");
    const title = await this.puppeteerService.getTitle();

    console.log("title", title);
    await this.puppeteerService.closeBrowser();
  }
}
