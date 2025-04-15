import axios from "axios";

const productCategories = ["mens-shirts", "mens-shoes", "mens-watches", "sports-accessories", "tops", "womens-bags", "womens-dresses", "womens-jewellery", "womens-shoes", "womens-watches"];

export async function getProducts(){
    const urls = productCategories.map((category: string) => {
        return `https://dummyjson.com/products/category/${category}`;
    })

    /* TODO: Infer the type */
    const responses = await Promise.all(
        urls.map((url: string) => axios.get(url))
    );

    const data = responses.map(res => res.data.products);

    return data;
}

export async function getProductsById(ids: number[]){
    /* TODO: Infer the type */
    const responses = await Promise.all(
        ids.map((id: number) => getProduct(id))
    );

    const data = responses.map(res => res.data);

    return data;    
}

export async function getProduct(productId: number){
    /* TODO: Infer the type */
    const data = axios.get(`https://dummyjson.com/products/${productId}`);
    return data;
}