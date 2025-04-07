import axios from "axios";

const productCategories = ["mens-shirts", "mens-shoes", "mens-watches", "sports-accessories", "tops", "womens-bags", "womens-dresses", "womens-jewellery", "womens-shoes", "womens-watches"];

export async function getProducts(){
    const urls = productCategories.map(category => {
        return `https://dummyjson.com/products/category/${category}`;
    })

    const responses = await Promise.all(
        urls.map(url => axios.get(url))
    );

    const data = responses.map(res => res.data.products);

    return data;
}

export async function getProduct(productId){
    const data = axios.get(`https://dummyjson.com/products/${productId}`);
    return data;
}