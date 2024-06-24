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
            img_src: getCardPath("tshirt_with_print_old"),
            img_alt: "Tshirt mit alternativem Logo Design"
        },
        {
            id: 1,
            type: ProductType.merch,
            title: "Krakatoa T-Shirt (schwarz) - Neues Logo",
            description: "Unser neues Überarbeitetes Krakatoa T-Shirt in schwarz. Mit unserem neuen Logo groß auf der Brust. 100% Baumwolle, 185g/m²",
            price: 27.99,
            img_src: getCardPath("tshirt_with_print"),
            img_alt: "Tshirt mit neuem Überarbeitetem Logo Design"
        },
        {
            id: 2,
            type: ProductType.merch,
            title: "Krakatoa Hoodie (schwarz)",
            description: "Unser klassischer Krakatoa Hoodie in schwarz. Mit unserem Schriftzug groß auf der Brust. 80% Baumwolle, 20% Polyester, 280g/m²",
            price: 44.99,
            img_src: getCardPath("hoodie_with_print"),
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
            img_src: getCardPath("hat_with_logo"),
            img_alt: "Krakatoa Hut (schwarz) mit rotem Logo"
        }
    ]
}