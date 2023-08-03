function renderCards(plant) {
  const cardContainer = document.getElementById('card-container');
  const {name, composting, style, elements } = plant;
  

  console.log(plant)
  let card = `
    <div class="card">
      <p>The perfect plant for you <span class="name-plant">${name}</span></p>
      <div class="img-container">
        <img class="image" src="src/img/plant-${name}.png" alt="">
        <img class="image" src="src/img/simple-${style}-pot.png" alt="">
        <img class="image" src="src/img/soil-${composting}.png" alt="">
      </div>
      <div class="description">
      <div class="info"><p>Name</p><p>${name}</p></div>
      <div class="info"><p>Soil</p><p>${composting}</p></div>
        <div class="info"><p>Pot</p><p>${style}</p></div>
        <div class="info"><p>Extras</p><p>${elements}</p></div>
      </div>
    </div>`
  cardContainer.innerHTML = card;
}

export default renderCards;