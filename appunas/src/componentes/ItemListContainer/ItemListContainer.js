import { useState, useEffect} from 'react'
import { getProducts } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = (props) => {
    const [products, setProducts] = useState ([])
    
    useEffect (() => {
        getProducts().then(response => {
            setProducts(response)
            console.log(response)
            console.log(products)
        })
    }, [])

    return(
        <div>
            <ItemList products = {products}/>
        </div>
    )
}
export default ItemListContainer