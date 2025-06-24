jQuery(()=>  {
    // Código para manejar eventos con jQuery
    for (let i = 0; i < 6; i++) 
    {
        switch(i)
        {
            case 0:  //ROJO
                {
                    //ENTRANDO EN EL BOTON
                    $('.myButton').eq(i).on('mouseover', function() {
                        for(let j = 0; j < 3; j++) 
                            {
                            $('.message').eq(j).css({
                                'border': '2px solid black',
                                'background-color': 'rgba(255, 0, 0, 0.25)',
                                'color': 'rgba(255, 0, 0, 0.95)'
                            });
                            }
                    });
                    //SALIENDO DEL BOTON
                    $('.myButton').eq(i).on('mouseleave', function() {
                        for(let j = 0; j < 3; j++) 
                            {
                            $('.message').eq(j).css({
                                'border': '2px solid white',
                                'background-color': 'white',
                                'color': 'black'
                            });
                            }
                    });
                break;
                }
            case 1:  //AMARILLO
                {
                    //ENTRANDO EN EL BOTON
                    $('.myButton').eq(i).on('mouseover', function() {
                        for(let j = 0; j < 3; j++) 
                            {
                            $('.message').eq(j).css({
                                'border': '2px solid black',
                                'background-color': 'rgba(255, 251, 0, 0.25)',
                                'color': 'rgba(238, 255, 0, 0.95)'
                            });
                            }
                    });
                    //SALIENDO DEL BOTON
                    $('.myButton').eq(i).on('mouseleave', function() {
                        for(let j = 0; j < 3; j++) 
                            {
                            $('.message').eq(j).css({
                                'border': '2px solid white',
                                'background-color': 'white',
                                'color': 'black'
                            });
                            }
                    });
                break;
                }
            case 2:  //VERDE
                {
                    //ENTRANDO EN EL BOTON
                    $('.myButton').eq(i).on('mouseover', function() {
                        for(let j = 0; j < 3; j++) 
                            {
                            $('.message').eq(j).css({
                                'border': '2px solid black',
                                'background-color': 'rgba(30, 255, 0, 0.25)',
                                'color': 'rgba(21, 255, 0, 0.95)'
                            });
                            }
                    });
                    //SALIENDO DEL BOTON
                    $('.myButton').eq(i).on('mouseleave', function() {
                        for(let j = 0; j < 3; j++) 
                            {
                            $('.message').eq(j).css({
                                'border': '2px solid white',
                                'background-color': 'white',
                                'color': 'black'
                            });
                            }
                    });
                break;
                }
            case 3:  //AZUL
                {
                    //ENTRANDO EN EL BOTON
                    $('.myButton').eq(i).on('mouseover', function() {
                        for(let j = 0; j < 3; j++) 
                            {
                            $('.message').eq(j).css({
                                'border': '2px solid black',
                                'background-color': 'rgba(4, 0, 255, 0.25)',
                                'color': 'rgba(4, 0, 255, 0.95)'
                            });
                            }
                    });
                    //SALIENDO DEL BOTON
                    $('.myButton').eq(i).on('mouseleave', function() {
                        for(let j = 0; j < 3; j++) 
                            {
                            $('.message').eq(j).css({
                                'border': '2px solid white',
                                'background-color': 'white',
                                'color': 'black'
                            });
                            }
                    });
                break;
                }
            case 4:  //MORADO
                {
                    //ENTRANDO EN EL BOTON
                    $('.myButton').eq(i).on('mouseover', function() {
                        for(let j = 0; j < 3; j++) 
                            {
                            $('.message').eq(j).css({
                                'border': '2px solid black',
                                'background-color': 'rgba(255, 0, 242, 0.25)',
                                'color': 'rgba(255, 0, 200, 0.95)'
                            });
                            }
                    });
                    //SALIENDO DEL BOTON
                    $('.myButton').eq(i).on('mouseleave', function() {
                        for(let j = 0; j < 3; j++) 
                            {
                            $('.message').eq(j).css({
                                'border': '2px solid white',
                                'background-color': 'white',
                                'color': 'black'
                            });
                            }
                    });
                break;
                }
            case 5:  //NARANJA
                {
                    //ENTRANDO EN EL BOTON
                    $('.myButton').eq(i).on('mouseover', function() {
                        for(let j = 0; j < 3; j++) 
                            {
                            $('.message').eq(j).css({
                                'border': '2px solid black',
                                'background-color': 'rgba(255, 136, 0, 0.25)',
                                'color': 'rgba(255, 136, 0, 0.95)'
                            });
                            }
                    });
                    //SALIENDO DEL BOTON
                    $('.myButton').eq(i).on('mouseleave', function() {
                        for(let j = 0; j < 3; j++) 
                            {
                            $('.message').eq(j).css({
                                'border': '2px solid white',
                                'background-color': 'white',
                                'color': 'black'
                            });
                            }
                    });
                break;
                }
        }

    }
    $('#container').on('click', function() {
        alert('¡Contenedor clickeado!');
    });
    $('.myButton').eq(2).on('mouseover',function() {
        $('.message').eq(0).css('color', 'yellow');
    });
    $('.myButton').eq(2).on('mouseout', function() {
        $('.message').eq(0).css('color', 'black');
    });
    //ATRIBUTO DE FECHA IMPONERLA
    $('.fecha').eq(0).attr("value",function(){
        //indiceArray tiene el indice de este elemento en el objeto jQuery
        var f= new Date();
        var fecha = f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear() + " " + f.getHours() + ":" + f.getMinutes() + ":" + f.getSeconds();
        return fecha;
    });
    $('.myButton').eq(0).on('click', function() {
        $('.fecha').eq(0).removeAttr("value");
    });
});