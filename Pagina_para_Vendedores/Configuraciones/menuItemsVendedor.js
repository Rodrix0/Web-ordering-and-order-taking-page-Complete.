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
        pageUrl: "/Pagina-Para-Compradores/Menu-Comidas/MenuEmpanadas.html",
        products: [
            { name: "Empanada de Carne al Horno", price: 11000, image: "/Pagina_para_Vendedores/Imagenes-de-Comidas/Imagenes de Empanadas/EmpaCarne.jpg" },
            { name: "Empanada Caprese", price: 10000, image: "/Pagina_para_Vendedores/Imagenes-de-Comidas/Imagenes de Empanadas/EmpaCaprese.jpg" },
            { name: "Empanada de Pollo ", price: 9000, image: "/Pagina_para_Vendedores/Imagenes-de-Comidas/Imagenes de Empanadas/EmpaPollo.jpg" },
            { name: "Empanada de Jamon y Queso", price: 6000, image: "/Pagina_para_Vendedores/Imagenes-de-Comidas/Imagenes de Empanadas/EmpaJamon.jpg" },
            { name: "Empanada de Humita", price: 8000, image: "/Pagina_para_Vendedores/Imagenes-de-Comidas/Imagenes de Empanadas/EmpaHumita.jpg" },
            { name: "Empanada de Cebolla", price: 9000, image: "/Pagina_para_Vendedores/Imagenes-de-Comidas/Imagenes de Empanadas/EmpaCebolla.jpg" }
        ]
    },
    {
        name: "Postres",
        image: "/Pagina-Para-Compradores/Imagenes/Postre.jpg",
        shortDescription: "Deliciosos postres caseros.",
        fullDescription: "Tiramisu <br> Chocotortaa <br> Wafle <br>",
        pageUrl: "/Pagina-Para-Compradores/Menu-Comidas/MenuPostres.html",
        products: [
            { name: "Tiramisu", price: 3200, image: "/Pagina_para_Vendedores/Imagenes-de-Comidas/Imagenes de Postres/Tira.jpg" },
            { name: "Brownie", price: 2800, image: "/Pagina_para_Vendedores/Imagenes-de-Comidas/Imagenes de Postres/Brownie.jpg" },
            { name: "Cheesecake", price: 3500, image: "/Pagina_para_Vendedores/Imagenes-de-Comidas/Imagenes de Postres/Chees.jpg" },
            { name: "Flan", price: 2500, image: "/Pagina_para_Vendedores/Imagenes-de-Comidas/Imagenes de Postres/Flan.jpg" },
            { name: "Helado", price: 3000, image: "/Pagina_para_Vendedores/Imagenes-de-Comidas/Imagenes de Postres/Helado.jpg" },
            { name: "Mousse de Chocolate", price: 2600, image: "/Pagina_para_Vendedores/Imagenes-de-Comidas/Imagenes de Postres/Mousse.jpg" }
        ]
    },
    {
        name: "Ensaladas",
        image: "/Pagina-Para-Compradores/Imagenes/Ensalada.jpg",
        shortDescription: "Ensaladas frescas y saludables.",
        fullDescription: "Ensalada Rusa <br> Ensalada Cesar <br> Ensalada Española <br>",
        pageUrl: "/Pagina-Para-Compradores/Menu-Comidas/MenuEnsaladas.html",
        products: [
            { name: "Ensalada Rusa", price: 5000, image: "/Pagina_para_Vendedores/Imagenes-de-Comidas/Imagenes de Ensalada/Rusa.jpg" },
            { name: "Ensalada Cesar", price: 7000, image: "/Pagina_para_Vendedores/Imagenes-de-Comidas/Imagenes de Ensalada/Cesar.jpg" },
            { name: "Ensalada Española", price: 10000, image: "/Pagina_para_Vendedores/Imagenes-de-Comidas/Imagenes de Ensalada/Española.jpg" },
            { name: "Ensalada Rucula", price: 12000, image: "/Pagina_para_Vendedores/Imagenes-de-Comidas/Imagenes de Ensalada/Rucula.jpg" },
            { name: "Ensalada de Arroz", price: 7000, image: "/Pagina_para_Vendedores/Imagenes-de-Comidas/Imagenes de Ensalada/Arroz.jpg" },
            { name: "Ensalada de Lechuga", price: 8000, image: "/Pagina_para_Vendedores/Imagenes-de-Comidas/Imagenes de Ensalada/Lechuga.jpg" }
        ]
    },
    {
        name: "Bebidas",
        image: "/Pagina-Para-Compradores/Imagenes/Bebidas.jpg",
        shortDescription: "Refrescantes opciones de bebidas.",
        fullDescription: "Coca-Cola <br> Sprite <br> Fanta <br>",
        pageUrl: "/Pagina-Para-Compradores/Menu-Comidas/MenuBebidas.html",
        products: [
            { name: "Coca-Cola", price: 3000, image: "/Pagina_para_Vendedores/Imagenes-de-Comidas/Imagenes de Bebidas/Coca.jpg" },
            { name: "Sprite", price: 3000, image: "/Pagina_para_Vendedores/Imagenes-de-Comidas/Imagenes de Bebidas/Sprite.jpg" },
            { name: "Fanta", price: 3000, image: "/Pagina_para_Vendedores/Imagenes-de-Comidas/Imagenes de Bebidas/Fanta.jpg" },
            { name: "Agua", price: 2000, image: "/Pagina_para_Vendedores/Imagenes-de-Comidas/Imagenes de Bebidas/Agua.jpg" },
            {name: "Jugo de Naranja", price: 2500, image: "/Pagina_para_Vendedores/Imagenes-de-Comidas/Imagenes de Bebidas/Jugo.jpg"},
            {name: "Pepsi", price: 3000, image: "/Pagina_para_Vendedores/Imagenes-de-Comidas/Imagenes de Bebidas/Pepsi.jpg"}
        ]
    },
    {
        name: "Tartas",
        image: "/Pagina-Para-Compradores/Imagenes/Tarta.jpg",
        shortDescription: "Tartas saladas para todos los gustos.",
        fullDescription: "Tartas Jamon y Queso <br> Tartas de Acelga <br> Tartas de Choclo <br>",
        pageUrl: "/Pagina-Para-Compradores/Menu-Comidas/MenuTartas.html",
        products: [
            { name: "Tarta Jamon y Queso", price: 5000, image: "/Pagina_para_Vendedores/Imagenes-de-Comidas/Imagenes de Tarta/JamYQueso.jpg" },
            { name: "Tarta de Acelga", price: 8000, image: "/Pagina_para_Vendedores/Imagenes-de-Comidas/Imagenes de Tarta/TartaAcelga.jpg" },
            { name: "Tarta de Atun", price: 7000, image: "/Pagina_para_Vendedores/Imagenes-de-Comidas/Imagenes de Tarta/TartaAtun.jpg" },
            { name: "Tarta de Cebolla", price: 6000, image: "/Pagina_para_Vendedores/Imagenes-de-Comidas/Imagenes de Tarta/TartaCebolla.jpg" },
            { name: "Tarta de Pescado", price: 7000, image: "/Pagina_para_Vendedores/Imagenes-de-Comidas/Imagenes de Tarta/tartadePescado.jpg" },
            { name: "Tarta de Queso", price: 6000, image: "/Pagina_para_Vendedores/Imagenes-de-Comidas/Imagenes de Tarta/TartaQueso.jpg" }

        ]
    },
    {
        name: "Sándwiches",
        image: "/Pagina-Para-Compradores/Imagenes/Sandwiches.jpg",
        shortDescription: "Sándwiches gourmet y tradicionales.",
        fullDescription: "Lomito de Pollo <br> Lomito de Carne <br> Sandwich de Milanesa <br>",
        pageUrl: "/Pagina-Para-Compradores/Menu-Comidas/MenuSandwiches.html",
        products: [
            { name: "Choripan", price: 4300, image: "/Pagina_para_Vendedores/Imagenes-de-Comidas/Imagenes de Sandwiches/Chori.jpg" },
            { name: "Lomito de Carne", price: 7500, image: "/Pagina_para_Vendedores/Imagenes-de-Comidas/Imagenes de Sandwiches/Lomo.jpg" },
            { name: "Sandwich de Milanesa", price: 5000, image: "/Pagina_para_Vendedores/Imagenes-de-Comidas/Imagenes de Sandwiches/Mila.jpg" },
            { name: "Sandwich de Jamon y Queso", price: 4000, image: "/Pagina_para_Vendedores/Imagenes-de-Comidas/Imagenes de Sandwiches/SanJAmon.jpg" },
            { name: "Sandwich de Pollo", price: 4800, image: "/Pagina_para_Vendedores/Imagenes-de-Comidas/Imagenes de Sandwiches/Pollo.jpg" },
            { name: "Sandwich Vegetariano", price: 4500, image: "/Pagina_para_Vendedores/Imagenes-de-Comidas/Imagenes de Sandwiches/Vege.jpg" }
        ]
    }
];

export { menuItems };