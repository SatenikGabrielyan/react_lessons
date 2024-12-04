import { useEffect, useState } from "react"
import { IProduct } from "./types"
import { getProducts } from "./api"
interface IProps{
    limit:number
}
export const Pagination = ({limit}:IProps) => {
    const [all, setAll] = useState<IProduct[]>([])
    const [show, setShow] = useState<IProduct[]>([])
    const [activePage, setActivePage] = useState<number>(1)
    const [pages, setPages] = useState<number[]>([])


    useEffect(() => {
        getProducts()
        .then(response => {
            setAll(response )
            setShow(response.slice(0, limit))
            setPages(new Array(Math.ceil(response.length/limit)).fill(0))
        })

    },[])

    useEffect(() => {
        const start = (activePage-1)*limit 
        const end = start+limit 
        setShow(all.slice(start, end))

    }, [activePage])

    return <>

     <h3>Pagination</h3>
     <div className="list">
        {
            show.map(product => <div key={product.id}>
                {product.title}
            </div>)
        }
     </div>
     <div className="button">
        <button disabled = {activePage == 1} onClick={() => setActivePage(activePage - 1)}>prev</button>
        {
            pages.map((_,i) => { 
                const style = activePage == i+1?"active":""
                return <button onClick={() =>setActivePage(i+1)} className={style} key={i}>{i+1}</button>
            })
        }
        <button disabled = {activePage == pages.length} onClick={ () => setActivePage(activePage + 1)}>next</button>
     </div>
    </>
}