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

document.querySelectorAll('a[href^="#"]', 'button').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        if (targetId === 'secao-inicio') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const targetElement = document.getElementById(targetId);
            if(targetElement){
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

document.querySelector('.btn-enviar input[type="button"]').addEventListener('click', function() {
    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const celularInput = document.getElementById('celular');
    const mensagemInput = document.getElementById('mensagem');

    const nomeError = document.getElementById('nome-error');
    const emailError = document.getElementById('email-error');
    const celularError = document.getElementById('celular-error');
    const mensagemError = document.getElementById('mensagem-error');

    let hasError = false;

    nomeError.style.display = 'none';
    emailError.style.display = 'none';
    celularError.style.display = 'none';
    mensagemError.style.display = 'none';

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

    if (hasError) {
        return;
    }
    
    const nome = nomeInput.value;
    const email = emailInput.value;
    const celular = celularInput.value;
    const mensagem = mensagemInput.value;

    const assunto = `Contato do portfólio - ${nome}`;
    const corpo = `👤 Nome: ${nome}\r\n📧 Email: ${email}\r\n📱 Celular: ${celular}\r\n💬 Mensagem: ${mensagem}`;

    window.location.href = `mailto:gabrielcoelho20003@gmail.com?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;
    
    nomeInput.value = '';
    emailInput.value = '';
    celularInput.value = '';
    mensagemInput.value = '';
});

// Máscara para o campo celular
const celularInput = document.getElementById('celular');
if(celularInput) {
    celularInput.addEventListener('input', () => {
        let celular = celularInput.value.replace(/\D/g, '');
        if (celular.length > 11) celular = celular.slice(0, 11);
        
        if (celular.length > 10) {
            celular = celular.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
        } else if (celular.length > 5) {
            celular = celular.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
        } else if (celular.length > 2) {
            celular = celular.replace(/^(\d{2})(\d*)/, '($1) $2');
        } else {
            celular = celular.replace(/^(\d*)/, '($1');
        }
        celularInput.value = celular;
    });
}


const btnBackToTop = document.getElementById('btn-back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        btnBackToTop.style.display = 'block';
    } else {
        btnBackToTop.style.display = 'none';
    }
});

btnBackToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


// ==============================================
//          LÓGICA DO MODO CLARO / ESCURO
// ==============================================
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const body = document.body;
const themeIcon = themeToggleBtn.querySelector('i');

// Função para aplicar o tema com base no localStorage
const applyTheme = (theme) => {
    if (theme === 'light') {
        body.classList.add('light-mode');
        themeIcon.classList.remove('bi-sun-fill');
        themeIcon.classList.add('bi-moon-fill');
    } else {
        body.classList.remove('light-mode');
        themeIcon.classList.remove('bi-moon-fill');
        themeIcon.classList.add('bi-sun-fill');
    }
};

// Carregar o tema salvo ao iniciar a página
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    applyTheme(savedTheme);
});

// Evento de clique no botão para alternar o tema
themeToggleBtn.addEventListener('click', () => {
    let currentTheme = 'dark';
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark');
        currentTheme = 'dark';
    } else {
        body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
        currentTheme = 'light';
    }
    applyTheme(currentTheme);
});