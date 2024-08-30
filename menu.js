let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>(
    menu.classList.add('abrir-menu')
))

menu.addEventListener('click', ()=>(
    menu.classList.remove('abrir-menu')
))

overlay.addEventListener('click', ()=>(
    menu.classList.remove('abrir-menu')
))

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        if (targetId === 'secao-inicio') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

document.querySelector('.btn-enviar input[type="button"]').addEventListener('click', function() {
    // Captura os campos do formulário
    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const celularInput = document.getElementById('celular');
    const mensagemInput = document.getElementById('mensagem');

    // Captura as mensagens de erro
    const nomeError = document.getElementById('nome-error');
    const emailError = document.getElementById('email-error');
    const celularError = document.getElementById('celular-error');
    const mensagemError = document.getElementById('mensagem-error');

    // Flag para verificar se há erros
    let hasError = false;

    // Limpa as mensagens de erro
    nomeError.style.display = 'none';
    emailError.style.display = 'none';
    celularError.style.display = 'none';
    mensagemError.style.display = 'none';

    // Validação dos campos
    if (nomeInput.value.trim() === '') {
        nomeError.textContent = 'Preencha o campo nome.';
        nomeError.style.display = 'inline';
        hasError = true;
    }

    if (emailInput.value.trim() === '') {
        emailError.textContent = 'Preencha o campo e-mail.';
        emailError.style.display = 'inline';
        hasError = true;
    }

    if (mensagemInput.value.trim() === '') {
        mensagemError.textContent = 'Preencha o campo mensagem.';
        mensagemError.style.display = 'inline';
        hasError = true;
    }

    // Se houver erro, não prosseguir
    if (hasError) {
        return;
    }

    // Se não houver erros, continue com o envio
    const nome = nomeInput.value;
    const email = emailInput.value;
    const celular = celularInput.value;
    const mensagem = mensagemInput.value;

    const assunto = `Contato do portfólio - ${nome}`;
    const corpo = `👤 Nome: ${nome}\r\n📧 Email: ${email}\r\n📱 Celular: ${celular}\r\n💬 Mensagem: ${mensagem}`;

    window.location.href = `mailto:gabrielcoelho20003@gmail.com?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;

    // Limpa os campos do formulário
    nomeInput.value = '';
    emailInput.value = '';
    celularInput.value = '';
    mensagemInput.value = '';
});
