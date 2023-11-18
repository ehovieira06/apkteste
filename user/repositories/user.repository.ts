class UsuarioRepository {
    private usuarios: any[];
  
    constructor() {
      this.usuarios = [];
    }
  
    criarUsuario(usuario: any): any {
      this.usuarios.push(usuario);
      return usuario;
    }
  }
  