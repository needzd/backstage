<template>
    <div class="container-fluid guding">
        <div class="navbox">
            <div class="navleftbox">
                <button @click="$emit('kk')" class="nav-togger">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <a href="javascript:;" class="nav-left">
                    <img src="../../static/images/navlogo.png" />
                    <span class="nav_title">target</span>
                </a>
                <div @click="$emit('mm')" class="nav-more">
                    <img src="../../static/images/more.png" />
                </div>
            </div>
            <navbtn/>
        </div>   
    </div>
</template>

<script>
    import navbtn from "./navbtn"
    export default {
        components:{
            navbtn
        },
        data(){
            return{
                
            }
        }
    }

</script>

<style scoped>
.guding{
    position: fixed;
    width: 100%;
    z-index: 99;
}
.container-fluid{
    padding: 0;
    background: #fff;
    border: 0px solid #1f2837;
    box-sizing: border-box;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 2px 1px -1px rgba(0,0,0,.12);
}
/* navleftbox */
.navleftbox{
    float: left;
    background: transparent;
}
.nav-togger{
    border:1px solid #fff;
    border-radius: 5px;
    padding: 9px 10px;
    background: #f44336;
    cursor: pointer;
    position: relative;
    float: right;
    margin: 10px 15px 8px 0; 
    display: none;
    outline: none;
}
.nav-togger span{
    width: 22px;
    height: 2px;
    background: #fff;
    display: block;
}
.nav-togger span:nth-child(2){
    margin: 5px 0;
}
.nav-left{
    background: #f44336;
    padding: 15px 15px; 
    width: 260px;
    height: 60px;
    display: block;
    float: left;
}
.nav-left:hover{
    text-decoration: none;
}
.nav_title{
    font-size: 24px;
    margin-right: 20%;
    color: #fff;
    font-weight: 700;
    vertical-align: middle;
}
.nav-left img{
    width: 31px;
    height: 31px;
    margin-right: 6px;
}
.nav-more{
    display: inline-block;
    width: 34px;
    height: 34px;
    text-align: center;
    line-height: 34px;
    cursor: pointer;
    margin: 14px 0 0 13px;
}
.nav-more img{
    display: inline-block;
    width: 22px;
    height: 11px;
}

@media (max-width: 768px) { 
    .navleftbox{
        float: none;
        background: #f44336; 
    }
    .nav-left{
        float: none;
    }
    .nav-togger{
        display:block;
    }
    .nav-more{
        display: none;
    } 
} 
</style>
