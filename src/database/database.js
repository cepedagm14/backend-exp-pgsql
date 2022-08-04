import  Sequelize  from "sequelize";

const database = "projectdb"
const user = "postgres"
const password = "cepeda"

export const sequelize = new Sequelize(database, user, password, {
    host: "localhost",
    dialect: "postgres"
})