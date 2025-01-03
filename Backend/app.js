const express = require("express")
const cors = require('cors'); 



const app = express()

app.use(cors({ 

    origin: 'http://localhost:3000' // Specify the allowed origin

})); 


let lightingData = [
    { id: 1, imageUrl: "https://images.1stoplighting.com/supplier/crystorama-lighting/products/9226-os_1k.jpg/300/300/1", style: "Orb" },
    { id: 2, imageUrl: "https://images.1stoplighting.com/supplier/kichler/products/43999ni_1k.jpg/300/300/1", style: "Contemporary" },
    { id: 3, imageUrl: "https://images.1stoplighting.com/supplier/crystorama-lighting/products/5016-eb-cl-mwp_1k.jpg/300/300/1", style: "Traditional" },
    { id: 4, imageUrl: "https://images.1stoplighting.com/supplier/quoizel-lighting/products/sdl5005ws_1k.jpg/300/300/1", style: "Round Globe" },
    { id: 5, imageUrl: "https://images.1stoplighting.com/supplier/kichler/products/43118ch_1k.jpg/300/300/1", style: "Sputnik" },
    { id: 6, imageUrl: "https://images.1stoplighting.com/supplier/kichler/products/44128mch_1k.jpg/300/300/1", style: "Geometric" },
    { id: 7, imageUrl: "https://images.1stoplighting.com/supplier/progress-lighting/products/p400048-143_1k.jpg/300/300/1", style: "Rustic" },
    { id: 8, imageUrl: "https://images.1stoplighting.com/supplier/quoizel-lighting/products/brt542gk_1k.jpg/300/300/1", style: "Farmhouse" },
    { id: 9, imageUrl: "https://images.1stoplighting.com/supplier/progress-lighting/products/p500090-143_1k.jpg/300/300/1", style: "Urban" },
    { id: 10, imageUrl: "https://images.1stoplighting.com/supplier/quoizel-lighting/products/avy5204pk_1k.jpg/300/300/1", style: "Caged" },
    { id: 11, imageUrl: "https://images.1stoplighting.com/supplier/quoizel-lighting/products/lvy5005wt_1k.jpg/300/300/1", style: "Lantern" },
    { id: 12, imageUrl: "https://images.1stoplighting.com/supplier/minka-lavery/products/4104-84_1k.jpg/300/300/1", style: "Luxury" },
    { id: 13, imageUrl: "https://images.1stoplighting.com/supplier/capital-lighting/products/427861ww_1k.jpg/300/300/1", style: "Drum" },
    { id: 14, imageUrl: "https://images.1stoplighting.com/supplier/bailey-street-home/products/31-bel-2119475_1k.jpg/300/300/1", style: "Crystal" },
    { id: 15, imageUrl: "https://images.1stoplighting.com/supplier/kichler/products/2943oz_1k.jpg/300/300/1", style: "Exposed Bulb" },
    { id: 16, imageUrl: "https://images.1stoplighting.com/supplier/kichler/products/43362nbr_1k.jpg/300/300/1", style: "Billiard" },
    { id: 17, imageUrl: "https://images.1stoplighting.com/supplier/kichler/products/52388oz_1k.jpg/300/300/1", style: "Linear" },
    { id: 18, imageUrl: "https://images.1stoplighting.com/supplier/capital-lighting/products/431661mb_1k.jpg/300/300/1", style: "Candle Style" },
    { id: 19, imageUrl: "https://images.1stoplighting.com/supplier/bailey-street-home/products/31-bel-2118771_1k.jpg/300/300/1", style: "Transitional" },
    { id: 20, imageUrl: "https://images.1stoplighting.com/supplier/bailey-street-home/products/31-bel-2118771_1k.jpg/300/300/1", style: "Beach Style" },
  ];

  
  app.listen(3001,() =>{
    console.log("server running successfully")
  })


  app.use(express.json());


app.get("/api/lightings", (req, res) => {
  res.status(200).json(lightingData);
});


app.post("/api/addlightings", (req, res) => {

    const newLighting = req.body;

    if (!newLighting || !newLighting.imageUrl || typeof newLighting.imageUrl !== "string" ||
        !newLighting.style || typeof newLighting.style !== "string") {
        return res.status(400).json({ message: "Invalid request body. Please provide id (number), imageUrl (string), and style (string)." });
    }

    let fetchingLastData = lightingData[lightingData.length-1];
    let lightingAdd = {
        id : fetchingLastData.id + 1,
        ...newLighting
    }

    lightingData.push(lightingAdd); 
    console.log(lightingData)

    res.status(201).json({data:lightingData, message: "Lighting successfully added." });
});


app.delete("/api/deletelightings/:id", (req, res) => {
    console.log("api hit done")
    const idToDelete = parseInt(req.params.id);
  
    if (isNaN(idToDelete)) {
      return res.status(400).json({ message: "Invalid ID provided." }); 
    }
  
    let initialLength = lightingData.length;
    lightingData = lightingData.filter(lighting => lighting.id !== idToDelete);
  
    if (lightingData.length === initialLength) {
      return res.status(404).json({ message: "Lighting with specified ID not found." }); 
    }
  
    res.status(200).json({data:lightingData, message: "Lighting successfully deleted." }); 
  });


  app.put("/api/putlightings/:id", (req, res) => {
    const idToUpdate = parseInt(req.params.id);
  
    if (isNaN(idToUpdate)) {
      return res.status(400).json({ message: "Invalid ID provided." });
    }
  
    const updatedLighting = req.body; 
  
      if (!updatedLighting || !updatedLighting.imageUrl || typeof updatedLighting.imageUrl !== "string" ||
          !updatedLighting.style || typeof updatedLighting.style !== "string") {
        return res.status(400).json({ message: "Invalid request body. Please provide imageUrl (string), and style (string)." });
      }
  
    const lightingIndex = lightingData.findIndex(lighting => lighting.id === idToUpdate);
  
    if (lightingIndex === -1) {
      return res.status(404).json({ message: "Lighting with specified ID not found." });
    }
  
    
    lightingData[lightingIndex] = {
      id: idToUpdate, 
      ...updatedLighting 
    };
  
    let updatedData = lightingData.filter(z => z.id == idToUpdate);
    console.log(updatedData);

    res.status(201).json({ message: "Lighting successfully updated.", data: lightingData[lightingIndex] }); // Send updated data
  });