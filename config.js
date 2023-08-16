module.exports = {
    PORT: process.env.PORT || 9000,
    dbUri: process.env.MONGO_DB_URI || 'mongodb+srv://MLSU:abbasMuffadal78652@mlsu.jz9kc1d.mongodb.net/MLSU',
    jwtSecret: process.env.jwtSecretKey || 'mlsuProjectBCAbyAbbasMuffadal'
}