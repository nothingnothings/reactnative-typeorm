import fastify from 'fastify';
import { AppDataSource } from '../src/database/typeorm/data-source';

const app = fastify();

app.get('/', async (req, res) => {
  //   return 'Hello World';

  res.send('Está funcionando.');
});

AppDataSource.initialize();

app.listen(
  {
    port: 3001,
  },
  () => {
    console.log('SERVER RUNNING ON PORT 3001');
  }
);
