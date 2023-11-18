class UsuarioService {
  private usuarioRepository: UsuarioRepository;

  constructor(usuarioRepository: UsuarioRepository) {
    this.usuarioRepository = usuarioRepository;
  }

  criarUsuario(dadosUsuario: any): any {
    const usuario = this.usuarioRepository.criarUsuario(dadosUsuario);
    return usuario;
  }
}
