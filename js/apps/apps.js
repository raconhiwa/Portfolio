
const senha = document.querySelector(".senha");
const botao = document.querySelector(".gerar");
const copiar = document.querySelector(".copiar");

const char = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'a', 'b', 'c', 'd', 'e', 'f'];
const chars = '01235891abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const passwdLength = 6;




botao.addEventListener('click', () => { 
  let pswd = '';
  for (var i = 0; i <= passwdLength; i++) { 
    var rdnNum = Math.floor(Math.random() * chars.length);
    pswd += chars.substring(rdnNum, rdnNum + 1);
  }
  senha.textContent = pswd;
});
