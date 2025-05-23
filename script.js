const frases = [
    "Feche os olhos por um instante. Respire com calma.",
    "Solte os ombros. Inspire lentamente.",
    "Agora, tudo o que importa é sua respiração.",
    "Deixe o ar entrar. Está tudo bem em parar.",
    "Você merece esse momento de cuidado.",
    "Sinta o ar. Sinta você aqui, agora.",
    "Sua paz começa na sua respiração.",
    "Permita-se desacelerar por alguns segundos.",
    "Um passo de cada vez. Uma respiração de cada vez.",
    "Seu corpo pede pausa. Atenda com carinho.",
    "Silencie a pressa. Respire com intenção.",
    "Não pense. Apenas respire.",
    "Você está aqui. Isso é o suficiente por agora.",
    "Você tem direito ao descanso.",
    "Pausar é essencial. Respire e recomece.",
    "Tudo o que você precisa agora é respirar."
  ];
  
  let fraseIndex = 0;
  let intervaloFrases = null;
  let intervaloRespiracao = null;
  let vozesDisponiveis = [];
  
window.speechSynthesis.onvoiceschanged = () => {
vozesDisponiveis = speechSynthesis.getVoices();
  };
    function falarFrase(frase) {
    const utterance = new SpeechSynthesisUtterance(frase);
    utterance.lang = "pt-BR";
    utterance.rate = 0.95;
    utterance.pitch = 1.1;
  
    const vozSuave = vozesDisponiveis.find(v =>
      v.lang.startsWith("pt") &&
      (v.name.toLowerCase().includes("feminina") || v.name.toLowerCase().includes("br"))
    );
    if (vozSuave) utterance.voice = vozSuave;
  
    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
  }
    function atualizarFrase() {
    const el = document.getElementById("frase");
    const frase = frases[fraseIndex];
    if (el) el.innerText = frase;
    falarFrase(frase);
    fraseIndex = (fraseIndex + 1) % frases.length;
  }
    function cicloRespiratorio() {
    const circulo = document.getElementById("circulo");
    const instrucao = document.getElementById("instrucao");
  
    if (!circulo || !instrucao) return;
  
    circulo.style.transform = "scale(1.5)";
    instrucao.innerText = "Inspire profundamente...";

  setTimeout(() => {
    instrucao.innerText = "Segure a respiração...";
  }, 4000);
  
    setTimeout(() => {
      instrucao.innerText = "Expire lentamente...";
      circulo.style.transform = "scale(1)";
    }, 7000);
  
    setTimeout(() => {
      instrucao.innerText = "Pausa. Respire normalmente por alguns segundos.";
    }, 11000);

    setTimeout(() => {
      instrucao.innerText = "Você está indo muito bem. Continue.";
    }, 16000);
  }
  function iniciarRespiracao() {
    document.querySelector('.ativador-audio')?.remove();
  
    clearInterval(intervaloFrases);
    clearInterval(intervaloRespiracao);
  
    cicloRespiratorio();
    atualizarFrase();
  
    intervaloRespiracao = setInterval(cicloRespiratorio, 12000);
    intervaloFrases = setInterval(atualizarFrase, 10000);
      setTimeout(() => {
      clearInterval(intervaloRespiracao);
      clearInterval(intervaloFrases);
      const instrucao = document.getElementById("instrucao");
      if (instrucao) instrucao.innerText = "Sessão encerrada. Respire no seu ritmo.";
    }, 300000);
  }
  
  let intervaloSilencioso;
  let ultimaFraseIndex = -1;

  const frasesSilenciosas = [
    "Respire fundo. Se puder, vá até um cômodo com porta que tranca.",
    "Desative o som do celular. Mantenha-o com você.",
    "Se sentir perigo imediato, disque 190 ou envie uma mensagem para alguém de confiança.",
    "Você pode mandar só uma palavra ou emoji para pedir ajuda. Quem te ama vai entender.",
    "Ligue para o 180 quando estiver segura. É gratuito e anônimo.",
    "Deixe uma mochila pronta com documentos, remédios e itens essenciais.",
    "Se puder, memorize um número de confiança. Use quando for seguro.",
    "A violência emocional também é grave. Você pode pedir ajuda mesmo sem marcas visíveis.",
    "Tente manter a calma. Você está fazendo o que pode com o que tem.",
    "Quando estiver pronta, procure a delegacia da mulher ou um centro de apoio.",
    "Acesse ajuda online de forma segura em: www.mulhersegura.gov.br",
    "Agressão é crime. Você tem o direito de sair dessa situação.",
    "Avise alguém de confiança com uma mensagem discreta: 'preciso conversar'.",
    "Se não puder sair agora, planeje. Você merece liberdade e segurança.",
    "Anote ou memorize rotas seguras de fuga em sua casa. Isso pode salvar você.",
    "Seu silêncio agora é força. Mas você não precisa passar por isso sozinha.",  
  ];
  function ativarModoSilencioso() {
    const div = document.getElementById("modoSilencioso");
    div.style.display = "flex";
    document.body.style.overflow = "hidden";
    mostrarFraseSilenciosa();
    intervaloSilencioso = setInterval(mostrarFraseSilenciosa, 5000);
  }
  function desativarModoSilencioso() {
    const div = document.getElementById("modoSilencioso");
    div.style.display = "none";
    document.body.style.overflow = "auto";
    clearInterval(intervaloSilencioso);
  }
  function mostrarFraseSilenciosa() {
    const frase = frasesSilenciosas[Math.floor(Math.random() * frasesSilenciosas.length)];
    document.getElementById("fraseSilenciosa").innerText = frase;
  }
function alternarModoEscuro() {
    document.body.classList.toggle("dark-mode");
  }
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  function abrirModal(idcardEngasgo) {
    document.getElementById(id).style.display = 'flex';
  }
  function fecharModal(cardEngasgo) {
    document.getElementById(id).style.display = 'none';
  }
  window.speechSynthesis.onvoiceschanged = () => {
  if (!intervalFrases) {
    atualizarFrase();
    intervalFrases = setInterval(atualizarFrase, 10000);
  }
};
function iniciarFrasesComVoz() {
    if (!intervalFrases) {
      atualizarFrase();
      intervalFrases = setInterval(atualizarFrase, 10000);
    }
  }
  window.speechSynthesis.onvoiceschanged = iniciarFrasesComVoz;
    if (speechSynthesis.getVoices().length > 0) {
    iniciarFrasesComVoz();
  }
  function abrirModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
      modal.style.display = "flex";
    }
  }
  function fecharModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
      modal.style.display = "none";
    }
  }
  
