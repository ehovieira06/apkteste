import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.json());

const usuarioRepository = new UsuarioRepository();
const usuarioService = new UsuarioService(usuarioRepository);
const usuarioController = new UsuarioController(usuarioService);

app.post('/api/usuarios', (req, res) => {
  usuarioController.criarUsuario(req, res);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
