<template>
    <div class="content">
        <contenttitle/>
        <contentcontent/>
    </div>
</template>

<script>
    import contenttitle from "../contenttitle"
    import contentcontent from "./contentcontent"

    export default {
        components:{
            contenttitle,
            contentcontent
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
