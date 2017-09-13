/*Luiz Guilherme Devide
Programacao Web 2
Arquivo functions - Contem o as funcoes em java script.
A primeira funcao eh responsavel pela rolagem do menu.
E a funcao validaForm era verificar a validacao de nome, email e assunto.
*/

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

function validaForm() {

	var nome = formulario.name.value;
	var email = formulario.email.value;
  var assunto = formulario.subject.value;
  var aux = false;

  usuario = email.substring(0, email.indexOf("@"));
  dominio = email.substring(email.indexOf("@")+ 1, email.length);

  if (nome == "")
    alert('Campo Nome é obrigatório');

  else if (nome.length < 4)
    alert('Campo Nome deve ter no mínimo 4 caractéres');

  else if(email == "")
    alert('Campo Email é obrigatório');

  else if ((usuario.length >=1) &&
    (dominio.length >=3) &&
    (usuario.search("@")==-1) &&
    (dominio.search("@")==-1) &&
    (usuario.search(" ")==-1) &&
    (dominio.search(" ")==-1) &&
    (dominio.search(".")!=-1) &&
    (dominio.indexOf(".") >=1)&&
    (dominio.lastIndexOf(".") < dominio.length - 1)) {
      aux = true;
    }

  if(aux == false){
    alert("E-mail invalido");
    aux = false;
  }

  if(assunto == ""){
    alert('É obrigatório selecionar um assunto');
    aux = false;
  }

  if(aux == true)
    alert('Formulario enviado');

    return true;
}

