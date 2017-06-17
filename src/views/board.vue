<template>
    <div>
        This is the game grid
        <table>
            <tr v-for="card_row in board">
                <td v-for="card in card_row" v-bind:style="{ backgroundColor: card.color }">
                    {{ card.name }}
                </td>
            </tr>
        </table>
    </div>
</template>

<script>

export default {
    data() {
        return {
            board : [
                    [
                        {name : "Test", color : "red"},
                        {name : "Test", color : "blue"}
                    ],
                    [
                        {name : "Test", color : "green"},
                        {name : "Test", color : "white"}
                    ]
                ]
        }
    }
}

</script>

<style scoped>


</style>