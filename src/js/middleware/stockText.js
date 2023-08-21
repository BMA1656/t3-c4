function getStockBtn(description) {
  let alert = '';

  description.stock.forEach((item) => {
    if (item.stock >= 10) {
      alert = '<span class="green">in stock</span>';
    }
    else if (item.stock > 0 && item.stock < 10) {
      alert = '<span class="yellow">one of the items in your order has limited stock. Order soon!</span>';
    }
    else {
      alert = '<span class="red">one of the items in your order is out of stock. Please check the inventory alerts.</span>';
    }
  });
  return alert;
}

export { getStockBtn }