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
    console.log(product);

    const template = document.querySelector("#smallProductTemplate").content;
    const copy = template.cloneNode(true);
    copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`
    copy.querySelector(".subtle").textContent =  `${product.articletype} | ${product.brandname}` 
    copy.querySelector("h3").textContent = product.productdisplayname;
    copy.querySelector(".price").textContent = product.price;
    copy.querySelector("a").href = `product.html?id=${product.id}`
    // if(product.soldout){
    //     copy.querySelector("article").classList.add("soldOut");
    // }
    // if(product.discount){
    //     copy.querySelector("article").classList.add("onSale");
    //     copy.querySelector("discounted p").textContent = product.price
    // }
    const parent = document.querySelector("main");
    parent.appendChild(copy);


}