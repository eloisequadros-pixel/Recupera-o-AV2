const livros = [
    { titulo: "Eu Te Amei em Outra Vida ", autor: "David Arnold", categoria: "Romance" },
    { titulo: "It: A Coisa", autor: "Stephen King", categoria: "Terror" },
    { titulo: "Boa Garota Nunca Mais", autor: "Holly Jackson", categoria: "Suspense" },
    { titulo: "Manual de Assassinato para Boas Garotas", autor: "Holly Jackson", categoria: "Mistério" },
    { titulo: "O Hobbit", autor: "J.R.R. Tolkien", categoria: "Fantasia" },
    { titulo: "Duna", autor: "Frank Herbert", categoria: "Ficção Científica" },
    { titulo: "O Labirinto dos Ossos", autor: "Rick Riordan", categoria: "Aventura" },
    { titulo: "No Final Daquele Dia", autor: "Nina de Passos", categoria: "Drama" },
    { titulo: "Melhor do que nos Filmes", autor: "Lynn Painter", categoria: "Comédia" },
    { titulo: "Jogos Vorazes", autor: "Suzanne Collins", categoria: "Distopia" },
    { titulo: "Orgulho e Preconceito", autor: "Jane Austen", categoria: "Romance de Época" },
    { titulo: "Era Uma Vez um Coração Partido", autor: "Stephanie Garber", categoria: "Enemies to Lovers" },
    { titulo: "Normal People", autor: "Sally Rooney", categoria: "Friends to Lovers" },
    { titulo: "Percy Jackson e os Heróis do Olimpo: A Marca de Atena", autor: "Rick Riordan", categoria: "Mitologia" },
    { titulo: "As Estrelas Sempre Brilham Acima das Nuvens Escuras", autor: "Jéssica Martins", categoria: "Poesia" },
    { titulo: "Alice no País das Maravilhas", autor: "Lewis Carroll", categoria: "Clássicos" },
    { titulo: "A Coragem de Ser Imperfeito", autor: "Brené Brown", categoria: "Autoajuda" },
    { titulo: "Anne Frank: O Diário de Anne Frank", autor: "Anne Frank", categoria: "Biografia" },
    { titulo: "Heartstopper Volume 1", autor: "Alice Oseman", categoria: "HQs/Mangás" },
    { titulo: "Jogo Fatal", autor: "Pablo de Santis", categoria: "Thriller Psicológico" },
    { titulo: "Você Ligou para o Sam", autor: "Dustin Thao", categoria: "Sobrenatural" },
    { titulo: "Caraval: Finale", autor: "Stephanie Garber", categoria: "Paranormal" },
    { titulo: "Sherlock Holmes", autor: "Arthur Conan Doyle", categoria: "Crime/Investigação" },
    { titulo: "A Balada do Felizes para Nunca", autor: "Stephanie Garber", categoria: "Medieval" },
    { titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry", categoria: "Contos" },
    { titulo: "Corajosas: Os Contos das Princesas Nada Encantadas", autor: "Pam Gonçalves e Stephanie Noelle", categoria: "Infantil" },
    { titulo: "As Crônicas de Nárnia: O Leão, a Feiticeira e o Guarda-Roupa", autor: "C. S. Lewis", categoria: "Infantojuvenil" },
    { titulo: "Todo Esse Tempo", autor: "Mikki Daughtry e Rachael Lippincott", categoria: "Livro único" },
    { titulo: "Harry Potter", autor: "J.K. Rowling", categoria: "Saga/Séries" }
];

const container = document.getElementById('livraria');

function renderizarBiblioteca() {
    // Ordenar as categorias para aparecerem em ordem alfabética (opcional)
    const categoriasUnicas = [...new Set(livros.map(l => l.categoria))].sort();

    categoriasUnicas.forEach(cat => {
        // Criar a seção da categoria
        const secao = document.createElement('section');
        secao.className = 'categoria-container';
        
        secao.innerHTML = `
            <h2>${cat}</h2>
            <div class="lista-livros"></div>
        `;

        const listaDiv = secao.querySelector('.lista-livros');

        // Filtrar livros desta categoria
        const livrosFiltrados = livros.filter(l => l.categoria === cat);

        livrosFiltrados.forEach(livro => {
            const card = document.createElement('div');
            card.className = 'card-livro';
            card.innerHTML = `
                <h3>${livro.titulo}</h3>
                <p><strong>Autor:</strong> ${livro.autor}</p>
            `;
            listaDiv.appendChild(card);
        });

        container.appendChild(secao);
    });
}

renderizarBiblioteca();