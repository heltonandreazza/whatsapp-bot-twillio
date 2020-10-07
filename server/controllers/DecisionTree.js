export const KEYS = {
  oi: 'oi',
  aulas: 'aulas',
  atendente: 'falar com atendente',
  pesquisar: 'pesquisar no google',
  um: '1',
  dois: '2',
  tres: '3',
  pesquise: 'pesquise',
  musculacao: 'musculacao',
  karate: 'karate',
}

export const RESPONSES = {
  bemVindo: `Olá!! Eu sou a Sara da Academia Cultural, e estou aqui pra te ajudar. Caso queira conhecer nossos serviços selecione uma das opções digitando o número ou a descrição do item: 1 - ${KEYS.aulas}, 2 - ${KEYS.atendente}, 3 - ${KEYS.pesquisar}.`,
  tchau: 'Tudo bem então!! Caso precisar de mim estou aqui, basta digitar "oi"',
  aulas: 'Nós temos muitas aulas legais como: musculação, karatê. Digite a aula desejada',
  atendente: `Para falar com um de nossos atendentes  clicando neste link: ${encodeURI('https://wa.me/554792203282?text=Olá!! Gostaria de saber mais sobre vocês :)')}`,
  pesquisar: 'Essa ferramenta é bem legal! Caso queira pesquisar algo no google basta digitar a palavra "pesquise" seguida da palavra desejada que faremos a busca no google para você. Por exemplo: "pesquise academia cultural"',
  musculacao: `Ótima escolha!! Acesse a nossa página de musculação clicando neste link: ${encodeURI('http://www.academiacultural.net/pages/single-classes-1.html')}`,
  karate: `Ótima escolha!! Acesse a nossa página de karatê clicando neste link: ${encodeURI('http://www.academiacultural.net/pages/single-classes-5.html')}`,
}

export const KEYS_RESPONSES = {
  [KEYS.oi]: RESPONSES.bemVindo,
  [KEYS.aulas]: RESPONSES.aulas,
  [KEYS.atendente]: RESPONSES.atendente,
  [KEYS.pesquisar]: RESPONSES.pesquisar,
  [KEYS.um]: RESPONSES.aulas,
  [KEYS.dois]: RESPONSES.atendente,
  [KEYS.tres]: RESPONSES.pesquisar,
  [KEYS.musculacao]: RESPONSES.musculacao,
  [KEYS.karate]: RESPONSES.karate,
}