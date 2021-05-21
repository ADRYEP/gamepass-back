import session from '../../DB/connection.js'

class genreController{

    async getAll(){
        let data = []
        await session
            .run('MATCH (n:Genre) RETURN n ORDER BY n.name ASC')
            .then(function(result){
                result.records.forEach(function(record){
                    data.push(record._fields[0].properties)
                });
            })
            .catch(function(err){
                console.log(err);
            })
        return data
    }

    async getGenreByName(name){
        let data = []
        await session
            .run('MATCH (n:Genre {name:$nameParam}) RETURN n',
            {nameParam:name})
            .then(function(result){
                data.push(result.records[0].get(0).properties)
            })
            .catch(function(err){
                console.log(err);
            })
        return data
    }

    async createGenre(name){
        let data = []
        await session
            .run('CREATE (n:genre {name:$nameParam}) RETURN n',
            {nameParam:name})
            .then(function(result){
                data.push(result.records[0].get(0).properties)
            })
            .catch(function(err){
                console.log(err);
            })
        return data
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
        let data = []
        await session
            .run('MATCH (n:genre {name:$nameParam})-[r:TYPE_OF_GAME]-(d) return n,d',
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

export default genreController