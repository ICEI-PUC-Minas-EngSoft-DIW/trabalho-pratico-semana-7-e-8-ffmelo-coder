// ============================================
// ESTRUTURA JSON DOS DADOS DAS CARTAS MAGIC
// ============================================

// Dados das cartas Magic - Base de dados completa
const cartas = [
  {
    id: 1,
    nome: "Sword of Feast and Famine",
    preco: "BRL 87,14",
    descricao: "Artifact — Equipment",
    custoMana: "3",
    cores: ["incolor"],
    raridade: "Mythic Rare",
    categoria: "Destaque",
    imagem: "img/cartas/sword-of-feast-and-famine.jpg",
    detalhes: {
      poder: "-",
      resistencia: "-",
      texto:
        "Equipped creature gets +2/+2 and has protection from black and from green.\n\nWhenever equipped creature deals combat damage to a player, that player discards a card and you untap all lands you control.\n\nEquip {2}",
      artista: "Chris Rahn",
      set: "Double Masters",
      numero: "296/332",
    },
  },
  {
    id: 2,
    nome: "Jace, Wielder of Mysteries",
    preco: "BRL 18,43",
    descricao: "Legendary Planeswalker — Jace",
    custoMana: "1UUU",
    cores: ["azul"],
    raridade: "Rare",
    categoria: "Destaque",
    imagem: "img/cartas/war-54-jace-wielder-of-mysteries.jpg",
    detalhes: {
      poder: "-",
      resistencia: "-",
      lealdade: "4",
      texto:
        "If you would draw a card while your library has no cards in it, you win the game instead.\n\n+1: Target player mills two cards. Draw a card.\n\n−8: Draw seven cards. Then if your library has no cards in it, you win the game.",
      artista: "Anna Steinbauer",
      set: "War of the Spark",
      numero: "54/264",
    },
  },
  {
    id: 3,
    nome: "Blasphemous Act",
    preco: "BRL 11,16",
    descricao: "Sorcery",
    custoMana: "8R",
    cores: ["vermelho"],
    raridade: "Rare",
    categoria: "Destaque",
    imagem: "img/cartas/eoc-86-blasphemous-act.jpg",
    detalhes: {
      poder: "-",
      resistencia: "-",
      texto:
        "This spell costs {1} less to cast for each creature on the battlefield. \n\nBlasphemous Act deals 13 damage to each creature.",
      artista: "Daarken",
      set: "Edge of Eternities: Commander",
      numero: "0086",
    },
  },
  {
    id: 4,
    nome: "Counterspell",
    preco: "BRL 4,81",
    descricao: "Instant",
    custoMana: "UU",
    cores: ["azul"],
    raridade: "Uncommon",
    categoria: "Destaque",
    imagem: "img/cartas/dsc-114-counterspell.jpg",
    detalhes: {
      poder: "-",
      resistencia: "-",
      texto: "Counter target spell.",
      artista: "Zack Stella",
      set: "Duskmourn: House of Horror Commander",
      numero: "0114",
    },
  },
  {
    id: 5,
    nome: "Icetill Explorer",
    preco: "BRL 68,69",
    descricao: "Creature — Insect Scout",
    custoMana: "2G",
    cores: ["verde"],
    raridade: "Rare",
    categoria: "Nova",
    imagem: "img/cartas/eoe-192-icetill-explorer.jpg",
    detalhes: {
      poder: "2",
      resistencia: "4",
      texto: `You may play an additional land on each of your turns.\n\nYou may play lands from your graveyard.\n\nLandfall — Whenever a land you control enters, mill a card.`,
      artista: "Warren Mahy",
      set: "Edge of Eternities",
      numero: "0192",
    },
  },
  {
    id: 6,
    nome: "The Dominion Bracelet",
    preco: "BRL 17,99",
    descricao: "Legendary Artifact - Equipment",
    custoMana: "2",
    cores: ["incolor"],
    raridade: "Mythic Rare",
    categoria: "Nova",
    imagem: "img/cartas/eoe-239-the-dominion-bracelet.jpg",
    detalhes: {
      poder: "-",
      resistencia: "-",
      texto: `Equipped creature gets +1/+1 and has "{15}, Exile The Dominion Bracelet: You control target opponent during their next turn. This ability costs {X} less to activate, where X is this creature’s power. Activate only as a sorcery." \n\nEquip {1}`,
      artista: "Nathaniel Himawan",
      set: "Edge of Eternities",
      numero: "0239",
    },
  },
  {
    id: 7,
    nome: "Kaito, Bane of Nightmares",
    preco: "BRL 179,49",
    descricao: "Legendary Planeswalker — Kaito",
    custoMana: "2UB",
    cores: ["azul", "preto"],
    raridade: "Mythic Rare",
    categoria: "Nova",
    imagem: "img/cartas/dsk-220-kaito-bane-of-nightmares.jpg",
    detalhes: {
      poder: "-",
      resistencia: "-",
      lealdade: "4",
      texto: `Ninjutsu {1}{U}{B}\n\nDuring your turn, as long as Kaito has one or more loyalty counters on him, he’s a 3/4 Ninja creature and has hexproof.\n\n+1: You get an emblem with “Ninjas you control get +1/+1.”\n\n0: Surveil 2. Then draw a card for each opponent who lost life this turn.\n\n−2: Tap target creature. Put two stun counters on it.`,
      artista: "Joshua Raphael",
      set: "Duskmourn: House of Horror",
      numero: "220",
    },
  },
  {
    id: 8,
    nome: "Fomori Vault",
    preco: "BRL 49,90",
    descricao: "Land",
    custoMana: "",
    cores: ["incolor"],
    raridade: "Mythic Rare",
    categoria: "Nova",
    imagem: "img/cartas/big-29-fomori-vault.jpg",
    detalhes: {
      poder: "-",
      resistencia: "-",
      texto: `{T}: Add {C}.\n\n{3}, {T}, Discard a card: Look at the top X cards of your library, where X is the number of artifacts you control. Put one of those cards into your hand and the rest on the bottom of your library in a random order.`,
      artista: "Jonas de Ro",
      set: "The Big Score",
      numero: "0029",
    },
  },
];

// ============================================
// FUNÇÕES DE GERAÇÃO DINÂMICA DE CONTEÚDO
// ============================================

// Função para gerar cards na página principal
function gerarCards() {
  const cartasDestaque = cartas.filter(
    (carta) => carta.categoria === "Destaque"
  );
  const cartasNovas = cartas.filter((carta) => carta.categoria === "Nova");

  // Gerar cards de destaque
  const listaDestaque = document.querySelector(".destaques .lista-cartas");
  if (listaDestaque) {
    // Preservar as setas e limpar apenas os cards
    const setas = listaDestaque.querySelectorAll(".seta");
    listaDestaque.innerHTML = "";

    // Adicionar seta esquerda
    if (setas[0]) listaDestaque.appendChild(setas[0]);

    // Adicionar cards de destaque
    cartasDestaque.forEach((carta) => {
      const cardElement = criarCard(carta);
      listaDestaque.appendChild(cardElement);
    });

    // Adicionar seta direita
    if (setas[1]) listaDestaque.appendChild(setas[1]);
  }

  // Gerar cards novas
  const listaNovas = document.querySelector(".novas .lista-cartas");
  if (listaNovas) {
    // Preservar as setas e limpar apenas os cards
    const setas = listaNovas.querySelectorAll(".seta");
    listaNovas.innerHTML = "";

    // Adicionar seta esquerda
    if (setas[0]) listaNovas.appendChild(setas[0]);

    // Adicionar cards novos
    cartasNovas.forEach((carta) => {
      const cardElement = criarCard(carta);
      listaNovas.appendChild(cardElement);
    });

    // Adicionar seta direita
    if (setas[1]) listaNovas.appendChild(setas[1]);
  }
}

// Função para criar um card individual
function criarCard(carta) {
  const article = document.createElement("article");
  article.className = "carta flex-shrink-0";
  article.style.cursor = "pointer";

  article.innerHTML = `
    <img class="img-fluid" src="${carta.imagem}" alt="${carta.nome}" />
    <p>${carta.nome}<br>${carta.preco}</p>
  `;

  // Adicionar evento de clique para navegar para a página de detalhes
  article.addEventListener("click", () => {
    // Adicionar feedback visual antes da navegação
    article.style.transform = "scale(0.95)";
    article.style.opacity = "0.8";

    // Navegar após uma pequena animação
    setTimeout(() => {
      window.location.href = `detalhes.html?id=${carta.id}`;
    }, 150);
  });

  // Adicionar efeito hover
  article.addEventListener("mouseenter", () => {
    article.style.transform = "scale(1.05)";
    article.style.transition = "transform 0.2s ease";
  });

  article.addEventListener("mouseleave", () => {
    article.style.transform = "scale(1)";
  });

  // Adicionar atributo para acessibilidade
  article.setAttribute("tabindex", "0");
  article.setAttribute("role", "button");
  article.setAttribute("aria-label", `Ver detalhes da carta ${carta.nome}`);

  // Permitir navegação via teclado
  article.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      article.click();
    }
  });

  return article;
}

// ============================================
// FUNÇÕES DA PÁGINA DE DETALHES
// ============================================

// Função para carregar detalhes da carta na página de detalhes
function carregarDetalhes() {
  const urlParams = new URLSearchParams(window.location.search);
  const cartaId = parseInt(urlParams.get("id"));

  // Verificar se o ID é válido
  if (!cartaId || isNaN(cartaId)) {
    mostrarErroDetalhes("ID da carta inválido ou não fornecido");
    return;
  }

  // Buscar a carta pelo ID
  const carta = cartas.find((c) => c.id === cartaId);

  if (!carta) {
    mostrarErroDetalhes(`Carta com ID ${cartaId} não encontrada`);
    return;
  }

  // Preencher informações da carta na página de detalhes
  preencherDetalhes(carta);
}

// Função para mostrar erro na página de detalhes
function mostrarErroDetalhes(mensagem) {
  const main = document.querySelector("main");
  if (main) {
    main.innerHTML = `
      <div class="container text-center mt-5">
        <div class="alert alert-danger" role="alert">
          <h2>❌ Erro</h2>
          <p class="mb-3">${mensagem}</p>
          <a href="index.html" class="btn btn-warning btn-lg">
            🏠 Voltar para Home
          </a>
        </div>
      </div>
    `;
  }
}

// Função para preencher os detalhes da carta
function preencherDetalhes(carta) {
  document.title = `${carta.nome} - Coleção Magic`;

  // Atualizar elementos da página
  const nomeElement = document.getElementById("carta-nome");
  const imagemElement = document.getElementById("carta-imagem");
  const precoElement = document.getElementById("carta-preco");
  const descricaoElement = document.getElementById("carta-descricao");
  const custoManaElement = document.getElementById("carta-custo-mana");
  const raridadeElement = document.getElementById("carta-raridade");
  const poderResistenciaElement = document.getElementById(
    "carta-poder-resistencia"
  );
  const textoElement = document.getElementById("carta-texto");
  const artistaElement = document.getElementById("carta-artista");
  const setElement = document.getElementById("carta-set");
  const numeroElement = document.getElementById("carta-numero");
  const lealdadeElement = document.getElementById("carta-lealdade");

  if (nomeElement) nomeElement.textContent = carta.nome;
  if (imagemElement) {
    imagemElement.src = carta.imagem;
    imagemElement.alt = carta.nome;
  }
  if (precoElement) precoElement.textContent = carta.preco;
  if (descricaoElement) descricaoElement.textContent = carta.descricao;
  if (custoManaElement) custoManaElement.textContent = carta.custoMana || "—";
  if (raridadeElement) raridadeElement.textContent = carta.raridade;

  // Poder e Resistência ou Lealdade
  if (carta.detalhes.lealdade) {
    if (poderResistenciaElement) poderResistenciaElement.textContent = "—";
    if (lealdadeElement) lealdadeElement.textContent = carta.detalhes.lealdade;
  } else {
    if (poderResistenciaElement) {
      poderResistenciaElement.textContent = `${carta.detalhes.poder}/${carta.detalhes.resistencia}`;
    }
    if (lealdadeElement) lealdadeElement.textContent = "—";
  }

  if (textoElement) textoElement.textContent = carta.detalhes.texto;
  if (artistaElement) artistaElement.textContent = carta.detalhes.artista;
  if (setElement) setElement.textContent = carta.detalhes.set;
  if (numeroElement) numeroElement.textContent = carta.detalhes.numero;

  // Gerar símbolos de mana
  gerarSimbolosMana(carta.cores);
}

// Função para gerar símbolos de mana
function gerarSimbolosMana(cores) {
  const coresContainer = document.getElementById("carta-cores");
  if (!coresContainer) return;

  coresContainer.innerHTML = "";

  const simbolosMana = {
    branco: "img/mana/W.svg",
    azul: "img/mana/U.svg",
    preto: "img/mana/B.svg",
    vermelho: "img/mana/R.svg",
    verde: "img/mana/G.svg",
    incolor: "img/mana/C.svg",
  };

  cores.forEach((cor) => {
    if (simbolosMana[cor]) {
      const img = document.createElement("img");
      img.src = simbolosMana[cor];
      img.alt = cor;
      img.className = "simbolo-mana";
      img.style.width = "20px";
      img.style.height = "20px";
      img.style.marginRight = "5px";
      coresContainer.appendChild(img);
    }
  });
}

// ============================================
// FUNÇÕES DE NAVEGAÇÃO E INTERATIVIDADE
// ============================================

// Função para funcionalidade dos botões de mana (pesquisa)
function configurarBotoesMana() {
  const manaButtons = document.querySelectorAll(".mana");

  manaButtons.forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.toggle("checked");
    });
  });
}

// Função para configurar navegação entre cartas
function configurarNavegacaoCartas() {
  const btnAnterior = document.getElementById("carta-anterior");
  const btnProxima = document.getElementById("carta-proxima");

  if (!btnAnterior || !btnProxima) return;

  const urlParams = new URLSearchParams(window.location.search);
  const cartaAtual = parseInt(urlParams.get("id"));

  // Encontrar a carta atual
  const carta = cartas.find((c) => c.id === cartaAtual);
  if (!carta) return;

  // Filtrar cartas pela mesma categoria
  const cartasDaCategoria = cartas.filter(
    (c) => c.categoria === carta.categoria
  );

  // Encontrar índice da carta atual dentro da categoria
  const indexAtualNaCategoria = cartasDaCategoria.findIndex(
    (c) => c.id === cartaAtual
  );

  // Configurar botão anterior
  if (indexAtualNaCategoria > 0) {
    const cartaAnterior = cartasDaCategoria[indexAtualNaCategoria - 1];
    btnAnterior.addEventListener("click", () => {
      window.location.href = `detalhes.html?id=${cartaAnterior.id}`;
    });
    btnAnterior.disabled = false;
    btnAnterior.title = `← ${cartaAnterior.nome}`;
  } else {
    btnAnterior.disabled = true;
    btnAnterior.title = `Primeira carta da categoria "${carta.categoria}"`;
  }

  // Configurar botão próxima
  if (indexAtualNaCategoria < cartasDaCategoria.length - 1) {
    const cartaProxima = cartasDaCategoria[indexAtualNaCategoria + 1];
    btnProxima.addEventListener("click", () => {
      window.location.href = `detalhes.html?id=${cartaProxima.id}`;
    });
    btnProxima.disabled = false;
    btnProxima.title = `${cartaProxima.nome} →`;
  } else {
    btnProxima.disabled = true;
    btnProxima.title = `Última carta da categoria "${carta.categoria}"`;
  }
}

// ============================================
// INICIALIZAÇÃO DA APLICAÇÃO
// ============================================

// Inicialização baseada na página atual
document.addEventListener("DOMContentLoaded", () => {
  // Verificar se estamos na página principal ou de detalhes
  if (window.location.pathname.includes("detalhes.html")) {
    carregarDetalhes();
    configurarNavegacaoCartas();
  } else {
    // Página principal
    gerarCards();
    configurarBotoesMana();
  }
});
