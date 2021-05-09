import neo4j from 'neo4j-driver'
import dotenv from 'dotenv'

dotenv.config()

const driver = neo4j.driver(
    process.env.DB_URL,
    neo4j.auth.basic(process.env.DB_USER,process.env.DB_PASS)
  )

var session = driver.session({
  database: process.env.DB_NAME,
  defaultAccessMode: neo4j.session.WRITE
})

// await driver.close()

export default session