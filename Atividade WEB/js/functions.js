function validaNome(name) {

	var nome = formulario.name.value;
	var email = formulario.email.value;

    if (nome == ""){
        alert('Campo Nome é obrigatório');
        return false;
    }

    else if (nome.length < 4){
        alert('Campo Nome deve ter no mínimo 4 caractéres');
        return false;
    }

    else{
      nome = "";
      alert('Nome enviado');
    }

    return true;
}

function validaAssunto(subject){

  var assunto = formulario.subject.value;

  if(assunto == ""){
    alert('É obrigatório selecionar um assunto');
    return false;
  }

  else{
      assunto == "";
      alert('Assunto enviado');
  }

  return true;
}

function validaEmail(email) {
	var email = formulario.email.value;

	usuario = email.substring(0, email.indexOf("@"));
	dominio = email.substring(email.indexOf("@")+ 1, email.length);

    if(email == ""){
    	alert('Campo Email é obrigatório');
    	return false;
    }

	else if ((usuario.length >=1) &&
	    (dominio.length >=3) &&
	    (usuario.search("@")==-1) &&
	    (dominio.search("@")==-1) &&
	    (usuario.search(" ")==-1) &&
	    (dominio.search(" ")==-1) &&
	    (dominio.search(".")!=-1) &&
	    (dominio.indexOf(".") >=1)&&
	    (dominio.lastIndexOf(".") < dominio.length - 1)) {
        email == "";
        alert('Email enviado');
        return true;
      }

  else
		alert("E-mail invalido");

  return true;
}

$(document).ready(function() {
	$('a[href^="#"]').on('click',function (e) {
  		e.preventDefault ();

  		var target = this.hash,
  		$target = $(target);

  		$('html, body').stop().animate ({
   			'scrollTop': $target.offset().top
  		}, 1000, 'swing', function () {
   			window.location.hash = target;
  		});
 	});
});
