//functions from the model

import {
    getClothing,
    getClothingById,
    insertClothing,
    updateClothingById,
    deleteClothingById,
} from "../models/ClothingModel.js";

//get all
export const showClothing=(req, res)=>{
    getClothing((err,results)=>{
        if(err) {
            res.send(err);
        }else {
            res.json(results);
        }
    });
}

//get one or single
export const showClothingById = (req,res)=>{
    getClothingById(req.params.id,(err, results)=>{
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
};

//create
export const createClothing = (req,res)=>{
    const data=req.body;
    insertClothing(data,(err,results) =>{
        if(err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
};

//update
export const updateClothing = (req,res)=>{
    const data=req.body;
    const id=req.params.id;
    updateClothingById(data,id,(err,results)=>{
        if(err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
};

//delete
export const deleteClothing = (req,res)=>{
    const id=req.params.id;
    deleteClothingById(id, (err, results)=>{
        if(err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
};