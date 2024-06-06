//express

import express from "express";

import{
    showClothing,
    showClothingById,
    createClothing,
    updateClothing,
    deleteClothing,
} from "../controllers/clothing.js";

//express routers
const router=express.Router();

router.get("/clothing", showClothing); //to get all clothing

router.get("/clothing/:id", showClothingById); //get single

router.post('/clothing', createClothing); //create

router.put('/clothing/:id', updateClothing); //update

router.delete('/clothing/:id', deleteClothing); //delete

export default router;