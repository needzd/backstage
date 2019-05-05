<template>
    <div class="title">
        <h1>Dashboard</h1>
        <ol class="sm-title">
            <li><a href="#">Home</a>/</li>
            <li><a href="#">Dashboard</a>/</li>
            <li><a href="#">Data</a></li>
        </ol>
    </div>

</template>

<script>
    // new vur({
    //     data:{
    //         ss:home
    //     }
    // })
    // export default{

    // }
</script>

<style scoped>
.title h1{
    padding: 32px 22px 10px 28px;
    color: #323232;
    font-size: 36px;
}
.sm-title{
    overflow: hidden;
    padding: 10px 10px 10px 20px;
}
.sm-title li{     
    font-size: 14px;
    line-height: 23px;
    float: left;
}
.sm-title a{
    color: #f44336;
    text-decoration: none;
    padding: 0 10px;
}
.sm-title li:last-child a{
    color: #323232;
}
</style>
