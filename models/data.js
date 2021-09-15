module.exports = (sequelize, DataTypes) => {
    const Items = sequelize.define('items', {
        title: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        gtin: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        gender: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        salePrice: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        price: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        imageLink: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    })
    return Items;
};