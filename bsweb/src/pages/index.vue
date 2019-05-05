<template>
    <div>
        <navtop  @kk="oo" @mm="uu" />
        <navleft v-show="show" :class="{ass:is}"/>
        <router-view :class="abc"/>
        <xuanting/>
    </div>
</template>

<script>
    import navtop from '@/components/navtop'
    import navleft from '@/components/navleft'
    import xuanting from '@/components/xuanting'
    export default {
        components:{
            navtop,
            navleft,
            xuanting
        },
        data(){
            return{
                show:true,
                is:false,
                abc:{
                    bss:false,
                    tr:true
                }
            }
        },
        methods:{
            oo:function(){
                // this.show=!this.show
                this.is = !this.is
                this.abc.bss = !this.abc.bss
            },
            uu:function(){
                // this.show=!this.show
                this.is = !this.is
                this.abc.bss = !this.abc.bss
            }
        }
    }
</script>

<style>
.ass{
    margin-left: -260px;
}
.bss{
    margin-left: 0px!important;
}
.tr{
    transition: all .3s;
}
</style>
