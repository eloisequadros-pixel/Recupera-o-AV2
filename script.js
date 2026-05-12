const livros = [
    // ROMANCE
    { titulo: "Eu Te Amei em Outra Vida", autor: "David Arnold", categoria: "Romance", capa: "https://m.media-amazon.com/images/I/81Jo8UAsqOL._AC_UF1000,1000_QL80_.jpg", sinopse: "Duas almas se reencontram em diferentes vidas enquanto tentam entender uma conexão que atravessa o tempo." },
    { titulo: "A Hipótese do Amor", autor: "Ali Hazelwood", categoria: "Romance", capa: "https://m.media-amazon.com/images/I/81LTEfXYgcL.jpg", sinopse: "Uma estudante finge estar em um relacionamento com um professor para convencer a melhor amiga de que seguiu em frente." },
    { titulo: "A Cinco Passos de Você", autor: "Rachael Lippincott", categoria: "Romance", capa: "https://m.media-amazon.com/images/I/81OBWkQ-o2L._AC_UF1000,1000_QL80_.jpg", sinopse: "Dois adolescentes com doenças graves se apaixonam, mas precisam manter distância para sobreviver." },
    { titulo: "Todo Esse Tempo", autor: "Mikki Daughtry e Rachael Lippincott", categoria: "Romance", capa: "https://m.media-amazon.com/images/I/715zhDUgi3L._AC_UF1000,1000_QL80_.jpg", sinopse: "Após um acidente, Kyle tenta lidar com o luto e encontra alguém que muda sua vida." },
    { titulo: "Os Dois Morrem no Final", autor: "Adam Silvera", categoria: "Romance", capa: "https://m.media-amazon.com/images/I/81MVCxMWWoL._UF350,350_QL50_.jpg", sinopse: "Dois garotos recebem a notícia de que morrerão em poucas horas e decidem viver intensamente seu último dia." },
    { titulo: "Vermelho, Branco e Sangue Azul", autor: "Casey McQuiston", categoria: "Romance", capa: "https://m.media-amazon.com/images/I/71SYepTUsDL.jpg", sinopse: "O filho da presidente dos EUA e um príncipe britânico passam de rivais a algo muito maior." },

    // TERROR
    { titulo: "Ed & Lorraine Warren: Demonologistas", autor: "Gerald Brittle", categoria: "Terror", capa: "https://m.media-amazon.com/images/I/91Cu2hkpMlL._UF1000,1000_QL80_.jpg", sinopse: "Relatos reais dos casos sobrenaturais investigados pelo famoso casal Warren." },
    { titulo: "O Iluminado", autor: "Stephen King", categoria: "Terror", capa: "https://m.media-amazon.com/images/I/81Q+pJi4NjL.jpg", sinopse: "Um homem enlouquece enquanto cuida de um hotel isolado durante o inverno." },
    { titulo: "Coraline", autor: "Neil Gaiman", categoria: "Terror", capa: "https://m.media-amazon.com/images/I/91DZobBc1BL.jpg", sinopse: "Uma garota encontra uma versão assustadora de sua família em um mundo secreto." },
    { titulo: "Drácula", autor: "Bram Stoker", categoria: "Terror", capa: "https://m.media-amazon.com/images/I/61MgodE1s0L._AC_UF1000,1000_QL80_.jpg", sinopse: "O lendário vampiro Conde Drácula espalha terror por onde passa." },
    { titulo: "Frankenstein", autor: "Mary Shelley", categoria: "Terror", capa: "https://m.media-amazon.com/images/I/81-OgmOxScL._AC_UF1000,1000_QL80_.jpg", sinopse: "Um cientista cria uma criatura que acaba fugindo do controle." },
    { titulo: "A Assombração da Casa da Colina", autor: "Shirley Jackson", categoria: "Terror", capa: "https://m.media-amazon.com/images/I/91TG18fSQeL._UF1000,1000_QL80_.jpg", sinopse: "Pessoas se hospedam em uma mansão famosa por acontecimentos paranormais." },

    // SUSPENSE
    { titulo: "Boa Garota Nunca Mais", autor: "Holly Jackson", categoria: "Suspense", capa: "https://m.media-amazon.com/images/I/81atsbPweKL._UF1000,1000_QL80_.jpg", sinopse: "Pip precisa enfrentar as consequências finais de uma investigação cheia de perigos." },
    { titulo: "A Empregada", autor: "Freida McFadden", categoria: "Suspense", capa: "https://m.media-amazon.com/images/I/81BdpMhm3iL.jpg", sinopse: "Uma empregada começa a desconfiar dos segredos sombrios da família para quem trabalha." },
    { titulo: "Paciente Silenciosa", autor: "Alex Michaelides", categoria: "Suspense", capa: "https://m.media-amazon.com/images/I/91R8S52UP6L.jpg", sinopse: "Uma mulher para de falar após ser acusada de matar o marido." },
    { titulo: "Garota Exemplar", autor: "Gillian Flynn", categoria: "Suspense", capa: "https://m.media-amazon.com/images/I/51Bda2VtwIL.jpg", sinopse: "O desaparecimento de uma mulher transforma o marido no principal suspeito." },
    { titulo: "Um de Nós Está Mentindo", autor: "Karen M. McManus", categoria: "Suspense", capa: "https://m.media-amazon.com/images/I/81r6K6pVipL.jpg", sinopse: "Cinco estudantes entram na detenção, mas apenas quatro saem vivos." },
    { titulo: "Nunca Minta", autor: "Freida McFadden", categoria: "Suspense", capa: "https://m.media-amazon.com/images/I/81-Hk3onFyL.jpg", sinopse: "Um casal preso em uma mansão descobre gravações perturbadoras da antiga moradora." },

    // MISTÉRIO
    { titulo: "Manual de Assassinato para Boas Garotas", autor: "Holly Jackson", categoria: "Mistério", capa: "https://m.media-amazon.com/images/I/81vTk3hdXEL._UF1000,1000_QL80_.jpg", sinopse: "Uma adolescente investiga um crime antigo que talvez tenha sido resolvido da maneira errada." },
    { titulo: "Boa Garota Segredo Mortal", autor: "Holly Jackson", categoria: "Mistério", capa: "https://m.media-amazon.com/images/I/81JPQxDDNeL._UF1000,1000_QL80_.jpg", sinopse: "Pip volta a investigar quando um novo desaparecimento abala sua cidade." },
    { titulo: "Morte no Nilo", autor: "Agatha Christie", categoria: "Mistério", capa: "https://m.media-amazon.com/images/I/911of0D5ktL._AC_UF1000,1000_QL80_.jpg", sinopse: "Hercule Poirot investiga um assassinato durante uma viagem pelo Egito." },
    { titulo: "Assassinato no Expresso do Oriente", autor: "Agatha Christie", categoria: "Mistério", capa: "https://m.media-amazon.com/images/I/712IZyH+HiL._AC_UF1000,1000_QL80_.jpg", sinopse: "Um passageiro é morto em um trem luxuoso e todos podem ser culpados." },
    { titulo: "O Homem de Giz", autor: "C.J. Tudor", categoria: "Mistério", capa: "https://m.media-amazon.com/images/I/71azIDnPN8L._UF1000,1000_QL80_.jpg", sinopse: "Desenhos misteriosos levam um grupo de amigos a descobrir um crime escondido." },

    // FANTASIA
    { titulo: "O Hobbit", autor: "J.R.R. Tolkien", categoria: "Fantasia", capa: "https://m.media-amazon.com/images/I/91M9xPIf10L._AC_UF1000,1000_QL80_.jpg", sinopse: "Bilbo Bolseiro embarca em uma aventura cheia de dragões e tesouros." },
    { titulo: "Caraval", autor: "Stephanie Garber", categoria: "Fantasia", capa: "https://m.media-amazon.com/images/I/71p66yY4htL.jpg", sinopse: "Duas irmãs entram em um jogo mágico onde nada é realmente o que parece." },
    { titulo: "Era Uma Vez um Coração Partido", autor: "Stephanie Garber", categoria: "Fantasia", capa: "https://m.media-amazon.com/images/I/91tgztS06QL.jpg", sinopse: "Evangeline faz um acordo perigoso com o misterioso Príncipe de Copas." },
    { titulo: "O Príncipe Cruel", autor: "Holly Black", categoria: "Fantasia", capa: "https://m.media-amazon.com/images/I/81FH6q0EqYS._AC_UF1000,1000_QL80_.jpg", sinopse: "Jude tenta sobreviver no cruel mundo das fadas enquanto enfrenta o príncipe Cardan." },
    { titulo: "Trono de Vidro", autor: "Sarah J. Maas", categoria: "Fantasia", capa: "https://m.media-amazon.com/images/I/81yjSsr1IbL.jpg", sinopse: "Uma assassina recebe a chance de conquistar sua liberdade em um torneio mortal." },

    // FICÇÃO CIENTÍFICA
    { titulo: "Duna", autor: "Frank Herbert", categoria: "Ficção Científica", capa: "https://m.media-amazon.com/images/I/817WfcVZakL._UF1000,1000_QL80_.jpg", sinopse: "Em um planeta desértico, Paul Atreides se envolve em disputas políticas e profecias poderosas." },
    { titulo: "Jogador Número 1", autor: "Ernest Cline", categoria: "Ficção Científica", capa: "https://m.media-amazon.com/images/I/917GI-fesVL._AC_UF1000,1000_QL80_.jpg", sinopse: "Um jovem entra em uma caça ao tesouro dentro de um mundo virtual gigantesco." },
    { titulo: "Maze Runner: Ordem de Extermínio", autor: "James Dashner", categoria: "Ficção Científica", capa: "https://m.media-amazon.com/images/I/61ILpNSiAuL._AC_UF1000,1000_QL80_.jpg", sinopse: "Thomas descobre mais sobre o vírus mortal que destruiu o mundo." },
    { titulo: "Maze Runner: Prova de Fogo", autor: "James Dashner", categoria: "Ficção Científica", capa: "https://m.media-amazon.com/images/I/61pGP-2ZaCL._AC_UF1000,1000_QL80_.jpg", sinopse: "Os sobreviventes enfrentam um deserto perigoso cheio de ameaças." },
    { titulo: "Maze Runner: Correr ou Morrer", autor: "James Dashner", categoria: "Ficção Científica", capa: "https://m.media-amazon.com/images/I/81UuGTd7RuL._AC_UF1000,1000_QL80_.jpg", sinopse: "Garotos presos em um labirinto precisam escapar antes que seja tarde." },
    { titulo: "Maze Runner: O Código da Febre", autor: "James Dashner", categoria: "Ficção Científica", capa: "https://m.media-amazon.com/images/I/91dF9b1mQTS._AC_UF1000,1000_QL80_.jpg", sinopse: "A origem do labirinto e dos experimentos finalmente é revelada." },

    // AVENTURA
    { titulo: "O Labirinto dos Ossos", autor: "Rick Riordan", categoria: "Aventura", capa: "https://m.media-amazon.com/images/I/81zsEZLq8yL._AC_UF1000,1000_QL80_.jpg", sinopse: "Dois irmãos entram em uma caça mundial por pistas secretas." },
    { titulo: "Percy Jackson e o Ladrão de Raios", autor: "Rick Riordan", categoria: "Aventura", capa: "https://m.media-amazon.com/images/I/81mfMi0ni+L._UF1000,1000_QL80_.jpg", sinopse: "Percy descobre que é filho de Poseidon e precisa impedir uma guerra entre deuses." },
    { titulo: "Harry Potter e a Pedra Filosofal", autor: "J.K. Rowling", categoria: "Aventura", capa: "https://m.media-amazon.com/images/I/61jgm6ooXzL._AC_UF1000,1000_QL80_.jpg", sinopse: "Harry descobre que é um bruxo e entra para Hogwarts." },
    { titulo: "A Ilha do Tesouro", autor: "Robert Louis Stevenson", categoria: "Aventura", capa: "https://m.media-amazon.com/images/I/81N-C60M53L._AC_UF1000,1000_QL80_.jpg", sinopse: "Um garoto encontra um mapa que leva a um tesouro pirata." },
    { titulo: "As Aventuras de Tom Sawyer", autor: "Mark Twain", categoria: "Aventura", capa: "https://m.media-amazon.com/images/I/81mWTlcwsaL.jpg", sinopse: "Tom vive confusões e aventuras às margens do rio Mississippi." },
    { titulo: "Viagem ao Centro da Terra", autor: "Júlio Verne", categoria: "Aventura", capa: "https://m.media-amazon.com/images/I/A1s+6nCSdmL.jpg", sinopse: "Un grupo explora um mundo escondido nas profundezas da Terra." },

    // DRAMA
    { titulo: "No Final Daquele Dia", autor: "Nina de Passos", categoria: "Drama", capa: "https://m.media-amazon.com/images/I/81lNznlFA8L.jpg", sinopse: "Uma história delicada sobre perdas, sentimentos e recomeços." },
    { titulo: "A Culpa é das Estrelas", autor: "John Green", categoria: "Drama", capa: "https://m.media-amazon.com/images/I/811ivBP1rsL._UF1000,1000_QL80_.jpg", sinopse: "Dois adolescentes com câncer vivem um romance inesquecível." },
    { titulo: "Mil Beijos de Garoto", autor: "Tillie Cole", categoria: "Drama", capa: "https://m.media-amazon.com/images/I/81vgyXZPgVL._UF1000,1000_QL80_.jpg", sinopse: "Um casal tenta cumprir uma promessa feita na infância." },
    { titulo: "Por Lugares Incríveis", autor: "Jennifer Niven", categoria: "Drama", capa: "https://m.media-amazon.com/images/I/918Maoi6OML.jpg", sinopse: "Dois jovens se aproximam enquanto enfrentam problemas emocionais." },
    { titulo: "Extraordinário", autor: "R.J. Palacio", categoria: "Drama", capa: "https://m.media-amazon.com/images/I/71I3OkYQI7L._UF1000,1000_QL80_.jpg", sinopse: "Um menino com deformação facial aprende sobre amizade e aceitação." },
    { titulo: "Cartas de Amor aos Mortos", autor: "Ava Dellaira", categoria: "Drama", capa: "https://m.media-amazon.com/images/I/81hN4RvrEVL._UF1000,1000_QL80_.jpg", sinopse: "Laurel escreve cartas para artistas falecidos enquanto enfrenta o luto." },

    // COMÉDIA
    { titulo: "Melhor do que nos Filmes", autor: "Lynn Painter", categoria: "Comédia", capa: "https://m.media-amazon.com/images/I/61y5iLUKS3L._AC_UF1000,1000_QL80_.jpg", sinopse: "Uma garota romântica acaba se aproximando do vizinho irritante." },
    { titulo: "Teto Para Dois", autor: "Beth O'Leary", categoria: "Comédia", capa: "https://m.media-amazon.com/images/I/81LbmZtfeoL._UF1000,1000_QL80_.jpg", sinopse: "Dois desconhecidos dividem o mesmo apartamento sem nunca se encontrar." },
    { titulo: "Fazendo Meu Filme", autor: "Paula Pimenta", categoria: "Comédia", capa: "https://m.media-amazon.com/images/I/813Xz4-o-gL._AC_UF1000,1000_QL80_.jpg", sinopse: "Fani tenta entender amizade, amor e adolescência." },
    { titulo: "Confissões de uma Garota Excluída", autor: "Thalita Rebouças", categoria: "Comédia", capa: "https://www.editoraarqueiro.com.br/media/upload/conteudos/9788580415797.jpg", sinopse: "Tetê precisa lidar com escola nova e situações engraçadas." },
    { titulo: "Diário de um Banana", autor: "Jeff Kinney", categoria: "Comédia", capa: "https://m.media-amazon.com/images/I/71fWaI5myqL.jpg", sinopse: "Greg conta de forma divertida os desastres da sua vida escolar." },
    { titulo: "Nick e Charlie", autor: "Alice Oseman", categoria: "Comédia", capa: "https://m.media-amazon.com/images/I/81Toei1tbnL._UF1000,1000_QL80_.jpg", sinopse: "Nick e Charlie enfrentam mudanças no relacionamento de forma leve e divertida." },

    // DISTOPIA
    { titulo: "Jogos Vorazes", autor: "Suzanne Collins", categoria: "Distopia", capa: "https://m.media-amazon.com/images/I/71WOkspHbOL._UF1000,1000_QL80_.jpg", sinopse: "Katniss participa de um jogo mortal televisionado pelo governo." },
    { titulo: "Em Chamas", autor: "Suzanne Collins", categoria: "Distopia", capa: "https://m.media-amazon.com/images/I/71hX09mm4rL._UF1000,1000_QL80_.jpg", sinopse: "A revolta contra a Capital começa a crescer." },
    { titulo: "A Esperança", autor: "Suzanne Collins", categoria: "Distopia", capa: "https://m.media-amazon.com/images/I/715ejknjS4L._UF1000,1000_QL80_.jpg", sinopse: "Katniss se torna o símbolo da revolução." },
    { titulo: "Divergente", autor: "Veronica Roth", categoria: "Distopia", capa: "https://m.media-amazon.com/images/I/81rSPlvS0hL.jpg", sinopse: "Uma sociedade divide as pessoas em facções baseadas em personalidades." },
    { titulo: "Maze Runner", autor: "James Dashner", categoria: "Distopia", capa: "https://m.media-amazon.com/images/I/71Zr3L19wYL._AC_UF1000,1000_QL80_.jpg", sinopse: "Jovens presos em um labirinto tentam sobreviver." },
    { titulo: "1984", autor: "George Orwell", categoria: "Distopia", capa: "https://m.media-amazon.com/images/I/91g5gcjTxsL._UF1000,1000_QL80_.jpg", sinopse: "Um governo controla completamente a vida das pessoas." },

    // ROMANCE DE ÉPOCA
    { titulo: "Orgulho e Preconceito", autor: "Jane Austen", categoria: "Romance de Época", capa: "https://m.media-amazon.com/images/I/719esIW3D7L.jpg", sinopse: "Elizabeth Bennet enfrenta orgulho, julgamentos e um romance inesperado." },
    { titulo: "Persuasão", autor: "Jane Austen", categoria: "Romance de Época", capa: "https://m.media-amazon.com/images/I/71s8nlbBMvL._AC_UF1000,1000_QL80_.jpg", sinopse: "Anne reencontra um amor do passado anos depois da separação." },
    { titulo: "Emma", autor: "Jane Austen", categoria: "Romance de Época", capa: "https://m.media-amazon.com/images/I/61BerFlhHxL._AC_UF1000,1000_QL80_.jpg", sinopse: "Emma tenta unir casais, mas acaba causando confusões." },
    { titulo: "Os Bridgertons: O Duque e Eu", autor: "Julia Quinn", categoria: "Romance de Época", capa: "https://m.media-amazon.com/images/I/61AYFaPcRfL._AC_UF1000,1000_QL80_.jpg", sinopse: "Daphne e Simon fingem um relacionamento que começa a ficar real." },
    { titulo: "Jane Eyre", autor: "Charlotte Brontë", categoria: "Romance de Época", capa: "https://m.media-amazon.com/images/I/911HhiTClmS._AC_UF1000,1000_QL80_.jpg", sinopse: "Uma jovem órfã encontra amor e mistérios em uma mansão antiga." },
    { titulo: "O Morro dos Ventos Uivantes", autor: "Emily Brontë", categoria: "Romance de Época", capa: "https://m.media-amazon.com/images/I/61fgfRmbqqL._AC_UF1000,1000_QL80_.jpg", sinopse: "Uma história intensa de amor, obsessão e vingança." },

    // ENEMIES TO LOVERS
    { titulo: "Era Uma Vez um Coração Partido", autor: "Stephanie Garber", categoria: "Enemies to Lovers", capa: "https://m.media-amazon.com/images/I/91tgztS06QL._UF350,350_QL50_.jpg", sinopse: "Evangeline faz um acordo perigoso com o charmoso Jacks." },
    { titulo: "O Príncipe Cruel", autor: "Holly Black", categoria: "Enemies to Lovers", capa: "https://m.media-amazon.com/images/I/81FH6q0EqYS._AC_UF1000,1000_QL80_.jpg", sinopse: "Jude enfrenta o cruel príncipe Cardan no reino das fadas." },
    { titulo: "Corte de Espinhos e Rosas", autor: "Sarah J. Maas", categoria: "Enemies to Lovers", capa: "https://m.media-amazon.com/images/I/81OmtVkUTcL._UF1000,1000_QL80_.jpg", sinopse: "Feyre é levada ao mundo feérico após matar uma criatura mágica." },
    { titulo: "A Hipótese do Amor", autor: "Ali Hazelwood", categoria: "Enemies to Lovers", capa: "https://m.media-amazon.com/images/I/81LTEfXYgcL.jpg", sinopse: "Um namoro falso aproxima duas pessoas completamente opostas." },
    { titulo: "Imperfeitos", autor: "Christina Lauren", categoria: "Enemies to Lovers", capa: "https://m.media-amazon.com/images/I/616U6mSP3lL.jpg", sinopse: "Dois inimigos acabam presos juntos em uma viagem desastrosa." },
    { titulo: "Amor, Teoricamente", autor: "Ali Hazelwood", categoria: "Enemies to Lovers", capa: "https://m.media-amazon.com/images/I/81mBAOFbqKL._UF1000,1000_QL80_.jpg", sinopse: "Uma física teórica se envolve com um rival acadêmico inesperado." },

    // FRIENDS TO LOVERS
    { titulo: "Normal People", autor: "Sally Rooney", categoria: "Friends to Lovers", capa: "https://m.media-amazon.com/images/I/71jrp43TCcL.jpg", sinopse: "Dois jovens mantêm uma conexão intensa ao longo dos anos." },
    { titulo: "Heartstopper Volume 2", autor: "Alice Oseman", categoria: "Friends to Lovers", capa: "https://m.media-amazon.com/images/I/91Moizx+nCL.jpg", sinopse: "Nick e Charlie começam a entender melhor seus sentimentos." },
    { titulo: "Heartstopper Volume 3", autor: "Alice Oseman", categoria: "Friends to Lovers", capa: "https://m.media-amazon.com/images/I/91mNdryjTlL.jpg", sinopse: "O relacionamento dos dois cresce enquanto enfrentam inseguranças." },
    { titulo: "Teto Para Dois", autor: "Beth O'Leary", categoria: "Friends to Lovers", capa: "https://m.media-amazon.com/images/I/61TAfUkC13L.jpg", sinopse: "A convivência indireta aproxima dois desconhecidos de forma inesperada." },
    { titulo: "Férias com Você", autor: "Emily Henry", categoria: "Friends to Lovers", capa: "https://m.media-amazon.com/images/I/718TdxsWsrL.jpg", sinopse: "Dois melhores amigos fazem uma última viagem juntos para salvar a amizade." },
    { titulo: "Hoje, Depois, Amanhã", autor: "Rachel Lynn Solomon", categoria: "Friends to Lovers", capa: "https://m.media-amazon.com/images/I/81N6i6LXsvL.jpg", sinopse: "Rivais escolares acabam criando uma conexão inesperada durante a formatura." },

    // MITOLOGIA
    { titulo: "Percy Jackson e os Heróis do Olimpo: A Marca de Atena", autor: "Rick Riordan", categoria: "Mitologia", capa: "https://m.media-amazon.com/images/I/81pkBpLri5L._UF1000,1000_QL80_.jpg", sinopse: "Semideuses embarcam em uma missão perigosa para salvar o mundo." },
    { titulo: "Percy Jackson e o Ladrão de Raios", autor: "Rick Riordan", categoria: "Mitologia", capa: "https://m.media-amazon.com/images/I/A1UjcPz4gZL._AC_UF1000,1000_QL80_.jpg", sinopse: "Percy descobre ser filho de Poseidon e entra no mundo dos deuses gregos." },
    { titulo: "A Maldição do Titã", autor: "Rick Riordan", categoria: "Mitologia", capa: "https://m.media-amazon.com/images/I/71ps3x0cJ9L.jpg", sinopse: "Percy enfrenta monstros e uma antiga profecia." },
    { titulo: "O Sangue do Olimpo", autor: "Rick Riordan", categoria: "Mitologia", capa: "https://m.media-amazon.com/images/I/8129Y4g43+L._UF1000,1000_QL80_.jpg", sinopse: "Os heróis precisam impedir a destruição do Olimpo." },
    { titulo: "Percy Jackson e O Mar de Monstros", autor: "Rick Riordan", categoria: "Mitologia", capa: "https://m.media-amazon.com/images/I/A1lGv6UttGL._AC_UF1000,1000_QL80_.jpg", sinopse: "Percy atravessa mares perigosos para salvar o Acampamento Meio-Sangue." },
    { titulo: "A Canção de Aquiles", autor: "Madeline Miller", categoria: "Mitologia", capa: "https://m.media-amazon.com/images/I/81yp6F62ltS._UF1000,1000_QL80_.jpg", sinopse: "A história de Aquiles e Pátroclo é recontada de forma emocionante." },

    // POESIA
    { titulo: "As Estrelas Sempre Brilham Acima das Nuvens Escuras", autor: "Jéssica Martins", categoria: "Poesia", capa: "https://m.media-amazon.com/images/I/81R+oTGHiYL.jpg", sinopse: "Poemas delicados sobre sentimentos, esperança e recomeços." },
    { titulo: "Outros Jeitos de Usar a Boca", autor: "Rupi Kaur", categoria: "Poesia", capa: "https://m.media-amazon.com/images/I/81jys4fmxhL._AC_UF1000,1000_QL80_.jpg", sinopse: "Poemas intensos sobre amor, dor e autoconhecimento." },
    { titulo: "Textos Cruéis Demais Para Serem Lidos Rapidamente", autor: "Igor Pires Simões", categoria: "Poesia", capa: "https://m.media-amazon.com/images/I/61mzLkXJdXL.jpg", sinopse: "Reflexões sinceras sobre emoções e relações humanas." },
    { titulo: "O Que o Sol Faz com as Flores", autor: "Rupi Kaur", categoria: "Poesia", capa: "https://m.media-amazon.com/images/I/71E+l6lgfoL._AC_UF1000,1000_QL80_.jpg", sinopse: "Uma coletânea poética sobre crescimento e cura emocional." },
    { titulo: "Todas as Suas Imperfeições", autor: "Colleen Hoover", categoria: "Poesia", capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuJjjNo9FVg4ix9MedReC2tYTarUhFo5xkAw&s", sinopse: "Um casal enfrenta dores e imperfeições dentro do relacionamento." },
    { titulo: "Eu Sou de Primavera", autor: "Fernanda Mello", categoria: "Poesia", capa: "https://m.media-amazon.com/images/I/81dHCTE2daL.jpg", sinopse: "Poemas leves e sensíveis sobre a beleza da vida." },

    // CLÁSSICOS
    { titulo: "Alice no País das Maravilhas", autor: "Lewis Carroll", categoria: "Clássicos", capa: "https://cdn.awsli.com.br/600x450/2495/2495784/produto/271180878e1cecae6ff.jpg", sinopse: "Alice cai em um mundo mágico cheio de personagens excêntricos." },
    { titulo: "Orgulho e Preconceito", autor: "Jane Austen", categoria: "Clássicos", capa: "https://m.media-amazon.com/images/I/71Xta4Nf7uL._AC_UF1000,1000_QL80_.jpg", sinopse: "Elizabeth Bennet desafia costumes e preconceitos da sociedade inglesa." },
    { titulo: "Dom Casmurro", autor: "Machado de Assis", categoria: "Clássicos", capa: "https://m.media-amazon.com/images/I/61x1ZHomWUL.jpg", sinopse: "Bentinho relembra sua história com Capitu e questiona o passado." },
    { titulo: "O Morro dos Ventos Uivantes", autor: "Emily Brontë", categoria: "Clássicos", capa: "https://m.media-amazon.com/images/I/81LIVAOaZHL._AC_UF1000,1000_QL80_.jpg", sinopse: "Um romance marcado por obsessão, vingança e sofrimento." },
    { titulo: "Anne de Green Gables", autor: "L. M. Montgomery", categoria: "Clássicos", capa: "https://m.media-amazon.com/images/I/71HIiVIqw5L.jpg", sinopse: "Anne transforma a vida de todos com sua imaginação e alegria." },
    { titulo: "Jane Eyre", autor: "Charlotte Brontë", categoria: "Clássicos", capa: "https://m.media-amazon.com/images/I/613Wah-Tp2S._AC_UF1000,1000_QL80_.jpg", sinopse: "Uma jovem órfã busca independência e amor em meio a mistérios." },

    // AUTOAJUDA
    { titulo: "A Coragem de Ser Imperfeito", autor: "Brené Brown", categoria: "Autoajuda", capa: "https://m.media-amazon.com/images/I/61rRRbfINJL.jpg", sinopse: "Um livro sobre aceitar vulnerabilidades e viver com autenticidade." },
    { titulo: "Hábitos Atômicos", autor: "James Clear", categoria: "Autoajuda", capa: "https://m.media-amazon.com/images/I/81eT2pjx4jL._AC_UF1000,1000_QL80_.jpg", sinopse: "Pequenas mudanças podem transformar completamente a rotina." },
    { titulo: "O Poder do Hábito", autor: "Charles Duhigg", categoria: "Autoajuda", capa: "https://m.media-amazon.com/images/I/815iPX0SgkL.jpg", sinopse: "Explica como hábitos funcionam e como podem ser mudados." },
    { titulo: "As Coisas que Você Só Vê Quando Desacelera", autor: "Haemin Sunim", categoria: "Autoajuda", capa: "https://m.media-amazon.com/images/I/41NtijywT3L._AC_UF1000,1000_QL80_.jpg", sinopse: "Reflexões sobre calma, equilíbrio e vida interior." },
    { titulo: "Essencialismo", autor: "Greg McKeown", categoria: "Autoajuda", capa: "https://m.media-amazon.com/images/I/71HuZRl-XeL.jpg", sinopse: "Mostra como focar apenas no que realmente importa." },
    { titulo: "Mindset", autor: "Carol S. Dweck", categoria: "Autoajuda", capa: "https://m.media-amazon.com/images/I/81D1T67ZflL._UF1000,1000_QL80_.jpg", sinopse: "Explica como a mentalidade influencia crescimento e aprendizado." },

    // BIOGRAFIA
    { titulo: "Anne Frank: O Diário de Anne Frank", autor: "Anne Frank", categoria: "Biografia", capa: "https://m.media-amazon.com/images/I/91tOJgXRfzL.jpg", sinopse: "O diário real de uma adolescente escondida durante a Segunda Guerra Mundial." },
    { titulo: "Eu Sou Malala", autor: "Malala Yousafzai", categoria: "Biografia", capa: "https://m.media-amazon.com/images/I/71zOWBGEUGL.jpg", sinopse: "A história da jovem que lutou pelo direito à educação." },
    { titulo: "Longa Caminhada até a Liberdade", autor: "Nelson Mandela", categoria: "Biografia", capa: "https://m.media-amazon.com/images/I/61fNcPM8LcL.jpg", sinopse: "Mandela conta sua trajetória contra o apartheid." },
    { titulo: "A Menina que Roubava Livros", autor: "Markus Zusak", categoria: "Biografia", capa: "https://m.media-amazon.com/images/I/61L+4OBhm-L.jpg", sinopse: "Durante a guerra, uma garota encontra conforto nos livros." },
    { titulo: "Steve Jobs", autor: "Walter Isaacson", categoria: "Biografia", capa: "https://m.media-amazon.com/images/I/71mmowWE5iL._AC_UF1000,1000_QL80_.jpg", sinopse: "A vida e a carreira do criador da Apple." },
    { titulo: "Minha História", autor: "Michelle Obama", categoria: "Biografia", capa: "https://m.media-amazon.com/images/I/81Ed9yMQWIL.jpg", sinopse: "Michelle Obama compartilha sua trajetória pessoal e profissional." },

    // HQS/MANGÁS
    { titulo: "Heartstopper Volume 1", autor: "Alice Oseman", categoria: "HQs/Mangás", capa: "https://m.media-amazon.com/images/I/81vw0gIzn9L.jpg", sinopse: "Charlie e Nick criam uma amizade que se transforma em algo maior." },
    { titulo: "Heartstopper Volume 2", autor: "Alice Oseman", categoria: "HQs/Mangás", capa: "https://m.media-amazon.com/images/I/91Moizx+nCL.jpg", sinopse: "Nick começa a descobrir mais sobre si mesmo e seus sentimentos." },
    { titulo: "Heartstopper Volume 3", autor: "Alice Oseman", categoria: "HQs/Mangás", capa: "https://m.media-amazon.com/images/I/91mNdryjTlL.jpg", sinopse: "O casal enfrenta desafios emocionais enquanto fortalece a relação." },
    { titulo: "Death Note", autor: "Tsugumi Ohba", categoria: "HQs/Mangás", capa: "https://www.jbchost.com.br/editorajbc/wp-content/uploads/2013/06/dn-black-edition-01-770x1169.jpg", sinopse: "Um estudante encontra um caderno capaz de matar qualquer pessoa." },
    { titulo: "Demon Slayer", autor: "Koyoharu Gotouge", categoria: "HQs/Mangás", capa: "https://m.media-amazon.com/images/I/71oZmNhST-L._AC_UF1000,1000_QL80_.jpg", sinopse: "Tanjiro luta contra demônios para salvar sua irmã." },
    { titulo: "Jujutsu Kaisen", autor: "Gege Akutami", categoria: "HQs/Mangás", capa: "https://m.media-amazon.com/images/I/81jxwTCbzTL._UF1000,1000_QL80_.jpg", sinopse: "Um garoto entra no mundo das maldições e feiticeiros poderosos." },

    // THRILLER PSICOLÓGICO
    { titulo: "Jogo Fatal", autor: "Pablo de Santis", categoria: "Thriller Psicológico", capa: "https://m.media-amazon.com/images/I/6184ycjKSdL.jpg", sinopse: "Um jogo misterioso coloca os participantes em situações perigosas." },
    { titulo: "Paciente Silenciosa", autor: "Alex Michaelides", categoria: "Thriller Psicológico", capa: "https://m.media-amazon.com/images/I/91R8S52UP6L.jpg", sinopse: "Uma mulher acusada de assassinato para de falar completamente." },
    { titulo: "Verity", autor: "Colleen Hoover", categoria: "Thriller Psicológico", capa: "https://m.media-amazon.com/images/I/91SDZ2eUj+L.jpg", sinopse: "Uma escritora encontra manuscritos perturbadores enquanto termina um livro." },
    { titulo: "A Empregada", autor: "Freida McFadden", categoria: "Thriller Psicológico", capa: "https://m.media-amazon.com/images/I/81BdpMhm3iL.jpg", sinopse: "Segredos assustadores surgem dentro da casa onde Millie trabalha." },
    { titulo: "Nunca Minta", autor: "Freida McFadden", categoria: "Thriller Psicológico", capa: "https://m.media-amazon.com/images/I/81-Hk3onFyL.jpg", sinopse: "Um casal preso em uma mansão descobre fitas assustadoras." },
    { titulo: "Garota Exemplar", autor: "Gillian Flynn", categoria: "Thriller Psicológico", capa: "https://m.media-amazon.com/images/I/71MpXbZI42L._UF350,350_QL50_.jpg", sinopse: "Um desaparecimento revela mentiras e manipulações perigosas." },

    // SOBRENATURAL
    { titulo: "Você Ligou para o Sam", autor: "Dustin Thao", categoria: "Sobrenatural", capa: "https://m.media-amazon.com/images/I/81O3WbIbKNL.jpg", sinopse: "Julie consegue falar com o namorado falecido através de ligações misteriosas." },
    { titulo: "Harry Potter e a Câmara Secreta", autor: "J.K. Rowling", categoria: "Sobrenatural", capa: "https://m.media-amazon.com/images/I/81jbivNEVML.jpg", sinopse: "Harry enfrenta uma ameaça sombria escondida em Hogwarts." },
    { titulo: "Cidade dos Ossos", autor: "Cassandra Clare", categoria: "Sobrenatural", capa: "https://m.media-amazon.com/images/I/81D9n68w-CL._AC_UF1000,1000_QL80_.jpg", sinopse: "Clary descobre um mundo secreto cheio de caçadores de sombras e criaturas mágicas." },
    { titulo: "Crepúsculo", autor: "Stephenie Meyer", categoria: "Sobrenatural", capa: "https://m.media-amazon.com/images/I/618fXbK+OkL.jpg", sinopse: "Bella se apaixona por um vampiro misterioso." },
    { titulo: "Cidade de Vidro", autor: "Cassandra Clare", categoria: "Sobrenatural", capa: "https://http2.mlstatic.com/D_NQ_NP_713018-MLA83939969839_042025-O.webp", sinopse: "Clary viaja para a cidade dos caçadores de sombras em busca de respostas." },
    { titulo: "Lua Nova", autor: "Stephenie Meyer", categoria: "Sobrenatural", capa: "https://m.media-amazon.com/images/I/7153D5oFumL.jpg", sinopse: "Bella enfrenta a dor da ausência de Edward enquanto perigos sobrenaturais surgem." },

    // PARANORMAL
    { titulo: "Caraval: Finale", autor: "Stephanie Garber", categoria: "Paranormal", capa: "https://m.media-amazon.com/images/I/91bQoD96I1L._AC_UF1000,1000_QL80_.jpg", sinopse: "Segredos mágicos e escolhas perigosas mudam o destino de todos." },
    { titulo: "Crepúsculo", autor: "Stephenie Meyer", categoria: "Paranormal", capa: "https://m.media-amazon.com/images/I/618fXbK+OkL.jpg", sinopse: "Bella entra em um romance cercado por vampiros e mistérios." },
    { titulo: "Lua Nova", autor: "Stephenie Meyer", categoria: "Paranormal", capa: "https://m.media-amazon.com/images/I/7153D5oFumL.jpg", sinopse: "Lobisomens e vampiros entram em conflito enquanto Bella tenta seguir em frente." },
    { titulo: "Cidade das Cinzas", autor: "Cassandra Clare", categoria: "Paranormal", capa: "https://m.media-amazon.com/images/I/81FSo0VuLJL.jpg", sinopse: "Clary enfrenta novos perigos no mundo sobrenatural." },
    { titulo: "Feitiço", autor: "Sarah Pinborough", categoria: "Paranormal", capa: "https://m.media-amazon.com/images/I/81z0BcisXFL.jpg", sinopse: "Um conto sombrio inspirado em histórias clássicas de princesas." },
    { titulo: "Drácula", autor: "Bram Stoker", categoria: "Paranormal", capa: "https://m.media-amazon.com/images/I/81mDS7CO2YL._AC_UF1000,1000_QL80_.jpg", sinopse: "O lendário vampiro espalha medo e mistério pela Europa." },

    // CRIME/INVESTIGAÇÃO
    { titulo: "Sherlock Holmes", autor: "Arthur Conan Doyle", categoria: "Crime/Investigação", capa: "https://m.media-amazon.com/images/I/71pUxLqTOAL.jpg", sinopse: "O famoso detetive resolve crimes usando lógica e observação." },
    { titulo: "Assassinato no Expresso do Oriente", autor: "Agatha Christie", categoria: "Crime/Investigação", capa: "https://m.media-amazon.com/images/I/71qRxmALcsL._AC_UF1000,1000_QL80_.jpg", sinopse: "Poirot investiga um assassinato em um trem luxuoso." },
    { titulo: "Morte no Nilo", autor: "Agatha Christie", categoria: "Crime/Investigação", capa: "https://m.media-amazon.com/images/I/911of0D5ktL._AC_UF1000,1000_QL80_.jpg", sinopse: "Um assassinato durante um cruzeiro pelo Egito intriga Hercule Poirot." },
    { titulo: "O Código Da Vinci", autor: "Dan Brown", categoria: "Crime/Investigação", capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8cHP1hNaCtONoJ68wuluCgZ8pcF7x4g0kuw&s", sinopse: "Um professor desvenda pistas escondidas em obras de arte famosas." },
    { titulo: "O Silêncio dos Inocentes", autor: "Thomas Harris", categoria: "Crime/Investigação", capa: "https://m.media-amazon.com/images/I/51iUTsAbgbL._AC_UF1000,1000_QL80_.jpg", sinopse: "Uma agente do FBI procura um assassino com ajuda de um criminoso perigoso." },
    { titulo: "Anjos e Demônios", autor: "Dan Brown", categoria: "Crime/Investigação", capa: "https://m.media-amazon.com/images/I/71RUdQ2djGL._UF1000,1000_QL80_.jpg", sinopse: "Robert Langdon tenta impedir um ataque envolvendo uma sociedade secreta." },

    // MEDIEVAL
    { titulo: "A Balada do Felizes para Nunca", autor: "Stephanie Garber", categoria: "Medieval", capa: "https://m.media-amazon.com/images/I/91TuTFpkT1L._UF1000,1000_QL80_.jpg", sinopse: "Evangeline precisa enfrentar magia, maldições e escolhas dolorosas." },
    { titulo: "O Príncipe Cruel", autor: "Holly Black", categoria: "Medieval", capa: "https://m.media-amazon.com/images/I/81FH6q0EqYS._AC_UF1000,1000_QL80_.jpg", sinopse: "Jude tenta conquistar poder no reino das fadas." },
    { titulo: "Corte de Névoa e Fúria", autor: "Sarah J. Maas", categoria: "Medieval", capa: "https://m.media-amazon.com/images/I/91Sn67XUSHL._AC_UF1000,1000_QL80_.jpg", sinopse: "Feyre descobre novos poderes e alianças no mundo feérico." },
    { titulo: "Trono de Vidro", autor: "Sarah J. Maas", categoria: "Medieval", capa: "https://m.media-amazon.com/images/I/81yjSsr1IbL.jpg", sinopse: "Uma assassina poderosa luta contra forças sombrias em um reino mágico." },
    { titulo: "Principe Caspian", autor: "C. S. Lewis", categoria: "Medieval", capa: "https://m.media-amazon.com/images/I/91X2FbLu9oL._AC_UF1000,1000_QL80_.jpg", sinopse: "Os irmãos Pevensie retornam a Nárnia para ajudar um príncipe exilado." },
    { titulo: "A Rainha Vermelha", autor: "Victoria Aveyard", categoria: "Medieval", capa: "https://m.media-amazon.com/images/I/81DQMKmWvCL._UF1000,1000_QL80_.jpg", sinopse: "Em um reino dividido por sangue, Mare descobre poderes perigosos." },

    // CONTOS
    { titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry", categoria: "Contos", capa: "https://m.media-amazon.com/images/I/81SVIwe5L9L._UF1000,1000_QL80_.jpg", sinopse: "Um pequeno viajante aprende sobre amizade, amor e humanidade." },
    { titulo: "Alice no País das Maravilhas", autor: "Lewis Carroll", categoria: "Contos", capa: "https://cartolaeditora.com.br/wp-content/uploads/2022/01/capa-alice-no-pais-do-espelho.jpg", sinopse: "Alice entra em um mundo mágico cheio de criaturas estranhas." },
    { titulo: "Contos de Fadas dos Irmãos Grimm", autor: "Irmãos Grimm", categoria: "Contos", capa: "https://m.media-amazon.com/images/I/81zuKriqsnL._UF1000,1000_QL80_.jpg", sinopse: "Histórias clássicas repletas de magia e ensinamentos." },
    { titulo: "A Bela e a Fera", autor: "Jeanne-Marie Leprince", categoria: "Contos", capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS00UXUfjO1Sei2jFqtpIw7F-UzMM-awnqaqg&s", sinopse: "Bela descobre a verdadeira essência de uma criatura amaldiçoada." },
    { titulo: "O Mágico de Oz", autor: "L. Frank Baum", categoria: "Contos", capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdcjfVPRKYxttOD5GWvgf8BrgR_SRvSK_N7A&s", sinopse: "Dorothy atravessa uma terra mágica tentando voltar para casa." },
    { titulo: "Peter Pan", autor: "J.M. Barrie", categoria: "Contos", capa: "https://m.media-amazon.com/images/I/81r7M443JBL.jpg", sinopse: "Peter leva Wendy para aventuras na Terra do Nunca." },

    // INFANTIL
    { titulo: "Corajosas", autor: "Pam Gonçalves e Stephanie Noelle", categoria: "Infantil", capa: "https://m.media-amazon.com/images/I/81M0uXhjslL._UF1000,1000_QL80_.jpg", sinopse: "Princesas vivem aventuras mostrando coragem e independência." },
    { titulo: "Matilda", autor: "Roald Dahl", categoria: "Infantil", capa: "https://m.media-amazon.com/images/I/71nOgXzsvDL._UF1000,1000_QL80_.jpg", sinopse: "Uma menina muito inteligente descobre poderes especiais." },
    { titulo: "O Menino Maluquinho", autor: "Ziraldo", categoria: "Infantil", capa: "https://m.media-amazon.com/images/I/81UqOgnaQhL._UF1000,1000_QL80_.jpg", sinopse: "As aventuras divertidas de um garoto cheio de imaginação." },
    { titulo: "Diário de Pilar", autor: "Flávia Lins e Silva", categoria: "Infantil", capa: "https://m.media-amazon.com/images/I/91gvg5ZsstL.jpg", sinopse: "Pilar viaja pelo mundo usando uma rede mágica." },
    { titulo: "Alice no País das Maravilhas", autor: "Lewis Carroll", categoria: "Infantil", capa: "https://cartolaeditora.com.br/wp-content/uploads/2022/01/capa-alice-no-pais-do-espelho.jpg", sinopse: "Alice encontra criaturas mágicas em um mundo fantástico." },
    { titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry", categoria: "Infantil", capa: "https://m.media-amazon.com/images/I/81SVIwe5L9L._UF1000,1000_QL80_.jpg", sinopse: "Um príncipe viajante aprende sobre sentimentos e amizade." },

    // INFANTOJUVENIL
    { titulo: "O Leão, a Feiticeira e o Guarda-Roupa", autor: "C. S. Lewis", categoria: "Infantojuvenil", capa: "https://m.media-amazon.com/images/I/7158aW38zxL._AC_UF1000,1000_QL80_.jpg", sinopse: "Crianças descobrem um reino mágico escondido dentro de um guarda-roupa." },
    { titulo: "Harry Potter e o Cálice de Fogo", autor: "J.K. Rowling", categoria: "Infantojuvenil", capa: "https://m.media-amazon.com/images/I/81nTLN-kz7L.jpg", sinopse: "Harry participa de um torneio perigoso entre escolas de magia." },
    { titulo: "Percy Jackson e o Mar de Monstros", autor: "Rick Riordan", categoria: "Infantojuvenil", capa: "https://m.media-amazon.com/images/I/91xsWEley5L._UF1000,1000_QL80_.jpg", sinopse: "Percy enfrenta criaturas mitológicas em uma missão no mar." },
    { titulo: "Extraordinário", autor: "R.J. Palacio", categoria: "Infantojuvenil", capa: "https://m.media-amazon.com/images/I/71I3OkYQI7L._UF1000,1000_QL80_.jpg", sinopse: "Um garoto enfrenta desafios escolares enquanto tenta ser aceito." },
    { titulo: "Jogos Vorazes", autor: "Suzanne Collins", categoria: "Infantojuvenil", capa: "https://m.media-amazon.com/images/I/71WOkspHbOL._UF1000,1000_QL80_.jpg", sinopse: "Katniss luta para sobreviver em uma competição mortal." },
    { titulo: "Coraline", autor: "Neil Gaiman", categoria: "Infantojuvenil", capa: "https://m.media-amazon.com/images/I/91DZobBc1BL.jpg", sinopse: "Uma garota encontra um mundo secreto assustador atrás de uma porta." },

    // LIVRO ÚNICO
    { titulo: "Todo Esse Tempo", autor: "Mikki Daughtry e Rachael Lippincott", categoria: "Livro único", capa: "https://m.media-amazon.com/images/I/8132cJm73bL._UF1000,1000_QL80_.jpg", sinopse: "Kyle tenta reconstruir sua vida após uma grande perda." },
    { titulo: "A Cinco Passos de Você", autor: "Rachael Lippincott", categoria: "Livro único", capa: "https://m.media-amazon.com/images/I/81Hv3wRgZpL._UF1000,1000_QL80_.jpg", sinopse: "Dois jovens se apaixonam mesmo sem poder se tocar." },
    { titulo: "Os Dois Morrem no Final", autor: "Adam Silvera", categoria: "Livro único", capa: "https://m.media-amazon.com/images/I/81MVCxMWWoL._UF350,350_QL50_.jpg", sinopse: "Dois desconhecidos vivem intensamente seu último dia de vida." },
    { titulo: "Extraordinário", autor: "R.J. Palacio", categoria: "Livro único", capa: "https://m.media-amazon.com/images/I/71I3OkYQI7L._UF1000,1000_QL80_.jpg", sinopse: "Um menino aprende a enfrentar o mundo sendo diferente." },
    { titulo: "A Biblioteca da Meia-Noite", autor: "Matt Haig", categoria: "Livro único", capa: "https://m.media-amazon.com/images/I/81iqH8dpjuL.jpg", sinopse: "Nora viaja entre vidas alternativas para descobrir o que realmente importa." },
    { titulo: "Verity", autor: "Colleen Hoover", categoria: "Livro único", capa: "https://m.media-amazon.com/images/I/9171o6AmnCL._UF1000,1000_QL80_.jpg", sinopse: "Uma escritora encontra segredos perturbadores escondidos em manuscritos." },

    // SAGA/SÉRIES
    { titulo: "Harry Potter", autor: "J.K. Rowling", categoria: "Saga/Séries", capa: "https://m.media-amazon.com/images/I/81ibfYk4qmL.jpg", sinopse: "Um jovem bruxo enfrenta forças sombrias em Hogwarts." },
    { titulo: "Percy Jackson", autor: "Rick Riordan", categoria: "Saga/Séries", capa: "https://m.media-amazon.com/images/I/81mfMi0ni+L._UF1000,1000_QL80_.jpg", sinopse: "Um semideus embarca em aventuras inspiradas na mitologia grega." },
    { titulo: "Jogos Vorazes", autor: "Suzanne Collins", categoria: "Saga/Séries", capa: "https://m.media-amazon.com/images/I/71WOkspHbOL._UF1000,1000_QL80_.jpg", sinopse: "Katniss desafia um governo cruel em uma sociedade distópica." },
    { titulo: "Caraval", autor: "Stephanie Garber", categoria: "Saga/Séries", capa: "https://m.media-amazon.com/images/I/81sGirC3z5L._UF1000,1000_QL80_.jpg", sinopse: "Duas irmãs entram em um jogo mágico cheio de mistérios." },
    { titulo: "As Crônicas de Nárnia: A Última Batalha", autor: "C. S. Lewis", categoria: "Saga/Séries", capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReh38_WjJdyDos0sr7h7Zept91LU7FXHQQvg&s", sinopse: "O destino final de Nárnia é decidido em uma grande batalha." },
    { titulo: "Trono de Vidro", autor: "Sarah J. Maas", categoria: "Saga/Séries", capa: "https://m.media-amazon.com/images/I/81yjSsr1IbL.jpg", sinopse: "Uma assassina poderosa luta contra forças sombrias em um reino mágico." }
];

const container = document.getElementById('livraria');
const searchInput = document.querySelector('.search-bar input'); // Seleciona o campo de busca

// FUNÇÃO PRINCIPAL PARA RENDERIZAR (AGORA COM FILTRO)
function renderizarBiblioteca(listaParaExibir) {
    container.innerHTML = "";

    if (listaParaExibir.length === 0) {
        container.innerHTML = "<p class='vazio'>Nenhum livro encontrado com esse nome... 🔍</p>";
        return;
    }

    // Obter categorias únicas da lista filtrada
    const categorias = [];
    listaParaExibir.forEach(livro => {
        if (!categorias.includes(livro.categoria)) {
            categorias.push(livro.categoria);
        }
    });

    categorias.forEach(cat => {
        const secao = document.createElement('section');
        secao.className = 'categoria-container';
        secao.innerHTML = `
            <div class="categoria-header">
                <h2>${cat}</h2>
                <a href="#" class="ver-todos">Ver todos →</a>
            </div>
            <div class="lista-livros"></div>
        `;

        const listaDiv = secao.querySelector('.lista-livros');
        const livrosFiltrados = listaParaExibir.filter(l => l.categoria === cat);

        livrosFiltrados.forEach(livro => {
            const card = document.createElement('div');
            card.className = 'card-livro';
            card.innerHTML = `
                <div class="sinopse-popup">
                    <p>${livro.sinopse}</p>
                </div>
                <img src="${livro.capa}" alt="${livro.titulo}" class="capa-livro">
                <h3>${livro.titulo}</h3>
                <p><strong>Autor:</strong> ${livro.autor}</p>
            `;
            listaDiv.appendChild(card);
        });

        container.appendChild(secao);
    });
}

// LÓGICA DA BUSCA
searchInput.addEventListener('input', (e) => {
    const termoBusca = e.target.value.toLowerCase(); // O que o usuário digitou

    const livrosFiltrados = livros.filter(livro => {
        return (
            livro.titulo.toLowerCase().includes(termoBusca) || 
            livro.autor.toLowerCase().includes(termoBusca) ||
            livro.categoria.toLowerCase().includes(termoBusca)
        );
    });

    renderizarBiblioteca(livrosFiltrados);
});

// Inicializa a página com todos os livros
renderizarBiblioteca(livros);