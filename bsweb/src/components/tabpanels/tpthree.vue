<template>
    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-6">
            <div class="topbox">
                <h5>Basic Tabs</h5>
                <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                    <div class="panel panel-default">
                        <div class="panel-heading" role="tab" id="headingOne">
                        <h4 class="panel-title">
                            <a class="titlebox" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <span class="glyphicon glyphicon-asterisk" aria-hidden="true"></span>
                            First
                            </a>
                        </h4>
                        </div>
                        <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                        <div class="panel-body">
                            richardson ad squid. 3 wolf moon officia aute, 
                            non cupidatat skateboard dolor brunch. Food truck
                            quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                        </div>
                        </div>
                    </div>
                    <div class="panel panel-default">
                        <div class="panel-heading" role="tab" id="headingTwo">
                        <h4 class="panel-title">
                            <a class="collapsed titlebox" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <span class="glyphicon glyphicon-magnet" aria-hidden="true"></span>
                            Group
                            </a>
                        </h4>
                        </div>
                        <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                        <div class="panel-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3 
                            wolf moon officia aute, non cupidatat skateboard 
                            dolor brunch. Food truck quinoa 
                        </div>
                        </div>
                    </div>
                    <div class="panel panel-default">
                        <div class="panel-heading" role="tab" id="headingThree">
                        <h4 class="panel-title">
                            <a class="collapsed titlebox" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
                            Item
                            </a>
                        </h4>
                        </div>
                        <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                        <div class="panel-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3 
                            wolf moon officia aute, non cupidatat skateboard 
                            dolor brunch. Food truck quinoa nesciunt laborum 
                            eiusmod. Brunch 3 wolf moon tempor, sunt 
                        </div>
                        </div>
                    </div>
                </div>
            </div>   
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6">
            <div class="topbox">
                <h5>Tabs</h5>
                <div class="nav-tabs-box">
                    <!-- Nav tabs -->
                    <ul class="nav nav-tabs" role="tablist">
                        <li role="presentation"  class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Home</a></li>
                        <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Profile</a></li>
                        <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">Messages</a></li>
                        <li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">Settings</a></li>
                    </ul>
                    <!-- Tab panes -->
                    <div class="tab-content">
                        <div role="tabpanel" class="tab-pane active" id="home">
                            sit amet, consectetur adipisicing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna 
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
                            aute irure dolor in reprehenderit in voluptate velit esse cillum 
                            dolore eu fugiat nulla pariatur.
                        </div>
                        <div role="tabpanel" class="tab-pane" id="profile">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna 
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
                            aute irure dolor in reprehenderit in voluptate velit esse cillum 
                            dolore eu fugiat nulla pariatur.
                        </div>
                        <div role="tabpanel" class="tab-pane" id="messages">
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
                            aute irure dolor in reprehenderit in voluptate velit esse cillum 
                            dolore eu fugiat nulla pariatur.
                        </div>
                        <div role="tabpanel" class="tab-pane" id="settings">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna 
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
                            aute irure dolor in reprehenderit in voluptate velit esse cillum 
                            dolore eu fugiat nulla pariatur.
                        </div>
                    </div>
                </div>
            </div>   
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
.topbox{
    margin-top: 30px;
    padding-bottom: 10px;
    background: #fff;
}
.topbox h5{
    padding:20px;
    font-weight: 600;
}

.panel-group{
    padding: 20px;
}
.titlebox{
    font-size: 14px;
    text-decoration: none;
}
.panel-default > .panel-heading{
    background: none;
    padding: 15px; 
}
.panel-group .panel + .panel {
    margin-top: 0;
}
.panel{
    border-bottom:0;
    border-radius: 0; 
}
.panel-group{
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
    padding: 0;
    margin: 20px;
}
.nav-tabs-box{
    padding: 25px;
}
.tab-content{
    padding: 20px 0;
    line-height: 24px;
}
.nav-tabs {
    border-bottom: 0;
}
.nav-tabs > li {
    background: #eaeaea;
    line-height: 48px;
}
.nav-tabs > li > a {
    border: 0;
    border-radius: 0;
    color: #f44336;
    margin-right: 0;
    padding: 15px 20px;
}
.nav-tabs > li > a:hover{
    color: #fff;
    background: #f44336;
    text-decoration: underline;
}
.nav > li > a:focus {
    background: #f44336;
    border: 0;
    color: #fff;
    text-decoration: underline;
}
.nav-tabs > li.active > a{
    background: #f44336;
    border: 0;
    color: #fff;
}
</style>
