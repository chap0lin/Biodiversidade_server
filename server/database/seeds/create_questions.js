module.exports = {
    async seed(knex){
        await knex('questions').insert([
            {
                question: 'Quanto maior a superposição dos nichos ecológicos de duas espécies, maior será ...',
                option_1: 'a competição',
                option_2: 'a protocooperação',
                option_3: 'o potencial biótico',
                option_4: 'o bioma',
                answer: 0
            },
            {
                question: 'Termo adotado por Van Potter em 1970/71 para integrar aspectos das ciências naturais com valores humanos, viabilizando o que ele chamou de “Ponte para o Futuro”',
                option_1: 'Alelobiose',
                option_2: 'Bioética',
                option_3: 'Biotecnologia',
                option_4: 'Sociobiologia',
                answer: 1
            },
            {
                question: 'As características abaixo são observadas e primatas do novo mundo, exceto:',
                option_1: 'cauda preênsil',
                option_2: 'geralmente arborícolas',
                option_3: 'polegares opositores',
                option_4: 'nariz achatado, com narinas abertas para os lados',
                answer: 2
            },
            {
                question: 'Qual o dedo mais importante dos hominídeos?',
                option_1: 'anelar',
                option_2: 'médio',
                option_3: 'indicador',
                option_4: 'polegar',
                answer: 3
            },
            {
                question: 'Como são chamadas as espécies que possuem nichos ecológicos semelhantes, porém habitam regiões geográficas distintas?',
                option_1: 'competidoras',
                option_2: 'equivalentes ecológicos',
                option_3: 'sinfílicas',
                option_4: 'pioneiras',
                answer: 1
            },
            {
                question: 'Papagaio verdadeiro, pipira vermelha e sanhaço são pássaros frugívoros. Portanto, pertencem à mesma ...',
                option_1: 'família',
                option_2: 'guilda',
                option_3: 'classe',
                option_4: 'ordem',
                answer: 1
            },
            {
                question: 'O nicho ecológico da espécie humana é muito amplo. Por este motivo a espécie é considerada ...',
                option_1: 'cosmopolita',
                option_2: 'especialista',
                option_3: 'generalista',
                option_4: 'euriécia',
                answer: 2
            },
            {
                question: 'Qual desses primatas pertence à mesma família do gorila?',
                option_1: 'chimpanzé',
                option_2: 'gibão',
                option_3: 'bugio',
                option_4: 'babuíno',
                answer: 0
            },
            {
                question: 'A quem é classicamente atribuído o princípio da exclusão competitiva?',
                option_1: 'Charles Elton',
                option_2: 'Georgy Gause',
                option_3: 'Eugene Odum',
                option_4: 'George Evelyn Hutchinson',
                answer: 1
            },
            {
                question: 'Qual dessas NÃO é uma referência ao nicho ecológico de uma espécie?',
                option_1: 'função ecológica',
                option_2: 'posição trófica',
                option_3: 'endereço',
                option_4: 'profissão',
                answer: 2
            },
            {
                question: 'Eventualmente, indivíduos de espécies diferentes, porém aparentadas, conseguem cruzar e originar filhotes, aos quais chamamos de ...',
                option_1: 'híbridos',
                option_2: 'intersexuados',
                option_3: 'ginandromorfos',
                option_4: 'espécies exóticas',
                answer: 0
            },
            {
                question: 'Qual desses animais tem pai e mãe da mesma espécie?',
                option_1: 'mula',
                option_2: 'orangotango',
                option_3: 'ligre',
                option_4: 'tambacu',
                answer: 1
            },
            {
                question: 'Qual desses ambientes contém maior biodiversidade de espécies?',
                option_1: 'Floresta Amazônica',
                option_2: 'Deserto de Atacama',
                option_3: 'Lago Titicaca',
                option_4: 'Lagoa da Pampulha',
                answer: 0
            },
            {
                question: 'Como é chamada uma espécie que se encontra fora de sua área de distribuição natural?',
                option_1: 'dominante',
                option_2: 'exótica',
                option_3: 'chave',
                option_4: 'autóctone',
                answer: 1
            },
            {
                question: 'Das extinções em massa, a mais conhecida pelo desaparecimento dos dinossauros, é a que ocorreu há cerca de...',
                option_1: '450 milhões de anos',
                option_2: '377 milhões de anos',
                option_3: '351 milhões de anos',
                option_4: '65 milhões de anos',
                answer: 3
            },
            {
                question: 'Qual desses animais já foi extinto?',
                option_1: 'mico-leão-dourado',
                option_2: 'onça pintada',
                option_3: 'lobo guará',
                option_4: 'tiranossauro',
                answer: 3
            },
            {
                question: 'Principal evento pelo qual muitas espécies continentais da fauna brasileira se tornam ameaçadas:',
                option_1: 'degradação de habitat',
                option_2: 'tráfico ilegal',
                option_3: 'coleta de ovos',
                option_4: 'tsunami',
                answer: 0
            },
            {
                question: 'Ave integrante da lista de espécies ameaçadas de extinção, por conta da perda de habitat, captura e tráfico ilegal:',
                option_1: 'ararinha azul',
                option_2: 'bem-te-vi',
                option_3: 'pardal',
                option_4: 'pássaro dodô',
                answer: 0
            },
            {
                question: 'A multiplicidade da vida em seres de muitas formas, cores e tamanhos, adaptados à sobrevivência nos mais variados ambientes:',
                option_1: 'alelobiose',
                option_2: 'biodiversidade',
                option_3: 'hot spot',
                option_4: 'nicho ecológico',
                answer: 1
            },
            {
                question: 'Proteínas específicas de defesa elaboradas por células competentes do sistema imunológico:',
                option_1: 'anticorpos',
                option_2: 'antígenos',
                option_3: 'vacinas',
                option_4: 'lectinas',
                answer: 0
            },
            {
                question: 'Como pode ser chamada a variabilidade genética dentro da mesma espécie?',
                option_1: 'genoma específico',
                option_2: 'biodiversidade interespecífica ',
                option_3: 'biodiversidade intraespecífica',
                option_4: 'antibiodiversisade',
                answer: 2
            },
            {
                question: 'Quais dessas são fontes de variabilidade nos seres vivos?',
                option_1: 'seleção natural e deriva genética',
                option_2: 'clonagem e monocultura ',
                option_3: 'mutação e recombinação genética',
                option_4: 'mutação e seleção natural',
                answer: 2
            },
            {
                question: 'Qual o termo usado para a vida animal de uma determinada região?',
                option_1: 'fauna',
                option_2: 'flora',
                option_3: 'biota',
                option_4: 'zoocoria',
                answer: 0
            },
            {
                question: 'Qual desses é um mamífero brasileiro criticamente em perigo de extinção?',
                option_1: 'mero',
                option_2: 'guaiamum',
                option_3: 'guariba',
                option_4: 'elefante',
                answer: 2
            },
            {
                question: 'Qual desses não tem relação com o aumento da biodiversidade?',
                option_1: 'evolução',
                option_2: 'mutação',
                option_3: 'apoptose',
                option_4: 'recombinação gênica',
                answer: 2
            },
            {
                question: 'Espécies exóticas invasoras podem provocar desequilíbrios ecológicos porque geralmente...',
                option_1: 'não possuem predadores naturais',
                option_2: 'não competem com espécies locais',
                option_3: 'apresentam elevada taxa de migração',
                option_4: 'cruzam com várias espécies locais',
                answer: 0
            },
            {
                question: 'Em relação à coloração da pelagem de coelhos, qual dessas é a variedade selvagem?',
                option_1: 'aguti',
                option_2: 'albino',
                option_3: 'chinchila',
                option_4: 'himalaia',
                answer: 0
            },
            {
                question: 'Qual o termo usado para o conjunto de vegetais de uma determinada região?',
                option_1: 'fauna',
                option_2: 'flora',
                option_3: 'biota',
                option_4: 'epifitismo',
                answer: 1
            },
            {
                question: 'Foram os cristalógrafos responsáveis pelas imagens que ajudaram a revelar a configuração da molécula do DNA.',
                option_1: 'James Watson e Francis Crick',
                option_2: 'Rosalind Franklin e Maurice Wilkins',
                option_3: 'Hugh Davson e James Danielli',
                option_4: 'Erwin Chargaff e Linus Pauling',
                answer: 1
            },
            {
                question: 'Em que parte da célula ocorre a replicação do DNA?',
                option_1: 'complexo de Golgi',
                option_2: 'hialoplasma ',
                option_3: 'núcleo',
                option_4: 'retículo endoplasmático',
                answer: 2
            },
            {
                question: 'Qual base nitrogenada que ocorre no DNA, mas NÃO ocorre no RNA?',
                option_1: 'adenina',
                option_2: 'guanina',
                option_3: 'timina',
                option_4: 'uracila',
                answer: 2
            },
            {
                question: 'Um trabalho realizado por diversos países com a finalidade de desvendar a sequência de todos os pares de nucleotídeos do DNA de um organismo:',
                option_1: 'Vinculação Gênica',
                option_2: 'Dogma Central da Biologia',
                option_3: 'Mapeamento',
                option_4: 'Projeto Genoma',
                answer: 3
            },
            {
                question: 'O tipo de rearranjo cromossômico em que parte do cromossomo se quebra e se liga a um cromossomo não-homólogo é chamado...',
                option_1: 'deleção',
                option_2: 'inversão',
                option_3: 'não disjunção',
                option_4: 'translocação',
                answer: 3
            },
            {
                question: 'Mutação cromossômica numérica, que ocorre quando os cromossomos são duplicados e a célula não se divide, de modo que todos os pares de cromossomos homólogos são afetados:',
                option_1: 'aneuploidia',
                option_2: 'trissomia',
                option_3: 'poliploidia',
                option_4: 'translocação',
                answer: 2
            },
            {
                question: 'O termo ploidia relaciona-se ao número de cromossomos das células de um organismo. Em humanos, quase todas as células são:',
                option_1: 'haploides',
                option_2: 'diploides',
                option_3: 'triploides',
                option_4: 'poliploides',
                answer: 1
            },
            {
                question: 'Como é popularmente conhecido o quadro resultante da trissomia do cromossomo 21?',
                option_1: 'Síndrome de cri du chat',
                option_2: 'Síndrome de Down',
                option_3: 'Síndrome de Klinefelter',
                option_4: 'Síndrome de Turner ',
                answer: 1
            },
            {
                question: 'Refere-se à natureza da replicação do DNA:',
                option_1: 'conservativa',
                option_2: 'dispersiva',
                option_3: 'semiconservativa',
                option_4: 'citoplasmática',
                answer: 2
            },
            {
                question: 'Qual desses é um códon de finalização no RNA mensageiro?',
                option_1: 'AUG',
                option_2: 'UAG',
                option_3: 'CCC',
                option_4: 'CAG',
                answer: 1
            },
            {
                question: 'No caso em que a substituição de um nucleotídeo no DNA não provoca mudança na sequência de aminoácidos da proteína correspondente, a mutação é chamada:',
                option_1: 'mutação deletéria',
                option_2: 'missense mutation',
                option_3: 'mutação sinônima',
                option_4: 'nonsense mutation',
                answer: 2
            },
            {
                question: 'Na molécula do DNA, adenina e timina ligam-se por meio de...',
                option_1: 'ligação fosfodiéster',
                option_2: 'uma ponte de hidrogênio',
                option_3: 'duas pontes de hidrogênio',
                option_4: 'três pontes de hidrogênio',
                answer: 2
            },
            {
                question: 'Nos genes que apresentam a informação biológica descontínua, que seções são efetivamente codificadoras?',
                option_1: 'íntrons',
                option_2: 'éxons',
                option_3: 'promotores',
                option_4: 'UTR',
                answer: 1
            },
            {
                question: 'Como são chamadas as pequenas moléculas circulares de DNA, em bactérias, capazes de sofrer replicação independentemente do cromossomo?',
                option_1: 'ribossomos',
                option_2: 'fímbrias',
                option_3: 'microssomos',
                option_4: 'plasmídeos',
                answer: 3
            },
            {
                question: 'Forma-se quando vários ribossomos se ligam a uma molécula de mRNA, para que ocorra a síntese de várias moléculas da proteína:',
                option_1: 'peroxissomo',
                option_2: 'glioxissomo',
                option_3: 'polissomo',
                option_4: 'nucleossomo',
                answer: 2
            },
            {
                question: 'Qual dessas enzimas promove o desenrolamento da molécula de DNA, para o processo de replicação?',
                option_1: 'DNA Helicase',
                option_2: 'DNA Ligase',
                option_3: 'DNA Polimerase I',
                option_4: 'DNA Polimerase III',
                answer: 0
            },
            {
                question: 'Alteração citogenética associada à leucemia mieloide crônica, resulta de uma translocação recíproca envolvendo os cromossomos 9 a 22:',
                option_1: 'cromossomo Philadelphia',
                option_2: 'isocromossomo 22q',
                option_3: 'trissomia do 22',
                option_4: 'cromossomo em anel',
                answer: 0
            },
            {
                question: 'A organização molecular do DNA foi decifrada em 1953, por...',
                option_1: 'James Watson e Francis Crick',
                option_2: 'Rosalind Franklin e Maurice Wilkins',
                option_3: 'Hugh Davson e James Danielli',
                option_4: 'Erwin Chargaff e Linus Pauling',
                answer: 0
            },
            {
                question: 'Se uma das cadeias do DNA apresentar a sequência TAG CCC GTA, a região correspondente da outra cadeia apresentará...',
                option_1: 'TAG CCC GTA',
                option_2: 'UAG CCC GUA',
                option_3: 'ATC GGG CAT',
                option_4: 'AUC GGG CAU',
                answer: 2
            },
            {
                question: 'Qual desses cariótipos ocorre nas células de pacientes com Síndrome de Turner?',
                option_1: '46, XX',
                option_2: '46, XY',
                option_3: '45, X',
                option_4: '47, XXY',
                answer: 2
            },
            {
                question: 'Qual dessas pode ser consequência de uma não disfunção de cromossomos sexuais durante a meiose?',
                option_1: 'Síndrome de Klinefelter',
                option_2: 'Síndrome de Cri Du Chat',
                option_3: 'Síndrome de Down',
                option_4: 'Síndrome de Patau',
                answer: 0
            },
            {
                question: 'A enzima RNA polimerase destaca-se no processo de...',
                option_1: 'replicação',
                option_2: 'transcrição',
                option_3: 'tradução',
                option_4: 'transdução',
                answer: 1
            },
            {
                question: 'Como é chamada a retirada de íntrons do transcrito primário de RNA e reunião dos éxons?',
                option_1: 'splicing',
                option_2: 'crossing over',
                option_3: 'permafrost',
                option_4: 'ipso facto',
                answer: 0
            },
            {
                question: 'A diferença entre o DNA do chimpanzé e de humanos está...',
                option_1: 'abaixo dos 5%',
                option_2: 'entre 5% e 10%',
                option_3: 'entre 10% e 15%',
                option_4: 'entre 15% e 20%',
                answer: 0
            },
            {
                question: 'Como são chamados os monômeros das grandes moléculas de proteína?',
                option_1: 'aminoácidos',
                option_2: 'monossacarídeos',
                option_3: 'nucleotídeos',
                option_4: 'ácidos graxos',
                answer: 0
            },
            {
                question: 'Na espécie humana, qual dessas células é haploide?',
                option_1: 'neurônio',
                option_2: 'espermatozoide ',
                option_3: 'eritrócito',
                option_4: 'neutrófilo',
                answer: 1
            },
            {
                question: 'Qual desses componentes da célula contém informações para as características do organismo?',
                option_1: 'cromossomo',
                option_2: 'centríolo',
                option_3: 'lisossomo',
                option_4: 'peroxissomo',
                answer: 0
            },
            {
                question: 'O primeiro organismo a ter seu genoma completamente conhecido foi...',
                option_1: 'uma bactéria',
                option_2: 'uma levedura',
                option_3: 'um verme',
                option_4: 'uma planta',
                answer: 0
            },
            {
                question: 'Quais são as bases nitrogenadas pirimídicas do DNA?',
                option_1: 'adenina e guanina',
                option_2: 'citosina e timina',
                option_3: 'guanina e citosina',
                option_4: 'adenina e timina',
                answer: 1
            },
            {
                question: 'Segundo o modelo de Watson e Crick, na molécula do DNA as duas cadeias são...',
                option_1: 'paralelas',
                option_2: 'antiparalelas',
                option_3: 'perpendiculares',
                option_4: 'concêntricas',
                answer: 1
            },
            {
                question: 'Qual dessas enzimas viola o dogma central da biologia molecular?',
                option_1: 'DNA helicase',
                option_2: 'transcriptase reversa',
                option_3: 'DNA polimerase',
                option_4: 'RNA polimerase',
                answer: 1
            },
            {
                question: 'Qual dessas doenças resulta de mutação gênica por substituição de uma única base nitrogenada no DNA?',
                option_1: 'anemia falciforme',
                option_2: 'câncer cervical',
                option_3: 'leucemia mieloide crônica',
                option_4: 'síndrome de Down',
                answer: 0
            },
            {
                question: 'O genoma humano tem cerca de quantos genes?',
                option_1: '6000',
                option_2: '21000',
                option_3: '30000',
                option_4: '42000',
                answer: 1
            },
            {
                question: 'O Brasil entrou no cenário do estudo de genomas por ocasião do sequenciamento da...',
                option_1: 'levedura Saccharomyces cerevisiae',
                option_2: 'planta Arabidopsis thaliana',
                option_3: 'bactéria Xylella fastidiosa',
                option_4: 'bactéria Escherichia coli',
                answer: 2
            },
            {
                question: 'Quais dessas são as bases nitrogenadas púricas dos ácidos nucleicos?',
                option_1: 'adenina e citosina',
                option_2: 'citosina e timina',
                option_3: 'adenina e guanina',
                option_4: 'timina e uracila',
                answer: 2
            },
            {
                question: 'Na molécula do DNA, guanina e citosina ligam-se por meio de...',
                option_1: 'ligação fosfodiéster',
                option_2: 'uma ponte de hidrogênio',
                option_3: 'duas pontes de hidrogênio',
                option_4: 'três pontes de hidrogênio',
                answer: 3
            },
            {
                question: 'Que moléculas de RNA obedecem ao código genético, formando um elo físico e informacional entre a sequência de nucleotídeos do mRNA maduro e a sequência de aminoácidos no polipeptídeo?',
                option_1: 'rRNA',
                option_2: 'tRNA',
                option_3: 'hnRNA',
                option_4: 'snRNA',
                answer: 1
            },
            {
                question: 'Além do genoma nuclear, existem outros genomas, localizados em organelas citoplasmáticas. Quais são essas organelas?',
                option_1: 'mitocôndrias e cloroplastos',
                option_2: 'ribossomos e cromossomos',
                option_3: 'retículo endoplasmático e complexo de Golgi',
                option_4: 'lisossomos e vacúolos',
                answer: 0
            },
            {
                question: 'Qual desses cientistas propôs a Teoria Endossimbiótica?',
                option_1: 'Rosalind Franklin',
                option_2: 'Thomas Morgan',
                option_3: 'Lynn Margulis',
                option_4: 'Camilo Golgi',
                answer: 2
            },
            {
                question: 'Qual dessas NÃO se refere ao genoma mitocondrial humano?',
                option_1: 'abriga 37 genes',
                option_2: 'hereditariedade uniparental',
                option_3: 'duplo filamento circular',
                option_4: 'representa mais de 10% do DNA celular',
                answer: 3
            },
            {
                question: 'Células como os neurônios, com o mais alto grau de diferenciação e menor capacidade de regenerar, são chamadas ...',
                option_1: 'estáveis',
                option_2: 'lábeis',
                option_3: 'federadas',
                option_4: 'perenes',
                answer: 3
            },
            {
                question: 'Como são chamadas as células não diferenciadas, que podem continuar a se dividir por mitose, ou gerar células-filhas capazes de sofrer diferenciação em muitas categorias de células?',
                option_1: 'células-tronco',
                option_2: 'células-estáveis',
                option_3: 'células-parentes',
                option_4: 'células-flama',
                answer: 0
            },
            {
                question: 'O complexo processo, por meio do qual as células do corpo se especializam para desempenhar funções específicas, é chamado:',
                option_1: 'diferenciação celular',
                option_2: 'degeneração celular',
                option_3: 'crescimento celular',
                option_4: 'imortalidade celular',
                answer: 0
            },
            {
                question: 'Um conjunto de células realizando uma certa função é chamado ...',
                option_1: 'aparelho',
                option_2: 'órgão',
                option_3: 'sistema',
                option_4: 'tecido',
                answer: 3
            },
            {
                question: 'As mais conhecidas células-tronco adultas são encontradas na medula óssea. Como elas são chamadas?',
                option_1: 'osteócitos',
                option_2: 'células hematopoiéticas',
                option_3: 'células germinativas',
                option_4: 'células diferenciadas',
                answer: 1
            },
            {
                question: 'A terapia denominada transplante de células-tronco hematopoiéticas é mais popularmente conhecida como ...',
                option_1: 'transplante de medula',
                option_2: 'transplante autólogo',
                option_3: 'transplante heterólogo',
                option_4: 'transplante cruzado',
                answer: 0
            },
            {
                question: 'Nas ciências biológicas, o que estuda um histologista?',
                option_1: 'a história da biologia',
                option_2: 'os tecidos do corpo',
                option_3: 'as funções dos órgãos',
                option_4: 'os hormônios',
                answer: 1
            },
            {
                question: 'Quais são os tecidos com células justapostas, que podem atuar tanto no revestimento quanto na secreção?',
                option_1: 'conjuntivos',
                option_2: 'epiteliais',
                option_3: 'musculares',
                option_4: 'nervosos',
                answer: 1
            },
            {
                question: 'Como é chamada a capa membranosa, rica em lipídeos, produzida pelas células de Schwann ao redor do axônio de neurônios?',
                option_1: 'bainha de mielina',
                option_2: 'bainha de cefalina',
                option_3: 'ampola de Vater',
                option_4: 'ilhota de Langerhans',
                answer: 0
            },
            {
                question: 'Estágio do embrião constituído por cerca de 200 células, que se implanta no útero por volta do sexto dia após a fecundação:',
                option_1: 'mórula',
                option_2: 'blastocisto',
                option_3: 'gástrula',
                option_4: 'nêurula',
                answer: 1
            },
            {
                question: 'Qual dos seguintes NÃO é um tipo de leucócito?',
                option_1: 'neutrófilo',
                option_2: 'trombócito',
                option_3: 'linfócito',
                option_4: 'monócito',
                answer: 1
            },
            {
                question: 'Quais os elementos figurados do sangue relacionados ao processo de coagulação sanguínea?',
                option_1: 'eritrócitos',
                option_2: 'leucócitos',
                option_3: 'plaquetas',
                option_4: 'metamielócitos',
                answer: 2
            },
            {
                question: 'Tipo de tecido conjuntivo que acumula reserva energética na forma de gordura:',
                option_1: 'tecido adiposo',
                option_2: 'tecido cartilaginoso',
                option_3: 'tecido hematopopoiético',
                option_4: 'tecido ósseo',
                answer: 0
            },
            {
                question: 'Como é chamada a terapia celular quando as células são aplicadas no mesmo indivíduo do qual são provenientes?',
                option_1: 'autotrófica',
                option_2: 'heterotrófica',
                option_3: 'autóloga',
                option_4: 'heteróloga',
                answer: 2
            },
            {
                question: 'Quais as duas proteínas cuja interação proporciona a atividade contrátil do tecido muscular?',
                option_1: 'actina e miosina',
                option_2: 'queratina e elastina',
                option_3: 'ptialina e tripsina',
                option_4: 'gastrina e secretina',
                answer: 0
            },
            {
                question: 'Tipo de músculo que realiza contração lenta e involuntária:',
                option_1: 'cardíaco',
                option_2: 'esquelético',
                option_3: 'liso',
                option_4: 'misto',
                answer: 2
            },
            {
                question: 'Qual dessas é uma doença degenerativa, com deterioração gradual da bainha de mielina, prejudicando as funções dos neurônios?',
                option_1: 'Colite',
                option_2: 'Colangite esclerosante',
                option_3: 'Fibrose cística',
                option_4: 'Esclerose múltipla',
                answer: 3
            },
            {
                question: 'Qual dessas é a proteína que se destaca na parte orgânica da matriz óssea?',
                option_1: 'queratina',
                option_2: 'albumina',
                option_3: 'colágeno',
                option_4: 'glúten',
                answer: 2
            },
            {
                question: 'Qual desses é o número aproximado de células em um corpo humano adulto?',
                option_1: '100 mil',
                option_2: '100 milhões',
                option_3: '100 bilhões',
                option_4: '100 trilhões',
                answer: 3
            },
            {
                question: 'Qual a porção do tubo digestivo que leva alimento ao estômago?',
                option_1: 'cólon',
                option_2: 'traqueia',
                option_3: 'esôfago',
                option_4: 'duodeno',
                answer: 2
            },
            {
                question: 'Quais células, quando completamente diferenciadas no corpo de um mamífero, não possuem núcleo?',
                option_1: 'neurônios',
                option_2: 'hepatócitos',
                option_3: 'hemácias',
                option_4: 'fibroblastos',
                answer: 2
            },
            {
                question: 'Dendritos e axônio são encontrados em que tipo de célula?',
                option_1: 'hepatócito',
                option_2: 'hemácia',
                option_3: 'neurônio',
                option_4: 'adipócito',
                answer: 2
            },
            {
                question: 'No neurônio, como são chamados os prolongamentos numerosos, especializados na função de receber os estímulos?',
                option_1: 'axônios',
                option_2: 'dendritos',
                option_3: 'cílios',
                option_4: 'telodendros',
                answer: 1
            },
            {
                question: 'Em qual desses encontramos músculo de contração rápida e involuntária?',
                option_1: 'intestino',
                option_2: 'miocárdio',
                option_3: 'esternocleidomastoideo',
                option_4: 'bexiga urinária',
                answer: 1
            },
            {
                question: 'Qual dessas é uma metaloproteína que contém ferro, presente nos eritrócitos e que permite o transporte de oxigênio?',
                option_1: 'hemeritina',
                option_2: 'hemaglutinina',
                option_3: 'hemoglobina',
                option_4: 'hemocianina',
                answer: 2
            },
            {
                question: 'A grande semelhança entre a teoria darwinista clássica e o neodarwinismo:',
                option_1: 'seleção natural',
                option_2: 'mutação',
                option_3: 'deriva genética',
                option_4: 'uso e desuso',
                answer: 0
            },
            {
                question: 'Como é chamado o processo de variação e adaptação de populações ao longo das gerações, podendo inclusive provocar o surgimento de novas espécies?',
                option_1: 'evolução',
                option_2: 'herança',
                option_3: 'mutação',
                option_4: 'panmixia',
                answer: 0
            },
            {
                question: 'Os restos de seres vivos que existiram no passado, ou evidências de sua existência, e que foram preservados, são chamados:',
                option_1: 'fósseis',
                option_2: 'hieróglifos',
                option_3: 'órgão vestigiais',
                option_4: 'órgãos análogos',
                answer: 0
            },
            {
                question: 'Ciência responsável pelo levantamento e organização de fósseis, fornecendo importantes informações sobre a história evolutiva de cada espécie.',
                option_1: 'Geologia',
                option_2: 'Ecologia',
                option_3: 'Paleontologia',
                option_4: 'Zoologia',
                answer: 2
            },
            {
                question: 'Processo em que organismos de diferentes grupos de seres vivos, sem proximidade de parentesco, são submetidos às mesmas pressões de seleção e desenvolvem estruturas corporais semelhantes:',
                option_1: 'convergência adaptativa',
                option_2: 'sucessão ecológica',
                option_3: 'irradiação adaptativa',
                option_4: 'panmixia',
                answer: 0
            },
            {
                question: 'Processo em que seres vivos aparentados passam a colonizar diferentes ambientes, são submetidos a diferentes pressões de seleção e, após algum tempo, originam grupos diversificados, adaptados a cada ambiente particular:',
                option_1: 'convergência adaptativa',
                option_2: 'sucessão ecológica',
                option_3: 'irradiação adaptativa',
                option_4: 'panmixia',
                answer: 2
            },
            {
                question: 'Os órgãos que exibem a mesma função em diferentes tipos de seres vivos, embora possuam origem embrionária e anatomia interna diferentes:',
                option_1: 'análogos',
                option_2: 'homólogos',
                option_3: 'vestigiais',
                option_4: 'homeóticos',
                answer: 0
            },
            {
                question: 'Órgãos que possuem a mesma origem embrionária em espécies distintas e similar anatomia interna, mesmo que possam assumir funções diferentes:',
                option_1: 'parálogos',
                option_2: 'heterólogos',
                option_3: 'análogos',
                option_4: 'homólogos',
                answer: 3
            },
            {
                question: 'Órgãos que se apresentam como formas reduzidas de órgãos funcionais em outras espécies aparentadas:',
                option_1: 'análogos',
                option_2: 'homólogos',
                option_3: 'vestigias',
                option_4: 'ancestrais',
                answer: 2
            },
            {
                question: 'Qual desses é um órgão vestigial no corpo humano?',
                option_1: 'apêndice cecal',
                option_2: 'cápsula de Bowman',
                option_3: 'cerebelo',
                option_4: 'vesícula biliar',
                answer: 0
            },
            {
                question: 'Evidências bioquímicas da evolução podem ser obtidas pela análise de alguns compostos orgânicos. São eles:',
                option_1: 'DNA, RNA e proteínas',
                option_2: 'DNA, lipídeos e carboidratos',
                option_3: 'DNA, proteínas e vitaminas',
                option_4: 'DNA e lipídeos',
                answer: 0
            },
            {
                question: 'A convergência adaptativa pode ser observada entre ...',
                option_1: 'cobras e lagartos',
                option_2: 'chimpanzés e gorilas',
                option_3: 'sapos e pererecas',
                option_4: 'tubarões e golfinhos',
                answer: 3
            },
            {
                question: 'Como é chamada a representação gráfica que organiza os seres vivos de acordo com o parentesco evolutivo?',
                option_1: 'rede genealógica',
                option_2: 'arvore filogenética',
                option_3: 'pedigree',
                option_4: 'diagrama ontogenético',
                answer: 1
            },
            {
                question: 'Qual o evolucionista cuja teoria foi divulgada principalmente em seu livro “Filosofia Zoológica”?',
                option_1: 'Lamarck',
                option_2: 'Charles Darwin',
                option_3: 'Mayr',
                option_4: 'Dobzhansky',
                answer: 0
            },
            {
                question: 'Autor do livro “Um ensaio sobre o princípio da população”, que influenciou na teoria evolutiva de Charles Darwin:',
                option_1: 'Hugo de Vries',
                option_2: 'Thomas Malthus',
                option_3: 'Theodosius Dobzhansky',
                option_4: 'Thomas Morgan',
                answer: 1
            },
            {
                question: 'Qual desses cientistas NÃO está relacionado ao evolucionismo?',
                option_1: 'Jean Baptiste Lamarck',
                option_2: 'Theodosius Dobzhansky',
                option_3: 'Charles Darwin',
                option_4: 'Karl Von Linné',
                answer: 3
            },
            {
                question: 'Qual desses cientistas NÃO está relacionado à teria sintética da evolução?',
                option_1: 'Ernst Mayr',
                option_2: 'George Simpson',
                option_3: 'Theodosius Dobzhanski',
                option_4: 'Jean Baptiste Lamarck',
                answer: 3
            },
            {
                question: 'Qual teoria evolucionista destaca o ambiente como agente selecionador?',
                option_1: 'criacionismo',
                option_2: 'lamarckismo',
                option_3: 'darwinismo',
                option_4: 'michurinismo',
                answer: 2
            },
            {
                question: 'Qual dessas relaciona-se às ideias evolucionistas de Lamarck?',
                option_1: 'lei do uso e desuso',
                option_2: 'seleção natural',
                option_3: 'mutação',
                option_4: 'deriva gênica',
                answer: 0
            },
            {
                question: 'Qual desses conceitos caracteriza a teoria evolucionista de Charles Darwin?',
                option_1: 'lei do uso e desuso',
                option_2: 'seleção natural',
                option_3: 'mutação',
                option_4: 'deriva gênica',
                answer: 1
            },
            {
                question: '“As características modificadas em resposta ao ambiente são transmitidas e acumuladas nas gerações seguintes”. O trecho refere-se ao ...',
                option_1: 'criacionismo',
                option_2: 'lamarckismo',
                option_3: 'darwinismo',
                option_4: 'neodarwinismo',
                answer: 1
            },
            {
                question: 'Qual o título do livro de Charles Darwin que apresentou sua Teoria Evolutiva?',
                option_1: 'A origem das espécies',
                option_2: 'Filosofia zoológica',
                option_3: 'O que é vida?',
                option_4: 'Um ensaio sobre o Princípio da População',
                answer: 0
            },
            {
                question: 'Qual dessas NÃO se refere ao Darwinismo?',
                option_1: 'sobrevivência do mais apto',
                option_2: 'seleção natural',
                option_3: 'humanos são descendentes de macacos',
                option_4: 'luta pela vida',
                answer: 2
            },
            {
                question: 'Para Lamarck, há um fator que é a causa direta das variações e, para Darwin, esse mesmo fator seria o que seleciona dentre as variações possíveis a mais adaptada. Qual é esse fator?',
                option_1: 'a competição',
                option_2: 'a migração',
                option_3: 'o ambiente',
                option_4: 'o vigor híbrido',
                answer: 2
            },
            {
                question: 'Análises do DNA de chimpanzés mostraram que o homem é mais aparentado com eles do que com qualquer outro primata. Isso permite concluir que ...',
                option_1: 'o chimpanzé é ancestral do homem',
                option_2: 'o chimpanzé é ancestral dos gorilas',
                option_3: 'o homem é ancestral dos gorilas',
                option_4: 'o chimpanzé e o homem têm um ancestral comum',
                answer: 3
            },
            {
                question: 'Além de Charles Darwin, que outro cientista propôs a seleção natural como mecanismo essencial para o processo evolutivo?',
                option_1: 'Alfred Wallace',
                option_2: 'Georges Cuvier',
                option_3: 'Hugo de Vries',
                option_4: 'Richard Owen',
                answer: 0
            },
            {
                question: 'Quais dessas estruturas NÃO apresentam homologia com os braços do homem?',
                option_1: 'nadadeiras peitorais da baleia',
                option_2: 'patas dianteiras do cachorro',
                option_3: 'asas da borboleta',
                option_4: 'asas do morcego',
                answer: 2
            },
            {
                question: 'A fauna de pássaros fringilídeos, que ficaram conhecidos como tentilhões de Darwin, foi analisada pelo naturalista em qual desses locais?',
                option_1: 'ilhas Malvinas',
                option_2: 'ilhas Fiji',
                option_3: 'arquipélago de Galápagos',
                option_4: 'arquipélago do Bailique',
                answer: 2
            },
            {
                question: '“As espécies não sofrem modificações desde a sua criação”. O trecho refere-se ao ...',
                option_1: 'fixismo',
                option_2: 'lamarckismo',
                option_3: 'darwinismo',
                option_4: 'neodarwinismo',
                answer: 0
            },
            {
                question: 'Qual desses estudou mutação e recombinação na mosca drosófila?',
                option_1: 'Hugo de Vries',
                option_2: 'Thomas Malthus',
                option_3: 'Georges Cuvier',
                option_4: 'Thomas Morgan',
                answer: 3
            },
            {
                question: 'Qual desses é um grupo de répteis?',
                option_1: 'Lagomorfos',
                option_2: 'Urodelos',
                option_3: 'Lacertílios',
                option_4: 'Coleópteros',
                answer: 2
            },
            {
                question: 'A Sucuri ou Anaconda é um tipo de cobra encontrada naturalmente na ...',
                option_1: 'América do Sul',
                option_2: 'África',
                option_3: 'Ásia',
                option_4: 'Europa',
                answer: 0
            },
            {
                question: 'Que plantas possuem flores e abrigam suas sementes no interior de frutos?',
                option_1: 'Briófitas',
                option_2: 'Pteridófitas',
                option_3: 'Gimnospermas',
                option_4: 'Angiospermas',
                answer: 3
            },
            {
                question: 'Qual o nome do grupo de invertebrados que inclui carrapatos e escorpiões?',
                option_1: 'Acarina',
                option_2: 'Aracnida',
                option_3: 'Crustacea',
                option_4: 'Insecta',
                answer: 1
            },
            {
                question: 'Qual a utilidade do colorido vistoso de flores em muitas espécies de angiospermas?',
                option_1: 'camuflagem',
                option_2: 'atrair insetos polinizadores',
                option_3: 'afastar herbívoros',
                option_4: 'evitar a evaporação excessiva',
                answer: 1
            },
            {
                question: 'Qual das plantas abaixo é um exemplo de planta avascular?',
                option_1: 'açaizeiro',
                option_2: 'mangueira',
                option_3: 'musgo',
                option_4: 'samambaia',
                answer: 2
            },
            {
                question: 'Qual dos animais a seguir NÃO pertence à ordem dos cetáceos?',
                option_1: 'orca',
                option_2: 'baleia jubarte',
                option_3: 'boto',
                option_4: 'foca',
                answer: 3
            },
            {
                question: 'Qual desses animais é um exemplo de mamífero marsupial?',
                option_1: 'boto',
                option_2: 'canguru',
                option_3: 'vaca',
                option_4: 'preguiça',
                answer: 1
            },
            {
                question: 'Mamíferos primitivos, que possuem bico e são ovíparos:',
                option_1: 'Cetáceos',
                option_2: 'Quirópteros',
                option_3: 'Marsupiais',
                option_4: 'Monotremos',
                answer: 3
            },
            {
                question: 'Entre os ofídios, existem espécies não venenosas, como:',
                option_1: 'a cascavel',
                option_2: 'a jararaca',
                option_3: 'a sucuri',
                option_4: 'a surucucu',
                answer: 2
            },
            {
                question: 'Uma característica marcante desses invertebrados é um esqueleto externo composto principalmente pelo carboidrato chamado quitina:',
                option_1: 'Artrópodes',
                option_2: 'Cnidários',
                option_3: 'Moluscos',
                option_4: 'Equinodermas',
                answer: 0
            },
            {
                question: 'Que tipo de inseto atua como vetor do microrganismo causador da malária?',
                option_1: 'barbeiro',
                option_2: 'pulga',
                option_3: 'mosca',
                option_4: 'mosquito',
                answer: 3
            },
            {
                question: 'Que tipo de inseto atua como vetor do microrganismo causador da doença de chagas?',
                option_1: 'barbeiro',
                option_2: 'mosquito',
                option_3: 'piolho',
                option_4: 'pulga',
                answer: 0
            },
            {
                question: 'Característica do revestimento corporal de mamíferos, que os diferencia de outros animais:',
                option_1: 'escamas',
                option_2: 'pelos',
                option_3: 'plumas',
                option_4: 'cerdas',
                answer: 1
            },
            {
                question: 'Qual das frutas a seguir é considerada um pseudofruto?',
                option_1: 'caju',
                option_2: 'abacate',
                option_3: 'mamão',
                option_4: 'banana',
                answer: 0
            },
            {
                question: 'Na organização hierárquica dos seres vivos, um conjunto de gêneros constitui ...',
                option_1: 'uma família',
                option_2: 'uma ordem',
                option_3: 'uma classe',
                option_4: 'um filo',
                answer: 0
            },
            {
                question: 'Qual desses contém maior variedade de seres vivos?',
                option_1: 'Hominídeos',
                option_2: 'Primatas',
                option_3: 'Mamíferos',
                option_4: 'Cordados',
                answer: 3
            },
            {
                question: 'Tipo de célula que não apresenta uma membrana nuclear (carioteca), ficando o seu material genético disperso no citoplasma:',
                option_1: 'autotrófica',
                option_2: 'heterotrófica',
                option_3: 'eucarionte',
                option_4: 'procarionte',
                answer: 3
            },
            {
                question: 'Qual dessas doenças humanas NÃO é causada por bactérias?',
                option_1: 'gonorreia',
                option_2: 'sífilis',
                option_3: 'tuberculose',
                option_4: 'malária',
                answer: 3
            },
            {
                question: 'Como é chamada a zoonose transmitida ao homem pela picada de Amblyomma cajennense (carrapato-estrela)?',
                option_1: 'febre maculosa',
                option_2: 'doença de Chagas',
                option_3: 'febre amarela',
                option_4: 'peste bubônica',
                answer: 0
            },
            {
                question: 'Qual desses fungos é capaz de inibir a formação da parede celular de algumas bactérias?',
                option_1: 'Amanita',
                option_2: 'Penicillium',
                option_3: 'Agaricus',
                option_4: 'Psilocybe',
                answer: 1
            },
            {
                question: 'Alguns fungos produzem toxinas. Como elas são chamadas?',
                option_1: 'toxinas botulínicas',
                option_2: 'toxinas tetânicas',
                option_3: 'micotoxinas',
                option_4: 'cianotoxinas',
                answer: 2
            },
            {
                question: 'Qual dessas é considerada a maior árvore do mundo, podendo ultrapassar 100 metros de altura e viver mais de 1000 anos?',
                option_1: 'carvalho da Europa',
                option_2: 'jequitibá do Brasil',
                option_3: 'eucalipto da Austrália',
                option_4: 'sequoia da Califórnia',
                answer: 3
            },
            {
                question: 'Um homem que só comia “sushi” desenvolveu uma solitária no seu intestino. Qual deve ser a espécie de solitária?',
                option_1: 'Diphyllobothrium latum',
                option_2: 'Hymenolepis nana',
                option_3: 'Taenia solium',
                option_4: 'Taenia saginata',
                answer: 0
            },
            {
                question: 'Além da captura de espécimes da natureza, alguns moluscos são provenientes do cultivo em cativeiro, o qual chamamos de ...',
                option_1: 'carcinicultura',
                option_2: 'ranicultura',
                option_3: 'malacocultura',
                option_4: 'piscicultura',
                answer: 2
            },
            {
                question: 'Qual desses NÃO é um nematelminto?',
                option_1: 'filária',
                option_2: 'lombriga',
                option_3: 'oxiúro',
                option_4: 'solitária',
                answer: 3
            },
            {
                question: 'Apenas uma das características a seguir NÃO representa adaptação de aves para voar. Qual?',
                option_1: 'osso esterno em forma de quilha',
                option_2: 'ossos pneumáticos',
                option_3: 'músculo diafragma',
                option_4: 'sacos aéreos nos pulmões',
                answer: 2
            },
            {
                question: 'De qual desses é obtido o captopril, um dos medicamentos mais usados no mundo para o combate à hipertensão arterial?',
                option_1: 'ferrão de arraia',
                option_2: 'azeite de andiroba',
                option_3: 'folha de coramina',
                option_4: 'veneno de jararaca',
                answer: 3
            },
            {
                question: 'De acordo com a filogenia dos mamíferos, qual desses é parente mais próximo da baleia?',
                option_1: 'foca',
                option_2: 'hipopótamo',
                option_3: 'morcego',
                option_4: 'ornitorrinco',
                answer: 1
            },
            {
                question: 'Quais são as plantas que, embora dotadas de alguns tecidos diferenciados, NÃO possuem raízes e folhas verdadeiras, nem vasos condutores de seiva?',
                option_1: 'Briófitas',
                option_2: 'Pteridófitas',
                option_3: 'Gimnospermas',
                option_4: 'Angiospermas',
                answer: 0
            },
            {
                question: 'O termo que se refere a vírus transportados por artrópodes:',
                option_1: 'Adenovírus',
                option_2: 'Arbovírus',
                option_3: 'Herpesvírus',
                option_4: 'Retrovírus',
                answer: 1
            },
            {
                question: 'HTLV e HIV são vírus do grupo dos ...',
                option_1: 'Adenovírus',
                option_2: 'Arbovírus',
                option_3: 'Herpesvírus',
                option_4: 'Retrovírus',
                answer: 3
            },
            {
                question: 'São produtos da fermentação realizada por leveduras:',
                option_1: 'ácido lático e oxigênio',
                option_2: 'ácido lático e gás carbônico',
                option_3: 'etanol e oxigênio',
                option_4: 'etanol e gás carbônico',
                answer: 3
            },
            {
                question: 'Quais plantas vasculares produzem sementes, mas NÃO formam frutos?',
                option_1: 'Briófitas',
                option_2: 'Pteridófitas',
                option_3: 'Gimnospermas',
                option_4: 'Angiospermas',
                answer: 2
            },
            {
                question: 'A produção natural de ágar pode ser observada em espécies do grupo das ...',
                option_1: 'algas verdes',
                option_2: 'algas pardas',
                option_3: 'algas vermelhas',
                option_4: 'algas douradas',
                answer: 2
            },
            {
                question: 'Qual a classe de moluscos que inclui turus e vieiras?',
                option_1: 'Gastrópodes',
                option_2: 'Bivalves',
                option_3: 'Cefalópodes',
                option_4: 'Escafópodes',
                answer: 1
            },
            {
                question: 'O nome cientifico do açaizeiro é Euterpe oleracea. A palavra Euterpe, usada isoladamente, indica seu (sua) ...',
                option_1: 'gênero',
                option_2: 'filo',
                option_3: 'ordem',
                option_4: 'classe',
                answer: 0
            },
            {
                question: 'Qual desses cientistas identificou a espécie Trypanosoma cruzi, seu ciclo evolutivo e o inseto transmissor?',
                option_1: 'Joseph Bancroft',
                option_2: 'Carlos Chagas',
                option_3: 'Gaspar Viana',
                option_4: 'Oswaldo Cruz',
                answer: 1
            },
            {
                question: 'O Bob Esponja, personagem de um desenho animado da TV, refere-se a animal do grupo dos ...',
                option_1: 'Cnidários',
                option_2: 'Equinodermas',
                option_3: 'Moluscos',
                option_4: 'Poríferos',
                answer: 3
            },
            {
                question: 'Qual desses animais tem esqueleto cartilaginoso?',
                option_1: 'pinguim',
                option_2: 'sapo',
                option_3: 'tubarão',
                option_4: 'zebra',
                answer: 2
            },
            {
                question: 'Qual dessas NÃO é transmitida pelo Aedes aegypti?',
                option_1: 'febre amarela',
                option_2: 'dengue',
                option_3: 'febre maculosa',
                option_4: 'chikungunya',
                answer: 2
            },
            {
                question: 'Qual desses vírus tem o RNA como material genético?',
                option_1: 'Retrovírus',
                option_2: 'Adenovírus',
                option_3: 'Herpesvírus',
                option_4: 'Papilomavírus',
                answer: 0
            },
            {
                question: 'No vírus H1N1, a letra “H” é inicial do nome de qual proteína, que o vírus utiliza para se fixar à célula hospedeira?',
                option_1: 'hemeritina',
                option_2: 'hemaglutinina',
                option_3: 'hemoglobina',
                option_4: 'hemocianina',
                answer: 1
            },
            {
                question: 'Qual desses NÃO é um equinoderma?',
                option_1: 'estrela-do-mar',
                option_2: 'ouriço-do-mar',
                option_3: 'anêmona-do-mar',
                option_4: 'pepino-do-mar',
                answer: 2
            },
            {
                question: 'Qual dessas doenças é causada por um protozoário?',
                option_1: 'febre amarela',
                option_2: 'toxoplasmose',
                option_3: 'sífilis',
                option_4: 'cisticercose',
                answer: 1
            },
            {
                question: 'A presença do manto que secreta uma concha é característica de animais do grupo dos ...',
                option_1: 'Anelidas',
                option_2: 'Cnidários',
                option_3: 'Artrópodes',
                option_4: 'Moluscos',
                answer: 3
            },
            {
                question: 'Filete e Antera integram a folha masculina da flor, que é chamada ...',
                option_1: 'estame',
                option_2: 'carpelo',
                option_3: 'sépala',
                option_4: 'pétala',
                answer: 0
            },
            {
                question: 'Wakame, Kombu e Nori, comuns na culinária oriental, são ...',
                option_1: 'Algas',
                option_2: 'Angiospermas',
                option_3: 'Invertebrados',
                option_4: 'Briófitas',
                answer: 0
            },
            {
                question: 'Qual desses cientistas é indicado como o descobridor da penicilina? ',
                option_1: 'Erwin Chargaff',
                option_2: 'Giulio Bizzozero',
                option_3: 'Alexander Fleming',
                option_4: 'Ernst Mayr',
                answer: 2
            },
            {
                question: 'Giardia e Tripanossomo locomovem-se por meio de ...',
                option_1: 'cílios',
                option_2: 'flagelos',
                option_3: 'pseudópodes',
                option_4: 'espículas',
                answer: 1
            },
            {
                question: 'O que o entomólogo estuda?',
                option_1: 'Aves',
                option_2: 'Crustáceos',
                option_3: 'Insetos',
                option_4: 'Fungos',
                answer: 2
            },
            {
                question: 'O estudo dos fungos é chamado ...',
                option_1: 'Ornitologia',
                option_2: 'Malacologia',
                option_3: 'Entomologia',
                option_4: 'Micologia',
                answer: 3
            },
            {
                question: 'A qual grupo de animais pertence a água-viva?',
                option_1: 'Artrópodes',
                option_2: 'Moluscos',
                option_3: 'Cnidários',
                option_4: 'Equinodermas',
                answer: 2
            },
            {
                question: 'Como são chamadas as bactérias esféricas que se organizam em grupos, semelhantes a cachos de uva?',
                option_1: 'bacilos',
                option_2: 'estafilococos',
                option_3: 'gonococos',
                option_4: 'espirilos',
                answer: 1
            },
            {
                question: 'Bactérias capazes de fixar o gás nitrogênio podem viver nas raízes de plantas como ...',
                option_1: 'o milho',
                option_2: 'a banana',
                option_3: 'o feijão',
                option_4: 'a melancia',
                answer: 2
            },
            {
                question: 'Qual desses grupos de seres vivos NÃO é incluído entre os protozoários?',
                option_1: 'Esporozoários',
                option_2: 'Mastigóforos',
                option_3: 'Mixosporídeos',
                option_4: 'Sarcodinos',
                answer: 2
            },
            {
                question: 'Como é chamado o conjunto de peças masculinas de uma flor?',
                option_1: 'androceu',
                option_2: 'gineceu',
                option_3: 'carpelo',
                option_4: 'perianto',
                answer: 0
            },
            {
                question: 'São vermes:',
                option_1: 'tuchina e ameba',
                option_2: 'solitária e lombriga',
                option_3: 'cogumelo e ancilóstomo',
                option_4: 'filária e riquétsia',
                answer: 1
            },
            {
                question: 'Quem formalizou a utilização do sistema de nomenclatura binominal para as espécies de seres vivos?',
                option_1: 'Lineu',
                option_2: 'Darwin',
                option_3: 'Lamarck',
                option_4: 'Dobzhanski',
                answer: 0
            },
            {
                question: 'Qual desses animais NÃO é um crustáceo?',
                option_1: 'craca',
                option_2: 'caracol',
                option_3: 'lagosta',
                option_4: 'caranguejo',
                answer: 1
            },
            {
                question: 'Após a fecundação em uma planta espermatófita, o óvulo transforma-se em ...',
                option_1: 'semente',
                option_2: 'fruto',
                option_3: 'pistilo',
                option_4: 'xilema',
                answer: 0
            },
            {
                question: 'Após a fecundação na flor de uma angiosperma, o ovário cresce e se transforma em ...',
                option_1: 'semente',
                option_2: 'fruto',
                option_3: 'pistilo',
                option_4: 'xilema',
                answer: 1
            },
            {
                question: 'Bacilariófitas são algas douradas. Nesse grupo destacam-se as ...',
                option_1: 'Feofíceas',
                option_2: 'Euglenófitas',
                option_3: 'Zooxantelas',
                option_4: 'Diatomáceas',
                answer: 3
            },
            {
                question: 'Qual a maneira correta de escrever o nome científico do açaí?',
                option_1: 'euterpe Oleracea',
                option_2: 'euterpe oleracea',
                option_3: 'Euterpe oleracea',
                option_4: 'Euterpe Oleracea',
                answer: 2
            },
            {
                question: 'Qual dessas plantas NÃO forma flores?',
                option_1: 'samambaia',
                option_2: 'mangueira',
                option_3: 'roseira',
                option_4: 'alecrim',
                answer: 0
            },
            {
                question: 'Qual dessas doenças é um exemplo de micose?',
                option_1: 'ascaridíase',
                option_2: 'gota',
                option_3: 'malária',
                option_4: 'sapinho',
                answer: 3
            },
            {
                question: 'Como é conhecido o cultivo de mexilhões?',
                option_1: 'Mitilicultura',
                option_2: 'Viticultura',
                option_3: 'Piscicultura',
                option_4: 'Ranicultura',
                answer: 0
            },
            {
                question: 'Qual desses mamíferos NÃO é um marsupial?',
                option_1: 'canguru',
                option_2: 'diabo-da-tasmânia',
                option_3: 'mucura',
                option_4: 'panda',
                answer: 3
            },
            {
                question: 'Qual desses animais NÃO pertence ao grupo dos osteíctes?',
                option_1: 'cavalo-marinho',
                option_2: 'peixe-leão',
                option_3: 'peixe-boi',
                option_4: 'peixe-palhaço',
                answer: 2
            },
            {
                question: 'Quais desses animais pertencem à mesma família dos elefantes e foram extintos há 5,6 mil anos, após a última glaciação?',
                option_1: 'dodô',
                option_2: 'mamutes',
                option_3: 'trilobitas',
                option_4: 'pterodáctilos',
                answer: 1
            },
            {
                question: 'Qual dessas doenças NÃO é prevenida pela lavagem das mãos?',
                option_1: 'Covid-19',
                option_2: 'Mononucleose',
                option_3: 'Ascaridíase',
                option_4: 'Malária',
                answer: 3
            },
            {
                question: 'Qual dessas NÃO é uma doença infecciosa?',
                option_1: 'anemia falciforme',
                option_2: 'tuberculose',
                option_3: 'leishmaniose',
                option_4: 'febre amarela',
                answer: 0
            },
            {
                question: 'Qual desses animais é hermafrodita?',
                option_1: 'camaleão',
                option_2: 'lombriga',
                option_3: 'preguiça',
                option_4: 'solitária',
                answer: 3
            },
            {
                question: 'Qual desses animais é cordado, porém invertebrado?',
                option_1: 'ascídia',
                option_2: 'arraia',
                option_3: 'centopeia',
                option_4: 'lampreia',
                answer: 0
            },
            {
                question: 'Como é chamado o gameta feminino das plantas?',
                option_1: 'óvulo',
                option_2: 'oosfera',
                option_3: 'anterozoide',
                option_4: 'esporo',
                answer: 1
            },
            {
                question: 'Como são chamadas as sementes de pinheiro?',
                option_1: 'cones',
                option_2: 'pinhas',
                option_3: 'pinhões',
                option_4: 'estróbilos',
                answer: 2
            },
            {
                question: 'Como é chamada a forma vágil de cnidários, que se desloca ativamente na água?',
                option_1: 'anfiblástula',
                option_2: 'alevino',
                option_3: 'pólipo',
                option_4: 'medusa',
                answer: 3
            },
            {
                question: 'São protozooses transmitidas por mosquitos:',
                option_1: 'dengue e doença do sono',
                option_2: 'leishmaniose e malária',
                option_3: 'doença de chagas e filariose',
                option_4: 'toxoplasmose e zika',
                answer: 1
            },
            {
                question: 'Como é chamado o hormônio polipeptídico que, em mamíferos, estimula as contrações do útero por ocasião do parto?',
                option_1: 'adrenalina',
                option_2: 'somatotrofina',
                option_3: 'ocitocina',
                option_4: 'vasopressina',
                answer: 2
            },
            {
                question: 'Qual desses NÃO pertence ao reino fungi?',
                option_1: 'champgnon',
                option_2: 'levedura de cerveja',
                option_3: 'erva-doce',
                option_4: 'bolor',
                answer: 2
            },
            {
                question: 'Qual desses é parente mais próximo do tubarão?',
                option_1: 'arraia',
                option_2: 'baleia',
                option_3: 'beijupirá',
                option_4: 'tambaqui',
                answer: 0
            },
            {
                question: 'Qual dessas plantas está mais proximamente relacionada aos pinheiros?',
                option_1: 'castanheira',
                option_2: 'coqueiro',
                option_3: 'samambaia',
                option_4: 'sequoia',
                answer: 3
            },
            {
                question: 'Qual dessas é uma característica dos condrictes?',
                option_1: 'bexiga natatória',
                option_2: 'sacos aéreos',
                option_3: 'esqueleto cartilaginoso',
                option_4: 'esqueleto ósseo',
                answer: 2
            },
            {
                question: 'Qual desses NÃO é um mamífero?',
                option_1: 'foca',
                option_2: 'peixe-bruxa',
                option_3: 'orca',
                option_4: 'peixe-boi',
                answer: 1
            },
            {
                question: 'Os anfíbios geralmente têm uma fase jovem conhecida como ...',
                option_1: 'alevino',
                option_2: 'girino',
                option_3: 'lagarta',
                option_4: 'ninfa',
                answer: 1
            },
            {
                question: 'Quais são os anfíbios que não possuem patas, mesmo na fase adulta?',
                option_1: 'Gimnofionos',
                option_2: 'Pelecípodes',
                option_3: 'Testudinatas',
                option_4: 'Urodelos',
                answer: 0
            },
            {
                question: 'Quais desses são moluscos cefalópodes?',
                option_1: 'caramujos e lesmas',
                option_2: 'ostras e turus',
                option_3: 'polvos e lulas',
                option_4: 'camarões e lagostas',
                answer: 2
            },
            {
                question: 'Qual desses NÃO pertence ao filo Chordata?',
                option_1: 'lampreia',
                option_2: 'pirarucu',
                option_3: 'camarão',
                option_4: 'salamandra',
                answer: 2
            },
            {
                question: 'Qual termo que designa o conjunto formado por cálice e corola da flor?',
                option_1: 'androceu',
                option_2: 'gineceu',
                option_3: 'pedúnculo',
                option_4: 'perianto',
                answer: 3
            },
            {
                question: 'Qual dessas estruturas participa da reprodução de samambaias?',
                option_1: 'esporos',
                option_2: 'pinhas',
                option_3: 'sorédios',
                option_4: 'sementes',
                answer: 0
            },
            {
                question: 'Qual desses insetos faz parte da ordem dos lepidópteros?',
                option_1: 'abelha',
                option_2: 'borboleta',
                option_3: 'gafanhoto',
                option_4: 'mosca',
                answer: 1
            },
            {
                question: 'A fermentação nos músculos produz qual subproduto?',
                option_1: 'ácido lático',
                option_2: 'água',
                option_3: 'etanol',
                option_4: 'gás carbônico',
                answer: 0
            },
            {
                question: 'O chamado soro antibotrópico é indicado contra o veneno de ...',
                option_1: 'centopeia',
                option_2: 'jararaca',
                option_3: 'escorpião',
                option_4: 'surucucu',
                answer: 1
            },
            {
                question: 'Qual desses insetos NÃO pertence à ordem dos himenópteros?',
                option_1: 'abelha',
                option_2: 'percevejo',
                option_3: 'formiga',
                option_4: 'vespa',
                answer: 1
            },
            {
                question: 'Nos mamíferos, qual o músculo que divide o tronco em tórax e abdômen?',
                option_1: 'diafragma',
                option_2: 'esternocleidomastoideo',
                option_3: 'intercostal',
                option_4: 'peitoral',
                answer: 0
            },
    ])
    }
}