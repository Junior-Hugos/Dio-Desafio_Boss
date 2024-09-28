let nomeUsuario = "Patolino";
let xpUsuario = 7.98;

/*
-> Existe a opção mais básica conforme está no comentario abaixo usando a estrutura (IF) e também
 há a possibilidade de colocar uma função com um Switch que tem o mesmo resultado lógico. <-
*/

function nivelUsuario(xp) {
  if (xp >= 10.001) return "Radiante";
  if (xp >= 9.001) return "Imortal";
  if (xp >= 8.001) return "Ascendente";
  if (xp >= 7.001) return "Platina";
  if (xp >= 5.001) return "Ouro";
  if (xp >= 2.001) return "Prata";
  if (xp >= 1.001) return "Bronze";
  return "Ferro";
}

let nivel = nivelUsuario(xpUsuario);

switch (nivel) {
  case "Radiante":
    console.log(
      `O Herói de nome ${nomeUsuario} está no nível Radiante com o XP de ${xpUsuario.toFixed(
        3
      )}`
    );
    break;
  case "Imortal":
    console.log(
      `O Herói de nome ${nomeUsuario} está no nível Imortal com o XP de ${xpUsuario.toFixed(
        3
      )}`
    );
    break;
  case "Ascendente":
    console.log(
      `O Herói de nome ${nomeUsuario} está no nível Ascendente com o XP de ${xpUsuario.toFixed(
        3
      )}`
    );
    break;
  case "Platina":
    console.log(
      `O Herói de nome ${nomeUsuario} está no nível Platina com o XP de ${xpUsuario.toFixed(
        3
      )}`
    );
    break;
  case "Ouro":
    console.log(
      `O Herói de nome ${nomeUsuario} está no nível Ouro com o XP de ${xpUsuario.toFixed(
        3
      )}`
    );
    break;
  case "Prata":
    console.log(
      `O Herói de nome ${nomeUsuario} está no nível Prata com o XP de ${xpUsuario.toFixed(
        3
      )}`
    );
    break;
  case "Bronze":
    console.log(
      `O Herói de nome ${nomeUsuario} está no nível Bronze com o XP de ${xpUsuario.toFixed(
        3
      )}`
    );
    break;
  default:
    console.log(
      `O Herói de nome ${nomeUsuario} está no nível Ferro com o XP de ${xpUsuario.toFixed(
        3
      )}`
    );
}

/*
if (xpUsuario >= 10.001) {
  console.log(
    `O Herói de nome ${nomeUsuario} está no nível Radiante com o XP de ${xpUsuario.toFixed(
      3
    )}`
  );
} else if (xpUsuario >= 9.001 && xpUsuario < 10.001) {
  console.log(
    `O Herói de nome ${nomeUsuario} está no nivel Imortal com o XP de ${xpUsuario.toFixed(
      3
    )}`
  );
} else if (xpUsuario >= 8.001 && xpUsuario < 9.001) {
  console.log(
    `O Herói de nome ${nomeUsuario} está no nivel Ascendente com o XP de ${xpUsuario.toFixed(
      3
    )}`
  );
} else if (xpUsuario >= 7.001 && xpUsuario < 8.001) {
  console.log(
    `O Herói de nome ${nomeUsuario} está no nivel Platina com o XP de ${xpUsuario.toFixed(
      3
    )}`
  );
} else if (xpUsuario >= 5.001 && xpUsuario < 7.001) {
  console.log(
    `O Herói de nome ${nomeUsuario} está no nivel Ouro com o XP de ${xpUsuario.toFixed(
      3
    )}`
  );
} else if (xpUsuario >= 2.001 && xpUsuario < 5.001) {
  console.log(
    `O Herói de nome ${nomeUsuario} está no nivel Prata com o XP de ${xpUsuario.toFixed(
      3
    )}`
  );
} else if (xpUsuario >= 1.001 && xpUsuario < 2.001) {
  console.log(
    `O Herói de nome ${nomeUsuario} está no nivel Bronze com o XP de ${xpUsuario.toFixed(
      3
    )}`
  );
} else {
  console.log(
    `O Herói de nome ${nomeUsuario} está no nivel Ferro com o XP de ${xpUsuario.toFixed(
      3
    )}`
  );
}
*/
