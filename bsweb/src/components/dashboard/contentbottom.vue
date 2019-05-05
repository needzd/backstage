<template>
    <div class="row row1">
        <div class="col-xs-12 col-sm-12 col-md-4">
            <div class="list-group">
                <p class="list-group-item active">TASKS PANEL</p>
                <a href="#" class="list-group-item">Dapibus ac facilisis in<span class="riglist color1">4 red</span></a>
                <a href="#" class="list-group-item">Morbi leo risus<span class="riglist color2">4 red</span></a>
                <a href="#" class="list-group-item">Porta ac consectetur <span class="riglist color3">4 red</span></a>
                <a href="#" class="list-group-item">Dapibus ac facilisis in<span class="riglist color1">4 red</span></a>
                <a href="#" class="list-group-item">Morbi leo risus<span class="riglist color2">4 red</span></a>
                <a href="#" class="list-group-item">Porta ac consectetur <span class="riglist color3">4 red</span></a>
                <a href="#" class="list-group-item">Vestibulum at eros<span class="riglist color4">4 red</span></a>
            </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-8">
            <ul class="list-group">
                <li class="list-group-item">
                    Cras justo odio                   
                </li>
                <li class="list-group-item item">
                    <span class="glyphicon2"><span class="fff glyphicon glyphicon-home" aria-hidden="true"></span></span>
                    <span class="textbox">
                        <em>Cras justo odio</em><br />
                        <p>First Line <br />Second Line</p>
                    </span>
                    <a href="#"><span class="glyphicon1 glyphicon glyphicon-star" aria-hidden="true"></span></a>     
                </li>
                <li class="list-group-item item">
                    <span class="glyphicon2"><span class="fff glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span></span>
                    <span class="textbox">
                        <em>Cras justo odio</em><br />
                        <p>First Line <br />Second Line</p>
                    </span>
                    <a href="#"><span class="glyphicon1 glyphicon glyphicon-star" aria-hidden="true"></span></a>     
                </li>
                <li class="list-group-item item">
                    <span class="glyphicon2"><span class="fff glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span></span>
                    <span class="textbox">
                        <em>Cras justo odio</em><br />
                        <p>First Line <br />Second Line</p>
                    </span>
                    <a href="#"><span class="glyphicon1 glyphicon glyphicon-star" aria-hidden="true"></span></a>     
                </li>
                <li class="list-group-item item">
                    <span class="glyphicon2"><span class="fff glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span></span>
                    <span class="textbox">
                        <em>Cras justo odio</em><br />
                        <p>First Line <br />Second Line</p>
                    </span>
                    <a href="#"><span class="glyphicon1 glyphicon glyphicon-star" aria-hidden="true"></span></a>     
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
.list-group-item.active{
    background: #fff;
    border-color: rgba(160,160,160,0.2);
    color: #555; 
}
.list-group-item{
    padding:16px 20px;
}
.item{
    padding-left: 72px;
    position: relative;
}
.list-group-item:first-child {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    padding: 20px;
    font-weight: 700;
}
.list-group-item:last-child {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}
.riglist{
    display: inline-block;
    padding: 4px 10px;
    line-height: 12px;
    float: right;
    font-weight: 300;
    font-size: 11px;
    color: #fff;
    background: #F44336;
    border-radius: 50px;
}
.color1{
    background: #F44336;
}
.color2{
    background: #2196F3;
}
.color3{
    background: #F09B22;;
}
.color4{
    background: #26a69a;
}
.glyphicon1{
    float: right;
    color: #26a69a;
    font-size: 20px;
}
.glyphicon2{
    font-size: 20px; 
    width: 42px;
    height: 42px;
    position: absolute;
    left: 15px;
    display: inline-block;
    vertical-align: middle;
    background: #26a69a;
    border-radius: 50px;
    text-align: center;
}
.fff{
    color: #fff;
    font-size: 18px;
    line-height: 42px;
    /* display: inline-block; */
}
em{
    font-style: normal;
    font-weight: 700;
}
.textbox p{
    display: inline-block;
}
.list-group-item a{
    float: right;
}
</style>
