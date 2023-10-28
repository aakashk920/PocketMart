export const color = [
  "white",
  "Black",
  "Green",
  "Grey",
  "Blue",

];

export const filters = [
    {
        id: "color",
        name: "Color",
        options: [

            { value: "white", label: "White" },
            { value: "black", label: "Black" },
            { value: "green", label: "Green" },
            { value: "blue", label: "Blue" },
        ],
    },

    {
        id: "size",
        name: "Size",
        options: [

            { value: "s", label: "Small" },
            { value: "m", label: "Medium" },
            { value: "l", label: "Large" },
          
        ],
    },
    {
        id: "stock",
        name: "Availability",
        options: [

            { value: "inStock", label: "In Stock" },
            { value: "outOfStock", label: "Out of Stock" },
          
        ],
    },

];

export const singleFilter = [
    {
        id: "price",
        name: "Price",
        options: [

            { value: "200-300", label: "₹ 200 - ₹ 300" },
            { value: "500-700", label: "₹ 500 - ₹ 700" },
            { value: "800-900", label: "₹ 800 - ₹ 900" },
            { value: "1000-1800", label: "₹ 1000 - ₹ 1800" },
        ],
    },

    {
        id: "discount",
        name: "Discount",
        options: [

            { value: "10", label: "10%" },
            { value: "20", label: "20%" },
            { value: "30", label: "30%" },
            { value: "40", label: "40%" },
            { value: "50", label: "50%" },
            { value: "60", label: "60%" },
            { value: "70", label: "70%" },
            { value: "80", label: "80%" },
        ],
    },

];

export const sortOptions = [
    { name: "price:low to high", query: "price-Low", current: false },
    { name: "price:low to high", query: "price-Low", current: false },
];