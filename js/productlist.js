const url = "https://kea-alt-del.dk/t7/api/products"

fetch(url)
.then(function(res) {
    return res.json();
})
.then(function(data) {
    handleProductList(data);
})


function handleProductList(data){
    data.forEach(showProduct);
}

function showProduct(product){
    
}