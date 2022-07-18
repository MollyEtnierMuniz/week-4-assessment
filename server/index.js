const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const { getCompliment } = require('./controller')
app.get("/api/compliment", getCompliment);

const { getFortune } = require('./controller')
app.get("/api/fortune", getFortune);

const {
     getGratitude,
     deleteGratitude,
     createGratitude,
     updateGratitude 
    
} = require('./controller')

app.get(`/api/gratitude`, getGratitude)
app.delete(`/api/gratitude/:id`, deleteGratitude)
app.post(`/api/gratitude/`, createGratitude)
app.put(`/api/gratitude/:id`, updateGratitude)

app.listen(4000, () => console.log("Server running on 4000"));
