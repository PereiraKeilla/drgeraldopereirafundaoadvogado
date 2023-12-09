var campo = document.getElementById('whats');
let dataAtual = new Date();
console.log(dataAtual.getHours())

if (dataAtual.getHours() > 18) {
    campo.innerHTML = '<a href="https://api.whatsapp.com/send?phone=5527998669847&text=Boa%20Noite!%20Obrigado%20pelo%20contato.%20Gostaria%20de%20marcar%20um%20hor%C3%A1rio?"><div><p><img src="img6.jpg" align="left" height="20%" width=15%"></p></div><br></a>'
} else if (dataAtual.getHours() > 12) {
    campo.innerHTML = '<a href="https://api.whatsapp.com/send?phone=5527998669847&text=Boa%20Tarde!%20Obrigado%20pelo%20contato.%20Gostaria%20de%20marcar%20um%20hor%C3%A1rio?"><div><p><img src="img6.jpg" align="left" height="20%" width=15%"></p></div><br></a>'
} else {
    campo.innerHTML = '<a href="https://api.whatsapp.com/send?phone=5527998669847&text=Bom%20dia!%20Obrigado%20pelo%20contato.%20Gostaria%20de%20marcar%20um%20hor%C3%A1rio?"><div><p><img src="img6.jpg" align="left" height="20%" width=15%"></p></div><br></a>'
}
