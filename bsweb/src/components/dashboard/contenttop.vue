<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="boxlist">
                    <div class="listleft ">
                        <span class="glyphicon glyphicon-sort"></span>
                    </div>
                    <div class="listright">
                        <h3>84,198</h3>
                        <strong>REVENUE</strong>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="boxlist bgcolor1">
                    <div class="listleft ">
                        <span class="glyphicon glyphicon-sort"></span>
                    </div>
                    <div class="listright">
                        <h3>84,198</h3>
                        <strong>REVENUE</strong>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3">
               <div class="boxlist bgcolor2">
                    <div class="listleft ">
                        <span class="glyphicon glyphicon-sort"></span>
                    </div>
                    <div class="listright">
                        <h3>84,198</h3>
                        <strong>REVENUE</strong>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="boxlist bgcolor3">
                    <div class="listleft ">
                        <span class="glyphicon glyphicon-sort"></span>
                    </div>
                    <div class="listright">
                        <h3>84,198</h3>
                        <strong>REVENUE</strong>
                    </div>
                </div>
            </div>
        </div>        
    </div>
</template>

<script>

</script>

<style scoped>
.container-fluid{
    padding: 10px 30px;
}
.boxlist{
    background: #F44336;
    margin: .5rem 0 1rem 0;
    border-radius: 3px;
    display: flex;
}
.listleft{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 94px;
    text-align: center;
    color: #fff;
}
.glyphicon{
    font-size: 30px;
    opacity: .4;
}
.listright{
    flex: 1;
    display: flex;
    flex-direction: column;
    color: #fff;
    text-align: center;
    vertical-align: middle;
    border-left: 1px solid rgba(255,255,255,0.2);
}
.listright h3{
    padding: 20px;
    display: block;
    border-bottom: 1px solid rgba(255,255,255,0.2);
}
.listright strong{
    display: block;
    padding: 20px;
    font-weight: 700;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.65)
} 
.bgcolor1{
    background: #ff9800;
}
.bgcolor2{
    background: #2196F3;
}
.bgcolor3{
    background: #4CAF50;
}

@media (max-width: 768px) { 
}
</style>
