function jogo()
{
    var x1 = document.getElementById("cx1").value;
    var x2 = document.getElementById("cx2").value;
    var x3 = document.getElementById("cx3").value;
    var x4 = document.getElementById("cx4").value;
    var x5 = document.getElementById("cx5").value;
    var x6 = document.getElementById("cx6").value;
    var x7 = document.getElementById("cx7").value;
    var x8 = document.getElementById("cx8").value;
    var x9 = document.getElementById("cx9").value;

    if(x1 == "0" && x5 == "0" && x9 == "0")
    {
        alert("Jogador 1 ganhou");
    }
    else if(x1 == "x" && x5 == "x" && x9 == "x")
    {
        alert("Jogador 2 ganhou");
    }
    else if(x3 == "0" && x5 == "0" && x7 == "0")
    {
        alert("Jogador 1 ganhou");
    }
    else if(x3 == "x" && x5 == "x" && x7 == "x")
    {
        alert("Jogador 2 ganhou");
    }
    else if(x1 == "0" && x2 == "0" && x3 == "0")
    {
        alert("Jogador 1 ganhou");
    }
    else if(x1 == "x" && x2 == "x" && x3 == "x")
    {
        alert("Jogador 2 ganhou");
    }
    else if(x4 == "0" && x5 == "0" && x6 == "0")
    {
        alert("Jogador 1 ganhou");
    }
    else if(x4 == "x" && x5 == "x" && x6 == "x")
    {
        alert("Jogador 2 ganhou");
    }
    else if(x7 == "0" && x8 == "0" && x9 == "0")
    {
        alert("Jogador 1 ganhou");
    }
    else if(x7 == "x" && x8 == "x" && x9 == "x")
    {
        alert("Jogador 2 ganhou");
    }
    else if(x1 == "0" && x4 == "0" && x7 == "0")
    {
        alert("Jogador 1 ganhou");
    }
    else if(x1 == "x" && x4 == "x" && x7 == "x")
    {
        alert("Jogador 2 ganhou");
    }
    else if(x2 == "0" && x5 == "0" && x8 == "0")
    {
        alert("Jogador 1 ganhou");
    }
    else if(x2 == "x" && x5 == "x" && x8 == "x")
    {
        alert("Jogador 2 ganhou");
    }
    else if(x3 == "0" && x6 == "0" && x9 == "0")
    {
        alert("Jogador 1 ganhou");
    }
    else if(x3 == "x" && x6 == "x" && x9 == "x")
    {
        alert("Jogador 2 ganhou");
    }
    else
    {
        alert("VELHA!!!");
    }
}
