function moura() {
    var qual = prompt("Qual o seu Nome?")
    const data = new Date()
    const hora = data.getHours();
    var img = document.getElementById("foto")
    const res = document.getElementById("mostra")
    if (qual == null) {
        qual = 'Visitante'
    }
    if (hora >= 7 && hora < 12) {
        res.innerHTML = `olá Bom dia,Seja Bem Vindo a nossa Webrádio Torre Forte, Jesus Te ama e certamente tem uma palavra e um louvor para o seu coração ${qual}`
        img.src = './img/1000448259-removebg-preview (2).png'
    } else if (hora < 18) {
        img.src = '../img/1000448259-removebg-preview (2).png';
        res.innerHTML = `Olá Boa Tarde,Seja Bem Vindo a nossa rádio Torre Forte Jesus Te ama e certamente tem uma palavra e um louvor para o seu coração ${qual}`
    } else if (hora < 23) {
        img.src = './img/1000448259-removebg-preview (2).png'
        res.innerHTML = `Olá Boa Noite,Seja Bem Vindo a nossa rádio Torre Forte Jesus Te Ama e certamente tem uma palavra e um louvor para o seu coração ${qual}`
    }
}
