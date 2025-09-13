// Criado array para adicionar nome dos amigos.
let amigos = [];
/**
 * Função para adicionar os nome a lista de amigos.
 * Ela é ativada quando o usuário clica no botão Adicionar.
 */
function adicionarAmigo() {
  let inputAmigo = document.getElementById("amigo");
  let nomeAmigo = inputAmigo.value.trim();
  let mensagem = document.getElementById("mensagem-feedback");

  // Valida se o campo nome está vazio.
  if (nomeAmigo === "") {
    mensagem.textContent = "Precisa de um nome para adicionar um amigo.";
    mensagem.style.color = "#ec4899"; // rosa forte
    return;
  }

  amigos.push(nomeAmigo);
  atualizarLista();

  mensagem.textContent = "Amigo adicionado com sucesso!";
  mensagem.style.color = "#34d399"; // verde claro

  inputAmigo.value = "";
  inputAmigo.focus();

  setTimeout(() => (mensagem.textContent = ""), 2000); // Limpa mensagem após 2s
}
/**
 * Função para atualizar a exibição da lista de amigos na página.
 * Ela é chamada após inserir um novo nome.
 */
function atualizarLista() {
  // Pega o elemento da lista onde os nomes serão mostrados.
  let lista = document.getElementById("listaAmigos");
  // Junta todos os nomes do array em uma única linha de texto, separados por vírgula e espaço.
  lista.textContent = amigos.join(", ");
}
/**
 * Função para sortear um nome da lista de amigos.
 * Ela é ativada pelo botão Sortear amigo.
 */
function sortearAmigo() {
  // Pega o elemento onde o resultado do sorteio será exibido.
  let resultado = document.getElementById("resultado");

  // Valida se não houver nomes na lista, não é possível sortear.
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
