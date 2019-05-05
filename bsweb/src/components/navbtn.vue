<template>
   <div class="navrightbox">
        <div class="navrightbox">
            <div class="btn-group">
                <button type="button" class="btn-xg btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span class="glyphicon glyphicon-envelope" aria-hidden="true"></span><span class="caret"></span>
                </button>
                <ul class="dropdown-menu aaa">
                    <li class="droup-list">
                        <div><strong class="st-text">John Doe</strong>
                        <em class="em-text">Today</em></div>
                        <div>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</div>
                    </li>
                    <li role="separator" class="divider"></li>
                    <li class="droup-list">
                        <div><strong class="st-text">John Doe</strong>
                        <em class="em-text">Today</em></div>
                        <div>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</div>
                    </li>
                    <li role="separator" class="divider"></li> 
                    <li class="droup-list">
                        <div><strong class="st-text">John Doe</strong>
                        <em class="em-text">Today</em></div>
                        <div>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</div>
                    </li>
                    <li role="separator" class="divider"></li> 
                </ul>
            </div>
            <div class="btn-group">
                <button type="button" class="btn-xg btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span class="glyphicon glyphicon-tasks" aria-hidden="true"></span><span class="caret"></span>
                </button>
                <ul class="dropdown-menu aaa">
                    <li class="droup-list">
                        <div><strong class="st-text">John Doe</strong>
                        <em class="em-text">Today</em></div>
                        <div>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</div>
                    </li>
                    <li role="separator" class="divider"></li>
                    <li class="droup-list">
                        <div><strong class="st-text">John Doe</strong>
                        <em class="em-text">Today</em></div>
                        <div>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</div>
                    </li>
                    <li role="separator" class="divider"></li> 
                    <li class="droup-list">
                        <div><strong class="st-text">John Doe</strong>
                        <em class="em-text">Today</em></div>
                        <div>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</div>
                    </li>
                    <li role="separator" class="divider"></li> 
                </ul>
            </div>
            <div class="btn-group">
                <button type="button" class="btn-xg btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span class="glyphicon glyphicon-bell" aria-hidden="true"></span><span class="caret"></span>
                </button>
                <ul class="dropdown-menu aaa">
                    <li class="droup-list">
                        <div><strong class="st-text">John Doe</strong>
                        <em class="em-text">Today</em></div>
                        <div>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</div>
                    </li>
                    <li role="separator" class="divider"></li>
                    <li class="droup-list">
                        <div><strong class="st-text">John Doe</strong>
                        <em class="em-text">Today</em></div>
                        <div>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</div>
                    </li>
                    <li role="separator" class="divider"></li> 
                    <li class="droup-list">
                        <div><strong class="st-text">John Doe</strong>
                        <em class="em-text">Today</em></div>
                        <div>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</div>
                    </li>
                    <li role="separator" class="divider"></li> 
                </ul>
            </div>
            <div class="btn-group">
                <button type="button" class="btn-xg btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span class="glyphicon glyphicon-user" aria-hidden="true"></span>John Doe<span class="caret"></span>
                </button>
                <ul class="dropdown-menu aaa lastaaa">
                    <li><a href="#"><span class="glyphicon glyphicon-user" aria-hidden="true"></span>Action</a></li>
                    <li><a href="#"><span class="glyphicon glyphicon-wrench"></span>Another</a></li>
                    <li><a href="#"><span class="glyphicon glyphicon-log-in"></span>Something</a></li>
                </ul>
            </div>
        </div> 
    </div> 
</template>

<script>
    
</script>

<style scoped>
/* navrightbox */
.navrightbox{
    float: right;
    padding-right: 5px;
}
 .btn-xg{
    padding: 17px 17px;
    font-size: 14px;
}
.btn-default{
    border-color: #fff;
}
.glyphicon{
    vertical-align: middle;
    margin-right:5px;
}
.caret{
    margin-left:5px;
}
.btn-group.open .dropdown-toggle {
    box-shadow: none;
}
.btn-default:focus, .open > .dropdown-toggle.btn-default{
    border-color:#fff;
}
.droup-list{
    padding: 20px 15px 5px; 
}
.st-text{
    font-weight: 700;
    font-size: 14px;
}
.em-text{
    color: #213452;
    float: right;
}
.aaa{
    left:unset;
    right: 0!important;
    min-width: 255px;
    border: 0;
    z-index: 99;
}
.lastaaa{
    min-width: 73px;
    color: #233342;
    font-size: 13px;  
}
.lastaaa a{
    padding: 15px 30px;
}
@media (max-width: 768px) {
    .navrightbox{
    float: none;
}
}
</style>
