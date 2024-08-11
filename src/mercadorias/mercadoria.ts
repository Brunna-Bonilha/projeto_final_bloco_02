import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { ProdutoService } from '../produto/services/produto.service';

async function carregarMercadorias() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const produtoService = app.get(ProdutoService);

  const medicamentos = [
    { nome: 'Paracetamol', preco: 12.50, categoriaId: 1 },
    { nome: 'Ibuprofeno', preco: 21.75, categoriaId: 1 },
    { nome: 'Dipirona', preco: 10.20, categoriaId: 1 },
  ];

  const cosmeticos = [
    { nome: 'Creme Hidratante', preco: 15.90, categoriaId: 2 },
    { nome: 'Protetor Solar', preco: 25.00, categoriaId: 2 },
  ];

  for (const medicamento of medicamentos) {
    await produtoService.create(medicamento);
  }

  for (const cosmetico of cosmeticos) {
    await produtoService.create(cosmetico);
  }

  await app.close();
}

carregarMercadorias();


  