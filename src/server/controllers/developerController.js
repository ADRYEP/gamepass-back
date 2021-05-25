import neo4j from 'neo4j-driver'
import dotenv from 'dotenv'

dotenv.config()

const driver = neo4j.driver(
    process.env.DB_URL,
    neo4j.auth.basic(process.env.DB_USER,process.env.DB_PASS)
)

let session = driver.session({
    database: process.env.DB_NAME,
    defaultAccessMode: neo4j.session.WRITE
})

class devController{

    async getAll(){
        let sessionAllDevs = driver.session({
            database: process.env.DB_NAME,
            defaultAccessMode: neo4j.session.WRITE
        })
        let data = []
        await sessionAllDevs
            .run('MATCH (n:Dev) RETURN n ORDER BY n.name ASC')
            .then(function(result){
                result.records.forEach(function(record){
                    data.push(record._fields[0].properties)
                });
                sessionAllDevs.close()
            })
            .catch(function(err){
                console.log(err);
            })
        return data
    }

    async getDevByName(name){
        let data = []
        await session
            .run('MATCH (n:Dev {name:$nameParam}) RETURN n',
            {nameParam:name})
            .then(function(result){
                data.push(result.records[0].get(0).properties)
            })
            .catch(function(err){
                console.log(err);
            })
        return data
    }

    async createDev(name,country,creation_year){
        let data = []
        await session
            .run('CREATE (n:Dev {name:$nameParam, country:$countryParam, creation_year:$creation_yearParam}) RETURN n',
            {nameParam:name, countryParam:country, creation_yearParam:creation_year})
            .then(function(result){
                data.push(result.records[0].get(0).properties)
            })
            .catch(function(err){
                console.log(err);
            })
        return data
    }

    async deleteDev(name){
        return await session
            .run('MATCH (n:Dev {name:$nameParam}) DETACH DELETE n',
                {nameParam:name})
            .then(
                console.log("Deleted")
            )
            .catch(function(err){
                console.log(err);
            })
    }

    async getDevsGames(name){
        let data = []
        await session
            .run('MATCH (n:Dev {name:$nameParam})-[r:DEVELOPED_BY]-(d) return n,d',
            {nameParam:name})
            .then(function(result){
                result.records.forEach(function(record){
                    data.push(record._fields[1].properties)
                });
            })
            .catch(function(err){
                console.log(err);
            })
        return data
    }

}

export default devController