const livros = [
    // Romance
    { titulo: "Eu Te Amei em Outra Vida ", autor: "David Arnold", categoria: "Romance" },
    { titulo: "A Hipótese do Amor", autor: "Ali Hazelwood", categoria: "Romance" },
    { titulo: "A Cinco Passos de Você", autor: "Rachael Lippincott", categoria: "Romance" },
    { titulo: "Todo Esse Tempo", autor: "Mikki Daughtry e Rachael Lippincott", categoria: "Romance" },
    { titulo: "Os Dois Morrem no Final", autor: "Adam Silvera", categoria: "Romance" },
    { titulo: "Vermelho, Branco e Sangue Azul", autor: "Casey McQuiston", categoria: "Romance" },

    { titulo: "It: A Coisa", autor: "Stephen King", categoria: "Terror" },

    // Suspense
    { titulo: "Boa Garota Nunca Mais", autor: "Holly Jackson", categoria: "Suspense" },
    { titulo: "A Empregada", autor: "Freida McFadden", categoria: "Suspense" },
    { titulo: "Paciente Silenciosa", autor: "Alex Michaelides", categoria: "Suspense" },
    { titulo: "Garota Exemplar", autor: "Gillian Flynn", categoria: "Suspense" },
    { titulo: "Um de Nós Está Mentindo", autor: "Karen M. McManus", categoria: "Suspense" },
    { titulo: "Nunca Minta", autor: "Freida McFadden", categoria: "Suspense" },

    // Mistério
    { titulo: "Manual de Assassinato para Boas Garotas", autor: "Holly Jackson", categoria: "Mistério" },
    { titulo: "Boa Garota Segredo Mortal", autor: "Holly Jackson", categoria: "Mistério" },
    { titulo: "Boa Garota Nunca Mais", autor: "Holly Jackson", categoria: "Mistério" },
    { titulo: "Morte no Nilo", autor: "Agatha Christie", categoria: "Mistério" },
    { titulo: "Assassinato no Expresso do Oriente", autor: "Agatha Christie", categoria: "Mistério" },
    { titulo: "O Homem de Giz", autor: "C.J. Tudor", categoria: "Mistério" },

    // Fantasia
    { titulo: "O Hobbit", autor: "J.R.R. Tolkien", categoria: "Fantasia" },
    { titulo: "Caraval", autor: "Stephanie Garber", categoria: "Fantasia" },
    { titulo: "Era Uma Vez um Coração Partido", autor: "Stephanie Garber", categoria: "Fantasia" },
    { titulo: "O Príncipe Cruel", autor: "Holly Black", categoria: "Fantasia" },
    { titulo: "As Crônicas de Nárnia: O Cavalo e Seu Menino", autor: "C. S. Lewis", categoria: "Fantasia" },
    { titulo: "Trono de Vidro", autor: "Sarah J. Maas", categoria: "Fantasia" },

    // Ficção Científica
    { titulo: "Duna", autor: "Frank Herbert", categoria: "Ficção Científica" },
    { titulo: "Jogador Número 1", autor: "Ernest Cline", categoria: "Ficção Científica" },
    { titulo: "Maze Runner: Ordem de Extermínio", autor: "James Dashner", categoria: "Ficção Científica" },
    { titulo: "Maze Runner: Prova de Fogo", autor: "James Dashner", categoria: "Ficção Científica" },
    { titulo: "Maze Runner: Correr ou Morrer", autor: "James Dashner", categoria: "Ficção Científica" },
    { titulo: "Maze Runner: O Código da Febre", autor: "James Dashner", categoria: "Ficção Científica" },

    // Aventura
    { titulo: "O Labirinto dos Ossos", autor: "Rick Riordan", categoria: "Aventura" },
    { titulo: "Percy Jackson e o Ladrão de Raios", autor: "Rick Riordan", categoria: "Aventura" },
    { titulo: "Harry Potter e a Pedra Filosofal", autor: "J.K. Rowling", categoria: "Aventura" },
    { titulo: "A Ilha do Tesouro", autor: "Robert Louis Stevenson", categoria: "Aventura" },
    { titulo: "As Aventuras de Tom Sawyer", autor: "Mark Twain", categoria: "Aventura" },
    { titulo: "Viagem ao Centro da Terra", autor: "Júlio Verne", categoria: "Aventura" },

    // Drama
    { titulo: "No Final Daquele Dia", autor: "Nina de Passos", categoria: "Drama" },
    { titulo: "A Culpa é das Estrelas", autor: "John Green", categoria: "Drama" },
    { titulo: "Mil Beijos de Garoto", autor: "Tillie Cole", categoria: "Drama" },
    { titulo: "Por Lugares Incríveis", autor: "Jennifer Niven", categoria: "Drama" },
    { titulo: "Extraordinário", autor: "R.J. Palacio", categoria: "Drama" },
    { titulo: "Cartas de Amor aos Mortos", autor: "Ava Dellaira", categoria: "Drama" },

    // Comédia
    { titulo: "Melhor do que nos Filmes", autor: "Lynn Painter", categoria: "Comédia" },
    { titulo: "Teto Para Dois", autor: "Beth O'Leary", categoria: "Comédia" },
    { titulo: "Fazendo Meu Filme", autor: "Paula Pimenta", categoria: "Comédia" },
    { titulo: "Confissões de uma Garota Excluída", autor: "Thalita Rebouças", categoria: "Comédia" },
    { titulo: "Diário de um Banana", autor: "Jeff Kinney", categoria: "Comédia" },
    { titulo: "Nick e Charlie", autor: "Alice Oseman", categoria: "Comédia" },


    { titulo: "Jogos Vorazes", autor: "Suzanne Collins", categoria: "Distopia" },

    { titulo: "Orgulho e Preconceito", autor: "Jane Austen", categoria: "Romance de Época" },

    // Enemies to Lovers
    { titulo: "Era Uma Vez um Coração Partido", autor: "Stephanie Garber", categoria: "Enemies to Lovers" },
    { titulo: "O Príncipe Cruel", autor: "Holly Black", categoria: "Enemies to Lovers" },
    { titulo: "Corte de Espinhos e Rosas", autor: "Sarah J. Maas", categoria: "Enemies to Lovers" },
    { titulo: "A Hipótese do Amor", autor: "Ali Hazelwood", categoria: "Enemies to Lovers" },
    { titulo: "Imperfeitos", autor: "Christina Lauren", categoria: "Enemies to Lovers" },
    { titulo: "Amor, Teoricamente", autor: "Ali Hazelwood", categoria: "Enemies to Lovers" },

    // Friends to Lovers
    { titulo: "Normal People", autor: "Sally Rooney", categoria: "Friends to Lovers" },
    { titulo: "Heartstopper Volume 2", autor: "Alice Oseman", categoria: "Friends to Lovers" },
    { titulo: "Heartstopper Volume 3", autor: "Alice Oseman", categoria: "Friends to Lovers" },
    { titulo: "Teto Para Dois", autor: "Beth O'Leary", categoria: "Friends to Lovers" },
    { titulo: "Férias com Você", autor: "Emily Henry", categoria: "Friends to Lovers" },
    { titulo: "Hoje, Depois, Amanhã", autor: "Rachel Lynn Solomon", categoria: "Friends to Lovers" },

    // Mitologia
    { titulo: "Percy Jackson e os Heróis do Olimpo: A Marca de Atena", autor: "Rick Riordan", categoria: "Mitologia" },
    { titulo: "Percy Jackson e o Ladrão de Raios", autor: "Rick Riordan", categoria: "Mitologia" },
    { titulo: "A Maldição do Titã", autor: "Rick Riordan", categoria: "Mitologia" },
    { titulo: "O Sangue do Olimpo", autor: "Rick Riordan", categoria: "Mitologia" },
    { titulo: "Percy Jackson e O Mar de Monstros", autor: "Rick Riordan", categoria: "Mitologia" },
    { titulo: "A Canção de Aquiles", autor: "Madeline Miller", categoria: "Mitologia" },

    // Poesia
    { titulo: "As Estrelas Sempre Brilham Acima das Nuvens Escuras", autor: "Jéssica Martins", categoria: "Poesia" },
    { titulo: "Outros Jeitos de Usar a Boca", autor: "Rupi Kaur", categoria: "Poesia" },
    { titulo: "Textos Cruéis Demais Para Serem Lidos Rapidamente", autor: "Igor Pires Simões", categoria: "Poesia" },
    { titulo: "O Que o Sol Faz com as Flores", autor: "Rupi Kaur", categoria: "Poesia" },
    { titulo: "Todas as Suas Imperfeições", autor: "Colleen Hoover", categoria: "Poesia" },
    { titulo: "Eu Sou de Primavera", autor: "Fernanda Mello", categoria: "Poesia" },

    // Clássicos
    { titulo: "Alice no País das Maravilhas", autor: "Lewis Carroll", categoria: "Clássicos" },
    { titulo: "Orgulho e Preconceito", autor: "Jane Austen", categoria: "Clássicos" },
    { titulo: "Dom Casmurro", autor: "Machado de Assis", categoria: "Clássicos" },
    { titulo: "O Morro dos Ventos Uivantes", autor: "Emily Brontë", categoria: "Clássicos" },
    { titulo: "Anne de Green Gables", autor: "L. M. Montgomery", categoria: "Clássicos" },
    { titulo: "Jane Eyre", autor: "Charlotte Brontë", categoria: "Clássicos" },


    { titulo: "A Coragem de Ser Imperfeito", autor: "Brené Brown", categoria: "Autoajuda" },

    { titulo: "Anne Frank: O Diário de Anne Frank", autor: "Anne Frank", categoria: "Biografia" },

    { titulo: "Heartstopper Volume 1", autor: "Alice Oseman", categoria: "HQs/Mangás" },

    // Thriller Psicológico
    { titulo: "Jogo Fatal", autor: "Pablo de Santis", categoria: "Thriller Psicológico" },
    { titulo: "Paciente Silenciosa", autor: "Alex Michaelides", categoria: "Thriller Psicológico" },
    { titulo: "Verity", autor: "Colleen Hoover", categoria: "Thriller Psicológico" },
    { titulo: "A Empregada", autor: "Freida McFadden", categoria: "Thriller Psicológico" },
    { titulo: "Nunca Minta", autor: "Freida McFadden", categoria: "Thriller Psicológico" },
    { titulo: "Garota Exemplar", autor: "Gillian Flynn", categoria: "Thriller Psicológico" },

    
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