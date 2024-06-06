<template>
    <div>
        <router-link to="/create" class="button is-success mt-5 is-pulled-right mb-5">
            Add
        </router-link>
        <table class="table is-stripped is-bordered mt-2 is-fullwidth">
            <thead>
                <tr>
                    <th class="has-text-black">Clothing Name</th>
                    <th class="has-text-black">Price</th>
                    <th class="has-text-black has-text-centered">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items":key="item.clothing_id">
                    <td class="has-text-black">
                        {{ item.clothing_name }}
                    </td>
                    <td class="has-text-black">
                        {{ item.clothing_price }}
                    </td>
                    <td class="has-text-centered">
                        <router-link :to="{name: 'Edit', params: {id: item.clothing_id}}"
                        class="button is-success is-small">Edit</router-link>
                        <a class="button is-danger is-small ml-3" @click="deleteClothing(item.clothing_id, item.clothing_name, item.clothing_price)">
                            Delete
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return{
            items: [],
        };
    },
    created() {
        this.getClothing();
    },
    methods:{
        //get all clothings
        async getClothing(){
            try{
                const response = await axios.get("http://localhost:5000/clothing");
                this.items=response.data
                console.log(this.items);
            }catch(err) {
                console.log(err);
            }
        },
        async deleteClothing(id, clothingName, clothingPrice){
            try{
                if(window.confirm(`Are you sure you want to delete ${clothingName + " " + clothingPrice}`)){
                    const response = await axios.delete(`http://localhost:5000/clothing/${id}`);
                    if (response.status === 200) {
                        this.getClothing();
                        alert("Deleted Successfully");
                    }
                }
            }catch(err){
                console.log(err);
            }
        }
    },
};
</script>

<style>

</style>