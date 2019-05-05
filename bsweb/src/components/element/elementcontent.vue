<template>
    <div class="content">
        <contenttitle/>
        <elementone/>
        <elementtwo/>
        <elementthree/>
        <elementfour/>
        <elementfive/>
    </div>
</template>

<script>
    import contenttitle from "../contenttitle";
    import elementone from './elementone';
    import elementtwo from './elementtwo';
    import elementthree from './elementthree'
    import elementfour from './elementfour';
    import elementfive from './elementfive'


    export default {
        components:{
           contenttitle,
           elementone,
           elementtwo,
           elementthree,
           elementfour,
           elementfive
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
