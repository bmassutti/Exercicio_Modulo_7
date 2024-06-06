const form = document.getElementById('form-numeros');
const campoB = document.getElementById('numeroB');
const campoA = document.getElementById('numeroA');

function setNone() {
    document.querySelector('.success-message').style.display = 'none';
    document.querySelector('.error-message').style.display = 'none';
}

form.addEventListener ('submit', function(e) { 
    e.preventDefault();

    const containerMensagemDeSucesso = document.querySelector('.success-message');
    const containerMensagemErro = document.querySelector('.error-message');

    if (campoB.value > campoA.value) { 
        containerMensagemDeSucesso.innerHTML = 'Validação concluída com sucesso!';
        containerMensagemDeSucesso.style.display = 'block';
        setTimeout(setNone, 3000);
        campoA.value = ' ';
        campoB.value = ' ';
    } else { 
        containerMensagemErro.innerHTML = 'Validação retornou erro!';
        containerMensagemErro.style.display = 'block';
        setTimeout(setNone, 3000);
        campoB.classList.add("input-error");
    }

})

campoB.addEventListener ('input', function() {
    if (campoB.value > campoA.value) {campoB.classList.remove("input-error");
    } else {
        campoB.classList.add("input-error");
    }
    
})