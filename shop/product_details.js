class ProductType{
    static merch = "merch";
    static tickets = "tickets";
}

export function getProductDetails(path_assets){
    function getCardPath(name) {
        return `${path_assets}/band/${name}_card_optimized.webp`;
    };

    return [
        {
            id: 0,
            type: ProductType.merch,
            title: "alex",
            description: "alex ist cool",
            price: 10.95,
            img_src: getCardPath("alex"),
            img_alt: "alex"
        },
        {
            id: 1,
            type: ProductType.merch,
            title: "benni",
            description: "benni ist cool",
            price: 1.99,
            img_src: getCardPath("benni"),
            img_alt: "benni"
        },
        {
            id: 2,
            type: ProductType.merch,
            title: "leo",
            description: "leo ist cool",
            price: 89.9,
            img_src: getCardPath("leo"),
            img_alt: "leo"
        },
        {
            id: 3,
            type: ProductType.merch,
            title: "mia",
            description: "mia ist cool",
            price: 0,
            img_src: getCardPath("mia"),
            img_alt: "mia"
        },
        {
            id: 4,
            type: ProductType.tickets,
            title: "ticket",
            description: "we love them tickets",
            price: 420.69,
            img_src: getCardPath("mia"),
            img_alt: "mia"
        }
    ]
}