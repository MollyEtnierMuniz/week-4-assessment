const { createGratitude, updateGratitude } = require("../server/controller");

const complimentBtn = document.getElementById("complimentButton");
const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
complimentBtn.addEventListener('click', getCompliment)


const fortuneBtn = document.getElementById("fortuneButton")
const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
fortuneBtn.addEventListener('click', getFortune);

///I need to add handle "entry" text field
const entry = document.getElementById("entry");


const createGratitude: (req, res) => {
    let {submit} = req.body
    let entry = {
        id: globalId,
        Text 
    }
    entries.push(entry)
    res.status(200).send(entries)
    globalId++
}

updateGratitudeBtn.addEventListener('click', updateGratitude);

const deleteGratitude = document.getElementById("deleteGratitudeBtn");
    entries.push(entry)
    res.status(200).send(entries)
    globalId--

