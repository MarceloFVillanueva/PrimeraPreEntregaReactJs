import data from "../data/peliculas.json"

const pedirPeliculas = () => {
    return new Promise((resolve, reject) => {
      resolve(data)
    })
  }

export default pedirPeliculas;