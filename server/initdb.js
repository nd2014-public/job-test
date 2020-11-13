
(async () => {

    const { sequelize, PointOfInterestReview } = require('./models');

    await sequelize.sync();
    
    for (let i = 0; i < 10000; i++) {

        let poi_name = 'poi #' + Math.round(Math.random() * 50);
        let country = ['fr', 'de', 'es', 'it'][Math.round(Math.random() * 4)];
        let rating = 1 + Math.round(Math.random() * 4);

        await PointOfInterestReview.create({
            poi_name,
            country,
            title: 'Review #' + i,
            content: 'Content de la review #' + i,
            rating
        });
    }


})();