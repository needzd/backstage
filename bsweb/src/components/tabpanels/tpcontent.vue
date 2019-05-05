<template>
    <div class="content">
        <contenttitle/>
        <tpbig/>
    </div>
</template>

<script>
    import contenttitle from "../contenttitle";
    import tpbig from "./tpbig";


    export default {
        components:{
           contenttitle,
           tpbig
           
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
