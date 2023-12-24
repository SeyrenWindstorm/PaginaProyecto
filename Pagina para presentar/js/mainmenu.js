function marcarPagina(enlaceId) {
    // Limpia todas las clases 'active'
    document.querySelectorAll('.nav-link').forEach(enlace => enlace.classList.remove('active'));
  
    // Agrega la clase 'active' al enlace seleccionado
    document.getElementById(enlaceId).classList.add('active');
  }
  
  function establecerPaginaPredeterminada() {
           marcarPagina('enlaceHome'); // Establece 'Inicio' como predeterminado
           cargarPagina('home.html', 'enlaceHome'); // Carga la página predeterminada al inicio
  }
  
  async function cargarPagina(url, enlaceId) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error al cargar la página ${url}`);
        }
  
        const html = await response.text();
        document.getElementById('contenido').innerHTML = html;
  
        // Cambiar la clase 'active' al enlace actual
        marcarPagina(enlaceId);
    } catch (error) {
        console.error(error);
    }
  }
  
  // Llama a la función establecerPaginaPredeterminada cuando la página se carga
  window.onload = establecerPaginaPredeterminada;
  
  
  