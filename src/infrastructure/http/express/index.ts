import express, { Request, Response } from "express";
import { CreateEntrepreneurUseCase } from "../../../application/usecases/entrepreneur/create/create-entrepreneur.use-case";
import { GetAllEntrepreneurUseCase } from "../../../application/usecases/entrepreneur/getAll/getAll-entrepreneur.use-case";
import { ExtractUsersInstagramUseCase } from "../../../application/usecases/instagram/extract-users/extract-users.usecase";
import { EntrepreneurInMemoryRepository } from "../../db/entrepreneur-in-memory.repository";
import { PuppeteerService } from "../../service/puppeteer/puppeteer.service";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const entrepreneurRepo = new EntrepreneurInMemoryRepository();

app.post("/entrepreneur", async (req: Request, res: Response) => {
  try {
    const createEntrepreneurUseCase = new CreateEntrepreneurUseCase(
      entrepreneurRepo
    );

    const output = await createEntrepreneurUseCase.execute(req.body);
    res.status(201).json(output);
  } catch (error) {
    res.status(500).json({
      message: "Erro interno no servidor",
    });
  }
});

app.get("/entrepreneur", async (_req: Request, res: Response) => {
  try {
    const getAllEntrepreneurUseCase = new GetAllEntrepreneurUseCase(
      entrepreneurRepo
    );

    const output = await getAllEntrepreneurUseCase.execute();
    res.status(200).json(output);
  } catch (error) {
    res.status(500).json({
      message: "Erro interno no servidor",
    });
  }
});

app.post("/instagram/automation", async (_req: Request, res: Response) => {
  try {
    const puppeteerService = new PuppeteerService();
    const extractUsersInstagramUseCase = new ExtractUsersInstagramUseCase(
      puppeteerService
    );

    await extractUsersInstagramUseCase.execute();
    res.status(200).json({ message: "Automação efetuada com sucesso." });
  } catch (error) {
    res.status(500).json({
      message: "Erro interno no servidor",
    });
  }
});

app.listen(port, () => console.log(`The api is running on port ${port}`));
