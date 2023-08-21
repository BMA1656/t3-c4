function getStockBtn (description, next) {
  let alert = ''
  let hasLimitedStock = false
  let isOutOfStock = false
  const stockBlockElement = document.getElementById('stockBlock')

  for (const itemType in description.stock) {
    const currentStock = description.stock[itemType].stock
    if (currentStock === 0) {
      isOutOfStock = true
    } else if (currentStock > 0 && currentStock < 10) {
      hasLimitedStock = true
    }
  }

  if (isOutOfStock) {
    alert =
      'one of the items in your order is out of stock. Please check the inventory alerts.'
    stockBlockElement.textContent = alert
    stockBlockElement.classList.add('red')
    const btn = document.getElementById('buybtn')
    btn.classList.add('disabled-link')
  } else if (hasLimitedStock) {
    alert = 'one of the items in your order has limited stock. Order soon!'
    stockBlockElement.textContent = alert
    stockBlockElement.classList.add('yellow')
  } else {
    alert = 'in stock'
    stockBlockElement.textContent = alert
    stockBlockElement.classList.add('green')
  }
  next()
}

export { getStockBtn }
