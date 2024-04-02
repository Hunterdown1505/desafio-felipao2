
function calcularNivel(vitorias, derrotas){
    let saldo = vitorias - derrotas
    let nivel

        if(vitorias <=10){
            nivel = "Ferro"
        }else if(vitorias >=11 && vitorias<=20){
            nivel = "Bronze"
        }else if(vitorias >= 21 && vitorias<= 50){
            nivel = "Prata"
        }else if (vitorias >= 51 && vitorias<=80){
            nivel = "Ouro" 
        }else if (vitorias >=81 && vitorias<=90){
            nivel = "Diamante"
        }else if (vitorias >=91 && vitorias<=100){
            nivel = "Lendario"
        }else{
            nivel = "Imortal"
        }

        return {saldo , nivel}
    }

    let resultado = calcularNivel(90, 30)
    console.log("O Herói tem um saldo de " + resultado.saldo + " vitórias e está no nível " + resultado.nivel)