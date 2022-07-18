const entries = require('./db.json')
let globalId = 1

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = ["Happiness begins with facing life with a smile and a wink.", "It is better to deal with problems before they arise.", "Now is the time to try something new.", "The only people who never fail are those who never try.", "No one can walk backwards into the future.", "You might find youself with code that won't run."];
      
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },
    getGratitude: (req, res) => res.status(200).send(entries),
    
    deleteGratitude: (req, res) => {
        let index = entries.findIndex(elem => elem.id === +req.params.id)
        entries.splice(index, 1)
        res.status(200).send(entries)
    },
    createGratitude: (req, res) => {
        let {Text} = req.body
        let newEntry = {
            id: globalId,
            Text
        }
        entries.push(newEntry)
        res.status(200).send(entries)
        globalId++
    },
    ///I think I have this part wrong. I want to replace the old text entry with the new text entry. 
    updateGratitude: (req, res) => {
        let { id } = req.params
        let { entries } = req.body
        let index = entries.findIndex(elem => +elem.id === +id)
        { entries[index].newText = entries[index].text }
            res.status(200).send(entries)
    }
}