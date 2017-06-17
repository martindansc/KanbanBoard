<template>
    <div>
        <button @click="select('master')">Play as master</button>
        <button @click="select('minion')">Play as minion</button>

        <player-list header="Masters" :players="masters"></player-list>
        <player-list header="Minions" :players="minions"></player-list>

    </div>
</template>

<script>

import playerList from '../components/player_list.vue'

export default {
    data() {
        return {
            masters : [],
            minions : []
        }
    },
    components : {
        playerList
    },
    methods : {
        select(role) {
            this.$socket.emit('setRole', {msg : role});
        }
    },
    sockets : {
        players : function(obj) {
            console.log("recived event");
            console.log(obj);
        }
    }
}

</script>

<style scoped>


</style>