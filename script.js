document.getElementById('formulario').addEventListener('submit', function(e) {
  e.preventDefault();

  const form = e.target;
  const dados = new FormData(form);
  let simCount = 0;

  for (let [key, value] of dados.entries()) {
    if (key.startsWith("p") && value === "sim") simCount++;
  }

  // Enviar para a planilha
  fetch("https://script.google.com/macros/s/AKfycby7ajM5xkmuwzWIHfpk1MPEtNPIPyOzNM9WUxLxDnwRz1r_DQy7IddcPNap8O3iNoVn/exec", {
    method: "POST",
    body: dados
  });

  const resultado = document.getElementById("resultado");
  resultado.style.display = "block";

  if (simCount >= 6) {
    resultado.innerHTML = "<h3>Parabéns! Cultura de Gestão com <strong>Alta Maturidade</strong></h3><p>Sua empresa tem uma base sólida de cultura e práticas de pessoas — continue fortalecendo!</p>";
  } else if (simCount >= 3) {
    resultado.innerHTML = "<h3>Cultura de Gestão com <strong>Média Maturidade</strong></h3><p>Você está no caminho, mas existem pontos que podem estar impedindo um crescimento sustentável.</p>";
  } else {
    resultado.innerHTML = "<h3>Cultura de Gestão com <strong>Baixa Maturidade</strong></h3><p>Recomenda-se atenção! Sua cultura e gestão de pessoas precisam de desenvolvimento para apoiar o crescimento da empresa.</p>";
  }

  resultado.innerHTML += '<br><a href="https://api.whatsapp.com/send?phone=5519998162919" target="_blank"><button>Falar com um especialista</button></a>';
});