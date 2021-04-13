var novoUsuario = {
    nome: "",
    email: "",
    senha: ""
};

/* Variáveis para mudança de tela */

var formEntrar = document.getElementById("login-form");
var formRegistro = document.getElementById("register-form");

/* Funcionalidade para mudar de formulário (caso queira) */

function loginForm(){   
    formEntrar.style.left = "18px";
    formRegistro.style.left = "500px";
}

function registroForm(){
    formEntrar.style.left = "-500px";
    formRegistro.style.left = "0px";
}

/* Cadastro de novo usuário */

function cadastroUsuario(){
    novoUsuario.nome = document.getElementById("cad-nome-usuario").value;
    novoUsuario.email = document.getElementById("cad-email-usuario").value;
    novoUsuario.senha = document.getElementById("cad-senha-usuario").value;

    document.getElementById("cor-botao2").style.background = "#2B9720";
    setTimeout(() => {
        alert("Cadastro realizado com sucesso! Bora testar o login?")        
    }, 1000);
} 

/* Função para verificar se o login é válido. */

function fazerLogin(){
    var usuario = {
        nome: document.getElementById("nome-usuario").value,
        senha: document.getElementById("senha-usuario").value
    };

    if(usuario.nome === "" || usuario.senha === ""){
        alert("Ué, você não vai digitar nada?")  
    }else{
        if(usuario.nome === novoUsuario.nome && usuario.senha === novoUsuario.senha){
            document.getElementById("cor-botao").style.background = "#2B9720";
            setTimeout(() => {
                alert("É muito bom te ter aqui! Obrigado por testar.")            
            }, 1000);
        }else{
            document.getElementById("cor-botao").style.background = "#EB3336";
            setTimeout(() => {
                alert("Acho que você ainda não fez o cadastro. Clica botão ali em cima para se registrar.")            
            }, 1000);
        }
    }
}

function esqueciSenha(){
    alert("Opa, pera lá! Ainda não fiz isso. 😅")
}