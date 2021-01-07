function AddToBasket(id) {
    fetch(`/basket?id=${id}`)
    .then(response => response.json())
    .then((data) => {
        console.log(`Basket count is ${data.Count}`);
    })
}