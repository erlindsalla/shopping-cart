import { storeInstance } from "../utils/axios.instance"

export const getAllProducts = async () =>{
    try {
        const response = await storeInstance({
            url: "/products",
            method: "GET",
        });

        return response;
    } catch (error) {
        console.log(error)
    }
}

export const getProductDetailsById = async (id) => {
    try {
        const response = await storeInstance({
            url: `/products/${id}`,
            method: "GET",
        });
        
        return response;
    } catch (error) {
        console.log(error)
    }
}

export const sortProducts = async (value) => {
    try {
        const response = await storeInstance({
            url: `/products?sort=${value}`,
            method: "GET",
        });
        return response;
    } catch (error) {
        console.log(error)
    }
}