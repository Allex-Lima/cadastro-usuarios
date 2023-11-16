export const validacao = (dados) => {
    let erros = {};

    if (!dados.nome) {
        erros['nome'] = 'O nome é obrigatório';
    }
    if (!dados.nomeUsuario) {
        erros['nomeUsuario'] = ' O nome de usuário é obrigatório.';
    }
    if (!dados.email) {
        erros['email'] = ' O email é obrigatório.';
    }
    if (!dados.senha || dados.senha.length <= 4) {
        erros['senha'] = ' A senha é obrigatório e maior que 4 caracteres.';
    }
    return erros;
}