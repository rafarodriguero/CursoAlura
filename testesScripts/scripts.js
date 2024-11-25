/*const hoje = new Date();
console.log("Data Brasil " + hoje.toLocaleDateString('pt-BR')); // Exemplo de saída: "28/09/2023"
console.log("Data EUA " + hoje.toLocaleDateString('en-US')); // Exemplo de saída: "09/28/2023"


const hoje1 = new Date();
console.log("Data completa Brasil " + hoje.toLocaleDateString('pt-BR', {
  weekday: 'long', 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric'
}));
// Exemplo de saída: "quinta-feira, 28 de setembro de 2023"

console.log("Data completa EUA " + hoje.toLocaleDateString('en-US', {
  weekday: 'short', 
  year: '2-digit', 
  month: '2-digit', 
  day: '2-digit'
}));
// Exemplo de saída: "Thu, 09/28/23"


const agora = new Date();
console.log("Hora Brasil " + agora.toLocaleTimeString('pt-BR')); // Exemplo de saída: "15:45:30"
console.log("Hora EUA " + agora.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })); // Exemplo de saída: "03:45 PM"


const agora1 = new Date();

console.log("Agora Brasil: " + agora.toLocaleTimeString('pt-BR', {
  hour: '2-digit', 
  minute: '2-digit', 
  second: '2-digit', 
  hour12: false
}));
// Exemplo de saída: "15:45:30"

console.log("Agora EUA: " + agora.toLocaleTimeString('en-US', {
  hour: 'numeric', 
  minute: '2-digit', 
  timeZoneName: 'short'
}));
// Exemplo de saída: "3:45 PM PDT"



const valor = 123456.78;
const formatadorEUA = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
console.log("Formato Valor EUA: " + formatadorEUA.format(valor)); // Exemplo de saída: "$123,456.78"

const formatadorBrasil = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
console.log("Formato Valor Brasil: " + formatadorBrasil.format(valor)); // Exemplo de saída: "R$ 123.456,78"*/
/*===============================================================================================================*/

/*document.getElementById('imageInput').addEventListener('change', function(event) {
  const file = event.target.files[0]; // Pegando o arquivo selecionado pelo usuário
  if (file) {
      const reader = new FileReader(); // Criando uma instância do FileReader
      reader.onload = function(e) {
          const preview = document.getElementById('preview');
          preview.src = e.target.result; // Atribuindo o resultado da leitura como fonte da imagem de pré-visualização
          preview.style.display = 'block'; // Tornando a pré-visualização visível
      };
      reader.readAsDataURL(file); // Lendo o arquivo como um Data URL
  }
});*/

/*let promessaDePizza = new Promise(function(resolve, reject) {
  // Simulando a entrega da pizza
  let pizzaEntregue = true; // Tente mudar para false e veja o que acontece
  if (pizzaEntregue) {
    resolve('Pizza entregue com sucesso!');
  } else {
    reject('Entrega da pizza falhou.');
  }
});*/

console.log("Início");

setTimeout(() => {
  console.log("Timeout 1");
}, 3000);

setTimeout(() => {
  console.log("Timeout 2");
}, 2000);

console.log("Fim");