const entries = require('./db.json')
let globalId = 1
///buttons
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

    getCanDo: (req, res) => {
        const canDos = ["The most effective way to do it, is to do it. — Amelia Earhart" , "Sometimes the best thing you can do is not think, not wonder, not imagine, not obsess. Just breathe and have faith that everything will work out for the best. — Unknown", "It is during our darkest moments that we must focus to see the light. — Aristotle Onassis", "Everyone has inside them a piece of good news. The good news is you need not know how great you can be! How much you can love! What you can accomplish! And what your potential is. — Anne Frank",  "Be gentle with yourself. You are doing the best you can! — Unknown"];
      
        let randomIndex = Math.floor(Math.random() * canDos.length);
        let randomcanDo = canDos[randomIndex];
      
        res.status(200).send(randomcanDo);
    },   
    
    getSunset: (req, res) => {
        const sunsetPhotos = ["https://flic.kr/p/ciFGYh", "https://flic.kr/p/25aW4YD", "https://flic.kr/p/28dLo3t"];

        let randomIndex = Math.floor(Math.random() * sunsetPhotos.length);
        let randomsunsetPhoto = sunsetPhotos[randomIndex];
      
        res.status(200).send(randomsunsetPhoto);
    }, 

    getGratitude: (req, res) => res.status(200).send(entries),
    
    deleteGratitude: (req, res) => {
        entries.splice(0, entries.length)
        res.status(200).send(entries)
    },
    createGratitude: (req, res) => {
          let newEntry = {
            id: globalId,
            text:req.body.text
        }
    
        res.status(200).send(newEntry)
        globalId++
    },
   
   }