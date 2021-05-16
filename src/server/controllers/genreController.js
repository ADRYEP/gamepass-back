import session from '../../DB/connection.js'

class genreController{

    async getAll(){
        return await session
            .run('MATCH (n:Genre) RETURN n ORDER BY n.name ASC')
            .then(function(result){
                result.records.forEach(function(record){
                    console.log(JSON.stringify(record._fields[0].properties));
                });
            })
            .catch(function(err){
                console.log(err);
            })
    }

    async getGenreByName(name){
        return await session
            .run('MATCH (n:Genre {name:$nameParam}) RETURN n',
            {nameParam:name})
            .then(function(result){
                console.log(JSON.stringify(result.records[0].get(0).properties))
            })
            .catch(function(err){
                console.log(err);
            })
    }

    async createGenre(name){
        return await session
            .run('CREATE (n:genre {name:$nameParam}) RETURN n',
            {nameParam:name})
            .then(function(result){
                console.log(JSON.stringify(result.records[0].get(0).properties));
            })
            .catch(function(err){
                console.log(err);
            })
    }

    async deleteGenre(name){
        return await session
            .run('MATCH (n:genre {name:$nameParam}) DETACH DELETE n',
                {nameParam:name})
            .then(
                console.log("Deleted")
            )
            .catch(function(err){
                console.log(err);
            })
    }

    async getGenresGames(name){
        return await session
            .run('MATCH (n:genre {name:$nameParam})-[r:TYPE_OF_GAME]-(d) return n,d',
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

export default genreController