<template>      
    <div class="container-fluid">
        <div class="row row1">
            <div class="col-xs-12 col-sm-12 col-md-6">
                <div class="alertbox alertbox_text">
                    Simple Progress Bars
                </div>
                <div class="alertbox">
                    <div class="progress">
                        <div class="progress-bar progress-bar-info progress-bar-striped" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 50%">
                            <span class="sr-only">50% Complete</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6">
                <div class="alertbox alertbox_text">
                    Progress Bars
                </div>
                <div class="alertbox">
                    <div class="progress">
                        <div class="progress-bar progress-bar-success" style="width: 35%">
                            <span class="sr-only">35% Complete (success)</span>
                        </div>
                        <div class="progress-bar progress-bar-warning progress-bar-striped" style="width: 20%">
                            <span class="sr-only">20% Complete (warning)</span>
                        </div>
                        <div class="progress-bar progress-bar-danger" style="width: 10%">
                            <span class="sr-only">10% Complete (danger)</span>
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
.container-fluid{
    padding: 10px 30px;
}
.alertbox{
    background: #fff;
    padding: 20px;
}
.alertbox_text{
    font-weight: 600;
}
</style>
