$(document).ready(function () {
    $.ajax({
        url:'https://swapi.dev/api/people',
        type:"GET"
    }).done(function (resp){
        var listadoPersonajes = resp.results;
        
        for(var i = 0; i<listadoPersonajes.length; i++){
            var template = `
            <div class="col-xxl-3 col-md-6 col-sm-8 col-11 character mb-5 ">
                <img class="p1" src="https://starwars-visualguide.com/assets/img/characters/${i+1}.jpg" alt="">
                <button class="btn btn-warning text">${listadoPersonajes[i].name}</button>
             </div>`;

            $('#lista-personajes').append(template);
        }
    });

    



});