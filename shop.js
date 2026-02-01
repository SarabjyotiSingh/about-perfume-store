const products = [
    //women
    {name: "Cherry Blossom", price:2499, rating:4.7, category:"Women", img:"images/p1.png"},
    {name: "Vanilla Mist", price:2999, rating:4.5, category:"Women", img:"images/p2.png"},
    {name: "Cherry Spark", price:3999, rating:4.8, category:"Women", img:"images/p3.png"},
    {name: "Coco Blossom", price:2799, rating:4.6, category:"Women", img:"images/p4.png"},
    {name: "Blueberry Peach", price:3499, rating:4.9, category:"Women", img:"images/p5.png"},

    //men
    {name: "Iron Wood", price:3999, rating:4.4, category:"Men", img:"images/p6.png"},
    {name: "Exotic Dark", price:2499, rating:4.3, category:"Men", img:"images/p7.png"},
    {name: "Forest Mist", price:2999, rating:4.5, category:"Men", img:"images/p8.png"},
    {name: "Desert Storm", price:2799, rating:4.2, category:"Men", img:"images/p9.png"},
    {name: "Lumen Edge", price:3199, rating:4.6, category:"Men", img:"images/p10.png"},

    //unisex
    {name: "Citrus Splash", price:1999, rating:4.1, category:"Unisex", img:"images/p11.png"},
    {name: "Ethereal Mist", price:2499, rating:4.3, category:"Unisex", img:"images/p12.png"},
    {name: "Rain", price:2299, rating:4.2, category:"Unisex", img:"images/p13.png"},
    {name: "Pulse", price:2799, rating:4.4, category:"Unisex", img:"images/p14.png"},
    {name: "Sunset Glow", price:2599, rating:4.5, category:"Unisex", img:"images/p15.png"},

    //luxury
    {name: "Black Velvet", price:4499, rating:4.6, category:"Luxury", img:"images/p16.png"},
    {name: "Midnight Orchid", price:4999, rating:4.8, category:"Luxury", img:"images/p17.png"},
    {name: "Diamond Dust", price:4599, rating:4.7, category:"Luxury", img:"images/p18.png"},
    {name: "Royal Lily", price:5299, rating:4.9, category:"Luxury", img:"images/p19.png"},
    {name: "Liquid Gold", price:5799, rating:4.8, category:"Luxury", img:"images/p20.png"},
];

const container = document.getElementById("products");
const sortSelect = document.getElementById("sort");
const categorySelect = document.getElementById("category");

function displayProducts(list)
{
    container.innerHTML = "";
    list.forEach(p => {
        container.innerHTML += `
        <div class="card">
            <h4>${p.name} — ₹${p.price}</h4>
            <img src="${p.img}" class="product-img">
            <button class="add-to-cart">Add to Cart</button>
            <p>⭐${p.rating} ⭐</p>
            <p>${p.category}</p>
        </div>
        `;
    });
}

const categories = [...new Set(products.map(p=> p.category))];
categorySelect.innerHTML = `<option value="All">All</option>`;
categories.forEach(c => {
    categorySelect.innerHTML += `<option value="${c}">${c}</option>`;
});

function update()
{
    let list = [...products];

    if(categorySelect.value !== "All")
        list = list.filter(p => p.category === categorySelect.value);

    const val = sortSelect.value;

    if(val.includes("Price"))
        list.sort((a,b) => val.includes("asc") ? a.price-b.price: b.price-a.price);

    if(val.includes("Name"))
        list.sort((a,b) => val.includes("asc") ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));

    if(val.includes("Rating"))
        list.sort((a,b) => val.includes("asc") ? a.rating-b.rating : b.rating-a.rating);

    displayProducts(list);
}

sortSelect.onchange = update;
categorySelect.onchange = update;
update();