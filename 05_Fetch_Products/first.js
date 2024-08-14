(async () => {
const productContainer = document.getElementById("productContainer");
const searchInput = document.getElementById("searchInput");

    const url = "https://fakestoreapi.com/products";
const fetchProducts = async() => {
    try{
       const res = await fetch(url);
       return await res.json();
    } catch(error){
        return error;
    }
};

const products = await fetchProducts();
// console.log('fetchProducts' , await fetchProducts());
const generateProducts = (product) => {
    return `<div class="product_card">
            <div class="image_container">
                <img src="${product.image}" alt="">
            </div>
            <div class="product_content">
                <h2>${product.title}</h2>
                <p>${product.description.split(" ").slice(0,20).join(" ")}
                </p>
                <button>
                    ${product.price} $
                </button>
            </div>
        </div>`;
};

const renderProducts = (products) => {
    productContainer.innerHTML = "";
    products.forEach((product) => {
        productContainer.innerHTML += generateProducts(product);
    });
};

const checkTextContain = (text, searchText) => {
    return text.toString().toLowerCase().includes(searchText);
};

const filterHandler = (event) => {
    const searchText = event.target.value.toLowerCase();

    const filterProducts = products.filter((product) => {
        return(
            checkTextContain(product.description,searchText) ||
            checkTextContain(product.title,searchText) ||
            checkTextContain(product.price,searchText) 
        );
    });
    renderProducts(filterProducts);
};

searchInput.addEventListener("keyup" ,filterHandler);
renderProducts(products);
})();