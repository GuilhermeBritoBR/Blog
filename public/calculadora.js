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