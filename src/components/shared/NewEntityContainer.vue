<template>
    <div class="new-entity-container">
            <p>{{message}}</p>
            <router-link :to="buttonPath" class="btn btn-primary btn-md mb-3">{{buttonMessage}}</router-link>
        </div>
</template>
<script>
export default {
  name: 'NewEntityContainer',
  props: ['message', 'buttonMessage', "buttonPath"]
}
</script>
<style lang="scss">
    .new-entity-container > p {
        margin-right: 2rem;
    }
    .new-entity-container{
        display: flex;
        align-content: center;
        align-items: center;
        flex-direction: row;
        justify-content: center;
    }
    @media(max-width: 792px){
        .new-entity-container{
            display: flex;
            flex-direction: column;
        }
        .new-entity-container > p{
            margin-bottom: 1rem;
        }
    }
</style>
