

/**
 * Represents a user with a username and a password
 * @param {Sequelize} sequelize
 * @param {DataTypes} DataTypes
 * @return {Model}
 */
module.exports = (sequelize, DataTypes) => {
    const PointOfInterestReview = sequelize.define('PointOfInterestReview', {
        poi_name: DataTypes.STRING,
        country: DataTypes.STRING,
        title: DataTypes.STRING,
        content: DataTypes.TEXT,
        rating: DataTypes.INTEGER
    });

    /**
     * Do not try to understand this function. This is magic.
     * Just here to test you.
     * @param {*} review 
     * @returns a magic data ...
     */
    PointOfInterestReview.prototype.getMagicData = async function (review) {

        const nb = await this.count({ where: { country: review.country }});

        const random = Math.random() * 100;

        return nb * random;
    }

    /**
     * Get a list of enriched reviews.
     * 
     * @param {*} query 
     * @returns [{
     *   poi_name,
     *   country,
     *   title,
     *   content,
     *   rating,
     *   average_country_rating: Average rating in this review's country
     *   average_poi_rating: Average rating of this poi 
     *   magic_date : Result of function "getMagicData"
     * }]
     */
    PointOfInterestReview.prototype.getListOfEnrichedReviews = async function (query) {

        throw("Not implemented yet");
    };

    return PointOfInterestReview;
};