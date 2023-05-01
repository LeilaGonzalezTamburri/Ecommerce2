const products = [
    {
        id: '1',
        name: 'Hogwarts Legacy',
        price: '50 USD',
        category: 'RPG',
        img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/990080/header.jpg?t=1680647016',
        description: 'Descripcion del Hogwarts Legacy'
    },
    {id: '2', name: 'Resident Evil 4', price: '45 USD', category: 'singlePlayer', img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2050650/header.jpg?t=1680840402', description: 'Descripcion del Resident Evil 4'},
    {id: '3', name: 'Elden Ring', price: '20 USD', category: 'RPG', img: 'https://gaming-cdn.com/images/products/4824/616x353/elden-ring-pc-juego-steam-europe-cover.jpg?v=1650985585', description: 'Descripcion del Elden Ring'},
    {id: '4', name: 'World of Warcraft', price: '1 USD', category: 'MMO', img: 'https://phantom-marca.unidadeditorial.es/dd524c668c1007b185577fc72e22521c/resize/828/f/webp/assets/multimedia/imagenes/2022/08/23/16612772851894.jpg', description: 'Descripcion del WOW'}
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(()=> {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout (()=> {
            resolve(products.find(prod => prod.id === productId))
        },500)
    })
}

export const getProductsByCategory = (productCategory) => {
    return new Promise((resolve) => {
        setTimeout (()=> {
            resolve(products.find(prod => prod.category === productCategory))
        },500)
    })
}