function calcula(){
    const dist = document.getElementById("dist");
    const preco = document.getElementById("preco");
    const media = document.getElementById("media");

    let total = (dist.value/media.value)*preco.value

    let result = document.getElementById("total");
    result.textContent = `Total: R$ ${total.toFixed(2)}`;




}