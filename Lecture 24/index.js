// name IIFE
(function connectDatabaseOne(databaseName){
    console.log(`${databaseName} is connected!`)
})("postgre SQL");

// unnamed IIFE
((databaseName) => {
    console.log(`${databaseName} is connected!`)
})("mongo DB");