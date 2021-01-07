function AddToBasket(id) {
    fetch(`/basket?id=${id}`)
    .then((response) => {
        const res = JSON.parse(response);
        console.log(`Basket count is ${res.Count}`);
    })
}