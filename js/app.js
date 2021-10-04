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


