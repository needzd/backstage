<template>      
    <div class="container-fluid">
        <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12">
                    <div class="alertbox">
                        <div class="alert alert-success" role="alert">
                        Well done! You successfully read this important alert message.
                    </div>
                    <div class="alert alert-info" role="alert">
                        Heads up! This alert needs your attention, but it's not super important.
                    </div>
                    <div class="alert alert-warning" role="alert">
                        Warning! Better check yourself, you're not looking too good.
                    </div>
                    <div class="alert alert-danger" role="alert">
                        Oh snap! Change a few things up and try submitting again.
                    </div>    
                    </div>
                    <div class="alertbox alertbox_text">
                        THIS IS A LINK
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
    border-top: 1px solid rgba(160,160,160,0.2);
}
</style>
