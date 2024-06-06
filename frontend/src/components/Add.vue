<template>
    <div class="container">
        <div class="columns is-centered">
            <div class="column is-half">
                <div class="field mt-5">
                    <label class="label has-text-black">Name</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Name" v-model="clothingName">
                    </div>
                </div>
                <div class="field">
                    <label class="label has-text-black">Price</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Price" v-model="clothingPrice">
                    </div>
                </div>
                <div class="buttons mt-3 is-pulled-right">
                    <button class="button is-success" @click="saveClothing">Save</button>
                    <button class="button is-danger" @click="$router.back()">Cancel</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data(){
        return{
            clothingName:"",
            clothingPrice:"",
        }
    },
    methods: {
        //create
        async saveClothing(){
            if (!this.clothingName || !this.clothingPrice) {
                alert("Please fill in all fields");
                return;
            }
            try{
                await axios.post("http://localhost:5000/clothing",{
                    clothing_name: this.clothingName,
                    clothing_price: this.clothingPrice,
                });
                (this.clothingname = ""),(this.clothingPrice = "");
                this.$router.push("/");
            } catch(err) {
                console.log(err);
            }
        },
    }
};
</script>

<style>

</style>