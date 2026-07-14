// Array de platos del menú
const platos = [
    {
        nombre: "Bandeja Paisa",
        descripcion:
            "El plato más emblemático de Antioquia: frijoles, chicharrón, carne molida, chorizo, huevo frito, arepa y aguacate.",
        precio: "$38.000",
        img: "assets/images/menu/plato-bandeja-paisa.jpg",
        alt: "Bandeja Paisa completa con todos sus acompañamientos.",
    },
    {
        nombre: "Sancocho de Gallina",
        descripcion:
            "Caldo tradicional de gallina criolla con papa, yuca, plátano verde y cilantro recién picado.",
        precio: "$28.000",
        img: "assets/images/menu/sancocho-de-gallina.jpg",
        alt: "Sancocho de gallina en bowl de cerámica.",
    },
    {
        nombre: "Chicharrón Crocante",
        descripcion: "Cerdo seleccionado, marinado y frito hasta lograr una corteza perfectamente crujiente y dorada",
        precio: "$28.000",
        img: "assets/images/menu/chicharron.jpg",
        alt: "Chicharrón crocante en plato de cerámica con limón y guacamole.",
    },
    {
        nombre: "Arroz Paisa",
        descripcion: "Arroz blanco cocido con tomate, cebolla cabezona y achiote, servido con frijoles caseros.",
        precio: "$18.000",
        img: "assets/images/menu/arroz-paisa.jpg",
        alt: "Arroz paisa en bowl de cerámica marrón con frijoles y aguacate.",
    },
    {
        nombre: "Carne Asada",
        descripcion: "Corte grueso de res a la parrilla de carbón, con chimichurri casero, patacones y ensalada fresca.",
        precio: "$45.000",
        img: "assets/images/menu/carne-asada.jpg",
        alt: "Plato de carne asada a la parrilla con chimichurri y patacones.",
    },
    {
        nombre: "Chuleta Valluna",
        descripcion: "Chuleta de cerdo apanada al estilo del Valle, acompañada de arroz, ensalada y tajadas de plátano maduro.",
        precio: "$32.000",
        img: "assets/images/menu/chuleta-valluna.jpg",
        alt: "Chuleta valluna apanada con acompañamientos.",
    },
];

// contenedor del menú
const menuGrid = document.getElementById("menu-grid");

// tarjetas de platos
platos.forEach((plato) => {
    menuGrid.innerHTML += `
        <article class="menu-item">            
            <figure>
                <img src="${plato.img}" alt="${plato.alt}" loading="lazy" />
            </figure>
            <h3>${plato.nombre}</h3>
            <p>${plato.descripcion}</p>
            <footer>
                <span class="price">${plato.precio}</span>
            </footer>
        </article>
    `;
});

// Botones

const menuBtn = document.getElementById("ver-menu-btn");
const reservarBtn = document.getElementById("reservar-mesa-btn");
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");
const header = document.getElementById("header");

/* scroll suave */
menuBtn.addEventListener("click", () => {
    document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
});

reservarBtn.addEventListener("click", () => {
    document.getElementById("reservas-contacto").scrollIntoView({ behavior: "smooth" });
});

/* Menú hamburguesa */

navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", isOpen);
});

navMenu.addEventListener("click", (e) => { 
    if (e.target.tagName === "A") {
        navMenu.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", false);
    }
});

/* Header scroll*/

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("header--scrolled");
    } else {
        header.classList.remove("header--scrolled");
    }
});