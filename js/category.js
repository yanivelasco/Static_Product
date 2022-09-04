const url = "https://kea-alt-del.dk/t7/api/brands";

fetch(url)
  .then((res) => res.json())
  .then((data) => goThroughEach(data));


function goThroughEach(data) {
  console.log(data);
  data.forEach(showBrand);
}

function showBrand(brand) {
  const temp = document.querySelector("template").content;
  const clone = temp.cloneNode(true);
  clone.querySelector("a").href = `productlist.html?brandname=${brand.brandname}`;
  clone.querySelector("h2").textContent = brand.brandname;
  const parent = document.querySelector("main");
  parent.appendChild(clone);
}