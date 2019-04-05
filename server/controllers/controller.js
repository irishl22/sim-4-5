module.exports = {
    read: (req, res, next) => {
        const db = req.app.get('db')
    
        db.get_houses()
        .then(house => {
            res.status(200).send(house)
        }).catch(err => {
            res.status(500).send('controller', err)
        })

    },
    create: (req,res, next) => {
        const db = req.app.get('db')
        let {name, address, city, state, zipcode} = req.body
    
        db.create_house([name, address, city, state, zipcode])
        .then(() => {
            res.status(200).send('House Created')
        }).catch(err => {
            res.status(500).send("there was an error", console.log(err))
        })
    },
    delete: (req, res, next) => {
        const db = req.app.get('db')
        const {id} = req.params

        db.delete_house([id])
        .then(() => {
            res.status(200).send('house deleted')
        .catch(err => {
            res.status(500).send("there was an error", console.log(err))
            })
        })
    },
}