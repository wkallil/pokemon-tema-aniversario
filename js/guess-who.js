const pokemon = [
    { nome: "Dentista", alternativas: ["tabitha dentista", "dentista"], urlSilhueta: "./img/Tabitha/silhueta-dentista.jpg", urlNormal: "./img/tabitha-1.jpg" },
    { nome: "Vitoriosa", alternativas: ["Tabitha vitória", "vitoria","vitória", "vitoriosa", "tabitha vitoriosa"], urlSilhueta: "./img/Tabitha/silhueta-vitoriosa.jpg", urlNormal: "./img/Tabitha/IMG-20231031-WA0008.jpg" },
    { nome: "Ahri", alternativas: ["Tabitha Ahri", "Ahri"], urlSilhueta: "./img/Tabitha/silhueta-ahri.jpg", urlNormal: "./img/Tabitha/IMG-20150909-WA0005.jpg" },
    { nome: "Modelo", alternativas: ["Tabitha Modelo", "modelo"], urlSilhueta: "./img/Tabitha/silheta-modelo.jpg", urlNormal: "./img/Tabitha/IMG-20231031-WA0013.jpg" },
    // Add more objects as needed
]

var pokeMudar = null;

novoJogo();

function novoJogo() {
    pokeMudar = pokemon[Math.floor(Math.random() * pokemon.length)];
    console.log(pokeMudar);
    document.getElementById("imagem").src = pokeMudar.urlSilhueta;
    document.getElementById("resultado").innerHTML = "<br>";
    document.getElementById("opcao").value = "";
}

function descobrir() {
    var nomeDigitado = document.getElementById("opcao").value;
    var nomeLowerCase = nomeDigitado.toLowerCase();

    if (pokeMudar.alternativas.some(alt => alt.toLowerCase() === nomeLowerCase)) {
        document.getElementById("resultado").innerHTML = pokeMudar.nome + "!!";
        document.getElementById("imagem").src = pokeMudar.urlNormal;
    } else if (nomeDigitado == "") {
        document.getElementById("resultado").innerHTML = "Digite algo";
    } else {
        document.getElementById("resultado").innerHTML = "Não é esse!";
    }
}