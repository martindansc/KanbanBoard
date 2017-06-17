<template>
    <div>
        {{ header }}
        <ul>
            <li v-for="player in players"> 
                {{player}}
            </li>
        </ul>  
    </div>
</template>

<script>

export default {
    props : ["header", "players"],
}

</script>

<style scoped>


</style>