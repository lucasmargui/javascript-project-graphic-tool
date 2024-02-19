$(window).resize(function() {
    ctx.canvas.width = $(window).innerWidth();
    ctx.canvas.height = $(window).innerHeight();
    var furos = reDraw();
    changeDivFuro(furos);
});



  
$('form').on('change', function(event) {
  if ($(event.target).attr('type') === 'checkbox') {
      event.preventDefault();
      reDraw();
  }
});


// jQuery para alternar a visibilidade da lista ao clicar no âncora
$('#list1 .anchor').on('click', function(evt) {
    $('#list1').toggleClass('visible');
});

// jQuery para fechar o tooltip
$("#close").click(function(){
    $('#tooltip').css('opacity', 0);
    setTimeout(function(){ 
        $('#tooltiptext').html('');
        $('#tooltip').css({ top: "0px", left: "-60px" });
    }, 300);
});


function showtooltip(furoValue) {
    var furo = JSON.parse(furoValue);

    $('#tooltip').css({
        top: furo.object.Y,
        left: furo.object.X,
        opacity: 1
    });
    
    $('#tooltiptext').html(furo.param.O + '<br> X:' + furo.param.X + ' Y:' + furo.param.Y);
}
