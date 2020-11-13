const { Sequelize } = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'db.sqlite'
});

const path = require('path');

const PointOfInterestReview = require(path.join(__dirname, "pointofinterestreview.js"))(sequelize, Sequelize.DataTypes)

module.exports = {
    sequelize,
    Op: Sequelize.Op,
    PointOfInterestReview
}