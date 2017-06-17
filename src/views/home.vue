<template>
    <div>
        <button @click="createGameRoom(roomName)">Create game room</button>
        <input v-model="roomName" placeholder="New room name">
        
        <router-link to="/gameRoom">Join game room</router-link>

        <player-list header="Players online" :players="players"></player-list>
        <option-panels></option-panels>

    </div>
</template>

<script>

import playerList from '../components/player_list.vue'

export default {
    data() {
        return {
            roomName : "",
            players : []
        }
    },
    components : {
        playerList
    },
    methods: {
        createGameRoom(roomName) {
            this.$socket.emit('createGameRoom', {msg : roomName});
            this.$router.push('gameRoom');
        }
    }
}

</script>

<style scoped>


</style>