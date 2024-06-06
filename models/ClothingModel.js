import db from "../config/database.js";

//get all
export const getClothing=(result)=>{
    db.query("SELECT * FROM clothing", (err, results)=>{
        if(err){
            console.log(err);
            result(err,null);
        }else{
            result(null,results)
        }
    });
};

//get single clothing
export const getClothingById=(id,result)=>{
    db.query("SELECT * FROM clothing WHERE clothing_id = ?",
        [id],(err, results)=>{
            if(err){
                console.log(err);
                result(err, null);
            }else {
                result(null, results[0]);
            }
        }
    );
};

//insert
export const insertClothing = (data,result)=>{
    db.query("INSERT INTO clothing SET?", [data], (err,results)=>{
        if(err){
            console.log(err);
            result(err,null);
        }else{
            result(null, results);
        }
    });
};

//update
export const updateClothingById = (data, id, result)=>{
    db.query("UPDATE clothing SET clothing_name = ?, clothing_price = ? WHERE clothing_id = ?",
        [data.clothing_name, data.clothing_price, id],
        (err, results) => {
            if(err){
                console.log(err);
                result(err, null);
            }else {
                result(null, results);
            }
        }
    );
};

//delete
export const deleteClothingById = (id, result)=>{
    db.query("DELETE FROM clothing WHERE clothing_id = ?", [id], (err, results)=>{
        if(err) {
            console.log(err);
            result(err,null);
        }else {
            result(null, results);
        }
    });
};