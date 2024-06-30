import puppeteer, { Browser, Page } from "puppeteer";

export class PuppeteerService {
  public browser: Browser | null = null;
  public page: Page | null = null;

  async init() {
    if (!this.browser) {
      this.browser = await puppeteer.launch({ headless: false });
    }
  }

  async createPage(): Promise<Page> {
    await this.init();
    if (this.browser) {
      this.page = await this.browser.newPage();
      return this.page;
    }
    throw new Error("Browser not initialized");
  }

  async closeBrowser() {
    if (this.browser) {
      await this.browser.close();
      await this.browser.close();
      this.browser = null;
    }
  }

  async navigateTo(url: string) {
    if (this.page) {
      await this.page.goto(url);
    } else {
      throw new Error("Page not initialized");
    }
  }

  async getTitle(): Promise<string> {
    if (this.page) {
      return await this.page.title();
    }
    throw new Error("Page not initialized");
  }
}
