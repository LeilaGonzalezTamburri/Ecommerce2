const products = [
    {
        id: '1',
        name: 'Hogwarts Legacy',
        price: '50 USD',
        category: 'RPG',
        img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/990080/header.jpg?t=1680647016',
        description: 'Descripcion del Hogwarts Legacy'
    },
    { id: '2', name: 'Resident Evil 4', price: '45 USD', category: 'singlePlayer', img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2050650/header.jpg?t=1680840402', description: 'Descripcion del Resident Evil 4'},
    {id: '3', name: 'Elden Ring', price: '20 USD', category: 'RPG', img: 'https://gaming-cdn.com/images/products/4824/616x353/elden-ring-pc-juego-steam-europe-cover.jpg?v=1650985585', description: 'Descripcion del Elden Ring'}
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(()=> {
            resolve(products)
        }, 5000)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout (()=> {
            resolve(products.find(prod => prod.id === productId))
        },500)
    })
}