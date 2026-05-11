const livros = [
    // Romance
    { titulo: "Eu Te Amei em Outra Vida ", autor: "David Arnold", categoria: "Romance" },
    { titulo: "A Hipótese do Amor", autor: "Ali Hazelwood", categoria: "Romance" },
    { titulo: "A Cinco Passos de Você", autor: "Rachael Lippincott", categoria: "Romance" },
    { titulo: "Todo Esse Tempo", autor: "Mikki Daughtry e Rachael Lippincott", categoria: "Romance" },
    { titulo: "Os Dois Morrem no Final", autor: "Adam Silvera", categoria: "Romance" },
    { titulo: "Vermelho, Branco e Sangue Azul", autor: "Casey McQuiston", categoria: "Romance" },

    // Terror
    { titulo: "It: A Coisa", autor: "Stephen King", categoria: "Terror" },
    { titulo: "O Iluminado", autor: "Stephen King", categoria: "Terror" },
    { titulo: "Coraline", autor: "Neil Gaiman", categoria: "Terror" },
    { titulo: "Drácula", autor: "Bram Stoker", categoria: "Terror" },
    { titulo: "Frankenstein", autor: "Mary Shelley", categoria: "Terror" },
    { titulo: "A Assombração da Casa da Colina", autor: "Shirley Jackson", categoria: "Terror" },

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

    // Distopia
    { titulo: "Jogos Vorazes", autor: "Suzanne Collins", categoria: "Distopia" },
    { titulo: "Em Chamas", autor: "Suzanne Collins", categoria: "Distopia" },
    { titulo: "A Esperança", autor: "Suzanne Collins", categoria: "Distopia" },
    { titulo: "Divergente", autor: "Veronica Roth", categoria: "Distopia" },
    { titulo: "Maze Runner", autor: "James Dashner", categoria: "Distopia" },
    { titulo: "1984", autor: "George Orwell", categoria: "Distopia" },

    // Romance de Época
    { titulo: "Orgulho e Preconceito", autor: "Jane Austen", categoria: "Romance de Época" },
    { titulo: "Persuasão", autor: "Jane Austen", categoria: "Romance de Época" },
    { titulo: "Emma", autor: "Jane Austen", categoria: "Romance de Época" },
    { titulo: "Os Bridgertons: O Duque e Eu", autor: "Julia Quinn", categoria: "Romance de Época" },
    { titulo: "Jane Eyre", autor: "Charlotte Brontë", categoria: "Romance de Época" },
    { titulo: "O Morro dos Ventos Uivantes", autor: "Emily Brontë", categoria: "Romance de Época" },

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

    // Autoajuda
    { titulo: "A Coragem de Ser Imperfeito", autor: "Brené Brown", categoria: "Autoajuda" },
    { titulo: "Hábitos Atômicos", autor: "James Clear", categoria: "Autoajuda" },
    { titulo: "O Poder do Hábito", autor: "Charles Duhigg", categoria: "Autoajuda" },
    { titulo: "As Coisas que Você Só Vê Quando Desacelera", autor: "Haemin Sunim", categoria: "Autoajuda" },
    { titulo: "Essencialismo", autor: "Greg McKeown", categoria: "Autoajuda" },
    { titulo: "Mindset", autor: "Carol S. Dweck", categoria: "Autoajuda" },

    // Biografia
    { titulo: "Anne Frank: O Diário de Anne Frank", autor: "Anne Frank", categoria: "Biografia" },
    { titulo: "Eu Sou Malala", autor: "Malala Yousafzai", categoria: "Biografia" },
    { titulo: "Longa Caminhada até a Liberdade", autor: "Nelson Mandela", categoria: "Biografia" },
    { titulo: "A Menina que Roubava Livros", autor: "Markus Zusak", categoria: "Biografia" },
    { titulo: "Steve Jobs", autor: "Walter Isaacson", categoria: "Biografia" },
    { titulo: "Minha História", autor: "Michelle Obama", categoria: "Biografia" },

    // HQs/Mangás
    { titulo: "Heartstopper Volume 1", autor: "Alice Oseman", categoria: "HQs/Mangás" },
    { titulo: "Heartstopper Volume 2", autor: "Alice Oseman", categoria: "HQs/Mangás" },
    { titulo: "Heartstopper Volume 3", autor: "Alice Oseman", categoria: "HQs/Mangás" },
    { titulo: "Death Note", autor: "Tsugumi Ohba", categoria: "HQs/Mangás" },
    { titulo: "Demon Slayer", autor: "Koyoharu Gotouge", categoria: "HQs/Mangás" },
    { titulo: "Jujutsu Kaisen", autor: "Gege Akutami", categoria: "HQs/Mangás" },

    // Thriller Psicológico
    { titulo: "Jogo Fatal", autor: "Pablo de Santis", categoria: "Thriller Psicológico" },
    { titulo: "Paciente Silenciosa", autor: "Alex Michaelides", categoria: "Thriller Psicológico" },
    { titulo: "Verity", autor: "Colleen Hoover", categoria: "Thriller Psicológico" },
    { titulo: "A Empregada", autor: "Freida McFadden", categoria: "Thriller Psicológico" },
    { titulo: "Nunca Minta", autor: "Freida McFadden", categoria: "Thriller Psicológico" },
    { titulo: "Garota Exemplar", autor: "Gillian Flynn", categoria: "Thriller Psicológico" },

    // Sobrenatural
    { titulo: "Você Ligou para o Sam", autor: "Dustin Thao", categoria: "Sobrenatural" },
    { titulo: "Harry Potter e a Câmara Secreta", autor: "J.K. Rowling", categoria: "Sobrenatural" },
    { titulo: "Cidade dos Ossos", autor: "Cassandra Clare", categoria: "Sobrenatural" },
    { titulo: "Crepúsculo", autor: "Stephenie Meyer", categoria: "Sobrenatural" },
    { titulo: "Os Instrumentos Mortais", autor: "Cassandra Clare", categoria: "Sobrenatural" },
    { titulo: "Lua Nova", autor: "Stephenie Meyer", categoria: "Sobrenatural" },

    // Paranormal
    { titulo: "Caraval: Finale", autor: "Stephanie Garber", categoria: "Paranormal" },
    { titulo: "Crepúsculo", autor: "Stephenie Meyer", categoria: "Paranormal" },
    { titulo: "Lua Nova", autor: "Stephenie Meyer", categoria: "Paranormal" },
    { titulo: "Cidade das Cinzas", autor: "Cassandra Clare", categoria: "Paranormal" },
    { titulo: "Feitiço", autor: "Sarah Pinborough", categoria: "Paranormal" },
    { titulo: "Drácula", autor: "Bram Stoker", categoria: "Paranormal" },

    // Crime/Investigação
    { titulo: "Sherlock Holmes", autor: "Arthur Conan Doyle", categoria: "Crime/Investigação" },
    { titulo: "Assassinato no Expresso do Oriente", autor: "Agatha Christie", categoria: "Crime/Investigação" },
    { titulo: "Morte no Nilo", autor: "Agatha Christie", categoria: "Crime/Investigação" },
    { titulo: "O Código Da Vinci", autor: "Dan Brown", categoria: "Crime/Investigação" },
    { titulo: "O Silêncio dos Inocentes", autor: "Thomas Harris", categoria: "Crime/Investigação" },
    { titulo: "Anjos e Demônios", autor: "Dan Brown", categoria: "Crime/Investigação" },

    // Medieval
    { titulo: "A Balada do Felizes para Nunca", autor: "Stephanie Garber", categoria: "Medieval" },
    { titulo: "O Príncipe Cruel", autor: "Holly Black", categoria: "Medieval" },
    { titulo: "Corte de Névoa e Fúria", autor: "Sarah J. Maas", categoria: "Medieval" },
    { titulo: "Trono de Vidro", autor: "Sarah J. Maas", categoria: "Medieval" },
    { titulo: "Principe Caspian", autor: "C. S. Lewis", categoria: "Medieval" },
    { titulo: "A Rainha Vermelha", autor: "Victoria Aveyard", categoria: "Medieval" },

    // Contos
    { titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry", categoria: "Contos" },
    { titulo: "Alice no País das Maravilhas", autor: "Lewis Carroll", categoria: "Contos" },
    { titulo: "Contos de Fadas dos Irmãos Grimm", autor: "Irmãos Grimm", categoria: "Contos" },
    { titulo: "A Bela e a Fera", autor: "Jeanne-Marie Leprince", categoria: "Contos" },
    { titulo: "O Mágico de Oz", autor: "L. Frank Baum", categoria: "Contos" },
    { titulo: "Peter Pan", autor: "J.M. Barrie", categoria: "Contos" },

    // Infantil
    { titulo: "Corajosas: Os Contos das Princesas Nada Encantadas", autor: "Pam Gonçalves e Stephanie Noelle", categoria: "Infantil" },
    { titulo: "Matilda", autor: "Roald Dahl", categoria: "Infantil" },
    { titulo: "O Menino Maluquinho", autor: "Ziraldo", categoria: "Infantil" },
    { titulo: "Diário de Pilar", autor: "Flávia Lins e Silva", categoria: "Infantil" },
    { titulo: "Alice no País das Maravilhas", autor: "Lewis Carroll", categoria: "Infantil" },
    { titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry", categoria: "Infantil" },

    // Infantojuvenil
    { titulo: "As Crônicas de Nárnia: O Leão, a Feiticeira e o Guarda-Roupa", autor: "C. S. Lewis", categoria: "Infantojuvenil" },
    { titulo: "Harry Potter e o Cálice de Fogo", autor: "J.K. Rowling", categoria: "Infantojuvenil" },
    { titulo: "Percy Jackson e o Mar de Monstros", autor: "Rick Riordan", categoria: "Infantojuvenil" },
    { titulo: "Extraordinário", autor: "R.J. Palacio", categoria: "Infantojuvenil" },
    { titulo: "Jogos Vorazes", autor: "Suzanne Collins", categoria: "Infantojuvenil" },
    { titulo: "Coraline", autor: "Neil Gaiman", categoria: "Infantojuvenil" },

    // Livro único
    { titulo: "Todo Esse Tempo", autor: "Mikki Daughtry e Rachael Lippincott", categoria: "Livro único" },
    { titulo: "A Cinco Passos de Você", autor: "Rachael Lippincott", categoria: "Livro único" },
    { titulo: "Os Dois Morrem no Final", autor: "Adam Silvera", categoria: "Livro único" },
    { titulo: "Extraordinário", autor: "R.J. Palacio", categoria: "Livro único" },
    { titulo: "A Biblioteca da Meia-Noite", autor: "Matt Haig", categoria: "Livro único" },
    { titulo: "Verity", autor: "Colleen Hoover", categoria: "Livro único" },

    // Saga/Séries
    { titulo: "Harry Potter", autor: "J.K. Rowling", categoria: "Saga/Séries" },
    { titulo: "Percy Jackson", autor: "Rick Riordan", categoria: "Saga/Séries" },
    { titulo: "Jogos Vorazes", autor: "Suzanne Collins", categoria: "Saga/Séries" },
    { titulo: "Caraval", autor: "Stephanie Garber", categoria: "Saga/Séries" },
    { titulo: "As Crônicas de Nárnia", autor: "C. S. Lewis", categoria: "Saga/Séries" },
    { titulo: "Trono de Vidro", autor: "Sarah J. Maas", categoria: "Saga/Séries" }
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