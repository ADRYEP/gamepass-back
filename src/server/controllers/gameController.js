import session from '../../DB/connection.js'

class gameController{

    async getAll(){
        return await session
            .run('MATCH (n:Game) RETURN n')
            .then(function(result){
                result.records.forEach(function(record){
                    console.log(record._fields[0]);
                });
            })
            .catch(function(err){
                console.log(err);
            })
    }

    async getGameBytitle(title){
        return await session
            .run('MATCH (n:Game {title:$titleParam}) RETURN n',
            {titleParam:title})
            .then(function(result){
                console.log(result.records[0].get(0))
            })
            .catch(function(err){
                console.log(err);
            })
    }

    async createGame(title,released,install_size){
        return await session
            .run('CREATE (n:Game {title:$titleParam, released:$releasedParam, install_size:$install_sizeParam}) RETURN n',
            {titleParam:title, releasedParam:released, install_sizeParam:install_size})
            .then(function(result){
                console.log(result.records[0].get(0));
            })
            .catch(function(err){
                console.log(err);
            })
    }

}

export default gameController