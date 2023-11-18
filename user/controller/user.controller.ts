import { Request, Response } from 'express';

@Controller
class UsuarioController {
  private usuarioService: UsuarioService;

  constructor(usuarioService: UsuarioService) {
    this.usuarioService = usuarioService;
  }

  criarUsuario(req: Request, res: Response): void {
    const { nome, email, dataNascimento, telefone } = req.body;
    const novoUsuario = this.usuarioService.criarUsuario({ nome, email, dataNascimento, telefone });
    res.json(novoUsuario);
  }
}