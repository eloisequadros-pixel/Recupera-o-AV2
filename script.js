const livros = [
    { titulo: "É Assim que Acaba", autor: "Colleen Hoover", categoria: "Romance" },
    { titulo: "O Iluminado", autor: "Stephen King", categoria: "Terror" },
    { titulo: "A Paciente Silenciosa", autor: "Alex Michaelides", categoria: "Suspense" },
    { titulo: "Um Estudo em Vermelho", autor: "Arthur Conan Doyle", categoria: "Mistério" },
    { titulo: "O Nome do Vento", autor: "Patrick Rothfuss", categoria: "Fantasia" },
    { titulo: "Matéria Escura", autor: "Blake Crouch", categoria: "Ficção Científica" },
    { titulo: "Vinte Mil Léguas Submarinas", autor: "Júlio Verne", categoria: "Aventura" },
    { titulo: "A Culpa é das Estrelas", autor: "John Green", categoria: "Drama" },
    { titulo: "Guia do Mochileiro das Galáxias", autor: "Douglas Adams", categoria: "Comédia" },
    { titulo: "Fahrenheit 451", autor: "Ray Bradbury", categoria: "Distopia" },
    { titulo: "Orgulho e Preconceito", autor: "Jane Austen", categoria: "Romance de Época" },
    { titulo: "O Acordo", autor: "Elle Kennedy", categoria: "Enemies to Lovers" },
    { titulo: "Leitura de Verão", autor: "Emily Henry", categoria: "Friends to Lovers" },
    { titulo: "Circe", autor: "Madeline Miller", categoria: "Mitologia" },
    { titulo: "Antologia Poética", autor: "Vinícius de Moraes", categoria: "Poesia" },
    { titulo: "Memórias Póstumas de Brás Cubas", autor: "Machado de Assis", categoria: "Clássicos" },
    { titulo: "O Poder do Hábito", autor: "Charles Duhigg", categoria: "Autoajuda" },
    { titulo: "Eu sou Malala", autor: "Malala Yousafzai", categoria: "Biografia" },
    { titulo: "Watchmen", autor: "Alan Moore", categoria: "HQs/Mangás" },
    { titulo: "A Garota no Trem", autor: "Paula Hawkins", categoria: "Thriller Psicológico" },
    { titulo: "Drácula", autor: "Bram Stoker", categoria: "Sobrenatural" },
    { titulo: "Carry On", autor: "Rainbow Rowell", categoria: "Paranormal" },
    { titulo: "Boneco de Neve", autor: "Jo Nesbø", categoria: "Crime/Investigação" },
    { titulo: "As Crônicas de Gelo e Fogo", autor: "George R.R. Martin", categoria: "Medieval" },
    { titulo: "Laços de Família", autor: "Clarice Lispector", categoria: "Contos" },
    { titulo: "Alice no País das Maravilhas", autor: "Lewis Carroll", categoria: "Infantil" },
    { titulo: "Percy Jackson e o Ladrão de Raios", autor: "Rick Riordan", categoria: "Infantojuvenil" },
    { titulo: "Os Sete Maridos de Evelyn Hugo", autor: "Taylor Jenkins Reid", categoria: "Livro único" },
    { titulo: "Duna", autor: "Frank Herbert", categoria: "Saga/Séries" },
    { titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry", categoria: "Favoritos ⭐" }
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