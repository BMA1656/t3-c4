export  function extraImgUrl(elements){
    switch (elements) {
        case "moss":
          return "moss-pole";
        case "pebbles":
          return "pebbles";
        case "mini":
          return "mini-plants";
        default:
          return ""; 
      }
}

export  function clearCard() {
  const cardContainer = document.getElementById('card-container');
  cardContainer.innerHTML = ""    
}

