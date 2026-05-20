async function pagina() {
const destino = document.getElementById('destino');
try{
const response = await fetch('dados.json');

if (!response.ok) throw new Error('Falha ao carregar dados');

const paginas = await response.json();

destino.innerHTML='';

paginas.forEach(item => {
const card = document.createElement('tr');
card.className = 'card';

card.innerHTML = `
<td> ${item.nome} </td>
<td> ${item.desc} </td>
<td> ${item.apelido} </td>
<td> ${item.end} </td>
<td><button onclick="removerLinha(this)">remover</button></td>
<td><button onclick="adicionarLinha(this)">adicionar</button></td>
`;

destino.appendChild(card);


});
} catch (error) {
console.error('Erro na requisição:', error);
destino.innerHTML = '<p>Desculpe, não foi possivel carregar as informações no momento.</p>';
}
}
function removerLinha(botao){
const linha = botao.closest('tr');
linha.remove();
}
function adicionarLinha(sla){
const linha = sla.closest('tr');

let celulas = linha.cells

let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
let input4 = document.getElementById("input4");

input1.value = celulas[0].innerHTML;
input2.value = celulas[1].innerHTML;
input3.value = celulas[2].innerHTML;
input4.value = celulas[3].innerHTML;

}