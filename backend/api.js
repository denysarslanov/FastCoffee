const express = require('express')
const { setConnection } = require('./db_layer/setConnection')
const startCoffeeRouter = require('./coffee/coffeeRouter')

const PORT = process.env.PORT || 5000

const app = express()
const db = { connection: null }

async function connectWithRetry() {
    try {
        const onError = async(err) => {
            console.error('MySQL error:', err)
            if (err.code === 'PROTOCOL_CONNECTION_LOST') {
                console.log('Connection lost, reconnecting...')
                try {
                    db.connection = await connectWithRetry()
                    console.log('Reconnected')
                } catch (e) {
                    console.error('Err while reconnecting', e)
                    setTimeout(connectWithRetry, 5000)
                }
            } else {
                console.error('Фатальная ошибка соединения:', err)
                process.exit(1);
            }
        }

        db.connection = await setConnection(onError)
        return db.connection
    } catch (err) {
        console.error('Err', err)
        setTimeout(connectWithRetry, 5000)
    }
}

(async() => {
    await connectWithRetry()

    app.use(express.json())

    app.use((req, res, next) => {
        req.dbConnection = db.connection
        next()
    })

    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type', 'Access-Control-Allow-Origin', 'Origin');
        res.setHeader('Access-Control-Allow-Credentials', true);
        next();
    });

    app.use('/getCoffee', (req, res, next) => startCoffeeRouter(req.dbConnection)(req, res, next))

    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`)
    })
})()