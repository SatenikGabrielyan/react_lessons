import { useEffect, useState } from "react"

export const useFetch = <T>(url:string) => {
    const [result, setResult] = useState<T|null>(null)
    const [isLoading, setIsLoading]  =useState<boolean>(true)
    const [error, setError] = useState<string>("")

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(response => setResult(response as T))
        .catch(err => setError(err))
        .finally(() =>setIsLoading(false))

    },[])

    return {result, isLoading, error}

}