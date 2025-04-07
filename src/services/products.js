import axios from "axios";

const productCategories = ["mens-shirts", "mens-shoes", "mens-watches", "sports-accessories", "tops", "womens-bags", "womens-dresses", "womens-jewellery", "womens-shoes", "womens-watches"];

export async function getProducts(){
    const data = [];
    let products = null;

    productCategories.forEach(async (category) => {
        products = await axios.get(`https://dummyjson.com/products/${category}`);
        data.push(products);
    });

    return data;
}