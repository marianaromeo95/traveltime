$(document).ready(function() {
    const url = window.location.href;
    const parameter = url.substring(url.lastIndexOf('/') + 1, url.lastIndexOf('.'));
    const promocao = promocoes.find(p => p.id == parameter);
    console.log(parameter)
    promocao.images.forEach((img, i) => $(".carousel-inner").append(`            
        <div class="carousel-item ${i === 0 ? 'active': ''}">
             <img src="${img}" class="img" alt="..." />
        </div>
    `));

    const badges = promocao.pacote.map(p => `<div class="col-1"><span href="#" class="btn btn-light btn-sm">${p}</span></div>`).join('')
    console.log(badges)
    $("#home > .container").append(`
        <div class="row mb-5">
            <h1 class="text-center my-5">${promocao.name}</h1>
            <h5>Hotel: ${promocao.hotel}</h5>
            <h5>Valor: ${promocao.preco}</h5>
            <div class="row">
            ${badges}
            </div>
            <br><br>
            <div class="row justify-content-center">
             
             <a href="${promocao.url}" class="btn btn-warning btn-lg">Comprar</a>
             
            </div>
            <br><br>
        </div>
    `);

});