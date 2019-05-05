<template>
    <div class="container-fluid">
        <tablespageone/>
        <tablespagetwo/>
    </div> 
</template>

<script>
    import tablespageone from './tablespageone';
    import tablespagetwo from './tablespagetwo'

    export default{
        components:{
            tablespageone,
            tablespagetwo
        }
    }
</script>

<style scoped>
.container-fluid{
    padding: 10px 30px;
}

</style>
