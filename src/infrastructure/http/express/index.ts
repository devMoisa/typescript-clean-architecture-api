import express, { Request, Response } from "express";
import { EntrepreneurInMemoryRepository } from "../../db/entrepreneur-in-memory.repository";
import { GetAllEntrepreneurUseCase } from "../../../aplication/usecases/entrepreneur/getAll/getAll-entrepreneur.use-case";
import { CreateEntrepreneurUseCase } from "../../../aplication/usecases/entrepreneur/create/create-entrepreneur.use-case";

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

app.listen(port, () => console.log(`The api is running on port ${port}`));
