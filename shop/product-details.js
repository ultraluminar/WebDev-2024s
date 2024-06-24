class ProductType{
    static merch = "merch";
    static tickets = "tickets";
}

export function getProductDetails(path_assets){
    function getCardPath(name) {
        return `${path_assets}/shop/merch/${name}.webp`;
    };

    return [
        {
            id: 0,
            type: ProductType.merch,
            title: "Krakatoa T-Shirt (schwarz)",
            description: "Unser klassisches Krakatoa T-Shirt in schwarz. Mit unserem klassischen Logo groß auf der Brust. 100% Baumwolle, 185g/m²",
            price: 24.99,
            img_src: getCardPath("tshirt-with-print-old"),
            img_alt: "Tshirt mit alternativem Logo Design"
        },
        {
            id: 1,
            type: ProductType.merch,
            title: "Krakatoa T-Shirt (schwarz) - Neues Logo",
            description: "Unser neues Überarbeitetes Krakatoa T-Shirt in schwarz. Mit unserem neuen Logo groß auf der Brust. 100% Baumwolle, 185g/m²",
            price: 27.99,
            img_src: getCardPath("tshirt-with-print"),
            img_alt: "Tshirt mit neuem Überarbeitetem Logo Design"
        },
        {
            id: 2,
            type: ProductType.merch,
            title: "Krakatoa Hoodie (schwarz)",
            description: "Unser klassischer Krakatoa Hoodie in schwarz. Mit unserem Schriftzug groß auf der Brust. 80% Baumwolle, 20% Polyester, 280g/m²",
            price: 44.99,
            img_src: getCardPath("hoodie-with-print"),
            img_alt: "Hoodie mit Krakatoa Schriftzug auf der Brust"
        },
        {
            id: 3,
            type: ProductType.merch,
            title: "Krakatoa Boots (schwarz mit roten Akzenten)",
            description: "Unsere limitierte Auflage der Krakatoa Boots in schwarz mit roten Akzenten. Hergestellt aus hochwertigem Leder. Mit roten Schnürsenkeln und roter Sohle.",
            price: 129.99,
            img_src: getCardPath("boots"),
            img_alt: "Krakatoa Boots (schwarz mit roten Akzenten)"
        },
        {
            id: 4,
            type: ProductType.merch,
            title: "Krakatoa Hut (schwarz) mit rotem Logo",
            description: "Unser klassischer Krakatoa Hut in schwarz. Mit unserem Logo in rot auf der Vorderseite. 100% Baumwolle",
            price: 19.99,
            img_src: getCardPath("hat-with-logo"),
            img_alt: "Krakatoa Hut (schwarz) mit rotem Logo"
        },

        {
            id: 5,
            type: ProductType.tickets,
            title: "Konzert Ticket - Wien",
            description: "Tickets für unser Konzert in Wien. Am 01.08.2021 um 20:00 Uhr. In der Stadthalle Wien.",
            price: 49.99,
            img_src: getCardPath("ticket"),
            img_alt: "Kratatoa Konzert Ticket, Schwarz mit roten Akzenten"
        },
        {
            id: 6,
            type: ProductType.tickets,
            title: "Konzert Ticket - Prag",
            description: "Tickets für unser Konzert in Prag. Am 04.08.2021 um 20:00 Uhr. Im Forum Karlín Prag",
            price: 44.99,
            img_src: getCardPath("ticket"),
            img_alt: "Kratatoa Konzert Ticket, Schwarz mit roten Akzenten"
        },
        {
            id: 7,
            type: ProductType.tickets,
            title: "Konzert Ticket - Budapest",
            description: "Tickets für unser Konzert in Budapest. Am 06.08.2021 um 19:00 Uhr. In Papp László Budapest Sportaréna",
            price: 54.99,
            img_src: getCardPath("ticket"),
            img_alt: "Kratatoa Konzert Ticket, Schwarz mit roten Akzenten"
        },
        {
            id: 8,
            type: ProductType.tickets,
            title: "Konzert Ticket - Warschau",
            description: "Tickets für unser Konzert in Warschau. Am 11.08.2021 um 20:30 Uhr. In der Tauron Arena Kraków",
            price: 59.99,
            img_src: getCardPath("ticket"),
            img_alt: "Kratatoa Konzert Ticket, Schwarz mit roten Akzenten"
        },
        {
            id: 9,
            type: ProductType.tickets,
            title: "Konzert Ticket - Berlin",
            description: "Tickets für unser Konzert in Berlin. Am 13.08.2021 um 20:00 Uhr. In der Mercedes-Benz Arena Berlin",
            price: 49.99,
            img_src: getCardPath("ticket"),
            img_alt: "Kratatoa Konzert Ticket, Schwarz mit roten Akzenten"
        },
        {
            id: 10,
            type: ProductType.tickets,
            title: "Konzert Ticket - Ansterdam",
            description: "Tickets für unser Konzert in Ansterdam. Am 17.08.2021 um 19:30 Uhr. Im Ziggo Dome Ansterdam",
            price: 54.99,
            img_src: getCardPath("ticket"),
            img_alt: "Kratatoa Konzert Ticket, Schwarz mit roten Akzenten"
        },
        {
            id: 11,
            type: ProductType.tickets,
            title: "Konzert Ticket - Paris",
            description: "Tickets für unser Konzert in Paris. Am 21.08.2021 um 20:00 Uhr. In der AccorHotels Arena Paris",
            price: 59.99,
            img_src: getCardPath("ticket"),
            img_alt: "Kratatoa Konzert Ticket, Schwarz mit roten Akzenten"
        },
        {
            id: 12,
            type: ProductType.tickets,
            title: "Konzert Ticket - London",
            description: "Tickets für unser Konzert in London. Am 24.08.2021 um 21:00 Uhr. In der The O2 Arena London",
            price: 49.99,
            img_src: getCardPath("ticket"),
            img_alt: "Kratatoa Konzert Ticket, Schwarz mit roten Akzenten"
        },
        {
            id: 13,
            type: ProductType.tickets,
            title: "Konzert Ticket - Madrid",
            description: "Tickets für unser Konzert in Madrid. Am 27.08.2021 um 20:00 Uhr. Im WiZink Center Madrid",
            price: 54.99,
            img_src: getCardPath("ticket"),
            img_alt: "Kratatoa Konzert Ticket, Schwarz mit roten Akzenten"
        }
    ]
}