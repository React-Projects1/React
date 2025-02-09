    export const reportsColumns = [
        { field: 'id', headerName: 'ID', flex: 1 },
        { field: 'productName', headerName: 'Product Name', flex: 1 },
        { field: 'dateOfCreation', headerName: 'Date of Creation', flex: 1 },
        { field: 'price', headerName: 'Price', flex: 1 },
        { field: 'customerId', headerName: 'Customer ID', flex: 1 },
        { field: 'notes', headerName: 'Notes', flex: 1 },
    ];

    export const reportsRows = [
        {
            id: 1, productName: 'Lavender', dateOfCreation: '22-08-2024',
            price: '$5', customerId: '101', notes: 'Popular for relaxation'
        },
        {
            id: 2, productName: 'Rose', dateOfCreation: '23-08-2024',
            price: '$12', customerId: '102', notes: 'Best seller'
        },
        {
            id: 3, productName: 'Tulip', dateOfCreation: '24-08-2024',
            price: '$8', customerId: '103', notes: 'Seasonal product'
        },
        {
            id: 4, productName: 'Daisy', dateOfCreation: '25-08-2024',
            price: '$7', customerId: '104', notes: 'New arrival'
        },
        {
            id: 5, productName: 'Orchid', dateOfCreation: '26-08-2024',
            price: '$15', customerId: '105', notes: 'Limited stock'
        },
        {
            id: 6, productName: 'Sunflower', dateOfCreation: '27-08-2024',
            price: '$6', customerId: '106', notes: 'Bright and cheerful'
        },
        {
            id: 7, productName: 'Carnation', dateOfCreation: '28-08-2024',
            price: '$9', customerId: '107', notes: 'Great for gifts'
        },
        {
            id: 8, productName: 'Lilac', dateOfCreation: '29-08-2024',
            price: '$11', customerId: '108', notes: 'Sweet fragrance'
        },
        {
            id: 9, productName: 'Peony', dateOfCreation: '30-08-2024',
            price: '$14', customerId: '109', notes: 'Elegant choice'
        },
        {
            id: 10, productName: 'Jasmine', dateOfCreation: '31-08-2024',
            price: '$10', customerId: '110', notes: 'Classic and timeless'
        },
        {
            id: 11, productName: 'Chrysanthemum', dateOfCreation: '01-09-2024',
            price: '$8', customerId: '111', notes: 'Symbol of optimism'
        },
        {
            id: 12, productName: 'Hydrangea', dateOfCreation: '02-09-2024',
            price: '$13', customerId: '112', notes: 'Perfect for bouquets'
        },
        {
            id: 13, productName: 'Marigold', dateOfCreation: '03-09-2024',
            price: '$4', customerId: '113', notes: 'Affordable and vibrant'
        },
        {
            id: 14, productName: 'Lotus', dateOfCreation: '04-09-2024',
            price: '$18', customerId: '114', notes: 'Sacred and serene'
        },
        {
            id: 15, productName: 'Hibiscus', dateOfCreation: '05-09-2024',
            price: '$7', customerId: '115', notes: 'Tropical vibes'
        },
    ];

    export const usersColumns = [
        { field: 'id', headerName: 'User ID', flex: 1 },
        { field: 'name', headerName: 'Name', flex: 1 },
        { field: 'email', headerName: 'Email', type: 'email', flex: 1 },
    ];

    export const ordersColumns = [
        { field: 'id', headerName: 'Order ID', flex: 1 },
        { field: 'location', headerName: 'Location', flex: 1 },
        { field: 'totalPrice', headerName: 'Total Price', type: 'email', flex: 1 },
        { field: 'orderStatus', headerName: 'Order Status', flex: 1 },
    ];

    export const ordersRows = [
        { id: 1, location: 'Damascus', totalPrice: '$344', orderStatus: 'Processing' },
        { id: 2, location: 'Homs', totalPrice: '$250', orderStatus: 'Shipped' },
        { id: 3, location: 'Aleppo', totalPrice: '$500', orderStatus: 'Delivered' },
        { id: 4, location: 'Latakia', totalPrice: '$210', orderStatus: 'Processing' },
        { id: 5, location: 'Tartus', totalPrice: '$420', orderStatus: 'Shipped' },
        { id: 6, location: 'Damascus', totalPrice: '$330', orderStatus: 'Delivered' },
        { id: 7, location: 'Hama', totalPrice: '$600', orderStatus: 'Processing' },
        { id: 8, location: 'Deir ez-Zor', totalPrice: '$380', orderStatus: 'Shipped' },
        { id: 9, location: 'Raqqa', totalPrice: '$420', orderStatus: 'Processing' },
        { id: 10, location: 'Idlib', totalPrice: '$550', orderStatus: 'Delivered' },
    ];

    export const reportField = [
        { id: 1, label: 'Product Name', name: 'productName', type: 'text', },
        { id: 2, label: 'Date of Creation', name: 'dateOfCreation', type: 'text', },
        { id: 3, label: 'Price', name: 'price', type: 'number', },
        { id: 4, label: 'Customer ID', name: 'customerId', type: 'text', },
    ]

    export const userField = [
        { id: 1, label: 'Name', name: 'name', type: 'text', },
        { id: 2, label: 'Email', name: 'email', type: 'email', },
        { id: 3, label: 'Type', name: 'type', type: 'text', },
    ]

    export const ordersField = [
        { id: 1, label: 'Location', name: 'location', type: 'text', },
        { id: 2, label: 'Total Price', name: 'totalPrice', type: 'email', },
        { id: 3, label: 'Order Status', name: 'orderStatus', type: 'text', },
    ]
