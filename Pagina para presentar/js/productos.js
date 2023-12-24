const matrizProductos = JSON.parse(response.data);

// Validamos que la matriz tenga las propiedades correctas
const propiedadesCorrectas = ["nombre", "descripcion", "precio", "cantidad_stock", "likes", "imagen"];
for (const propiedad of propiedadesCorrectas) {
  if (!matrizProductos.hasOwnProperty(propiedad)) {
    throw new Error(`La matriz de productos no tiene la propiedad "${propiedad}".`);
  }
}

// JavaScript para obtener y mostrar los productos

fetch('http://localhost:3000/productos')
  .then(response => response.json())
  .then(data => {
    // Creamos una matriz de productos
    const matrizProductos = new Array(4).fill(null);

    // Recorremos los datos de productos y los agregamos a la matriz
    for (let i = 0; i < data.length; i++) {
      matrizProductos[i % 4][Math.floor(i / 4)] = data[i];
    }

    // Obtenemos el elemento DOM que contiene la lista de productos
    const listaProductos = document.getElementById('lista-productos');

    // Recorremos la matriz de productos y agregamos cada producto a la lista
    for (let i = 0; i < matrizProductos.length; i++) {
      for (let j = 0; j < matrizProductos[i].length; j++) {
        if (matrizProductos[i][j]) {
          const elemento = document.createElement('li');
          elemento.innerHTML = `
            <strong>${matrizProductos[i][j].nombre}</strong>
            <br>
            Descripción: ${matrizProductos[i][j].descripcion}
            <br>
            Precio: $${matrizProductos[i][j].precio}
            <br>
            Cantidad en stock: ${matrizProductos[i][j].cantidad_stock}
            <br>
            Likes: ${matrizProductos[i][j].cantidad_likes}
            <br>
            <img src="${matrizProductos[i][j].imagen}" alt="Imagen del producto">
            <hr>
          `;
          listaProductos.appendChild(elemento);
        }
      }
    }
  })
  .catch(error => console.error('Error al obtener datos:', error));
