jQuery(document).ready(() => {
  console.log('Web page loaded');
  $('body').css('background-color', 'lightblue');
  $('#objeto').css({'margin-left': '50px',
                   'color': 'red',
                   'font-size': '20px',
                   'border': '2px solid black',
                   'padding': '10px'}
  );
  console.log('Pagina web cargada');
  $('#objeto').css('background-color', 'yellow');
});

$(document).ready(() => {
  console.log('Web page loaded 222');
});

$(() => {
  console.log('Web page loaded 222');
});