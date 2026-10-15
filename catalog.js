const projects = [
  ["Gastronomia", "Brasa Burger", "brasa-burger", "Hambúrguer em camadas e movimento no scroll"],
  ["Gastronomia", "Forno 72", "forno-setenta-dois", "Pizzaria com produto giratório"],
  ["Gastronomia", "Dobra Pastel", "dobra-pastel", "Pastelaria com narrativa de produto"],
  ["Gastronomia", "Rua Wok", "rua-wok", "Região e modalidade de atendimento"],
  ["Gastronomia", "Casa Lume", "casa-lume-trattoria", "Unidades, eventos e intenção de reserva"],
  ["Gastronomia", "Grão de Sol", "grao-de-sol", "Café e ritual de preparo"],
  ["Gastronomia", "Alto Bar", "alto-bar", "Carta de drinks interativa"],
  ["Gastronomia", "Fatia Atelier", "fatia-atelier", "Confeitaria e composição de encomenda"],
  ["Moda & beleza", "Lumea Eyewear", "lumea-eyewear", "Armações e acabamentos"],
  ["Moda & beleza", "Noma Bags", "noma-bags", "Bolsas, cores e parallax"],
  ["Moda & beleza", "Sombra Perfumaria", "sombra-perfumaria", "Notas olfativas e atmosferas"],
  ["Moda & beleza", "Vetor Sneakers", "vetor-sneakers", "Tênis, cores e numerações"],
  ["Moda & beleza", "Mira Atelier", "mira-salao", "Serviços e pré-consulta"],
  ["Moda & beleza", "Rito Presentes", "rito-presentes", "Velas e caixa configurável"],
  ["Serviços", "Prumo", "prumo", "Reparos e preparação de pedido"],
  ["Serviços", "Pulso", "pulso", "Triagem de assistência técnica"],
  ["Serviços", "Órbita", "orbita", "Barbearia e escolha de serviço"],
  ["Serviços", "Lente", "lente", "Fotografia corporativa e briefing"],
  ["Serviços", "Verniz", "verniz", "Estética automotiva e comparação"],
  ["Serviços", "Clara", "clara", "Limpeza especializada"],
  ["Espaços", "Vértice", "imobiliario", "Imóveis com filtros combinados"],
  ["Espaços", "Matéria Oficina", "marcenaria", "Madeira e bancada configuráveis"],
  ["Espaços", "Bruma Refúgios", "hospedagem", "Cabanas e estimativa de estadia"],
  ["Espaços", "Folha Viva", "paisagismo", "Planejamento de jardim"],
  ["Espaços", "Azul de Dentro", "piscinas", "Manutenção e comparador visual"],
  ["Espaços", "Fluxo Técnico", "climatizacao", "Estimativa preliminar de climatização"],
  ["Espaços", "Cume Obra", "reformas", "Telhado, laje e paredes interativos"],
  ["Espaços", "Entre Casa", "interiores", "Ambientes e paletas exploráveis"],
  ["Produtos & digital", "Meridiano", "meridiano-watches", "Relógios com acabamentos"],
  ["Produtos & digital", "Órbita Academia", "orbita-academia", "Trilhas e plano semanal"],
  ["Produtos & digital", "Pulso Workspace", "pulso-workspace", "Quadro de tarefas funcional"],
  ["Produtos & digital", "Formato 3D", "formato-3d", "Peça impressa configurável"],
  ["Produtos & digital", "Veio Materiais", "veio-materiais", "Catálogo B2B e comparação"],
  ["Produtos & digital", "Entrelinha", "entrelinha-branding", "Direções visuais para parceria"],
  ["Especialidades", "Corda Atelier", "corda-atelier", "Luthieria e acabamentos"],
  ["Especialidades", "Intervalo", "intervalo-galeria", "Galeria de arte filtrável"],
  ["Especialidades", "Aurora Vinhos", "aurora-vinhos", "Rótulos e perfis de bebida"],
  ["Especialidades", "Terra Viva", "terra-viva-ceramica", "Cerâmica e esmaltes"],
  ["Especialidades", "Maré Clara", "mare-clara-aquarios", "Aquarismo e luz interativa"],
  ["Especialidades", "Solstício", "solsticio-energia", "Energia solar e telhado interativo"]
];

const list = document.querySelector("#project-list");
if (list) {
  for (const [category, title, slug, description] of projects) {
    const card = document.createElement("article");
    card.className = "project-item";
    card.innerHTML = `<span class="project-category"></span><h3></h3><p></p><div class="project-links"><a class="project-live" target="_blank" rel="noopener">Abrir demo ↗</a><a class="project-code" target="_blank" rel="noopener">GitHub ↗</a></div>`;
    card.querySelector(".project-category").textContent = category;
    card.querySelector("h3").textContent = title;
    card.querySelector("p").textContent = description;
    card.querySelector(".project-live").href = `https://oluisvi.github.io/servagency-demo-${slug}/`;
    card.querySelector(".project-code").href = `https://github.com/oluisvi/servagency-demo-${slug}`;
    list.append(card);
  }
}
