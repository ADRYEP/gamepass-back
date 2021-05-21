import session from '../../DB/connection.js'

class gameController{
    
    async getAll(){
        let data = []
        await session
            .run('MATCH (n:Game) RETURN n ORDER BY n.title ASC')
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

    async getGameBytitle(title){
        let data = []
        await session
            .run('MATCH (n:Game {title:$titleParam}) RETURN n',
            {titleParam:title})
            .then(function(result){
                data.push(result.records[0].get(0).properties)
            })
            .catch(function(err){
                console.log(err);
            })
        return data
    }

    async createGame(title,released,install_size){
        let data = []
        await session
            .run('CREATE (n:Game {title:$titleParam, released:$releasedParam, install_size:$install_sizeParam}) RETURN n',
            {titleParam:title, releasedParam:released, install_sizeParam:install_size})
            .then(function(result){
                data.push(result.records[0].get(0).properties)
            })
            .catch(function(err){
                console.log(err);
            })
        return data
    }

    async deleteGame(title){
        return await session
            .run('MATCH (n:Game {title:$titleParam}) DETACH DELETE n',
                {titleParam:title})
            .then(
                console.log("Deleted")
            )
            .catch(function(err){
                console.log(err);
            })
    }

    async getGamesDev(title){
        let data = []
        await session
            .run('MATCH (n:Game {title:$titleParam})-[r:DEVELOPED_BY]-(d) return n,d',
            {titleParam:title})
            .then(function(result){
                data.push(result.records[0].get(1).properties)
            })
            .catch(function(err){
                console.log(err);
            })
        return data
    }

    async getGamesGenre(title){
        let data = []
        await session
            .run('MATCH (n:Game {title:$titleParam})-[r:TYPE_OF_GAME]-(m) return n,m',
            {titleParam:title})
            .then(function(result){
                data.push(result.records[0].get(1).properties)
            })
            .catch(function(err){
                console.log(err);
            })
        return data
    }

    async addDevtoGame(titleGame,nameDev){
        let data = []
        await session
            .run('MATCH (n:Game {title:$titleParam}), (m:Dev {name:$nameParam}) MERGE (n)-[r:DEVELOPED_BY]-(m) RETURN n,r,m',
            {titleParam:titleGame, nameParam:nameDev})
            .then(function(result){
                data.push(
                    result.records[0].get(0).properties,
                    result.records[0].get(1).type,
                    result.records[0].get(2).properties
                )
            })
            .catch(function(err){
                console.log(err);
            })
        return data
    }

    async addGenretoGame(titleGame,nameGenre){
        let data = []
        await session
            .run('MATCH (n:Game {title:$titleParam}), (m:Genre {name:$nameParam}) MERGE (n)-[r:TYPE_OF_GAME]-(m) RETURN n,r,m',
            {titleParam:titleGame, nameParam:nameGenre})
            .then(function(result){
                data.push(
                    result.records[0].get(0).properties,
                    result.records[0].get(1).type,
                    result.records[0].get(2).properties
                )
            })
            .catch(function(err){
                console.log(err);
            })            
        return data
    }


}

export default gameController