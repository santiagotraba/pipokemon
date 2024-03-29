const { DataTypes, UUID } = require("sequelize");

module.exports = (sequelize) => {
    //defino el modelo
    sequelize.define("type", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
};
