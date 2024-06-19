export function getProductDetails(path_assets){
    function getCardPath(name) {
        return `${path_assets}/band/${name}_card_optimized.webp`;
    };

    return [
        {
            id: 0,
            title: "alex",
            description: "alex ist cool",
            price: 10.95,
            img_src: getCardPath("alex"),
            img_alt: "alex"
        },
        {
            id: 1,
            title: "benni",
            description: "benni ist cool",
            price: 1.99,
            img_src: getCardPath("benni"),
            img_alt: "benni"
        },
        {
            id: 2,
            title: "leo",
            description: "leo ist cool",
            price: 89.9,
            img_src: getCardPath("leo"),
            img_alt: "leo"
        },
        {
            id: 3,
            title: "mia",
            description: "mia ist cool",
            price: 0,
            img_src: getCardPath("mia"),
            img_alt: "mia"
        },
    ]
}