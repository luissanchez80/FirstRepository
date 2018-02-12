//ver vista previa aun cuando no estén disponibles

var idGirl = 10645016; //tallona
var hovereffectDiv = $('.overlay inline-preview').closest('.hovereffect');
hovereffectDiv.find('')


//cuando está en rojo
//obtener div de la chica
function verChicaOcupada(pId){
	var maintDiv = $('a[data-id="' + pId + '"]').closest('.overlay-wrapper.model-wrapper');
	//remover div que dice que está en privado
	maintDiv.find('.model-tag.model-private').remove();
	//cambiar class para poder ver preview
	var overlayDiv = maintDiv.find('.overlay');
	//agregar class
	overlayDiv.addClass('overlay inline-preview');
	
	var okDiv = maintDiv.find('.inline-preview a:first');
	var linkChica = okDiv.attr('href');
	var nombreChica = linkChica.split('/')[2];
	
	
	//ocultar elementos que bloquean pantalla
	//https://seventeenlive.com/share/friend?audio=0&controls=0&id=10628055
    var width = 438; //219;
	var height = 328; //164;
	var content = '<iframe src=\"/share/friend?audio=0&controls=0&id=' + pId + '\" scrolling=\"no\" id=\"preview-iframe\" name=\"Live Cam Preview\" style=\"position: absolute; top:0px; left: 0px; z-index: 20; pointer-events: none; border: 0px; width: ' + width + 'px; height: ' + height + 'px; opacity:1; \"></iframe>';     
	//maintDiv.find('.absolute').append(content);
	
	var contenedorDiv = $('.col-lg-4.col-md-6.hidden-xs.hidden-sm.hidden-md');
	contenedorDiv.empty();
	contenedorDiv.css('position', 'absolute');
	contenedorDiv.css({top:100, left:100})
	contenedorDiv.prepend('<div style="border: solid 1px #000000;">' + content + '</div>');
	
	okDiv.append('<span>;)</span>');
			
	// maintDiv.find
	maintDiv.find('.inline-loader').addClass('hide');
	maintDiv.find('.bottom-stick.hidden-xs.hidden-sm').remove();
	
	console.log(content);
	console.log('vamos a ver a ' + nombreChica)
}



verChicaOcupada(10496856);//Allis
verChicaOcupada(10472652);//Arieanna **
verChicaOcupada(10638928);//AnnabellKitty
verChicaOcupada(10534032);//CinderElla
verChicaOcupada(10472588);//dayana
verChicaOcupada(10636969);//galinka *
verChicaOcupada(10638925);//honneyCaramel
verChicaOcupada(10547950);//Joei
verChicaOcupada(10616691);//katie
verChicaOcupada(10277348);//Maiza *
verChicaOcupada(10572589);//Miklaus *
verChicaOcupada(10507158);//merida
verChicaOcupada(10642276);//MickyBristol
verChicaOcupada(10472669);//naomia *
verChicaOcupada(10472547);//sophy
verChicaOcupada(10500884);//Suszie*
verChicaOcupada(10620885);//TiffanyBella
verChicaOcupada(10565571);//ToryHump *
verChicaOcupada(10628055);//yoko
$('#foo').trigger('mouseover');