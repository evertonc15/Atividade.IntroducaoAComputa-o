function atividadeDoDia(diaDaSemana) {
    switch (diaDaSemana) {
      case "SEGUNDA":
        return "REUNIÃO";
      case "TERÇA":
        return "PALESTRA";
      case "QUARTA":
        return "WORKSHOP";
      case "QUINTA":
        return "TRABALHO REMOTO";
      case "SEXTA":
        return "AGENDAMENTO SEMANAL";
      case "SÁBADO":
        return "SHOPPING";
      case "DOMINGO":
        return "PRAIA";
      default:
        return "Dia desconhecido";
    }
  }
  
  const diaHoje = "SÁBADO";
  const atividade = atividadeDoDia(diaHoje);
  console.log(`Para ${diaHoje}, a atividade é: ${atividade}`);
