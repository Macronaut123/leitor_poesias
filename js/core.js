//ARQUIVO CORE//

var poesiaAtual = 0;

$(document).ready(function(){
	console.log("--INITIALIZED--");
	
	$('.poesia_titulo').html(poesias_titulos[poesiaAtual]);
	$('.poesia_box').html(poesias[poesiaAtual]);
})

function mudarPoesia(direcao){
	
	console.log(poesiaAtual)
	
	switch(direcao){
		case "direita":
			if(poesiaAtual < poesias_titulos.length - 1){
				poesiaAtual++;
				$('.poesia_titulo').html(poesias_titulos[poesiaAtual]);
				$('.poesia_box').html(poesias[poesiaAtual]);			
			}
		break;
		case "esquerda":
			if(poesiaAtual > 0){
				poesiaAtual--;
				$('.poesia_titulo').html(poesias_titulos[poesiaAtual]);
				$('.poesia_box').html(poesias[poesiaAtual]);			
			}
		break;
	}
}