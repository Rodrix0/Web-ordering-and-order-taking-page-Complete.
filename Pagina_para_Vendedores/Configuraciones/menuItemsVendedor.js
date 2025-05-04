// menuItems.js - Contiene los datos del menú

const menuItems = [
    {
        name: "Ofertas",
        image: "/Pagina-Para-Compradores/Imagenes/Ofertas.jpg",
        shortDescription: "Descuentos especiales para nuestros clientes.",
        fullDescription: "Descuentos en hamburguesas <br> Descuentos en pizzas <br> Descuentos en empanadas <br>",
        pageUrl: "/Pagina-Para-Compradores/Menu-Comidas/MenuOfertas.html"
    },
    {
        name: "Hamburguesas",
        image: "/Pagina-Para-Compradores/Imagenes/Hamburguesa.jpg",
        shortDescription: "Deliciosas hamburguesas caseras.",
        pageUrl: "/Pagina-Para-Compradores/Menu-Comidas/MenuHambur.html",
        products: [
            { name: "Hamburguesa Común", price: 5000, image: "/Pagina_para_Vendedores/Imagenes-de-Comidas/Imagenes de Hambur/HamburComun.jpg" },
            { name: "Hamburguesa Doble", price: 7000, image: "/Pagina_para_Vendedores/Imagenes-de-Comidas/Imagenes de Hambur/HamburDoble.jpg" },
            { name: "Hamburguesa con Queso", price: 8000, image: "/Pagina_para_Vendedores/Imagenes-de-Comidas/Imagenes de Hambur/HamburConQueso.jpg" },
            { name: "Hamburguesa Con Bacon", price: 7000, image: "/Pagina_para_Vendedores/Imagenes-de-Comidas/Imagenes de Hambur/HamburBacon.jpg" },
            { name: "Hamburguesa Con Lechuga y Tomate", price: 12000, image: "/Pagina_para_Vendedores/Imagenes-de-Comidas/Imagenes de Hambur/HamburConTomate.jpg" },
            { name: "Hamburguesa Triple", price: 10000, image: "/Pagina_para_Vendedores/Imagenes-de-Comidas/Imagenes de Hambur/HamburTriple.jpg" }
            

        ]
    },
    {
        name: "Pizzas",
        image: "/Pagina-Para-Compradores/Imagenes/Pizzas.jpg",
        shortDescription: "Pizzas con masa artesanal.",
        fullDescription: "Pizza a la Cabresa <br> Pizza de Pepperoni <br> Pizza de Jamón y Queso <br>",
        pageUrl: "/Pagina-Para-Compradores/Menu-Comidas/MenuPizzas.html",
        products: [
            { name: "Pizza Pepperoni", price: 8000, image: "/Pagina_para_Vendedores/Imagenes-de-Comidas/Imagenes de Pizzas/PizzaPeppe.jpg" },
            { name: "Pizza Jamón y Mozzarella", price: 9000, image: "/Pagina_para_Vendedores/Imagenes-de-Comidas/Imagenes de Pizzas/PizzaMoza.jpg" },
            { name: "Pizza Napolitana", price: 7000, image: "/Pagina_para_Vendedores/Imagenes-de-Comidas/Imagenes de Pizzas/PizzNapo.jpg" },
            { name: "Pizza Hawaiana", price: 8000, image: "/Pagina_para_Vendedores/Imagenes-de-Comidas/Imagenes de Pizzas/PizzaHawa.jpg" },
            { name: "Pizza Vegetariana", price: 7000, image: "/Pagina_para_Vendedores/Imagenes-de-Comidas/Imagenes de Pizzas/PizzaVege.jpg" },
            { name: "Pizza Cuatro Quesos", price: 8000, image: "/Pagina_para_Vendedores/Imagenes-de-Comidas/Imagenes de Pizzas/PizzaCuatroQuesos.jpg" }
        ]
    },
    {
        name: "Empanadas",
        image: "/Pagina-Para-Compradores/Imagenes/Empanada.jpg",
        shortDescription: "Empanadas con diversos rellenos.",
        fullDescription: "Empanadas al Horno <br> Empanadas Fritas <br> Empanada de Carne <br>",
        pageUrl: "/Pagina-Para-Compradores/Menu-Comidas/MenuEmpanadas.html"
    },
    {
        name: "Postres",
        image: "/Pagina-Para-Compradores/Imagenes/Postre.jpg",
        shortDescription: "Deliciosos postres caseros.",
        fullDescription: "Tiramisu <br> Chocotortaa <br> Wafle <br>",
        pageUrl: "/Pagina-Para-Compradores/Menu-Comidas/MenuPostres.html"
    },
    {
        name: "Ensaladas",
        image: "/Pagina-Para-Compradores/Imagenes/Ensalada.jpg",
        shortDescription: "Ensaladas frescas y saludables.",
        fullDescription: "Ensalada Rusa <br> Ensalada Cesar <br> Ensalada Española <br>",
        pageUrl: "/Pagina-Para-Compradores/Menu-Comidas/MenuEnsaladas.html"
    },
    {
        name: "Bebidas",
        image: "/Pagina-Para-Compradores/Imagenes/Bebidas.jpg",
        shortDescription: "Refrescantes opciones de bebidas.",
        fullDescription: "Coca-Cola <br> Sprite <br> Fanta <br>",
        pageUrl: "/Pagina-Para-Compradores/Menu-Comidas/MenuBebidas.html"
    },
    {
        name: "Tartas",
        image: "/Pagina-Para-Compradores/Imagenes/Tarta.jpg",
        shortDescription: "Tartas saladas para todos los gustos.",
        fullDescription: "Tartas Jamon y Queso <br> Tartas de Acelga <br> Tartas de Choclo <br>",
        pageUrl: "/Pagina-Para-Compradores/Menu-Comidas/MenuTartas.html"
    },
    {
        name: "Sándwiches",
        image: "/Pagina-Para-Compradores/Imagenes/Sandwiches.jpg",
        shortDescription: "Sándwiches gourmet y tradicionales.",
        fullDescription: "Lomito de Pollo <br> Lomito de Carne <br> Sandwich de Milanesa <br>",
        pageUrl: "/Pagina-Para-Compradores/Menu-Comidas/MenuSandwiches.html"
    }
];

export { menuItems };