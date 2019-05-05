import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import dashcontent from '@/components/dashboard/dashcontent'
import elementcontent from '@/components/element/elementcontent'
import chartscontent from '@/components/charts/chartscontent'
import tpcontent from '@/components/tabpanels/tpcontent'
import tablespagecontent from '@/components/tablespage/tablespagecontent'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children:[
        {path: '/', redirect:{name:"dashcontent"}},
        {path: 'dashcontent',name:'dashcontent',component: dashcontent},
        {path: 'elementcontent',name:'elementcontent',component: elementcontent},
        {path: 'chartscontent',name:'chartscontent',component: chartscontent},
        {path: 'tpcontent',name:'tpcontent',component: tpcontent},
        {path: 'tablespagecontent',name:'tablespagecontent',component: tablespagecontent}
      ]
    }
  ]
})


// export default {
//   name:"index",
//   components:{
//     banner,navTop,desigin,introduce,foot,services,show,logomap,footnav
//   },
//   data() {
//     return {
//       boxSmall:false
//     }
//   },
//   mounted() {
//     this.getWidth();
//     myAddEventListener(window,'resize',this.getWidth);

//   },
//   methods:{
//     getWidth:function(){
//       if(document.documentElement.clientWidth<=768){
//         this.boxSmall=true
//       }
//       if(document.documentElement.clientWidth>768){
//         this.boxSmall=false
//       }
//     }
//   }
