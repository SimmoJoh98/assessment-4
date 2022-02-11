let userMsgs = ''

module.exports = {
    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!",
                           "Cool shirt!",
                           "Your Javascript skills are stellar.",
        ];
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
      },
    getFortune: (req,res) => {
        const fortunes = [
            'Your road to glory will be rocky, but fulfilling.',
            'Courage is not simply one of the virtues, but the form of every virtue at the testing point.',
            'Nothing is impossible to a willing heart.',
            `Don’t pursue happiness – create it.`,
            'All things are difficult before they are easy.'
        ]

        let idx = Math.floor(Math.random() * fortunes.length);
        let randFortune = fortunes[idx]

        res.status(200).send(randFortune)
    },
    createMessage: (req,res) => {
        let userMsg = req.body.message
        userMsgs = userMsg
        res.status(200).send(`Created Your Message: ${userMsg}`)
        console.log(`Created Msg: ${userMsg}`)
    },
    updateMsg: (req,res) => {
        let updMsg = req.body.message
        userMsgs = updMsg
        res.status(200).send(`Updated The Message To: ${updMsg}`)
        console.log(`Updated Message To: ${updMsg}`)
    },
    delMsg: (req,res) => {
        userMsgs = ''
        res.status(200).send(`Successfully deleted.`)
        console.log(`Deleted the value from userMsgs`)
    },
    getMsg: (req,res) => {
        res.status(200).send(`The Current Value of Msg is: ${userMsgs}`)
    }
}