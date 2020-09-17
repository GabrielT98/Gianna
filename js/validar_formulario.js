function validacao(){

	if(document.formulario.nome.value=="") {
		alert("Por favor,preencha o campo nome.")
		document.formulario.nome.focus();
		return false;
	}
	if(document.formulario.email.value=="" || document.formulario.email.value.indexOf("@")==-1 ||  document.formulario.email.value.indexOf(".")==-1) {
		alert("Por favor,digite um email válido.")
		document.formulario.email.focus();
		return false;
	}
	if(document.formulario.assunto.value=="") {
		alert("Por favor,preencha o campo assunto.")
		document.formulario.assunto.focus();
		return false;
	}
	if(document.formulario.mensagem.value=="") {
		alert("Por favor,preencha o campo mensagem.")
		document.formulario.mensagem.focus();
		return false;
	}
	else{
		alert("Mensagem enviada com sucesso!")
	}
}