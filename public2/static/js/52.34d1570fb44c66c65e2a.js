webpackJsonp([52],{oWWG:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=["男","女"],i=[{label:"姓名",prop:"name",minWidth:"35%",props:{}},{label:"性别",prop:"sex",minWidth:"10%",formatter:function(e,a,n){return t[e.sex]}},{label:"住址",prop:"address",minWidth:"35%",newjump:function(e,a,n){return"/syshomePage/home"}},{label:"手机号",render:function(e,a){return[e("i",{class:"el-icon-phone-outline",style:"fontSize: 16px; color: red"}),e("span",a.row.mobileNum)]},minWidth:"20%"}],o=function(e){return[{label:"编辑",isShow:function(e){return 2!==e.sex},disabled:function(e){return 2===e.disabled},method:function(a){e.handleNewJump(a)}}]},r=function(e){for(var a=[],n=1;n<=e;n++)a.push(n);return a}(12),s={data:function(){return{columns:i,operates:o,dataSource:[],dataTotal:0,options:{index:!0,labelIndex:"序号",props:{width:120}},paginationCfg:{currentPage:1,pageSize:10,layout:"total, sizes, prev, pager, next, jumper",pageSizes:[10,20,30,40]},data:[]}},mounted:function(){this.data=r.map(function(e,a){return{key:a,name:"胡彦斌"+e,age:32,sex:Math.random()<.5?0:1,address:"西湖区湖底公园1号"}}),this.dataTotal=this.data.length,this.queryTableData()},methods:{queryTableData:function(){var e=this.data.slice((this.paginationCfg.currentPage-1)*this.paginationCfg.pageSize,this.paginationCfg.currentPage*this.paginationCfg.pageSize);this.$set(this,"dataSource",e)},handleNewJump:function(e){console.log(e)},handleChangePage:function(e){console.log("当前页: "+e),this.paginationCfg.currentPage=e,this.queryTableData()},handleChangeSize:function(e){console.log("每页 "+e+" 条"),this.paginationCfg.currentPage=1,this.paginationCfg.pageSize=e,this.queryTableData()}}},l={render:function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",[n("BMainTopComponent"),e._v(" "),n("div",[n("span",[e._v("本地测试引入表格组件库开发")]),e._v(" "),n("br"),e._v(" "),n("TableList",{attrs:{options:e.options,columns:e.columns,dataSource:e.dataSource,operates:e.operates(this),dataTotal:e.dataTotal,pagination:e.paginationCfg},on:{handleChangePage:e.handleChangePage,handleChangeSize:e.handleChangeSize}})],1)],1)},staticRenderFns:[]},u=n("VU/8")(s,l,!1,null,null,null);a.default=u.exports}});
//# sourceMappingURL=52.34d1570fb44c66c65e2a.js.map