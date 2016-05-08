function getServerConf() {
    if (process.env.NODE_ENV !== 'production') {
        return {
            port: 3000,
            host: 'localhost'
        }
    } else {
        return {
            port: 80,
            host: 'speed-typing.herokuapp.com'
        }
    }
}

export {getServerConf};