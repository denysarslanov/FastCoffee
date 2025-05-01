const config = {
    nav : {
        index: '/' as const,
        items: 'drinks/' as const,
        group: 'drinks/'as const ,
        privacyPolicy: 'privacyPolicy' as const,
        terms: 'terms' as const,
        item: '/products' as const
    },
    // port changed from 3001 -> 5000
    // process.env.REACT_APP_BACKEND_URL || 
    apiUrl: {
        baseApiUrl: 'http://localhost:5000/getCoffee',
        getCustomization: 'customization/',
        groups: 'groups',
        coffeeByGroupName: '',
        randomCoffee: 'random/',
        coffeeByUrl: 'coffeeList/'
    }
} 

const navLinks = Object.values(config.nav)
export type NavigationLinks = typeof navLinks[number]

export default config