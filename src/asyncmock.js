const misProductos = [
 { id: "1", nombre: "Conjunto beige", precio: 3000, img: "../img/conjuntoBeige.jpg", idCat: "1" },
 { id: "2", nombre: "Conjunto negro con tull", precio: 3500, img: "../img/conjuntoNegro.jpg", idCat: "1" },
 { id: "3", nombre: "Conjunto blanco", precio: 2800, img: "../img/conjuntoBlanco.jpg", idCat: "1" },
 { id: "4", nombre: "Body encaje", precio: 3700, img: "../img/bodyNegro.jpg", idCat: "2" },
 { id: "5", nombre: "Body con detalles", precio: 3500, img: "../img/bodyRed.jpg", idCat: "2" },
 { id: "6", nombre: "Body tull", precio: 2500, img: "../img/bodyTullDetalles.jpg", idCat: "2" },
]

export const getProductos = () => {
    return new Promise((res) => {
        setTimeout( () => {
            res(misProductos);
        }, 100)
    })
}


export const getUnProducto = (id) => {
    return new Promise( resolve => {
        setTimeout( () => {
            const producto = misProductos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}

export const getProductosPorCategoria = (idCategoria) => {

  return new Promise(resolve => {
      setTimeout( () => {
         const productoCategoria = misProductos.filter(prod => prod.idCat === idCategoria);
         resolve(productoCategoria)
        }, 100)
    })
}