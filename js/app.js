var menu_aberto_aberto = 0;
var menu_dropdown_aberto=1;
$('#bottun_abrir').on('click', function(e){
    
	if(menu_aberto_aberto == 0){
		abrirMenu();
	}else{
		fecharMenu();
	}
	
});
$('#button_fechar').on('click', function(e){
    
	if(menu_aberto_aberto == 0){
		abrirMenu();
	}else{
		fecharMenu();
	}
	
});

function abrirMenu(){
	$('#bg_menu_mobile').show(500);
	$('#bottun_abrir').addClass('botao-menu-mobile-ativo');
	menu_aberto_aberto = 1;
}

function fecharMenu(){
	$('#bg_menu_mobile').hide(500);
	$('#button_fechar').removeClass('botao-menu-mobile-ativo');
	menu_aberto_aberto = 0;
}

$(document).ready(function(){

	$(".counter").each(function() {
	  var $this = $(this),
  
		countTo = $this.attr("data-count");
  
	  $({ countNum: $this.text()}).animate({
		countNum: countTo
	  },
  
	  	{
			duration: 3000,
			easing:"linear",
			step: function() {
			  $this.text(Math.floor(this.countNum));
			},
			complete: function() {
			  $this.text(this.countNum);
			}
		});
	});
});

$(function() {
	$(window).on("scroll", function() {
		if($(window).scrollTop() > 100) {
			$(".menu-fixed").addClass("menu-fixed-branco");
		}else{
			$(".menu-fixed").removeClass("menu-fixed-branco");
		}
	})
});
//
$('#faq_um').on('click', function(){
	$('#bloco_faq_um').show();
	$('#bloco_faq_dois').hide();
	$('#bloco_faq_tres').hide();
	$('#bloco_faq_quatro').hide();
	$('#bloco_faq_cinco').hide();
	$('#bloco_faq_seis').hide();
});

$('#faq_dois').on('click', function(){
	$('#bloco_faq_um').hide();
	$('#bloco_faq_dois').show();
	$('#bloco_faq_tres').hide();
	$('#bloco_faq_quatro').hide();
	$('#bloco_faq_cinco').hide();
	$('#bloco_faq_seis').hide();
});

$('#faq_tres').on('click', function(){
	$('#bloco_faq_um').hide();
	$('#bloco_faq_dois').hide();
	$('#bloco_faq_tres').show();
	$('#bloco_faq_quatro').hide();
	$('#bloco_faq_cinco').hide();
	$('#bloco_faq_seis').hide();
});

$('#faq_quatro').on('click', function(){
	$('#bloco_faq_um').hide();
	$('#bloco_faq_dois').hide();
	$('#bloco_faq_tres').hide();
	$('#bloco_faq_quatro').show();
	$('#bloco_faq_cinco').hide();
	$('#bloco_faq_seis').hide();
});

$('#faq_cinco').on('click', function(){
	$('#bloco_faq_um').hide();
	$('#bloco_faq_dois').hide();
	$('#bloco_faq_tres').hide();
	$('#bloco_faq_quatro').hide();
	$('#bloco_faq_cinco').show();
	$('#bloco_faq_seis').hide();
});

$('#faq_seis').on('click', function(){
	$('#bloco_faq_um').hide();
	$('#bloco_faq_dois').hide();
	$('#bloco_faq_tres').hide();
	$('#bloco_faq_quatro').hide();
	$('#bloco_faq_cinco').hide();
	$('#bloco_faq_seis').show();
});
