let jogador = "X";
function jogar(celula)
{
    if(celula.innerHTML == "")
    {
        celula.innerHTML = jogador;

        if(jogador == "X"){
            jogador = "O"
        }
        else
        {
            jogador ="X"
        }

    }

}
function reiniciar(){
    window.location.reload();
}