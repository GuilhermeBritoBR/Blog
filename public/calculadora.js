 // Função para preencher as opções do select
 function popularSelect() {
  var select = document.getElementById("pace_corrida");

  // Define o horário inicial como 2:30
  var hora = 2;
  var minutos = 30;

  // Loop para adicionar todas as opções até 8:00
  while (!(hora === 8 && minutos === 0)) {
    // Adiciona um zero à esquerda se os minutos forem menores que 10
    var minutosStr = minutos < 10 ? "0" + minutos : minutos;

    // Cria a opção e define seu valor e texto
    var option = document.createElement("option");
    option.value = hora + ":" + minutosStr;
    option.text = hora + ":" + minutosStr;

    // Adiciona a opção ao select
    select.add(option);

    // Incrementa os minutos
    minutos++;

    // Se os minutos chegarem a 60, incrementa a hora e reinicia os minutos
    if (minutos === 60) {
      minutos = 0;
      hora++;
    }

    // Se a hora chegar a 24, reinicia para 1
    if (hora === 24) {
      hora = 1;
    }
  }
}

// Chama a função para popular o select quando a página é carregada
window.onload = popularSelect;

 // Função para calcular tempo de corrida em minutos e ritmo por quilômetro
 function calcularTempo() {
  // Obter o valor do ritmo em minutos por quilômetro do seletor
  var ritmoSelecionado = document.getElementById("pace_corrida").value;
  console.log(ritmoSelecionado);
  var ritmoMinutos = parseInt(ritmoSelecionado.split(':')[0]) * 60 + parseInt(ritmoSelecionado.split(':')[0]);
  console.log(ritmoMinutos);
  // Obter o valor da distância em quilômetros do campo de entrada
  var km = parseFloat(document.getElementById("distancia-km").value);

  // Obter o valor da distância em metros do campo de entrada
  var metros = parseFloat(document.getElementById("distancia-metros").value);

  // Calcular a distância total em quilômetros
  var distanciaTotal = km*1000 + (metros );

  // Calcular o tempo total de corrida em minutos
  var tempoTotalMinutos = (distanciaTotal / ritmoMinutos);


  // Calcular o ritmo por quilômetro
  var ritmoPorKm = (tempoTotalMinutos / distanciaTotal)*360;

  var tempoTotalMinutos2 = (distanciaTotal/1000) *ritmoPorKm;


  // Exibir o tempo total de corrida em minutos e o ritmo por quilômetro
  alert("Tempo total de corrida: " + tempoTotalMinutos2.toFixed(2) + " minutos\nRitmo por quilômetro: " + ritmoPorKm.toFixed(2) + " minutos/km");
}
