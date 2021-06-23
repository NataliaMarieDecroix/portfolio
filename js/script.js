document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario(){
  if(document.getElementById("nome").value != "" &&             
	 document.getElementById("email").value != "" &&
	 document.getElementeById("telefone").value != ""){

    alert("Prontinho, muito obrigada! Você receberá as novidades por email.")
  }else{
    alert("Por favor, preencha os campos nome e email!")
  } 
}