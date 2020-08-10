import express from 'express';

import cors from 'cors';

import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json()); // a cada requisição, ele vai fazer a conversão do request body para um objeto javascript
app.use(routes);

app.listen(3333);

// Route Params: Identicicar qual recurso eu quero atualizar ou deletar
// Query Params: Paginação, Filtros, Ordenação

