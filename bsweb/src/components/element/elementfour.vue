<template>      
    <div class="container-fluid">
        <div class="row row1">
            <div class="col-xs-12 col-sm-12 col-md-7">
                <div class="alertbox alertbox_text">
                    Simple Progress Bars
                </div>
                <div class="alertbox ">
                    <button type="button" class="btn btn_hover btn-default btn-defaultleft btn-lg">
                        Star
                    </button>
                    <button type="button" class="btn btn_hover btn-default btn-defaultleft btn-lg">
                        <span class="glyphicon glyphicon-star" aria-hidden="true"></span> Star
                    </button>
                    <button type="button" class="btn btn_hover btn-default btn-defaultleft btn-lg">
                        <span class="glyphicon glyphicon-star" aria-hidden="true"></span> Star
                    </button>
                    <button type="button" class="btn btn_hover btn-default btn-defaultleft btn-lg">
                        <span class="glyphicon glyphicon-star" aria-hidden="true"></span> Star
                    </button>
                    <button type="button" class="btn btn_hover btn-default btn-defaultleft btn-lg">
                        <span class="glyphicon glyphicon-star" aria-hidden="true"></span> Star
                    </button>
                    <button type="button" class="btn btn_hover btn-default btn-defaultleft btn-lg">
                        <span class="glyphicon glyphicon-star" aria-hidden="true"></span> Star
                    </button>
                    <button type="button" class="btn btn_hover btn-default btn-defaultleft btn-lg">
                        <span class="glyphicon glyphicon-star" aria-hidden="true"></span> Star
                    </button>
                    <button type="button" class="btn btn_hover btn-default btn-defaultleft btn-lg">
                        <span class="glyphicon glyphicon-star" aria-hidden="true"></span> Star
                    </button>
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-5">
                <div class="alertbox alertbox_text">
                    Progress Bars
                </div>
                <div class="alertbox">
                    <div class="btn-group">
                        <button type="button" class="btn btn-default btn-default1 dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Action <span class="caret"></span>
                        </button>
                        <ul class="dropdown-menu">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li><a href="#">Separated link</a></li>
                        </ul>
                    </div>
                    <div class="btn-group">
                        <button type="button" class="btn btn-default btn-default2 dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Action <span class="caret"></span>
                        </button>
                        <ul class="dropdown-menu">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li><a href="#">Separated link</a></li>
                        </ul>
                    </div>
                     <div class="btn-group">
                        <button type="button" class="btn btn-default btn-default3 dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Action <span class="caret"></span>
                        </button>
                        <ul class="dropdown-menu">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li><a href="#">Separated link</a></li>
                        </ul>
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
    padding: 20px 30px;
}
.alertbox{
    background: #fff;
    padding: 20px;
}
.alertbox_text{
    font-weight: 600;
}
.btn-defaultleft{
    background-color: rgb(38, 166, 154);
    border:0;
    padding:6px 16px;
    margin-bottom: 5px;
    box-shadow: rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px, rgba(0, 0, 0, 0.2) 0px 3px 1px -2px;
}
.btn_hover:hover{
    color: rgb(51, 51, 51);
    background-color: rgb(43, 187, 173);
}
.btn-group{
    margin: 5px;
}
.btn-group .btn{
    float: left;
}
.btn-default{
    color: #fff;
}
.btn-default1{
    background-color: #337ab7;
    border-color: #2e6da4;
}
.btn-default2{
    background-color: #d9534f;
    border-color: #d43f3a;
}
.btn-default3{
    background-color: #ec971f;
    border-color: #d58512;
}
.open > .dropdown-toggle.btn-default{
    color: #fff;
}
.open > .dropdown-toggle.btn-default1 {
    background-color: #286090;
    border-color: #204d74;
}
.open > .dropdown-toggle.btn-default2 {
    background-color: #c9302c;
    border-color: #ac2925;
}
.open > .dropdown-toggle.btn-default3 {
    background-color: rgb(236, 151, 31);
    border-color: rgb(213, 133, 18);
}
    
</style>
