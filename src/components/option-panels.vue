<template>
        <div class="w3-row" v-for="item in items">
            <div class="w3-card-2" v-on:click="clicked(item)" style="width:50%">
                <img src="img_avatar3.png" style="width:100%">
                <div class="w3-container">
                    <p>{{ item.text }}</p>
                </div>
            </div>
        </div>
        </template> 
</template>

<script>

export default {
    props : ["items"],
    methods: {
        clicked: function (item) {
           this.$emit('clicked', item);
        }
    }
}

</script>

<style scoped>


</style>