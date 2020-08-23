
import express from 'express';
import routes from './routes';
import cors from 'cors';
//rota : endereços da aplicação ex:localhost:3333/users
//resource: '/users'
//GET: Buscar info
//POST: Criar alguma nova info
//PUT: Atualizar info
//DELETE: Deletar info

//Corpo: (Request Body) Dados para criação ou atualização de um registro
//Route Params: Identificar qual recurso eu quero atualizar ou deletar
//Query Params: Paginação, filtros, ordenação

const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(3333);