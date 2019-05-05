<template>
    <div class="content">
        <contenttitle/>
        <tablespagebig/>
    </div>
</template>

<script>
    import contenttitle from "../contenttitle";
    import tablespagebig from "./tablespagebig";


    export default {
        components:{
           contenttitle,
           tablespagebig
           
        }
    }
</script>

<style scoped>
.content{
    margin-left:260px;
    background: #e0e8f5;
    padding-top: 60px;
}
@media (max-width: 768px) { 
    .content{
        padding-top: 120px;
        margin-left:0;
    }
}
</style>
