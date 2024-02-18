function copiarValor(elementoId) {
  var elemento = document.getElementById(elementoId);
  elemento.select();
  document.execCommand('copy');
}
