import { useFetch } from "./hooks"
import { IProduct } from "./types"

export const Products = () => {
    const {result, error, isLoading} = useFetch<IProduct[]>("https://fakestoreapi.com/products")
    return <div>
        <h3>Products</h3>
        {
            result && result[0].title
        }
    </div>
}