const imgLike = (curtiu) => {
    if(curtiu) {
        return require("../images/s2-checked.png");
    }else{
        return require("../images/s2.png");
    }
}

const curtirFoto = (curtiu, likes) => {
    let qtd = likes;
    if(curtiu){
        qtd--;
    } else {
        qtd++;
    }

    return [!curtiu, qtd];
}

export {imgLike, curtirFoto} 