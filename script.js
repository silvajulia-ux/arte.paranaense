onst botoesCurtir= document.querySelectorAll(".curtir");
botoesCurtir.forEach(function (botaoCurtir){
    let curtiu= false;
    botaoCurtir.addEventListener("click", curtir);
    function curtir(){
        const contador= botaoCurtir.querySelectorAll("span");
        if(curtiu === false){
            contador.textContent++;
            curtiu = true;}
            else{
                con.textContent--;
                curtiu = false;
            }
    }

    
});
