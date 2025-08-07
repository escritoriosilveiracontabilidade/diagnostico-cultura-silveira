const perguntas = [
  "Sua empresa possui valores organizacionais claros e divulgados para toda a equipe?",
  "Os líderes da sua empresa têm tempo e preparo para desenvolver suas equipes além das demandas operacionais?",
  "Existe uma cultura estruturada de feedbacks constantes e alinhamento entre líderes e liderados?",
  "As decisões sobre pessoas (promoções, desligamentos, reconhecimentos) são baseadas em dados e critérios claros?",
  "Os colaboradores têm clareza sobre o papel que desempenham na estratégia da empresa?",
  "A empresa tem um plano de desenvolvimento individual ou trilhas de carreira para os colaboradores?",
  "Existe uma estratégia ativa para retenção de talentos e manutenção de um bom clima organizacional?"
];

window.onload = () => {
  const perguntasDiv = document.getElementById("perguntas");
  if (!perguntasDiv) return;

  perguntas.forEach((texto, i) => {
    const item = document.createElement("div");
    item.className = "pergunta";
    item.innerHTML = `
      <label>${texto}</label><br/>
      <label><input type="radio" name="p${i+1}" value="Sim" required /> Sim</label>
      <label><input type="radio" name="p${i+1}" value="Não" required /> Não</label>
    `;
    perguntasDiv.appendChild(item);
  });
};

document.getElementById("diagnosticoForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const form = e.target;
  const data = new FormData(form);

  let simCount = 0;
  for (let i = 1; i <= 7; i++) simCount += (data.get(`p${i}`) === "Sim") ? 1 : 0;

  const resultado =
    simCount >= 6 ? "Alta Maturidade" :
    simCount >= 3 ? "Média Maturidade" :
                    "Baixa Maturidade";

  data.append("resultado", resultado);

  const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwqnl8dKhV2xkp-4VTnT9MOcXIaXTIG3MTZ7KkU72OG7srzgm3s4j8l8QrH7NUqzjQ9Iw/exec";

  try {
    await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      body: data
    });
  } catch (err) {
    console.error("Erro ao enviar para planilha:", err);
  }

  const bloco = document.getElementById("resultado");
  const titulo = document.getElementById("resultadoTitulo");
  const texto = document.getElementById("resultadoTexto");

  let mensagem = "";
  if (resultado === "Alta Maturidade") {
    mensagem = "Sua empresa tem uma base sólida de cultura e práticas de pessoas — continue fortalecendo!";
  } else if (resultado === "Média Maturidade") {
    mensagem = "Você está no caminho, mas existem pontos que podem estar impedindo um crescimento sustentável.";
  } else {
    mensagem = "É hora de estruturar sua cultura e gestão de pessoas para garantir o sucesso da empresa.";
  }

  if (titulo) titulo.innerHTML = `Parabéns! Cultura de Gestão com <strong>${resultado}</strong>`;
  if (texto) texto.textContent = mensagem;
  if (bloco) bloco.classList.remove("hidden");

  form.reset();
});
