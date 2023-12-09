import data from "../data/peliculas.json"

const pedirPeliculaPorNombre = (peliculaName) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data.find(pelicula => pelicula.title === peliculaName))
        }, 500)
    })
}

export default pedirPeliculaPorNombre