const config = {
    connectionData: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    },
    port: process.env.DB_PORT,
    db_name: process.env.DB_NAME,
    tables: {
        coffee_groups: 'coffeegroups',
        coffee: 'allcoffee',
        flavors: 'flavors',
        sizes: 'sizes'
    }
}


module.exports = config