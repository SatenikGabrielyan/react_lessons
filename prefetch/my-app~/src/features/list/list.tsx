import { useCallback, useState } from "react"
import { listApi, useGetItemsQuery } from "./list.api"

export const List = () => {

    const [page, setPage] = useState<number>(1)
    const {data:response} = useGetItemsQuery(page)
    const prefetchItems = listApi.usePrefetch("getItems")
    const handleAdd = useCallback(() => {
        prefetchItems(page+1)

    },[page, prefetchItems])
    return <>
    <button>prev</button>
    <button onMouseEnter={handleAdd}>next</button>
    {
       response && response.data.map(item => <div className="item" key={item.id}>#{item.id} @{item.text}</div>)
    }

       <h3>List</h3>
    </>
}