<template>
    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="topbox">
                <h5>Advanced Tables</h5>
                <div class="recordsbox">
                    <div class="records">
                        <div class="text col-xs-12 col-sm-12 col-md-6">
                            <select class="sele" name="" id="">
                                <option>20</option>
                                <option>50</option>
                                <option>100</option>
                            </select>
                            records per page
                        </div>
                        <div class="text col-xs-12 col-sm-12 col-md-6">
                            Search:<input class="line" type="search">
                        </div>
                    </div>
                    <div class="table-responsive">
                        <table class="table table-striped table-bordered table-hover">
                            <thead>
                                <tr class="table-bordered">
                                    <td class="table-bordered">Rendering engine</td>
                                    <td class="table-bordered">Browser</td>
                                    <td class="table-bordered">Platform(s)</td>
                                    <td class="table-bordered">Engine version</td>
                                    <td class="table-bordered">CSS grade</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="table-bordered">
                                    <td class="table-bordered">Gecko</td>
                                    <td class="table-bordered">Netscape Navigator 9</td>
                                    <td class="table-bordered">Win 95+ / Mac OS 8.6-9.2</td>
                                    <td class="center table-bordered">1.7</td>
                                    <td class="center table-bordered">A</td>
                                </tr>
                                <tr class="table-bordered">
                                    <td class="table-bordered">Gecko</td>
                                    <td class="table-bordered">Camino 1.5</td>
                                    <td class="table-bordered">Win 95+ / Mac OS 8.6-9.2</td>
                                    <td class="center table-bordered">1.7</td>
                                    <td class="center table-bordered">A</td>
                                </tr>
                                <tr class="table-bordered">
                                    <td class="table-bordered">Gecko</td>
                                    <td class="table-bordered">Netscape Navigator 9</td>
                                    <td class="table-bordered">Win 2k+ / OSX.3+</td>
                                    <td class="center table-bordered">1.7</td>
                                    <td class="center table-bordered">A</td>
                                </tr>
                                <tr class="table-bordered">
                                    <td class="table-bordered">Gecko</td>
                                    <td class="table-bordered">Netscape Navigator 9</td>
                                    <td class="table-bordered">Win 95+ / Mac OS 8.6-9.2</td>
                                    <td class="center table-bordered">1.7</td>
                                    <td class="center table-bordered">A</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p class="ptext">Showing 1 to 10 of 57 entries</p>
                    <nav aria-label="Page navigation" class="page">
                        <ul class="pagination">
                            <li class="disabled"><a href="#" aria-label="Previous"><span aria-hidden="true">Previous</span></a></li>
                            <li class="active"><a href="#">1 <span class="sr-only">(current)</span></a></li>
                            <li><a href="#">2 <span class="sr-only">(current)</span></a></li>
                            <li><a href="#">3 <span class="sr-only">(current)</span></a></li>
                            <li><a href="#">4 <span class="sr-only">(current)</span></a></li>
                            <li><a href="#">5 <span class="sr-only">(current)</span></a></li>
                            <li><a href="#" aria-label="Previous"><span aria-hidden="true">Next</span></a></li>
                        </ul>
                    </nav>
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
    background: #fff;
}
.recordsbox{
    padding-bottom: 20px;
}
.records{
    padding: 20px 5px;
    background: #fff;
    overflow: hidden;
    margin-bottom: 20px;
}
.topbox h5{
    padding: 20px;
    font-size: 14px;
    font-weight: 600;
    display: inline-block;
    width: 100%;
}
.sele{
    padding: 5px 10px;
    font-size: 12px;
    border-radius: 3px;
    color: #555;
    border-color: #ccc;
}
.text{
    color: #9e9e9e;
}
.line{
    border: none;
    outline: none;
    text-indent: 5px;
    border-bottom: 1px solid #9e9e9e;
}
input[type=search]:focus{
    border-bottom: 1px solid #ff5722;
    box-shadow: 0 1px 0 0 #ff5722;
}
.panel{
    margin: 0 20px;
}
.table-responsive{
    padding: 0 20px;
    font-size: 14px;
    color: #333;
}
.table-responsive thead{
    font-weight: 600;
}
.center{
    text-align: center;
}
.ptext{
    padding-left: 20px;
}
.page{
    overflow: hidden;
}
.pagination{
    padding-right: 20px;
    float: right;
}
</style>
