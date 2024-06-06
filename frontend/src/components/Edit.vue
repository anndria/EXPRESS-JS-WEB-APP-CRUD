<template>
    <div class="container">
        <div class="columns is-centered">
            <div class="column is-half">
                <div class="field mt-4">
                    <label class="label has-text-black">Clothing Name</label>
                </div>
                <div class="control">
                    <input type="text" class="input" placeholder="Clothing Name" v-model="clothing_name">
                </div>
                <div class="field mt-4">
                    <label class="label has-text-black">Clothing Price</label>
                </div>
                <div class="control">
                    <input type="text" class="input" placeholder="Price" v-model="clothing_price">
                </div>
                <div class="buttons mt-3">
                    <button class="button is-success" @click="updateClothing">
                        Save
                    </button>
                    <button class="button is-danger" @click="$router.back()">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default{
    data(){
        return {
            clothing_name: "",
            clothing_price: ""
        }
    },
    created: function(){
        this.getClothingById();
    },
    methods: {
        async getClothingById(){
            try{
                console.log(`$this.$route.params.id`)
                const response = await axios.get(`http://localhost:5000/clothing/${this.$route.params.id}`);
                this.clothing_name = response.data.clothing_name;
                this.clothing_price = response.data.clothing_price;
            }catch (err){
                console.log(err);
            }
        },
        //update
        async updateClothing(){
            try{
                await axios.put(`http://localhost:5000/clothing/${this.$route.params.id}`,{
                    clothing_name: this.clothing_name,
                    clothing_price: this.clothing_price
                })
                this.$router.push("/")
            }catch(err){
                console.log(err);
            }
        }
    }
}
</script>

<style></style>