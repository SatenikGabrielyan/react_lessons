import { useFetch } from "./useFetch"

function Child2(){
    console.log("Child2 renders")
    const {loading, result, error} = useFetch("https://fakestoreapi.com/products")
    return <>
    {loading && <p>loading...</p>}
    {
        result && <p>result{result.length}</p>
    }
    {
        error && <p>error</p>
    }
    <h1>Child2</h1>
    </>
}
export default Child2