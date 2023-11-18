// src/app.ts
import express from 'express';
import bodyParser from 'body-parser';
import { sequelize } from './database';
import { ApkController } from './controller/apk.controller';
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

sequelize
  .sync()
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

app.post('/api/example', ApkController.createExample);
app.get('/api/examples', ApkController.getAllExamples);
app.get('/api/example/:id', ApkController.getExampleById);
app.put('/api/example/:id', ApkController.updateExample);
app.delete('/api/example/:id', ApkController.deleteExample);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
