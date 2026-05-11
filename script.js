const livros = [
    { titulo: "O Alquimista", autor: "Paulo Coelho" },
    { titulo: "Dom Casmurro", autor: "Machado de Assis" },
    { titulo: "1984", autor: "George Orwell" }
];

const container = document.getElementById('livraria');

livros.forEach(livro => {
    const card = document.createElement('div');
    card.classList.add('card-livro');
    card.innerHTML = `
        <h3>${livro.titulo}</h3>
        <p>Autor: ${livro.autor}</p>
    `;
    container.appendChild(card);
});

console.log("Catálogo de livros carregado com sucesso!");