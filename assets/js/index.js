// ---------------  Propiedades en VENTAS

const propiedadesVentas = [
  {
    nombre: "Chalet Montaña",
    src: "https://via.placeholder.com/150?text=Venta+1",
    descripcion:
      "Chalet de lujo con vistas a la montaña, amplio jardín y piscina.",
    ubicacion: "Granada",
    habitaciones: 5,
    costo: 450000,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Apartamento Urbano",
    src: "https://via.placeholder.com/150?text=Venta+2",
    descripcion:
      "Moderno apartamento en el centro de la ciudad, ideal para parejas.",
    ubicacion: "Madrid",
    habitaciones: 2,
    costo: 280000,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Casa Rural",
    src: "https://via.placeholder.com/150?text=Venta+3",
    descripcion:
      "Encantadora casa rural con terreno y huerto, ideal para amantes de la naturaleza.",
    ubicacion: "Asturias",
    habitaciones: 4,
    costo: 350000,
    smoke: true,
    pets: false,
  },
  {
    nombre: "Dúplex en la Playa",
    src: "https://via.placeholder.com/150?text=Venta+4",
    descripcion:
      "Dúplex moderno a pocos metros de la playa, con terraza y vistas al mar.",
    ubicacion: "Málaga",
    habitaciones: 3,
    costo: 500000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Estudio Loft",
    src: "https://via.placeholder.com/150?text=Venta+5",
    descripcion:
      "Estudio tipo loft con cocina abierta y gran ventanal, en barrio tranquilo.",
    ubicacion: "Valencia",
    habitaciones: 1,
    costo: 180000,
    smoke: false,
    pets: false,
  },
];

// ----------- Propiedades en ALQUILER

const propiedadesAlquiler = [
  {
    nombre: "Apartamento Centro",
    src: "https://via.placeholder.com/150?text=Propiedad+1",
    descripcion: "Amplio y luminoso apartamento en el centro de la ciudad.",
    ubicacion: "Madrid",
    habitaciones: 3,
    costo: 1200,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Piso Playa",
    src: "https://via.placeholder.com/150?text=Propiedad+2",
    descripcion: "Acogedor piso con vistas al mar, cerca de la playa.",
    ubicacion: "Barcelona",
    habitaciones: 2,
    costo: 1500,
    smoke: true,
    pets: false,
  },
  {
    nombre: "Estudio Moderno",
    src: "https://via.placeholder.com/150?text=Propiedad+3",
    descripcion:
      "Moderno estudio en una zona tranquila, ideal para una persona.",
    ubicacion: "Valencia",
    habitaciones: 1,
    costo: 800,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Casa Familiar",
    src: "https://via.placeholder.com/150?text=Propiedad+4",
    descripcion: "Casa espaciosa ideal para familias con jardín y garaje.",
    ubicacion: "Sevilla",
    habitaciones: 4,
    costo: 2000,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Ático con Vistas",
    src: "https://via.placeholder.com/150?text=Propiedad+5",
    descripcion:
      "Ático con impresionantes vistas a la ciudad, terraza privada.",
    ubicacion: "Bilbao",
    habitaciones: 2,
    costo: 1800,
    smoke: false,
    pets: false,
  },
];

function crearCardPropiedad(propiedad) {
  return `
          <div class="card">
              <img
                src="${propiedad.src}"
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                 ${propiedad.nombre}
                </h5>
                <p class="card-text">
                  ${propiedad.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${
                    propiedad.habitaciones
                  } Habitaciones |
                  <i class="fas fa-bath"></i> ${propiedad.habitaciones} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
                <p class="${propiedad.smoke ? "text-success" : "text-danger"}">
                  <i class="fas ${
                    propiedad.smoke ? "fa-smoking" : "fa-smoking-ban"
                  }"></i> ${
    propiedad.smoke ? "Se permite fumar" : "No se permite fumar"
  }
                 </p>
                <p class="${propiedad.pets ? "text-success" : "text-danger"}">
                  <i class="fa-solid ${
                    propiedad.pets ? "fa-paw" : "fa-ban"
                  }"></i> ${
    propiedad.pets ? "Se permiten Mascotas" : "No se permiten mascotas"
  }
                </p>
              </div>
            </div>
  `;
}

function crearPropiedadesVenta(propiedades) {
  const propiedadesVentaDiv = document.getElementById("propiedades-venta");

  for (const propiedad of propiedades) {
    const divCol = document.createElement("div");
    divCol.className = "col-md-4 mb-4";
    divCol.innerHTML = crearCardPropiedad(propiedad);
    propiedadesVentaDiv.appendChild(divCol);
  }
}

function crearPropiedadesAlquiler(propiedades) {
  const propiedadAlquilerDiv = document.getElementById("propiedades-alquiler");

  for (const propiedad of propiedades) {
    const divCol = document.createElement("div");
    divCol.className = "col-md-4 mb-4";
    divCol.innerHTML = crearCardPropiedad(propiedad);
    propiedadAlquilerDiv.appendChild(divCol);
  }
}

if (window.location.pathname === "/index.html") {
  crearPropiedadesVenta(propiedadesVentas.slice(0, 3));
  crearPropiedadesAlquiler(propiedadesAlquiler.slice(0, 3));
}

// '/propiedades_alquiler.html'
if (window.location.pathname === "/propiedades_alquiler.html") {
  crearPropiedadesAlquiler(propiedadesAlquiler);
}

// '/propiedades_ventas.html'
if (window.location.pathname === "/propiedades_ventas.html") {
  crearPropiedadesVenta(propiedadesVentas);
}
