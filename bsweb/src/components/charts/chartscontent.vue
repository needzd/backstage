<template>
    <div class="content">
        <contenttitle/>
        <chartsone/>
    </div>
</template>

<script>
    import contenttitle from "../contenttitle";
    import chartsone from "./chartsone";


    export default {
        components:{
           contenttitle,
           chartsone
           
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
