const enviarComentario = ({conteudo, userName}) => {
    const novoComentario = {
        date: Date.now(),
        text: conteudo,
        userName: userName
    };
    return novoComentario;
};

export {enviarComentario};