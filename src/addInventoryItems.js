import { ADD_INVENTORY_ITEMS } from './constants';

const addInventoryItems = () => {
  
    let type = ADD_INVENTORY_ITEMS;
    let inventory = [
        {
            category: "Household and Beauty",
            subcategories: [
                {
                    name: "Baby Care",
                    items: [
                        {
                            name: "Bib",
                            description: "Baby Bib helps with keeps baby cloth clean during meal time",
                            price: 10.00,
                            imagelink: "https://webmppcapstone.blob.core.windows.net/babycare-royaltyfree/babybib.png",
                            rating: "4",
                            stock: "30",
                            category: "Household and Beauty",
                            subcategory: "Baby care"
                        },
                        {
                            name: "Blanket",
                            description: "Baby blanket helps keep the baby warm",
                            price: 20.00,
                            imagelink: "https://webmppcapstone.blob.core.windows.net/babycare-royaltyfree/babyblanket.png",
                            rating: "5",
                            stock: "15",
                            category: "Household and Beauty",
                            subcategory: "Baby care"
                        },
                    ]
                    },
                ]
                },
                {
                    category: "Pantry Items",
                    subcategories: [
                        {
                            name: "Beverages",
                            items: [
                              {
                                name: "Apple Juice",
                                description: "Pack of 12, apple juice",
                                price: 5.99,
                                imagelink: "https://webmppcapstone.blob.core.windows.net/beverages-royaltyfree/applejuice.png",
                                rating: "4",
                                stock: "250",
                                category: "Pantry Items",
                                subcategory: "Beverages"
                              },
            
                                {
                                    name: "Banana-Orange Juice",
                                    description: "16.0 ounce bottle.",
                                    price: 1.99,
                                    imagelink: "https://webmppcapstone.blob.core.windows.net/beverages-royaltyfree/bananaorangejuice.png",
                                    rating: "4",
                                    stock: "300",
                                    category: "Pantry Items",
                                    subcategory: "Beverages"
                                },
                            ]
                            },
                        ]
                        },
                        {
                            category: "Perishables",
                            subcategories: [
                                {
                                    name: "Bread and Bakery",
                                    items: [
                                    {
                                      name: "Baguette",
                                      description: "Classic Baguettes, 8ct",
                                      price: 3.00,
                                      imagelink: "https://webmppcapstone.blob.core.windows.net/breads-royaltyfree/baguette.png",
                                      rating: "5",
                                      stock: "90",
                                      category: "Perishables",
                                      subcategory: "Bread and Bakerye"
                                    },
                                    {
                                      name: "Bluerberry Pie",
                                      description: "12 inch blueberry pie",
                                      price: 5.00,
                                      imagelink: "https://webmppcapstone.blob.core.windows.net/breads-royaltyfree/blueberrypie.png",
                                      rating: "3",
                                      stock: "30",
                                      category: "Perishables",
                                      subcategory: "Bread and Bakerye"
                                    },
                                ]
                                },
                            ]
                            },
                            {
                                category: "Produce",
                                subcategories: [
                                    {
                                        name: "Fruits",
                                        items: [
                                            {
                                                name: "Apricot",
                                                description: "Fresh apricots offer a plentiful supply of vitamin C.  Priced per each.",
                                                price: 0.29,
                                                imagelink: "https://webmppcapstone.blob.core.windows.net/fruitsimages/apricot.jpg",
                                                rating: "4",
                                                stock: "250",
                                                category: "Produce",
                                                subcategory: "Fruits"
                                            },
                        
                                            {
                                                name: "Avocado",
                                                description: "Each serving of creamy, delicious avocado offers nearly 20 vitamins, minerals and phytonutrients  Priced per each.",
                                                price: 0.19,
                                                imagelink: "https://webmppcapstone.blob.core.windows.net/fruitsimages/avocado.jpg",
                                                rating: "5",
                                                stock: "250",
                                                category: "Produce",
                                                subcategory: "Fruits"
                                            },
                                        ]
                                        },
                                    ]
                                    }
            ];

    return { 
        type,
        inventory,
    };

}

export { addInventoryItems };