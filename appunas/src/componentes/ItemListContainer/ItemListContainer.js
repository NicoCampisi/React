import { useState, useEffect} from 'react'
import { getProducts, getProductsByCatergory } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = (props) => {
    const [products, setProducts] = useState ([])

    const { categoryId } = useParams() 

    useEffect (()=>{

        const onResize = () => { 
            console.log('cambio tamaño')
        }
            window.addEventListener('resize',onResize)
            return () => {
                window.removeEventListener('resize', onResize )
            }
    }, [])
    
    useEffect (() => {
        if(!categoryId){
            getProducts().then(prods => {
                setProducts(prods)
            }).catch(error => {
                console.log(error)
            })
        }else {
            getProductsByCatergory(categoryId).then(prods => {
                setProducts(prods)
            }).catch(error => {
                console.log(error)
            })
        }

    }, [categoryId])

    return(
        <div>
            {products.length>0
            ? <ItemList products = {products}/>
            : <h1> NO HAY PRODUCTOS</h1>}
        </div>
    )
}
export default ItemListContainer