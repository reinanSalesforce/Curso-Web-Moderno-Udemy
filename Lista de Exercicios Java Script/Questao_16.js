function checarAnoBissexto(ano) {
  const divisivelPorQuatro = ano % 4 == 0;
  const divisivelPorCem = ano % 100 == 0;
  const divisivelPorQuatrocentos = ano % 400 == 0;
  return console.log((divisivelPorQuatro && !divisivelPorCem) || divisivelPorQuatrocentos);
}

checarAnoBissexto(2100);
