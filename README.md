<h1 align="center">🎁 Desafio ONE Amigo Secreto</h1>

<p align="center">
  <img alt="Linguagem utilizada" src="https://img.shields.io/badge/Linguagem-JavaScript-yellow?style=for-the-badge">
  <img alt="Tipo de Projeto" src="https://img.shields.io/badge/Tipo-Desafio%20de%20Lógica-blue?style=for-the-badge">
  <img alt="Status do projeto" src="https://img.shields.io/badge/Status-Concluído-green?style=for-the-badge">
</p>

---

## 💻 Sobre o Desafio

Este Projeto é um sorteador simples e elegante de amigos secretos. Ele foi desenvolvido com o objetivo de praticar e fortalecer habilidades em lógica de programação e JavaScript. A aplicação permite que o usuário adicione nomes, visualize a lista em tempo real e, por fim, sorteia um amigo de forma aleatória.

---

## ⚙️ Funcionalidades

- **Adicionar amigos**: Insira nomes na lista de participantes de forma rápida.
- **Visualização dinâmica**: A lista de amigos é atualizada na tela em tempo real, assim que um novo nome é adicionado.
- **Sorteio aleatório**: Escolhe um nome da lista de maneira aleatória e justa com apenas um clique.
- **Usabilidade aprimorada**: O campo de texto é limpo automaticamente e o cursor permanece focado, otimizando o processo de adição de vários nomes.

---

## 🧠 Desafios de Lógica e Aprendizado

Durante o desenvolvimento, enfrentei alguns desafios que foram cruciais para o aprendizado e crescimento técnico:

1.  **Validação de entradas**: Inicialmente, a aplicação permitia adicionar nomes vazios. A solução foi implementar uma validação com `.trim()` e um `if` para garantir que apenas nomes válidos fossem adicionados ao array.

2.  **Sincronização da Interface**: O maior desafio foi fazer a lista de amigos na tela ser atualizada instantaneamente. A solução foi **criar uma função específica (`atualizarLista`) e chamá-la dentro da função de adição (`adicionarAmigo`)**, garantindo que a interface do usuário sempre refletisse o estado real do array.

3.  **Experiência do Usuário (UX)**: Para tornar a ferramenta mais fluida, implementei a limpeza do campo de texto e o `focus()` após cada adição, facilitando a interação do usuário.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript**

---

## 🚀 Como Executar

1.  Clone este repositório para a sua máquina.
2.  Abra o arquivo `index.html` em seu navegador de preferência.
3.  Pronto! Agora é só adicionar os nomes dos seus amigos e sortear!

--

## 💻 Prints

<p>1 - Tela principal</p>
<img width="736" height="524" alt="1" src="https://github.com/user-attachments/assets/11c2af1e-7d07-45df-bf89-3143811913d4" />

<p>2 - Adicionando os amigos</p>
<img width="722" height="511" alt="2" src="https://github.com/user-attachments/assets/99a33efd-a087-4756-a31e-c654dda1086a" />

<p>3 - Lista com os amigos adicionados</p>
<img width="697" height="532" alt="3" src="https://github.com/user-attachments/assets/b3d12dbc-a660-4f15-804c-d43112501b6d" />

<p>4 - Nome do amigo sorteado</p>
<img width="698" height="520" alt="4" src="https://github.com/user-attachments/assets/95e19d80-ebb3-456e-8345-941a7d236d91" />

---

<p align="center">Feito por Jhames Wayne</p>
