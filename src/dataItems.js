import valentines from './assets/plants/valentines.png'
import rose from './assets/plants/rose.png'
import tulip from './assets/plants/tulip.png'
import sunflower from './assets/plants/sunflower.png'

import bucketWithBouquet from './assets/plants/bucket-with-bouquet.png'
import bucketWithBouquet2 from './assets/plants/bucket-with-bouquet-2.png'
import redFlowers from './assets/plants/red-flowers.png'
import flowersBouquet3 from './assets/plants/flowers-bouquet-3.png'
import bouquetTulips from './assets/plants/bouquet-tulips.png'
import flowersWatering from './assets/plants/flowers-watering.png'

import cactusPlant2 from './assets/plants/cactus-plant2.png'
import plantCloseUppng from './assets/plants/plant-close-uppng.png'
import snakePlant from './assets/plants/snake-plant.png'
import indoorPlants from './assets/plants/indoor-plants.png'
import cactusPlant from './assets/plants/cactus-plant.png'
import flowerWooden from './assets/plants/flower-wooden.png'

import sale from './assets/icons/sale.png'

import arrow3 from './assets/icons/arrow3.png'
import arrow4 from './assets/icons/arrow4.png'

export const allProducts = [
    {
        id: 1,
        title: "Red Rose",
        text: "Romantic",
        price: 20,
        category:"Bouquets",
        img: bucketWithBouquet,
        color1: '#AB3333',
        color2: '#EA7F7F',
        color3: '#AF0000',

    },
    {
        id: 2,
        title: "Echeveria ",
        text: "Succulents",
        price: 20,
        category:"Indoor Plants",
        img: cactusPlant2,
        color1: '#07B83C',
        color2: '#2B8B52',
        color3: '#96B7A4',

    },
    {
        id: 3,
        title: "Yellow Tulips",
        text: "Tulips",
        price: 15,
        category:"Sales 10%",
        img: tulip,
        saleIcon: sale,
        color1: '#DFB60A',
        color2: '#FFEDA4',
        color3: '#F5D04B',

    },
    {
        id: 4,
        title: "Bright Gerbera Daisy",
        text: "Congratulations",
        price: 12,
        category:"Bouquets",
        img: bucketWithBouquet2,
        color1: '#EC9BBF',
        color2: '#CF4E94',
        color3: '#DD1278',
    },
    {
        id: 5,
        title: "Eucalyptus",
        text: "Romantic",
        price: 21,
        category:"Sympathy",
        img: flowersBouquet3,
        color1: '#3D2155',
        color2: '#CDA486',
        color3: '#C6A5AB',

    },
    {
        id: 6,
        title: "Mini Sunflowers",
        text: "Sunflowers",
        price: 15,
        category:"Sales 10%",
        img: sunflower,
        saleIcon: sale,
        color1: '#DFB60A',
        color2: '#FFEDA4',
        color3: '#F5D04B',

    },
]

export const sales = {
    "10": [
        {
            id: 1,
            title: "Yellow Tulips",
            text: "Tulips",
            oldPrice: 15,
            price: 20,
            img: tulip,
            color1: '#DFB60A',
            color2: '#FFEDA4',
            color3: '#F5D04B',

        },
        {
            id: 2,
            title: "Mini Sunflowers",
            text: "Sunflowers",
            oldPrice: 39,
            price: 34,
            img: valentines,
            color1: '#E34774',
            color2: '#F1C8D3',
            color3: '#B06E75',

        },
        {
            id: 3,
            title: "Yellow Tulips",
            text: "Tulips",
            oldPrice: 15,
            price: 20,
            img: rose,
            color1: '#EBB9B0',
            color2: '#E0324A',
            color3: '#BC8D58',

        },
        {
            id: 4,
            title: "Mini Sunflowers",
            text: "Sunflowers",
            oldPrice: 15,
            price: 20,
            img: sunflower,
            color1: '#DFB60A',
            color2: '#FFEDA4',
            color3: '#F5D04B',

        },
    ],
    "20": [
        {
            id: 1,
            title: "Mini Sunflowers",
            text: "Sunflowers",
            oldPrice: 39,
            price: 34,
            img: valentines,
            color1: '#E34774',
            color2: '#F1C8D3',
            color3: '#B06E75',

        },
        {
            id: 2,
            title: "Mini Sunflowers",
            text: "Sunflowers",
            oldPrice: 15,
            price: 20,
            img: sunflower,
            color1: '#DFB60A',
            color2: '#FFEDA4',
            color3: '#F5D04B',

        },
        {
            id: 3,
            title: "Yellow Tulips",
            text: "Tulips",
            oldPrice: 15,
            price: 20,
            img: tulip,
            color1: '#DFB60A',
            color2: '#FFEDA4',
            color3: '#F5D04B',

        },
        {
            id: 4,
            title: "Yellow Tulips",
            text: "Tulips",
            oldPrice: 15,
            price: 20,
            img: rose,
            color1: '#EBB9B0',
            color2: '#E0324A',
            color3: '#BC8D58',

        },
    ],
    "30": [
        {
            id: 1,
            title: "Yellow Tulips",
            text: "Tulips",
            oldPrice: 15,
            price: 20,
            img: tulip,
            color1: '#DFB60A',
            color2: '#FFEDA4',
            color3: '#F5D04B',

        },
        {
            id: 2,
            title: "Yellow Tulips",
            text: "Tulips",
            oldPrice: 15,
            price: 20,
            img: rose,
            color1: '#EBB9B0',
            color2: '#E0324A',
            color3: '#BC8D58',

        },
        {
            id: 3,
            title: "Mini Sunflowers",
            text: "Sunflowers",
            oldPrice: 39,
            price: 34,
            img: valentines,
            color1: '#E34774',
            color2: '#F1C8D3',
            color3: '#B06E75',

        },
        {
            id: 4,
            title: "Mini Sunflowers",
            text: "Sunflowers",
            oldPrice: 15,
            price: 20,
            img: sunflower,
            color1: '#DFB60A',
            color2: '#FFEDA4',
            color3: '#F5D04B',

        }
    ],
};

export const bouquets = {
    "romantic": [
        {
            id: 1,
            title: "Red Rose",
            price: 20,
            img: bucketWithBouquet,
            color1: '#AB3333',
            color2: '#EA7F7F',
            color3: '#AF0000',

        },
        {
            id: 2,
            title: "Bright Gerbera Daisy",
            price: 12,
            img: bucketWithBouquet2,
            color1: '#EC9BBF',
            color2: '#CF4E94',
            color3: '#DD1278',

        },
        {
            id: 3,
            title: "Eucalyptus",
            price: 21,
            img: redFlowers,
            color1: '#731D21',
            color2: '#DD0F3A',
            color3: '#FB4E55',

        },
        {
            id: 4,
            title: "Eucalyptus",
            price: 21,
            img: flowersBouquet3,
            color1: '#3D2155',
            color2: '#CDA486',
            color3: '#C6A5AB',

        },
        {
            id: 5,
            title: "Eucalyptus",
            price: 21,
            img: bouquetTulips,
            color1: '#E390A8',
            color2: '#E19F7F',
            color3: '#DDDBCB',

        },
        {
            id: 6,
            title: "Eucalyptus",
            price: 21,
            img: flowersWatering,
            color1: '#BC0708',
            color2: '#F2623F',
            color3: '#FEE172',

        },
    ],
    "sympathy": [
        {
            id: 1,
            title: "Eucalyptus",
            price: 21,
            img: redFlowers,
            color1: '#731D21',
            color2: '#DD0F3A',
            color3: '#FB4E55',

        },
        {
            id: 2,
            title: "Red Rose",
            price: 20,
            img: bucketWithBouquet,
            color1: '#AB3333',
            color2: '#EA7F7F',
            color3: '#AF0000',

        },
        {
            id: 3,
            title: "Bright Gerbera Daisy",
            price: 12,
            img: bucketWithBouquet2,
            color1: '#EC9BBF',
            color2: '#CF4E94',
            color3: '#DD1278',

        },
        {
            id: 4,
            title: "Eucalyptus",
            price: 21,
            img: redFlowers,
            color1: '#731D21',
            color2: '#DD0F3A',
            color3: '#FB4E55',

        },
        {
            id: 5,
            title: "Eucalyptus",
            price: 21,
            img: flowersWatering,
            color1: '#BC0708',
            color2: '#F2623F',
            color3: '#FEE172',

        },
        {
            id: 6,
            title: "Eucalyptus",
            price: 21,
            img: bouquetTulips,
            color1: '#E390A8',
            color2: '#E19F7F',
            color3: '#DDDBCB',

        },
    ],
    "congratulations": [
        {
            id: 1,
            title: "Eucalyptus",
            price: 21,
            img: flowersWatering,
            color1: '#BC0708',
            color2: '#F2623F',
            color3: '#FEE172',

        },
        {
            id: 2,
            title: "Eucalyptus",
            price: 21,
            img: bouquetTulips,
            color1: '#E390A8',
            color2: '#E19F7F',
            color3: '#DDDBCB',

        },
        {
            id: 3,
            title: "Eucalyptus",
            price: 21,
            img: flowersBouquet3,
            color1: '#3D2155',
            color2: '#CDA486',
            color3: '#C6A5AB',

        },
        {
            id: 4,
            title: "Red Rose",
            price: 20,
            img: bucketWithBouquet,
            color1: '#AB3333',
            color2: '#EA7F7F',
            color3: '#AF0000',

        },
        {
            id: 5,
            title: "Bright Gerbera Daisy",
            price: 12,
            img: bucketWithBouquet2,
            color1: '#EC9BBF',
            color2: '#CF4E94',
            color3: '#DD1278',

        },
        {
            id: 6,
            title: "Eucalyptus",
            price: 21,
            img: redFlowers,
            color1: '#731D21',
            color2: '#DD0F3A',
            color3: '#FB4E55',

        },
    ]
}

export const plants = {
    "succulents": [
        {
            id: 1,
            title: "Echeveria ",
            price: 20,
            img: cactusPlant2,
            color1: '#07B83C',
            color2: '#2B8B52',
            color3: '#96B7A4',

        },
        {
            id: 2,
            title: "Areca Palm ",
            price: 20,
            img: plantCloseUppng,
            color1: '#48401F',
            color2: '#282617',
            color3: '#7E7B3D',

        },
        {
            id: 3,
            title: "Snake Plant ",
            price: 20,
            img: snakePlant,
            color1: '#354C20',
            color2: '#33451E',
            color3: '#4C6437',

        },
        {
            id: 4,
            title: "Snake Plant ",
            price: 20,
            img: indoorPlants,
            color1: '#6B7F2F',
            color2: '#617E2D',
            color3: '#233F0F',

        },
        {
            id: 5,
            title: "Aloe Vera",
            price: 20,
            img: cactusPlant,
            color1: '#AA8957',
            color2: '#394507',
            color3: '#AA8957',

        },
        {
            id: 6,
            title: "Echeveria",
            price: 20,
            img: flowerWooden,
            color1: '#84A6A4',
            color2: '#C5C7C7',
            color3: '#E2DFCC',

        },
    ],
    "lowLight": [
        {
            id: 1,
            title: "Snake Plant ",
            price: 20,
            img: snakePlant,
            color1: '#354C20',
            color2: '#33451E',
            color3: '#4C6437',

        },
        {
            id: 2,
            title: "Snake Plant ",
            price: 20,
            img: indoorPlants,
            color1: '#6B7F2F',
            color2: '#617E2D',
            color3: '#233F0F',

        },
        {
            id: 3,
            title: "Areca Palm ",
            price: 20,
            img: plantCloseUppng,
            color1: '#48401F',
            color2: '#282617',
            color3: '#7E7B3D',

        },
        {
            id: 4,
            title: "Echeveria ",
            price: 20,
            img: cactusPlant2,
            color1: '#07B83C',
            color2: '#2B8B52',
            color3: '#96B7A4',

        },
        {
            id: 5,
            title: "Echeveria",
            price: 20,
            img: flowerWooden,
            color1: '#84A6A4',
            color2: '#C5C7C7',
            color3: '#E2DFCC',

        },
        {
            id: 6,
            title: "Aloe Vera",
            price: 20,
            img: cactusPlant,
            color1: '#AA8957',
            color2: '#394507',
            color3: '#AA8957',

        },
    ],
    "petFriendly": [
        {
            id: 1,
            title: "Echeveria",
            price: 20,
            img: flowerWooden,
            color1: '#84A6A4',
            color2: '#C5C7C7',
            color3: '#E2DFCC',

        },
        {
            id: 2,
            title: "Aloe Vera",
            price: 20,
            img: cactusPlant,
            color1: '#AA8957',
            color2: '#394507',
            color3: '#AA8957',

        },
        {
            id: 3,
            title: "Echeveria ",
            price: 20,
            img: cactusPlant2,
            color1: '#07B83C',
            color2: '#2B8B52',
            color3: '#96B7A4',

        },
        {
            id: 4,
            title: "Areca Palm ",
            price: 20,
            img: plantCloseUppng,
            color1: '#48401F',
            color2: '#282617',
            color3: '#7E7B3D',

        },
        {
            id: 5,
            title: "Snake Plant ",
            price: 20,
            img: indoorPlants,
            color1: '#6B7F2F',
            color2: '#617E2D',
            color3: '#233F0F',

        },
        {
            id: 6,
            title: "Snake Plant ",
            price: 20,
            img: snakePlant,
            color1: '#354C20',
            color2: '#33451E',
            color3: '#4C6437',

        },

    ],
}

export const menuData = [
    {
        id: 1,
        title: 'Wallet History',
        subItems: ['Wallet History 1', 'Wallet History 2', 'Wallet History 3'],
    },
    {
        id: 2,
        title: 'Users Wallets',
        subItems: ['Users Wallets 1', 'Users Wallets 2', 'Users Wallets 3'],
    },
    {
        id: 3,
        title: 'Users Withdraw Requests',
        subItems: ['Users Withdraw Requests 1', 'Users Withdraw Requests 2', 'Users Withdraw Requests 3'],
    },
];

export const cardData = [
    {
        id: 1,
        title: 'Total Income',
        icon:arrow3,
        percentage: 16,
        price:'$ 10,450',
        backgroundColor: '#ffffff',
        linearGradient: '#e3e2e0'
    },
    {
        id: 2,
        title: 'Profits',
        icon: arrow4,
        percentage: 1.5,
        price: '$ 3,500',
        backgroundColor: '#ffffff',
        linearGradient: '#eda2a2'
    },
    {
        id: 3,
        title: 'New customers',
        text: 'May 2024',
        price: '20',
        backgroundColor: '#ffffff',
        linearGradient: '#e3e2e0'
    },
    {
        id: 4,
        title: 'Orders',
        price: '72',
        backgroundColor: '#ffffff',
        linearGradient: '#eda2a2'
    },
];