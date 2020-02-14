

/*
funcao que CALCULA A MEDIA DE TODOS OS ALUNOS BASEADO NA N1,N2 E N3
RETORNANDO A SITUACAO (APROVADO/REPROVADO)
*/
function calcularMedia() {
    var n1 = document.getElementsByClassName("n1");
    var n2 = document.getElementsByClassName("n2");
    var n3 = document.getElementsByClassName("n3");
    var media = document.getElementsByClassName("media");
    var mediaFinal = [];
    var situacao = document.getElementsByClassName("situacao");
    for (var i = 0; i < media.length; i++) {
        mediaFinal[i] = (Number(n1[i].textContent) + Number(n2[i].textContent) + Number(n3[i].textContent)) / 3;
        media[i].innerHTML = mediaFinal[i].toFixed(2);
        if (mediaFinal[i] >= 7) {
            situacao[i].innerHTML = 'Aprovado!';
            situacao[i].style.color = 'green';
        } else {
            situacao[i].innerHTML = 'Reprovado';
            situacao[i].style.color = 'red';
        }

    }
    ativaBotao();
};

window.onload = calcularMedia();




/*
funcao que ADICIONA NOVA LINHA DE ALUNOS, JA ENTREGANDO OS VALORES CALCULADOS 
NA FUNCAO CALCULAMEDIA
*/
function adicionarAluno() {

    if (validarNome() == false || validarNota() == false) {
        return null;
    } else {

        //pegando o nome escolhido pelo usuario, 
        var inputNome = document.getElementById("nomeForm").value || "alunoSemNome";
        var inputN1 = document.getElementById("n1Form").value || 0;
        var inputN2 = document.getElementById("n2Form").value || 0;
        var inputN3 = document.getElementById("n3Form").value || 0;
        var tabela = document.getElementById("corpotable");


        // criando elemento tr 
        var trNova = document.createElement("tr");

        //criando elementos da TD
        var nome = document.createElement("td");
        var n1 = document.createElement("td");
        var n2 = document.createElement("td");
        var n3 = document.createElement("td");
        var media = document.createElement("td");
        var situacao = document.createElement("td");
        var tdBotao = document.createElement("td");

        //criando botao de exclusao
        var botaoRemover = document.createElement('button');


        // criando os elementos P para inserir na TD
        var pNome = document.createElement("p");
        var p1 = document.createElement("p");
        var p2 = document.createElement("p");
        var p3 = document.createElement("p");
        var pMedia = document.createElement("p");
        var pSituacao = document.createElement("p");

        // adicionando classe para calcular a media corretamente 
        p1.className = "n1";
        p2.className = "n2";
        p3.className = "n3";
        pMedia.className = "media";
        pSituacao.className = "situacao";
        trNova.className = "tr";
        botaoRemover.className = "botao-remover btn btn-outline-danger btn-sm";
        botaoRemover.type = "submit";
        botaoRemover.id = "botaoRemover";

        // adicionando valores como filhos dos seus elementos HTML
        pNome.appendChild(document.createTextNode(inputNome));
        p1.appendChild(document.createTextNode(inputN1));
        p2.appendChild(document.createTextNode(inputN2));
        p3.appendChild(document.createTextNode(inputN3));
        pMedia.appendChild(document.createTextNode("Pendente"));
        pSituacao.appendChild(document.createTextNode("Pendente"));
        botaoRemover.appendChild(document.createTextNode("X"));


        // adicionando como filho da TR os TDs de cada linha, e dentro desses TDs adicionando os P
        // com os valores passados acima

        nome.appendChild(pNome);
        n1.appendChild(p1);
        n2.appendChild(p2);
        n3.appendChild(p3);
        media.appendChild(pMedia);
        situacao.appendChild(pSituacao);
        tdBotao.appendChild(botaoRemover);


        trNova.appendChild(nome);
        trNova.appendChild(n1);
        trNova.appendChild(n2);
        trNova.appendChild(n3);
        trNova.appendChild(media);
        trNova.appendChild(situacao);
        trNova.appendChild(tdBotao);

        // adicionando TR como filho da Tbody 
        tabela.appendChild(trNova);

        // chamanndo funcao q calcula media
        calcularMedia();
    }
}

function validarNome() {
    var nome = document.getElementById("nomeForm").value;
    if (nome == "" || nome.length < 1 || nome == null) {
        alert("Digite um NOME, por favor.");
        return false;
    }
    return true;
}
function validarNota() {
    var n1 = document.getElementById("n1Form").value;
    var n2 = document.getElementById("n2Form").value;
    var n3 = document.getElementById("n3Form").value;
    if (n1 == "" || n1.length < 1 || n1 == null) {
        alert("Digite a Nota 1, por favor.")
        return false;
    }
    if (n2 == "" || n2.length < 1 || n2 == null) {
        alert("Digite a Nota 2, por favor.")
        return false;
    }
    if (n3 == "" || n3.length < 1 || n3 == null) {
        alert("Digite a Nota 3, por favor.")
        return false;
    }
    return true;

}

function mudaCor(event) {
    if (event.target.value != null) {
        var inputCor = document.getElementById('corForm').value;
        document.body.style.backgroundColor = inputCor;
    }

}

function ativaBotao() {
    var getBotao = document.querySelectorAll("#botaoRemover");
    for (let index = 0; index < getBotao.length; index++) {
        getBotao[index].addEventListener("click", function () {
            this.parentNode.parentNode.remove();
        }, false)

    }
}
