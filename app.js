//?Criado array para adicionar nome dos amigos.
let amigos = [];
/**
 * ?Função para adicionar os nome a lista de amigos.
 * Ela é ativada quando o usuário clica no botão Adicionar.
 */
function adicionarAmigo() {
  // Pega o elemento do site onde o usuário digita o nome.
  let inputAmigo = document.getElementById("amigo");
  // Pega o valor digitado e remove espaços no inicio e no fim.
  let nomeAmigo = inputAmigo.value.trim();

  // validar se o campo nome esta vazio.
  // !Se o campo estiver vazio, exibe um alerta e para a função.
  if (nomeAmigo === "") {
    alert("Precisa de um nome para adicionar um amigo.");
    // Para a função caso o nome seja inválido.
    return;
  }

  // Adiciona o nome digitado ao array amigos.
  amigos.push(nomeAmigo);

  // Limpa o campo de texto para o próximo nome.
  inputAmigo.value = "";
  // Deixa o cursor no campo, pronto para a próxima digitação.
  inputAmigo.focus();
}
/**
 * ?Função para atualizar a exibição da lista de amigos na página.
 * Ela é chamada após inserir um novo nome.
 */
function atualizarLista() {
  // Pega o elemento da lista onde os nomes serão mostrados.
  let lista = document.getElementById("listaAmigos");
  // Junta todos os nomes do array em uma única linha de texto, separados por vírgula e espaço.
  lista.textContent = amigos.join(", ");
}
/**
 * ?Função para sortear um nome da lista de amigos.
 * Ela é ativada pelo botão Sortear amigo.
 */
function sortearAmigo() {
  // Pega o elemento onde o resultado do sorteio será exibido.
  let resultado = document.getElementById("resultado");

  // !valida se não houver nomes na lista, não é possível sortear.
  if (amigos.length < 1) {
    alert("Adicione pelo menos um amigo antes de sortear!");
    return;
  }

  // Gera um numero aleatório entre 0 e o tamanho do array amigos.
  const indiceSorteado = Math.floor(Math.random() * amigos.length);

  // Usa o numero sorteado para pegar o nome correspondente.
  const amigoSorteado = amigos[indiceSorteado];

  // Exibe o nome sorteado na tela.
  resultado.textContent = `O amigo secreto é: ${amigoSorteado}`;
}
