<template>
    <div class="navbox">
        <ul class="nav-box nav nav-pills nav-stacked">
            <li role="presentation"><router-link :to='{name:"dashcontent"}'><span class="glyphicon glyphicon-cloud"></span>Dashboard</router-link></li>
            <li role="presentation"><router-link :to='{name:"elementcontent"}'><span class="glyphicon glyphicon-magnet"></span>UI Elements</router-link></li>
            <li role="presentation"><router-link :to='{name:"chartscontent"}'><span class="glyphicon glyphicon-gift"></span>Charts</router-link></li>
            <li role="presentation"><router-link :to='{name:"tpcontent"}'><span class="glyphicon glyphicon-comment"></span>Tabs & Panels</router-link></li>
            <li role="presentation"><router-link :to='{name:"tablespagecontent"}'><span class="glyphicon glyphicon-bullhorn"></span>Profile</router-link></li>
            <li role="presentation"><a href="#"><span class="glyphicon glyphicon-briefcase"></span>Messages</a></li>
            <li role="presentation"><a href="#"><span class="glyphicon glyphicon-paperclip"></span>Home<span class="glyphicon1 glyphicon glyphicon-menu-left"></span></a></li>
            <li role="presentation"><a href="#"><span class="glyphicon glyphicon-cutlery"></span>Profile</a></li>
        </ul>    
    </div>
</template>

<script>
    
</script>

<style scoped>
.navbox{
    position: fixed;
    top: 60px;
    left: 0;
    width: 260px;
    height: 100%;
    padding-top: 20px;
    background: #1F2837;
    transition: all .3s;
}
.nav li{
    border-bottom: 1px solid rgba(107, 108, 109, 0.08);
}
.nav li a{
    display: block;
    padding: 13px;
    color: rgba(255, 255, 255, 0.39);
    font-size: 14px;
}
.nav > li > a:hover{
    background: none;
}
.nav > li > a:focus{
    color: #fff;
    background: none;
}
.glyphicon{
    margin: 0 8px;
    vertical-align: middle;
}
.nav > li >a:focus .glyphicon{
    color:#f44336;
    background: none;
}

@media (max-width: 768px) { 
    .navbox{
        height: auto;
        padding-top: 0;
        top: 117px;
        z-index: 10;
    }
} 
</style>
