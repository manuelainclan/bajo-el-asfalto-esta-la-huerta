function get(variable, valorPorDefecto) {
  if(localStorage.getItem(variable) === null){
    return valorPorDefecto;
  }
  else {
    return JSON.parse(localStorage.getItem(variable));
  }
}

function set(variable, valor) {
  localStorage.setItem(variable, JSON.stringify(valor));
}

const ls = {get, set};
export default ls;