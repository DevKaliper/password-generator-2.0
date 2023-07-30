const bank = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;':,.<>/?";
//exec arroja un array con los resultados. La primera posicion es el string completo con ambas expresiones, luego las siguientes posiciones del array con las expresiones dadas en parentesis. Por eso coloqué el "_" para que no me muestre el string completo, sino solo las expresiones que me interesan.
const [letras] = /(\w[a-z]+)/.exec(bank);

const isUppercase = (caracter) => {
  if (letras.includes(caracter)) {
    let up = Math.floor(Math.random() * 2); // el dos no será incluido, solo tendremos 0 y 1 como resultado
    if (up == 1) {
      let choose = caracter.toUpperCase();
      return choose;
    }
  }

  return caracter;
};
const getRandom = (range) => {
  //optener un número aletorio dentro del rango
  return Math.floor(Math.random() * range);
};

export const generatePassword = (length, avoid, special) => {
  let pass = "";

  // siempre que estén seleccionadas las dos opciones
  if (avoid && special) {
    const range = bank.length; // +1 porque luego en el random al usarlo va a contrar el 0
    for (let x = 0; x < length; x++) {
      let choose = getRandom(range);
      let char = bank.charAt(choose);

      if (pass.includes(char)) {
        //para que ningún character sea igual
        x--;
        continue;
      }

      char = isUppercase(char); // para que sea aleatorio la mayuscula
      pass += char;
    }
    return pass;
  }

  if (special && !avoid) {
    // si quieres que se repitan las letras
    const range = bank.length; // +1 porque luego en el random al usarlo va a contrar el 0
    for (let x = 0; x < length; x++) {
      let choose = getRandom(range);
      let char = bank.charAt(choose);
      char = isUppercase(char); // para que sea aleatorio la mayuscula
      pass += char;
    }
    return pass;
  }

  if (avoid && !special) {
    // si no quiere caracteres especiales
    let pass = "";
    const { index } = /\W/.exec(bank); // esto encuentra el indice donde es un caracter especial
    const newBank = bank.slice(0, index); //esto elimina los caracteres especiales del banco no muta el string

    const range = newBank.length; // +1 porque luego en el random al usarlo va a contrar el 0
    for (let x = 0; x < length; x++) {
      let choose = getRandom(range);
      let char = newBank.charAt(choose);
      if (pass.includes(char)) {
        //para que ningún character sea igual
        x--;
        continue;
      }
      char = isUppercase(char); // para que sea aleatorio la mayuscula
      pass += char;
    }
    return pass;
  }
  return ""
};
