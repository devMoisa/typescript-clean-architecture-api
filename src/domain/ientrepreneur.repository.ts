import { Entrepreneur } from "./entities/entrepreneur/entrepreneur.entity";

export interface IEntrepreneurRepository {
  insert(data: Entrepreneur): Promise<void>;
  findAll(): Promise<Entrepreneur[]>;
}

/*
    A Camada Repository na clean architecture é uma abstração da funcionalidade que a camada
    que irá fazer o trabalho de salvar em algum lugar/db precisa implementar, ela é diferente
    do repository de frameworks como por exemplo um prisma da vida.
    
    E por isso faz sentido estar dentro da layer de domain.
*/
