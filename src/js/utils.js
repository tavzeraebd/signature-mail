export const setupPhoneMask = (input) => {
    input.addEventListener('input', (e) => {
        let v = e.target.value.replace(/\D/g, "");
        v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
        v = v.replace(/(\d)(\d{4})$/, "$1-$2");
        e.target.value = v;
    });
};

export const showToast = () => {
    const toast = document.getElementById('toast');
    if (!toast) return;
    
    // Reset de estado para permitir múltiplos cliques
    toast.classList.remove('translate-y-[-150%]', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');
    
    setTimeout(() => {
        toast.classList.remove('translate-y-0', 'opacity-100');
        toast.classList.add('translate-y-[-150%]', 'opacity-0');
    }, 3000);
};

export const copyHTMLToClipboard = async (element) => {
    try {
        // Tenta usar a API moderna de Clipboard primeiro
        const blob = new Blob([element.innerHTML], { type: 'text/html' });
        const data = [new ClipboardItem({ 'text/html': blob })];
        await navigator.clipboard.write(data);
        return true;
    } catch (err) {
        // Fallback para seleção de texto manual
        const range = document.createRange();
        range.selectNode(element);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        const success = document.execCommand('copy');
        window.getSelection().removeAllRanges();
        return success;
    }
};