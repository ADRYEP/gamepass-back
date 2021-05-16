import session from '../../DB/connection.js'

class devController{

    async getAll(){
        return await session
            .run('MATCH (n:Dev) RETURN n ORDER BY n.name ASC')
            .then(function(result){
                result.records.forEach(function(record){
                    console.log(JSON.stringify(record._fields[0].properties));
                });
            })
            .catch(function(err){
                console.log(err);
            })
    }

    async getDevByName(name){
        return await session
            .run('MATCH (n:Dev {name:$nameParam}) RETURN n',
            {nameParam:name})
            .then(function(result){
                console.log(JSON.stringify(result.records[0].get(0).properties))
            })
            .catch(function(err){
                console.log(err);
            })
    }

    async createDev(name,country,creation_year){
        return await session
            .run('CREATE (n:Dev {name:$nameParam, country:$countryParam, creation_year:$creation_yearParam}) RETURN n',
            {nameParam:name, countryParam:country, creation_yearParam:creation_year})
            .then(function(result){
                console.log(JSON.stringify(result.records[0].get(0).properties));
            })
            .catch(function(err){
                console.log(err);
            })
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
        return await session
            .run('MATCH (n:Dev {name:$nameParam})-[r:DEVELOPED_BY]-(d) return n,d',
            {nameParam:name})
            .then(function(result){
                result.records.forEach(function(record){
                    console.log(JSON.stringify(record._fields[1].properties));
                });
            })
            .catch(function(err){
                console.log(err);
            })
    }

}

export default devController