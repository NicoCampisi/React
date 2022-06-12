import { useState, useEffect} from 'react'
import { getProducts } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = (props) => {
    const [products, setProducts] = useState ([])
    const { categoryId } = useParams()
    
    useEffect (() => {
        if(!categoryId){
            getProducts().then(prods => {
                setProducts(prods)
            }).catch(error => {
                console.log(error)
            })
        } 
    }, [])

    return(
        <div>
            <ItemList products = {[products]}/>
        </div>
    )
}
export default ItemListContainer