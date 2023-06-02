const {Favorite} = require('../DB_connection');

module.exports = async (req,res) => {
    try {
        const {name, origin, status, image, species, gender} = req.body;

        if(!name || !origin || !status || !image || !species || !gender) res.status(401).send('Faltan datos');
        
        await Favorite.findOrCreate({where: {name, origin, status, image, species, gender}});
        const favAll = await Favorite.findAll();
        res.status(200).json(favAll)

    } catch (error) {
        res.status(500).json({error:error.message})
    }
}


