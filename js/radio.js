function moura() {
    var qual = prompt("Qual seu Nome?")
    const data = new Date()
    const hora = data.getHours();
    var img = document.getElementById("foto")
    const res = document.getElementById("mostra")
    if (qual == null) {
        qual = 'Visitante'
    }
    if (hora >= 7 && hora < 12) {
        res.innerHTML = `Bom dia,Seja Bem Vindo a nossa rádio Torre Forte Jesus Te ama ${qual}`
        img.src = './img/Fundo de Tela para Celular Aquarela Mármore Minimalista Aesthetic Rosa e Br_20250228_091752_0000.png'
    } else if (hora < 18) {
        img.src = '../img/Fundo de Tela para Celular Aquarela Mármore Minimalista Aesthetic Rosa e Br_20250228_091752_0000.png';
        res.innerHTML = `Boa Tarde,Seja Bem Vindo a nossa rádio Torre Forte Jesus Te ama ${qual}`
    } else if (hora < 23) {
        img.src = './img/Fundo de Tela para Celular Aquarela Mármore Minimalista Aesthetic Rosa e Br_20250228_091752_0000.png'
        res.innerHTML = `Boa Noite,Seja Bem Vindo a nossa rádio Torre Forte Jesus Te Ama ${qual}`
    }
}
