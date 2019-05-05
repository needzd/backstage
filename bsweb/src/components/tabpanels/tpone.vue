<template>
    <div class="row">
        <div class="padd col-xs-12 col-sm-12 col-md-4">
            <div class="topbox boxcolor1">
                <h3>Card Title</h3>
                <p> 
                    I am a very simple card. I am good at 
                    containing small bits of information. 
                    I am convenient because I require little 
                    markup to use effectively.
                </p>
            </div>
             <h5 class="stit stitcolor1"><a href="#">THIS IS A LINK</a><a href="#">THIS IS A LINK</a></h5>
        </div>
        <div class="padd col-xs-12 col-sm-12 col-md-4">
            <div class="topbox boxcolor2">
                <h3>Card Title</h3>
                <p> 
                    I am a very simple card. I am good at 
                    containing small bits of information. 
                    I am convenient because I require little 
                    markup to use effectively.
                </p>
            </div>
            <h5 class="stit stitcolor2"><a href="#">THIS IS A LINK</a><a href="#">THIS IS A LINK</a></h5>
        </div>
        <div class="padd col-xs-12 col-sm-12 col-md-4">
            <div class="topbox boxcolor3">
                <h3>Card Title</h3>
                <p> 
                    I am a very simple card. I am good at 
                    containing small bits of information. 
                    I am convenient because I require little 
                    markup to use effectively.
                </p>
            </div>
            <h5 class="stit stitcolor3"><a href="#">THIS IS A LINK</a><a href="#">THIS IS A LINK</a></h5>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
.padd{
    padding-top: 20px;
}
.topbox{
    padding: 20px;
}
.boxcolor1{
    color: #fff;
    background: #03A9F4;
}
.boxcolor2{
    color: #000;
    background: #fff;
}
.boxcolor3{
    color: #fff;
    background: #546e7a;
}
.topbox h3{
    line-height: 48px;
}
.stitcolor1{
    background: #03A9F4;
}
.stitcolor2{
    background: #fff;
}
.stitcolor3{
    background: #546e7a;
}
.stit{
    border-top: 1px solid rgba(160,160,160,0.2);
    padding: 20px;
    font-size: 12px;
    font-weight: 600;
    color: #e0e0e0;
}
.stit a{
    color: #e0e0e0;
    margin-right: 10px;
}
.stit a:hover{
    text-decoration: underline;
}
</style>
