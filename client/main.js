const entryForm = document.getElementById("entryForm")

///below this are the four buttons
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

const canDoBtn = document.getElementById("canDoButton")
const getCanDo = () => {
    axios.get("http://localhost:4000/api/canDo/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
canDoBtn.addEventListener('click', getCanDo);

const sunsetBtn = document.getElementById("sunsetButton");
const getSunset = () => {
    axios.get("http://localhost:4000/api/sunset/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
sunsetBtn.addEventListener('click', getSunset)


///filling the gratitude list
const entry = document.getElementById("entry");

const entriesContainer = document.getElementById("entriesContainer")

const createGratitude = (event) => {
    event.preventDefault()
    axios.post ("http://localhost:4000/api/gratitude",{text:entry.value})
    .then (res => {
        const newEntry = document.createElement('p')
        newEntry.textContent = res.data.text
        entriesContainer.appendChild(newEntry)
        console.log(res.data)
    } )
}
entryForm.addEventListener('submit', createGratitude)


const deleteGratitudeBtn = document.getElementById ("deleteGratitudeBtn");

const deleteGratitude =(event) => {
axios.delete ("http://localhost:4000/api/gratitude")
    .then (res => {
        entriesContainer.innerHTML = ''
    })
event.preventDefault()
console.log (event)
}
deleteGratitudeBtn.addEventListener('click', deleteGratitude)

