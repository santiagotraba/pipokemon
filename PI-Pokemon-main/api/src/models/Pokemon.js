const { DataTypes, UUID } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define("pokemon", {
        id: {
            //UUID: Un id compuesto por letras y numeros creado aleatoriamente con el fin de que no se repita. Es un tipo de dato mas seguro.
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            //No hace falta el allowNull porque ya le agregue primaryKey.
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                isUrl: true,
            },
        },
        hp: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        attack: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        defense: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        speed: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        height: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        weight: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    });
};
