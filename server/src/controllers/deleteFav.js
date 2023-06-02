const {Favorite} = require('../DB_connection');

module.exports = async (req,res) => {
    try {
        const {id} = req.params;
        
        await Favorite.destroy({where: {id}});
     
        const favAll = await Favorite.findAll();
        return res.status(200).json(favAll)

    } catch (error) {
       return res.status(500).send(error.message)
    }
};

