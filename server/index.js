const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const { getCompliment } = require('./controller')
app.get("/api/compliment", getCompliment);

const { getFortune } = require('./controller')
app.get("/api/fortune", getFortune);

const { getCanDo } = require('./controller')
app.get("/api/canDo", getCanDo);

const { getSunset } = require('./controller')
app.get("/api/sunset", getSunset);

///filling the gratitude list
const {
     getGratitude,
     deleteGratitude,
     createGratitude,
    
} = require('./controller')

app.get(`/api/gratitude`, getGratitude)
app.delete(`/api/gratitude`, deleteGratitude)
app.post(`/api/gratitude`, createGratitude)


app.listen(4000, () => console.log("Server running on 4000"));
