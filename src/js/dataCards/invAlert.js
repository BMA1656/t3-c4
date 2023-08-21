export const inventoryAlertsCard = async (description, next) => {
  const invContainer = document.getElementById('inventory')
  const invStock = description.stock
  let messages = ''

  for (const item in invStock) {
    const currentStock = invStock[item].stock
    if (item === 'Plant') {
      if (currentStock === 0) {
        messages += `<p class="red">${description.name} is out of stock. Please select a different ${item}”</p>`
      } else if (currentStock <= 10) {
        messages += `<p class="yellow"> ${description.name}  Only ${currentStock} items left in stock</p>`
      } else {
        messages += `<p class="green">${description.name} in stock</p>`
      }
    } else if (item === 'Pot') {
      if (currentStock === 0) {
        messages += `<p class="red">${description.material} ${description.style} ${description.color} pot is out of stock. Please select a different ${item}”</p>`
      } else if (currentStock <= 10) {
        messages += `<p class="yellow">${description.material} ${description.style} ${description.color} pot Only ${currentStock} items left in stock</p>`
      } else {
        messages += `<p class="green">${description.material} ${description.style} ${description.color} pot in stock</p>`
      }
    } else {
      if (currentStock === 0) {
        messages += `<p class="red">${description.composting} soil  is out of stock. Please select a different ${item}”</p>`
      } else if (currentStock <= 10) {
        messages += `<p class="yellow">${description.composting} soil Only ${currentStock} items left in stock</p>`
      } else {
        messages += `<p class="green">${description.composting} soil in stock</p>`
      }
    }
  }

  invContainer.innerHTML = messages
  if (next) {
    next()
  }
}
