import { setupPhoneMask, showToast, copyHTMLToClipboard } from './utils.js';
import { generateSignatureTemplate } from './template.js';

// Mapeamento de elementos do DOM
const DOM = {
    segmento: document.getElementById('segmento'),
    form: document.getElementById('form-colaborador'),
    inputs: ['nome', 'cargo', 'setor', 'email', 'tel', 'isWhatsapp', 'empresa'],
    btnCopy: document.getElementById('btn-copy'),
    preview: document.getElementById('final-signature'),
    telInput: document.getElementById('tel')
};

const init = () => {
    // Eventos
    DOM.segmento.addEventListener('change', handleSegmentChange);
    DOM.inputs.forEach(id => document.getElementById(id).addEventListener('input', render));
    DOM.btnCopy.addEventListener('click', handleCopy);
    setupPhoneMask(DOM.telInput);

    // Service Worker
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js');
    }
};

const handleSegmentChange = (e) => {
    const isVisible = !!e.target.value;
    DOM.form.classList.toggle('hidden', !isVisible);
    if (isVisible) render();
};

const render = () => {
    const data = {
        nome: document.getElementById('nome').value.toUpperCase() || "NOME DO COLABORADOR",
        cargo: document.getElementById('cargo').value || "Seu Cargo",
        setor: document.getElementById('setor').value || "Seu Setor",
        empresa: document.getElementById('empresa').value || "Grupo EBD",
        email: document.getElementById('email').value || "email@ebdgrupo.com.br",
        tel: document.getElementById('tel').value || "(00) 00000-0000",
        isWa: document.getElementById('isWhatsapp').checked
    };

    DOM.preview.innerHTML = generateSignatureTemplate(data);
};

const handleCopy = async () => {
    const success = await copyHTMLToClipboard(DOM.preview);
    if (success) showToast();
};

init();