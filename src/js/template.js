export const generateSignatureTemplate = (data) => {
    const rawTel = data.tel.replace(/\D/g, '');
    
    // Link do WhatsApp com saudação personalizada
    const whatsappUrl = `https://wa.me/55${rawTel}?text=Olá,%20falo%20com%20${encodeURIComponent(data.nome)}?`;

    // Ícone do WhatsApp clicável
    const waIcon = data.isWa && rawTel.length >= 10 ?
        `<td style="vertical-align:middle; padding-left:5px; line-height:0;">
            <a href="${whatsappUrl}" target="_blank" style="text-decoration:none;">
                <img src="https://cdn-icons-png.flaticon.com/32/733/733585.png" width="14" height="14" style="display:block; border:0;">
            </a>
         </td>` : '';

    return `
    <table cellpadding="0" cellspacing="0" border="0" style="font-family:'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif; width:450px; border-collapse:collapse; background:white; text-align:left;">
        <tr>
            <td style="padding-right:20px; border-right:2px solid #ed3237; text-align:center; vertical-align:middle;" width="140">
                <img src="https://www.ebdgrupo.com.br/wp-content/uploads/2019/08/LOGO-EBD-correto-1024x673.png" width="110" style="display:block; margin:0 auto 12px auto; border:0;">
                <table cellpadding="0" cellspacing="0" border="0" align="center" style="margin: 0 auto;">
                    <tr>
                        <td style="padding: 0 4px;"><a href="https://br.linkedin.com/company/grupo-ebd" target="_blank"><img src="https://cdn-icons-png.flaticon.com/32/145/145807.png" width="16" height="16" style="display:block; border:0;"></a></td>
                        <td style="padding: 0 4px;"><a href="https://www.instagram.com/grupoebd" target="_blank"><img src="https://cdn-icons-png.flaticon.com/32/174/174855.png" width="16" height="16" style="display:block; border:0;"></a></td>
                        <td style="padding: 0 4px;"><a href="https://www.facebook.com/grupoebd" target="_blank"><img src="https://cdn-icons-png.flaticon.com/32/124/124010.png" width="16" height="16" style="display:block; border:0;"></a></td>
                    </tr>
                </table>
            </td>
            <td style="padding-left:20px; text-align:left; vertical-align:middle;">
                <span style="font-size:17px; font-weight:bold; color:#ed3237; display:block; margin:0; line-height:1.2; font-family:'Roboto', sans-serif;">${data.nome}</span>
                <span style="font-size:13px; color:#444; display:block; margin-bottom:10px; font-family:'Roboto', sans-serif;">${data.cargo} | <span style="color:#ed3237; font-weight:bold;">${data.setor}</span></span>
                <table cellpadding="0" cellspacing="0" border="0" style="font-size:12px; color:#666; text-align:left; font-family:'Roboto', sans-serif;">
                    <tr><td style="padding-bottom:3px;"><strong>E-mail:</strong></td><td style="padding-left:8px; padding-bottom:3px;">${data.email}</td></tr>
                    <tr>
                        <td style="vertical-align:middle;"><strong>Tel:</strong></td>
                        <td style="padding-left:8px; vertical-align:middle;">
                            <table cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td style="font-size:12px; color:#666; vertical-align:middle; white-space:nowrap; font-family:'Roboto', sans-serif;">
                                        ${data.isWa ? `<a href="${whatsappUrl}" target="_blank" style="color:#666; text-decoration:none;">${data.tel}</a>` : data.tel}
                                    </td>
                                    ${waIcon}
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
                <div style="margin-top:10px; font-size:12px; text-align:left; font-family:'Roboto', sans-serif;">
                    <span style="color:#333; font-weight:bold;">${data.empresa}</span>
                    <span style="color:#ed3237; font-weight:bold; margin: 0 4px;">|</span>
                    <a href="https://www.ebdgrupo.com.br" target="_blank" style="color:#ed3237; font-weight:bold; text-decoration:none;">www.ebdgrupo.com.br</a>
                </div>
            </td>
        </tr>
    </table>`;
};