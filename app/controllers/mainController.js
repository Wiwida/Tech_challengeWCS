const Members = require("../models/members");

module.exports = {

    // Controllers page principale avec GET et POST (cf router)

    homePage: async (req, res, next) => {

        try {

            // On cherche tout les membres et on les renvois dans la view :

            const allMembers = await Members.findAll();
            res.render('index', {allMembers});

        } catch(error) {

            res.status(500).send('On a eu un pépin', error);
        };
        
    },

    homePagePost: async (req, res, next) => {

        const nameMemberAppend = req.body.nameMember;
        const qualityMemberAppend = req.body.qualityMember;
        const hobbieMemberAppend = req.body.hobbieMember;

        // Ci-dessus on va chercher les input et ci-dessous on vérifie leurs remplissages

        if (!nameMemberAppend || !qualityMemberAppend || !hobbieMemberAppend) {

            // TODO : View dédiée aux erreurs.
            res.status(404).send("Il faut rentrer du texte et ne pas laisser de champ vide ...")

        } else {

            //---------------------------------------------------------------------------------------------------------------------------------------

            // Création d'un nouveau membre puis ajout en base de donnée (méthode sans promesse)

            // const newMember = new Members({
            //     name: nameMemberAppend,
            //     quality: qualityMemberAppend,
            //     hobbie: hobbieMemberAppend,
            // });

            // newMember.save()
            // .then( () => {res.redirect('/')})
            // .catch( (error) => {
            //     res.status(500).send('On a eu un pépin', error);
            // });

            //---------------------------------------------------------------------------------------------------------------------------------------

            // Création d'un nouveau membre puis ajout en base de donnée (méthode promesse)

            try {

                const newMember = new Members({
                    name: nameMemberAppend,
                    quality: qualityMemberAppend,
                    hobbie: hobbieMemberAppend,
                });

                const newMemberExist = await Members.findOne({
                    where: {
                        name: nameMemberAppend,
                    }
                });

                // On vérifie que le membre n'est pas déjà en base de données :

                if (newMemberExist === null) {

                    await newMember.save();
                    res.redirect('/');
                    
                } else {
                    res.status(404).send('Nom déja enregistré ...');
                    res.redirect('/');
                }

            } catch (error) {

                res.status(500).send('On a eu un pépin', error);

            };
        };
    },
};

 