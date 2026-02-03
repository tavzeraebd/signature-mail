const segmentoSelect = document.getElementById('segmento');
const formColaborador = document.getElementById('form-colaborador');

segmentoSelect.addEventListener('change', (e) => {
    if (e.target.value) {
        formColaborador.classList.remove('hidden');
        render();
    } else {
        formColaborador.classList.add('hidden');
    }
});

// Adicione 'empresa' ao array de inputs no topo do arquivo
const inputs = ['nome', 'cargo', 'setor', 'email', 'tel', 'isWhatsapp', 'empresa'];
inputs.forEach(id => document.getElementById(id).addEventListener('input', render));

function render() {
    const nome = document.getElementById('nome').value.toUpperCase() || "NOME DO COLABORADOR";
    const cargo = document.getElementById('cargo').value || "Seu Cargo";
    const setor = document.getElementById('setor').value || "Seu Setor";
    const empresa = document.getElementById('empresa').value || "Grupo EBD"; // Valor padrão
    const email = document.getElementById('email').value || "email@ebdgrupo.com.br";
    const tel = document.getElementById('tel').value || "(00) 00000-0000";
    const isWa = document.getElementById('isWhatsapp').checked;
    const rawTel = tel.replace(/\D/g, '');

    const waIcon = isWa && rawTel.length >= 10 ?
        `<td style="vertical-align:middle; padding-left:5px; line-height:0;">
            <img src="https://cdn-icons-png.flaticon.com/32/733/733585.png" width="14" height="14" style="display:block; border:0;">
         </td>` : '';

    const html = `
    <table cellpadding="0" cellspacing="0" border="0" style="font-family:'Roboto', Arial, sans-serif; width:450px; border-collapse:collapse; background:white; text-align:left;">
        <tr>
            <td style="padding-right:20px; border-right:2px solid #ed3237; text-align:center; vertical-align:middle;" width="140">
                <img src="https://www.ebdgrupo.com.br/wp-content/uploads/2019/08/LOGO-EBD-correto-1024x673.png" width="110" style="display:block; margin:0 auto 12px auto; border:0;">
                <table cellpadding="0" cellspacing="0" border="0" align="center" style="margin: 0 auto;">
                    <tr>
                        <td style="padding: 0 4px;"><a href="https://br.linkedin.com/company/grupo-ebd"><img src="https://cdn-icons-png.flaticon.com/32/145/145807.png" width="16" height="16" style="display:block; border:0;"></a></td>
                        <td style="padding: 0 4px;"><a href="https://www.instagram.com/grupoebd"><img src="https://cdn-icons-png.flaticon.com/32/174/174855.png" width="16" height="16" style="display:block; border:0;"></a></td>
                        <td style="padding: 0 4px;"><a href="https://www.facebook.com/grupoebd"><img src="https://cdn-icons-png.flaticon.com/32/124/124010.png" width="16" height="16" style="display:block; border:0;"></a></td>
                    </tr>
                </table>
            </td>
            <td style="padding-left:20px; text-align:left; vertical-align:middle;">
                <span style="font-size:17px; font-weight:bold; color:#ed3237; display:block; margin:0; line-height:1.2;">${nome}</span>
                <span style="font-size:13px; color:#444; display:block; margin-bottom:10px;">${cargo} | <span style="color:#ed3237; font-weight:bold;">${setor}</span></span>
                
                <table cellpadding="0" cellspacing="0" border="0" style="font-size:12px; color:#666; text-align:left;">
                    <tr><td style="padding-bottom:3px;"><strong>E-mail:</strong></td><td style="padding-left:8px; padding-bottom:3px;">${email}</td></tr>
                    <tr>
                        <td style="vertical-align:middle;"><strong>Tel:</strong></td>
                        <td style="padding-left:8px; vertical-align:middle;">
                            <table cellpadding="0" cellspacing="0" border="0">
                                <tr><td style="font-size:12px; color:#666; vertical-align:middle; white-space:nowrap;">${tel}</td>${waIcon}</tr>
                            </table>
                        </td>
                    </tr>
                </table>
                <div style="margin-top:10px; font-size:12px; text-align:left;">
                    <span style="color:#333; font-weight:bold;">${empresa}</span>
                    <span style="color:#ed3237; font-weight:bold; margin: 0 4px;">|</span>
                    <a href="https://www.ebdgrupo.com.br" style="color:#ed3237; font-weight:bold; text-decoration:none;">www.ebdgrupo.com.br</a>
                </div>
            </td>
        </tr>
    </table>`;

    document.getElementById('final-signature').innerHTML = html;
}

// Botão Copiar
document.getElementById('btn-copy').addEventListener('click', async () => {
    const el = document.getElementById('final-signature');
    const range = document.createRange();
    range.selectNode(el);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    try {
        const blob = new Blob([el.innerHTML], { type: 'text/html' });
        const data = [new ClipboardItem({ 'text/html': blob })];
        await navigator.clipboard.write(data);
        showToast(); // Chama a notificação elegante
    } catch {
        document.execCommand('copy');
        showToast();
    }
    window.getSelection().removeAllRanges();
});

// Função para exibir o Toast com animação
function showToast() {
    const toast = document.getElementById('toast');

    // Mostra o toast (entra na tela)
    toast.classList.remove('translate-y-[-150%]', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');

    // Esconde após 3 segundos
    setTimeout(() => {
        toast.classList.remove('translate-y-0', 'opacity-100');
        toast.classList.add('translate-y-[-150%]', 'opacity-0');
    }, 3000);
}

// Máscara Tel
document.getElementById('tel').addEventListener('input', (e) => {
    let v = e.target.value.replace(/\D/g, "");
    v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
    v = v.replace(/(\d)(\d{4})$/, "$1-$2");
    e.target.value = v;
});

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js');
}