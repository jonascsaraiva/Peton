// Entrada de informação 
const input1 = document.getElementById('input_1');
const input2 = document.getElementById('input_2');

const registerButton2 = document.getElementById('Register_2');
const registerButton3 = document.getElementById('Register_3');

// Aguarda recebimento de informação da entrada

registerButton2.addEventListener('click', function() {
    validarEmail(input1.value);
});

registerButton3.addEventListener('click', function() {
    validarEmail(input2.value);
});

// Validação de informação.
function validarEmail(email) {
    const balaoMensagem = document.getElementById('balao-mensagem');
    const dominiosPermitidos = ['hotmail.com', 'outlook.com', 'gmail.com']; // Adicione outros domínios conforme necessário

    if (email.trim() === '') {
        balaoMensagem.style.display = 'none';
    } else {
        const dominio = email.split('@')[1];
        if (dominiosPermitidos.includes(dominio)) {           
            mostrarBalao('Obrigado por entrar em nossa lista de espera!');
            input1.value = ''; 
            input2.value = ''; 
        } else {
            mostrarBalao('Por favor, insira um e-mail com domínio válido (hotmail.com, outlook.com, gmail.com, etc).');
        }
    }
}

// Saida de informação, Mostra o balão de agradecimento. 
function mostrarBalao(mensagem) {
    const balaoMensagem = document.getElementById('balao-mensagem');
    balaoMensagem.textContent = mensagem;
    balaoMensagem.style.display = 'block';
    // Esconde o balão
    setTimeout(function() {
        balaoMensagem.style.display = 'none';
    }, 4000); // 4 segundos
}