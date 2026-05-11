const livros = [
    // Romance
    { titulo: "Eu Te Amei em Outra Vida", autor: "David Arnold", categoria: "Romance", capa: "https://m.media-amazon.com/images/I/81Jo8UAsqOL._AC_UF1000,1000_QL80_.jpg" },
    { titulo: "A Hipótese do Amor", autor: "Ali Hazelwood", categoria: "Romance", capa: "https://m.media-amazon.com/images/I/81LTEfXYgcL.jpg" },
    { titulo: "A Cinco Passos de Você", autor: "Rachael Lippincott", categoria: "Romance", capa: "https://m.media-amazon.com/images/I/81OBWkQ-o2L._AC_UF1000,1000_QL80_.jpg" },
    { titulo: "Todo Esse Tempo", autor: "Mikki Daughtry e Rachael Lippincott", categoria: "Romance", capa: "https://m.media-amazon.com/images/I/715zhDUgi3L._AC_UF1000,1000_QL80_.jpg" },
    { titulo: "Os Dois Morrem no Final", autor: "Adam Silvera", categoria: "Romance", capa: "https://m.media-amazon.com/images/I/81MVCxMWWoL._UF350,350_QL50_.jpg" },
    { titulo: "Vermelho, Branco e Sangue Azul", autor: "Casey McQuiston", categoria: "Romance", capa: "https://m.media-amazon.com/images/I/71SYepTUsDL.jpg" },

    // Terror
    { titulo: "Ed & Lorraine Warren: Demonologistas", autor: "Gerald Brittle", categoria: "Terror", capa: "https://m.media-amazon.com/images/I/91Cu2hkpMlL._UF1000,1000_QL80_.jpg" },
    { titulo: "O Iluminado", autor: "Stephen King", categoria: "Terror", capa: "https://m.media-amazon.com/images/I/81Q+pJi4NjL.jpg" },
    { titulo: "Coraline", autor: "Neil Gaiman", categoria: "Terror", capa: "https://m.media-amazon.com/images/I/91DZobBc1BL.jpg" },
    { titulo: "Drácula", autor: "Bram Stoker", categoria: "Terror", capa: "https://m.media-amazon.com/images/I/61MgodE1s0L._AC_UF1000,1000_QL80_.jpg" },
    { titulo: "Frankenstein", autor: "Mary Shelley", categoria: "Terror", capa: "https://m.media-amazon.com/images/I/81-OgmOxScL._AC_UF1000,1000_QL80_.jpg" },
    { titulo: "A Assombração da Casa da Colina", autor: "Shirley Jackson", categoria: "Terror", capa: "https://m.media-amazon.com/images/I/91TG18fSQeL._UF1000,1000_QL80_.jpg" },

    // Suspense
    { titulo: "Boa Garota Nunca Mais", autor: "Holly Jackson", categoria: "Suspense", capa: "https://m.media-amazon.com/images/I/81atsbPweKL._UF1000,1000_QL80_.jpg" },
    { titulo: "A Empregada", autor: "Freida McFadden", categoria: "Suspense", capa: "https://m.media-amazon.com/images/I/81BdpMhm3iL.jpg" },
    { titulo: "Paciente Silenciosa", autor: "Alex Michaelides", categoria: "Suspense", capa: "https://m.media-amazon.com/images/I/91R8S52UP6L.jpg" },
    { titulo: "Garota Exemplar", autor: "Gillian Flynn", categoria: "Suspense", capa: "https://m.media-amazon.com/images/I/51Bda2VtwIL.jpg" },
    { titulo: "Um de Nós Está Mentindo", autor: "Karen M. McManus", categoria: "Suspense", capa: "https://m.media-amazon.com/images/I/81r6K6pVipL.jpg" },
    { titulo: "Nunca Minta", autor: "Freida McFadden", categoria: "Suspense", capa: "https://m.media-amazon.com/images/I/81-Hk3onFyL.jpg" },

    // Mistério
    { titulo: "Manual de Assassinato para Boas Garotas", autor: "Holly Jackson", categoria: "Mistério", capa: "https://m.media-amazon.com/images/I/81vTk3hdXEL._UF1000,1000_QL80_.jpg" },
    { titulo: "Boa Garota Segredo Mortal", autor: "Holly Jackson", categoria: "Mistério", capa: "https://m.media-amazon.com/images/I/81JPQxDDNeL._UF1000,1000_QL80_.jpg" },
    { titulo: "Boa Garota Nunca Mais", autor: "Holly Jackson", categoria: "Mistério", capa: "https://m.media-amazon.com/images/I/81atsbPweKL._UF1000,1000_QL80_.jpg" },
    { titulo: "Morte no Nilo", autor: "Agatha Christie", categoria: "Mistério", capa: "https://m.media-amazon.com/images/I/911of0D5ktL._AC_UF1000,1000_QL80_.jpg" },
    { titulo: "Assassinato no Expresso do Oriente", autor: "Agatha Christie", categoria: "Mistério", capa: "https://m.media-amazon.com/images/I/712IZyH+HiL._AC_UF1000,1000_QL80_.jpg" },
    { titulo: "O Homem de Giz", autor: "C.J. Tudor", categoria: "Mistério", capa: "https://m.media-amazon.com/images/I/71azIDnPN8L._UF1000,1000_QL80_.jpg" },

    // Fantasia
    { titulo: "O Hobbit", autor: "J.R.R. Tolkien", categoria: "Fantasia", capa: "https://m.media-amazon.com/images/I/91M9xPIf10L._AC_UF1000,1000_QL80_.jpg" },
    { titulo: "Caraval", autor: "Stephanie Garber", categoria: "Fantasia", capa: "https://m.media-amazon.com/images/I/71p66yY4htL.jpg" },
    { titulo: "Era Uma Vez um Coração Partido", autor: "Stephanie Garber", categoria: "Fantasia", capa: "https://m.media-amazon.com/images/I/91tgztS06QL.jpg" },
    { titulo: "O Príncipe Cruel", autor: "Holly Black", categoria: "Fantasia", capa: "https://m.media-amazon.com/images/I/81FH6q0EqYS._AC_UF1000,1000_QL80_.jpg" },
    { titulo: "As Crônicas de Nárnia: O Cavalo e Seu Menino", autor: "C. S. Lewis", categoria: "Fantasia", capa: "https://m.media-amazon.com/images/I/A121gerY5IL._UF1000,1000_QL80_.jpg" },
    { titulo: "Trono de Vidro", autor: "Sarah J. Maas", categoria: "Fantasia", capa: "https://m.media-amazon.com/images/I/81yjSsr1IbL.jpg" },

    // Ficção Científica
    { titulo: "Duna", autor: "Frank Herbert", categoria: "Ficção Científica", capa: "https://m.media-amazon.com/images/I/817WfcVZakL._UF1000,1000_QL80_.jpg" },
    { titulo: "Jogador Número 1", autor: "Ernest Cline", categoria: "Ficção Científica", capa: "https://m.media-amazon.com/images/I/917GI-fesVL._AC_UF1000,1000_QL80_.jpg" },
    { titulo: "Maze Runner: Ordem de Extermínio", autor: "James Dashner", categoria: "Ficção Científica", capa: "https://m.media-amazon.com/images/I/61ILpNSiAuL._AC_UF1000,1000_QL80_.jpg" },
    { titulo: "Maze Runner: Prova de Fogo", autor: "James Dashner", categoria: "Ficção Científica", capa: "https://m.media-amazon.com/images/I/61pGP-2ZaCL._AC_UF1000,1000_QL80_.jpg" },
    { titulo: "Maze Runner: Correr ou Morrer", autor: "James Dashner", categoria: "Ficção Científica", capa: "https://m.media-amazon.com/images/I/81UuGTd7RuL._AC_UF1000,1000_QL80_.jpg" },
    { titulo: "Maze Runner: O Código da Febre", autor: "James Dashner", categoria: "Ficção Científica", capa: "https://m.media-amazon.com/images/I/91dF9b1mQTS._AC_UF1000,1000_QL80_.jpg" },

    // Aventura
    { titulo: "O Labirinto dos Ossos", autor: "Rick Riordan", categoria: "Aventura", capa: "https://m.media-amazon.com/images/I/81zsEZLq8yL._AC_UF1000,1000_QL80_.jpg" },
    { titulo: "Percy Jackson e o Ladrão de Raios", autor: "Rick Riordan", categoria: "Aventura", capa: "https://m.media-amazon.com/images/I/81mfMi0ni+L._UF1000,1000_QL80_.jpg" },
    { titulo: "Harry Potter e a Pedra Filosofal", autor: "J.K. Rowling", categoria: "Aventura", capa: "https://m.media-amazon.com/images/I/61jgm6ooXzL._AC_UF1000,1000_QL80_.jpg" },
    { titulo: "A Ilha do Tesouro", autor: "Robert Louis Stevenson", categoria: "Aventura", capa: "https://m.media-amazon.com/images/I/81N-C60M53L._AC_UF1000,1000_QL80_.jpg" },
    { titulo: "As Aventuras de Tom Sawyer", autor: "Mark Twain", categoria: "Aventura", capa: "https://m.media-amazon.com/images/I/81mWTlcwsaL.jpg" },
    { titulo: "Viagem ao Centro da Terra", autor: "Júlio Verne", categoria: "Aventura", capa: "https://m.media-amazon.com/images/I/A1s+6nCSdmL.jpg" },

    // Drama
    { titulo: "No Final Daquele Dia", autor: "Nina de Passos", categoria: "Drama", capa: "https://m.media-amazon.com/images/I/81lNznlFA8L.jpg" },
    { titulo: "A Culpa é das Estrelas", autor: "John Green", categoria: "Drama", capa: "https://m.media-amazon.com/images/I/811ivBP1rsL._UF1000,1000_QL80_.jpg" },
    { titulo: "Mil Beijos de Garoto", autor: "Tillie Cole", categoria: "Drama", capa: "https://m.media-amazon.com/images/I/81vgyXZPgVL._UF1000,1000_QL80_.jpg" },
    { titulo: "Por Lugares Incríveis", autor: "Jennifer Niven", categoria: "Drama", capa: "https://m.media-amazon.com/images/I/918Maoi6OML.jpg" },
    { titulo: "Extraordinário", autor: "R.J. Palacio", categoria: "Drama", capa: "https://m.media-amazon.com/images/I/71I3OkYQI7L._UF1000,1000_QL80_.jpg" },
    { titulo: "Cartas de Amor aos Mortos", autor: "Ava Dellaira", categoria: "Drama", capa: "https://m.media-amazon.com/images/I/81hN4RvrEVL._UF1000,1000_QL80_.jpg" },

    // Comédia
    { titulo: "Melhor do que nos Filmes", autor: "Lynn Painter", categoria: "Comédia", capa: "" },
    { titulo: "Teto Para Dois", autor: "Beth O'Leary", categoria: "Comédia", capa: "" },
    { titulo: "Fazendo Meu Filme", autor: "Paula Pimenta", categoria: "Comédia", capa: "" },
    { titulo: "Confissões de uma Garota Excluída", autor: "Thalita Rebouças", categoria: "Comédia", capa: "" },
    { titulo: "Diário de um Banana", autor: "Jeff Kinney", categoria: "Comédia", capa: "" },
    { titulo: "Nick e Charlie", autor: "Alice Oseman", categoria: "Comédia", capa: "" },

    // Distopia
    { titulo: "Jogos Vorazes", autor: "Suzanne Collins", categoria: "Distopia", capa: "https://m.media-amazon.com/images/I/71WOkspHbOL._UF1000,1000_QL80_.jpg" },
    { titulo: "Em Chamas", autor: "Suzanne Collins", categoria: "Distopia", capa: "" },
    { titulo: "A Esperança", autor: "Suzanne Collins", categoria: "Distopia", capa: "" },
    { titulo: "Divergente", autor: "Veronica Roth", categoria: "Distopia", capa: "" },
    { titulo: "Maze Runner", autor: "James Dashner", categoria: "Distopia", capa: "" },
    { titulo: "1984", autor: "George Orwell", categoria: "Distopia", capa: "" },

    // Romance de Época
    { titulo: "Orgulho e Preconceito", autor: "Jane Austen", categoria: "Romance de Época", capa: "" },
    { titulo: "Persuasão", autor: "Jane Austen", categoria: "Romance de Época", capa: "" },
    { titulo: "Emma", autor: "Jane Austen", categoria: "Romance de Época", capa: "" },
    { titulo: "Os Bridgertons: O Duque e Eu", autor: "Julia Quinn", categoria: "Romance de Época", capa: "" },
    { titulo: "Jane Eyre", autor: "Charlotte Brontë", categoria: "Romance de Época", capa: "" },
    { titulo: "O Morro dos Ventos Uivantes", autor: "Emily Brontë", categoria: "Romance de Época", capa: "" },

    // Enemies to Lovers
    { titulo: "Era Uma Vez um Coração Partido", autor: "Stephanie Garber", categoria: "Enemies to Lovers", capa: "" },
    { titulo: "O Príncipe Cruel", autor: "Holly Black", categoria: "Enemies to Lovers", capa: "" },
    { titulo: "Corte de Espinhos e Rosas", autor: "Sarah J. Maas", categoria: "Enemies to Lovers", capa: "" },
    { titulo: "A Hipótese do Amor", autor: "Ali Hazelwood", categoria: "Enemies to Lovers", capa: "" },
    { titulo: "Imperfeitos", autor: "Christina Lauren", categoria: "Enemies to Lovers", capa: "" },
    { titulo: "Amor, Teoricamente", autor: "Ali Hazelwood", categoria: "Enemies to Lovers", capa: "" },

    // Friends to Lovers
    { titulo: "Normal People", autor: "Sally Rooney", categoria: "Friends to Lovers", capa: "" },
    { titulo: "Heartstopper Volume 2", autor: "Alice Oseman", categoria: "Friends to Lovers", capa: "" },
    { titulo: "Heartstopper Volume 3", autor: "Alice Oseman", categoria: "Friends to Lovers", capa: "" },
    { titulo: "Teto Para Dois", autor: "Beth O'Leary", categoria: "Friends to Lovers", capa: "" },
    { titulo: "Férias com Você", autor: "Emily Henry", categoria: "Friends to Lovers", capa: "" },
    { titulo: "Hoje, Depois, Amanhã", autor: "Rachel Lynn Solomon", categoria: "Friends to Lovers", capa: "" },

    // Mitologia
    { titulo: "Percy Jackson e os Heróis do Olimpo: A Marca de Atena", autor: "Rick Riordan", categoria: "Mitologia", capa: "" },
    { titulo: "Percy Jackson e o Ladrão de Raios", autor: "Rick Riordan", categoria: "Mitologia", capa: "https://m.media-amazon.com/images/I/A1UjcPz4gZL._AC_UF1000,1000_QL80_.jpg" },
    { titulo: "A Maldição do Titã", autor: "Rick Riordan", categoria: "Mitologia", capa: "" },
    { titulo: "O Sangue do Olimpo", autor: "Rick Riordan", categoria: "Mitologia", capa: "" },
    { titulo: "Percy Jackson e O Mar de Monstros", autor: "Rick Riordan", categoria: "Mitologia", capa: "" },
    { titulo: "A Canção de Aquiles", autor: "Madeline Miller", categoria: "Mitologia", capa: "" },

    // Poesia
    { titulo: "As Estrelas Sempre Brilham Acima das Nuvens Escuras", autor: "Jéssica Martins", categoria: "Poesia", capa: "" },
    { titulo: "Outros Jeitos de Usar a Boca", autor: "Rupi Kaur", categoria: "Poesia", capa: "" },
    { titulo: "Textos Cruéis Demais Para Serem Lidos Rapidamente", autor: "Igor Pires Simões", categoria: "Poesia", capa: "" },
    { titulo: "O Que o Sol Faz com as Flores", autor: "Rupi Kaur", categoria: "Poesia", capa: "" },
    { titulo: "Todas as Suas Imperfeições", autor: "Colleen Hoover", categoria: "Poesia", capa: "" },
    { titulo: "Eu Sou de Primavera", autor: "Fernanda Mello", categoria: "Poesia", capa: "" },

    // Clássicos
    { titulo: "Alice no País das Maravilhas", autor: "Lewis Carroll", categoria: "Clássicos", capa: "" },
    { titulo: "Orgulho e Preconceito", autor: "Jane Austen", categoria: "Clássicos", capa: "" },
    { titulo: "Dom Casmurro", autor: "Machado de Assis", categoria: "Clássicos", capa: "" },
    { titulo: "O Morro dos Ventos Uivantes", autor: "Emily Brontë", categoria: "Clássicos", capa: "" },
    { titulo: "Anne de Green Gables", autor: "L. M. Montgomery", categoria: "Clássicos", capa: "" },
    { titulo: "Jane Eyre", autor: "Charlotte Brontë", categoria: "Clássicos", capa: "" },

    // Autoajuda
    { titulo: "A Coragem de Ser Imperfeito", autor: "Brené Brown", categoria: "Autoajuda", capa: "" },
    { titulo: "Hábitos Atômicos", autor: "James Clear", categoria: "Autoajuda", capa: "" },
    { titulo: "O Poder do Hábito", autor: "Charles Duhigg", categoria: "Autoajuda", capa: "" },
    { titulo: "As Coisas que Você Só Vê Quando Desacelera", autor: "Haemin Sunim", categoria: "Autoajuda", capa: "" },
    { titulo: "Essencialismo", autor: "Greg McKeown", categoria: "Autoajuda", capa: "" },
    { titulo: "Mindset", autor: "Carol S. Dweck", categoria: "Autoajuda", capa: "" },

    // Biografia
    { titulo: "Anne Frank: O Diário de Anne Frank", autor: "Anne Frank", categoria: "Biografia", capa: "" },
    { titulo: "Eu Sou Malala", autor: "Malala Yousafzai", categoria: "Biografia", capa: "" },
    { titulo: "Longa Caminhada até a Liberdade", autor: "Nelson Mandela", categoria: "Biografia", capa: "" },
    { titulo: "A Menina que Roubava Livros", autor: "Markus Zusak", categoria: "Biografia", capa: "" },
    { titulo: "Steve Jobs", autor: "Walter Isaacson", categoria: "Biografia", capa: "" },
    { titulo: "Minha História", autor: "Michelle Obama", categoria: "Biografia", capa: "" },

    // HQs/Mangás
    { titulo: "Heartstopper Volume 1", autor: "Alice Oseman", categoria: "HQs/Mangás", capa: "" },
    { titulo: "Heartstopper Volume 2", autor: "Alice Oseman", categoria: "HQs/Mangás", capa: "" },
    { titulo: "Heartstopper Volume 3", autor: "Alice Oseman", categoria: "HQs/Mangás", capa: "" },
    { titulo: "Death Note", autor: "Tsugumi Ohba", categoria: "HQs/Mangás", capa: "" },
    { titulo: "Demon Slayer", autor: "Koyoharu Gotouge", categoria: "HQs/Mangás", capa: "" },
    { titulo: "Jujutsu Kaisen", autor: "Gege Akutami", categoria: "HQs/Mangás", capa: "" },

    // Thriller Psicológico
    { titulo: "Jogo Fatal", autor: "Pablo de Santis", categoria: "Thriller Psicológico", capa: "" },
    { titulo: "Paciente Silenciosa", autor: "Alex Michaelides", categoria: "Thriller Psicológico", capa: "" },
    { titulo: "Verity", autor: "Colleen Hoover", categoria: "Thriller Psicológico", capa: "" },
    { titulo: "A Empregada", autor: "Freida McFadden", categoria: "Thriller Psicológico", capa: "" },
    { titulo: "Nunca Minta", autor: "Freida McFadden", categoria: "Thriller Psicológico", capa: "" },
    { titulo: "Garota Exemplar", autor: "Gillian Flynn", categoria: "Thriller Psicológico", capa: "" },

    // Sobrenatural
    { titulo: "Você Ligou para o Sam", autor: "Dustin Thao", categoria: "Sobrenatural", capa: "" },
    { titulo: "Harry Potter e a Câmara Secreta", autor: "J.K. Rowling", categoria: "Sobrenatural", capa: "" },
    { titulo: "Cidade dos Ossos", autor: "Cassandra Clare", categoria: "Sobrenatural", capa: "" },
    { titulo: "Crepúsculo", autor: "Stephenie Meyer", categoria: "Sobrenatural", capa: "" },
    { titulo: "Os Instrumentos Mortais", autor: "Cassandra Clare", categoria: "Sobrenatural", capa: "" },
    { titulo: "Lua Nova", autor: "Stephenie Meyer", categoria: "Sobrenatural", capa: "" },

    // Paranormal
    { titulo: "Caraval: Finale", autor: "Stephanie Garber", categoria: "Paranormal", capa: "" },
    { titulo: "Crepúsculo", autor: "Stephenie Meyer", categoria: "Paranormal", capa: "" },
    { titulo: "Lua Nova", autor: "Stephenie Meyer", categoria: "Paranormal", capa: "" },
    { titulo: "Cidade das Cinzas", autor: "Cassandra Clare", categoria: "Paranormal", capa: "" },
    { titulo: "Feitiço", autor: "Sarah Pinborough", categoria: "Paranormal", capa: "" },
    { titulo: "Drácula", autor: "Bram Stoker", categoria: "Paranormal", capa: "" },

    // Crime/Investigação
    { titulo: "Sherlock Holmes", autor: "Arthur Conan Doyle", categoria: "Crime/Investigação", capa: "" },
    { titulo: "Assassinato no Expresso do Oriente", autor: "Agatha Christie", categoria: "Crime/Investigação", capa: "" },
    { titulo: "Morte no Nilo", autor: "Agatha Christie", categoria: "Crime/Investigação", capa: "" },
    { titulo: "O Código Da Vinci", autor: "Dan Brown", categoria: "Crime/Investigação", capa: "" },
    { titulo: "O Silêncio dos Inocentes", autor: "Thomas Harris", categoria: "Crime/Investigação", capa: "" },
    { titulo: "Anjos e Demônios", autor: "Dan Brown", categoria: "Crime/Investigação", capa: "" },

    // Medieval
    { titulo: "A Balada do Felizes para Nunca", autor: "Stephanie Garber", categoria: "Medieval", capa: "" },
    { titulo: "O Príncipe Cruel", autor: "Holly Black", categoria: "Medieval", capa: "" },
    { titulo: "Corte de Névoa e Fúria", autor: "Sarah J. Maas", categoria: "Medieval", capa: "" },
    { titulo: "Trono de Vidro", autor: "Sarah J. Maas", categoria: "Medieval", capa: "https://m.media-amazon.com/images/I/81yjSsr1IbL.jpg" },
    { titulo: "Principe Caspian", autor: "C. S. Lewis", categoria: "Medieval", capa: "" },
    { titulo: "A Rainha Vermelha", autor: "Victoria Aveyard", categoria: "Medieval", capa: "" },

    // Contos
    { titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry", categoria: "Contos", capa: "" },
    { titulo: "Alice no País das Maravilhas", autor: "Lewis Carroll", categoria: "Contos", capa: "" },
    { titulo: "Contos de Fadas dos Irmãos Grimm", autor: "Irmãos Grimm", categoria: "Contos", capa: "" },
    { titulo: "A Bela e a Fera", autor: "Jeanne-Marie Leprince", categoria: "Contos", capa: "" },
    { titulo: "O Mágico de Oz", autor: "L. Frank Baum", categoria: "Contos", capa: "" },
    { titulo: "Peter Pan", autor: "J.M. Barrie", categoria: "Contos", capa: "" },

    // Infantil
    { titulo: "Corajosas", autor: "Pam Gonçalves e Stephanie Noelle", categoria: "Infantil", capa: "" },
    { titulo: "Matilda", autor: "Roald Dahl", categoria: "Infantil", capa: "" },
    { titulo: "O Menino Maluquinho", autor: "Ziraldo", categoria: "Infantil", capa: "" },
    { titulo: "Diário de Pilar", autor: "Flávia Lins e Silva", categoria: "Infantil", capa: "" },
    { titulo: "Alice no País das Maravilhas", autor: "Lewis Carroll", categoria: "Infantil", capa: "" },
    { titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry", categoria: "Infantil", capa: "" },

    // Infantojuvenil
    { titulo: "O Leão, a Feiticeira e o Guarda-Roupa", autor: "C. S. Lewis", categoria: "Infantojuvenil", capa: "https://m.media-amazon.com/images/I/7158aW38zxL._AC_UF1000,1000_QL80_.jpg" },
    { titulo: "Harry Potter e o Cálice de Fogo", autor: "J.K. Rowling", categoria: "Infantojuvenil", capa: "https://m.media-amazon.com/images/I/81nTLN-kz7L.jpg" },
    { titulo: "Percy Jackson e o Mar de Monstros", autor: "Rick Riordan", categoria: "Infantojuvenil", capa: "https://m.media-amazon.com/images/I/91xsWEley5L._UF1000,1000_QL80_.jpg" },
    { titulo: "Extraordinário", autor: "R.J. Palacio", categoria: "Infantojuvenil", capa: "https://m.media-amazon.com/images/I/71I3OkYQI7L._UF1000,1000_QL80_.jpg" },
    { titulo: "Jogos Vorazes", autor: "Suzanne Collins", categoria: "Infantojuvenil", capa: "https://m.media-amazon.com/images/I/71WOkspHbOL._UF1000,1000_QL80_.jpg" },
    { titulo: "Coraline", autor: "Neil Gaiman", categoria: "Infantojuvenil", capa: "https://m.media-amazon.com/images/I/91DZobBc1BL.jpg" },

    // Livro único
    { titulo: "Todo Esse Tempo", autor: "Mikki Daughtry e Rachael Lippincott", categoria: "Livro único", capa: "https://m.media-amazon.com/images/I/8132cJm73bL._UF1000,1000_QL80_.jpg" },
    { titulo: "A Cinco Passos de Você", autor: "Rachael Lippincott", categoria: "Livro único", capa: "https://m.media-amazon.com/images/I/81Hv3wRgZpL._UF1000,1000_QL80_.jpg" },
    { titulo: "Os Dois Morrem no Final", autor: "Adam Silvera", categoria: "Livro único", capa: "https://m.media-amazon.com/images/I/81MVCxMWWoL._UF350,350_QL50_.jpg" },
    { titulo: "Extraordinário", autor: "R.J. Palacio", categoria: "Livro único", capa: "https://m.media-amazon.com/images/I/71I3OkYQI7L._UF1000,1000_QL80_.jpg" },
    { titulo: "A Biblioteca da Meia-Noite", autor: "Matt Haig", categoria: "Livro único", capa: "https://m.media-amazon.com/images/I/81iqH8dpjuL.jpg" },
    { titulo: "Verity", autor: "Colleen Hoover", categoria: "Livro único", capa: "https://m.media-amazon.com/images/I/9171o6AmnCL._UF1000,1000_QL80_.jpg" },

    // Saga/Séries
    { titulo: "Harry Potter", autor: "J.K. Rowling", categoria: "Saga/Séries", capa: "https://m.media-amazon.com/images/I/81ibfYk4qmL.jpg" },
    { titulo: "Percy Jackson", autor: "Rick Riordan", categoria: "Saga/Séries", capa: "https://m.media-amazon.com/images/I/81mfMi0ni+L._UF1000,1000_QL80_.jpg" },
    { titulo: "Jogos Vorazes", autor: "Suzanne Collins", categoria: "Saga/Séries", capa: "https://m.media-amazon.com/images/I/71WOkspHbOL._UF1000,1000_QL80_.jpg" },
    { titulo: "Caraval", autor: "Stephanie Garber", categoria: "Saga/Séries", capa: "https://m.media-amazon.com/images/I/81sGirC3z5L._UF1000,1000_QL80_.jpg" },
    { titulo: "As Crônicas de Nárnia A última batalha", autor: "C. S. Lewis", categoria: "Saga/Séries", capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReh38_WjJdyDos0sr7h7Zept91LU7FXHQQvg&s" },
    { titulo: "Trono de Vidro", autor: "Sarah J. Maas", categoria: "Saga/Séries", capa: "https://m.media-amazon.com/images/I/81yjSsr1IbL.jpg" }
];

const container = document.getElementById('livraria');

function renderizarBiblioteca() {
    const categoriasUnicas = [...new Set(livros.map(l => l.categoria))];

    categoriasUnicas.forEach(cat => {
        const secao = document.createElement('section');
        secao.className = 'categoria-container';
        secao.innerHTML = `<h2>${cat}</h2><div class="lista-livros"></div>`;

        const listaDiv = secao.querySelector('.lista-livros');
        const livrosFiltrados = livros.filter(l => l.categoria === cat);

        livrosFiltrados.forEach(livro => {
            const card = document.createElement('div');
            card.className = 'card-livro';
            
            // Se a capa estiver vazia, ele coloca uma imagem padrão
            const imagemExibir = livro.capa || "https://via.placeholder.com/150x220?text=Sem+Capa";

            card.innerHTML = `
                <img src="${imagemExibir}" alt="${livro.titulo}" class="capa-livro">
                <h3>${livro.titulo}</h3>
                <p><strong>Autor:</strong> ${livro.autor}</p>
            `;
            listaDiv.appendChild(card);
        });
        container.appendChild(secao);
    });
}

renderizarBiblioteca();