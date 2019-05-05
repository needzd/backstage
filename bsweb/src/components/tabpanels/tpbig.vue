<template>
    <div class="container-fluid">
        <tpone/>
        <tptwo/>
        <tpthree/>
    </div> 
</template>

<script>
    import tpone from './tpone';
    import tptwo from './tptwo';
    import tpthree from './tpthree';


    export default{
        components:{
            tpone,
            tptwo,
            tpthree
        }
    }
</script>

<style scoped>
.container-fluid{
    padding: 10px 30px;
}

</style>
