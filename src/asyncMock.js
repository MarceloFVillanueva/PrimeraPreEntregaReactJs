const products = [
    {
        "id": 1,
        "title": "Secrets of the Heart (Secretos del Corazón)",
        "category": "Drama",
        "price": 59,
        "description": "Una emocionante aventura de acción",
        "image": "http://dummyimage.com/250x350.png/dddddd/000000"
    },
    {
        "id": 2,
        "title": "K.G. (Karate Girl)",
        "category": "Action",
        "price": 95,
        "description": "Una película de ciencia ficción fascinante",
        "image": "http://dummyimage.com/250x350.png/5fa2dd/ffffff"
    },
    {
        "id":3,
        "title": "Silent Hill",
        "category": "Fantasy|Horror|Thriller",
        "price": 99,
        "description": "Un drama conmovedor",
        "image": "http://dummyimage.com/250x350.png/cc0000/ffffff"
    },
    {
        "id":4,
        "title": "Mummy: Tomb of the Dragon Emperor, The",
        "category": "Action|Adventure|Fantasy|Thriller",
        "price": 47,
        "description": "Un drama conmovedor",
        "image": "http://dummyimage.com/250x350.png/5fa2dd/ffffff"
    },
    {
        "id":5,
        "title":"Dinosaurus!",
        "category":"Adventure|Comedy",
        "price":12,
        "description":"Bypass R Ext Iliac Art to L Femor A w Autol Art, Open",
        "image":"http://dummyimage.com/250x350.png/dddddd/000000"
    },
    {
        "id": 6,
        "title": "Dragon Ball Z: Super Android 13!",
        "category": "Action|Adventure|Animation",
        "price": 53,
        "description": "Un thriller lleno de suspenso",
        "image": "http://dummyimage.com/250x350.png/dddddd/000000"
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productID) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productID))
        }, 500)
    })
}