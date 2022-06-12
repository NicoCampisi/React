const products = [
    {
        id: '1',
        category: 'esmaltes',
        name: 'Esmalte',
        precio: 11000,
        img: 'https://http2.mlstatic.com/D_NQ_NP_620250-MLA46117161311_052021-O.webp',
        stock: '15'
    },   
    {
        id: '2',
        category: 'herramientas',
        name: 'Herramienta',
        precio: 12000,
        img: 'https://d2r9epyceweg5n.cloudfront.net/stores/001/611/635/products/7-11-49cc66188022dc873816240242516549-1024-1024.jpg',
        stock: '15'
    },   
    {
        id: '3',
        category: 'cabinas',
        name: 'Cabina 3',
        precio: 13000,
        img: 'https://http2.mlstatic.com/D_NQ_NP_735729-MLA45108397585_032021-O.webp',
        stock: '15'
    }   
]

export const getProducts = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() =>{
            resolve(products)
        }, 500)
    })
}
export const getProductsByCatergory = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() =>{
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() =>{
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}