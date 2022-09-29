webpackJsonp([34],{ZFXv:function(e,t){},eP91:function(e,t){},s1sQ:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("Dd8w"),s=a.n(n),l=a("fALy"),o=a("j9eq"),i=[{value:0,label:"离线"},{value:1,label:"停机"},{value:2,label:"风险"},{value:3,label:"故障"},{value:4,label:"运行"}],r=[{value:0,label:"待租赁"},{value:1,label:"租赁中",disabled:!0},{value:2,label:"维修"},{value:3,label:"施工"},{value:4,label:"检修"}],c=[{value:1,label:"运维"},{value:0,label:"代运维"}],u={GensetRunStatusEnum:i,GensetLeaseStatusEnum:r,GensetLeaseTypeEnum:c,leaseGensetColumns:function(e){return[{label:"设备名称",prop:"DisplayName",minWidth:"30%"},{label:"标识",prop:"CollectorToken",minWidth:"20%"},{label:"发动机型号",prop:"EngineModel",minWidth:"25%"},{label:"功率",prop:"RatedPower",minWidth:"15%",unit:"Kw"},{label:"运行时间",prop:"RunHourTotal",minWidth:"15%",unit:"h"},{label:"租赁类型",prop:"IsPlatform",minWidth:"15%",formatter:function(e,t,a){return c.find(function(t){return t.value==e.IsPlatform}).label}},{label:"租赁状态",prop:"Status",minWidth:"15%",formatter:function(e,t,a){return r.find(function(t){return t.value==e.Status}).label}},{label:"运行状态",prop:"RunStatus",minWidth:"15%",formatter:function(e,t,a){return i.find(function(t){return t.value==e.RunStatus}).label}},{label:"机组位置",prop:"InstallationSite",minWidth:"35%",render:function(e,t){return e("span",{class:"text-overflow-ellipsis MulLineHiding",attrs:{title:t.row.InstallationSite||""}},t.row.InstallationSite)}},{label:"租赁次数",prop:"FileDetail",minWidth:"15%",formatter:function(e,t,a){return e.FileDetail||0}}]},selectCrewColumns:function(e){return[{label:"设备名称",prop:"DisplayName",minWidth:"30%"},{label:"标识",prop:"CollectorToken",minWidth:"30%"},{label:"机组位置",prop:"InstallationSite",minWidth:"40%",render:function(e,t){return e("span",{class:"text-overflow-ellipsis MulLineHiding",attrs:{title:t.row.InstallationSite||""}},t.row.InstallationSite)}}]},selectedCrewColumns:function(e){return[{label:"设备名称",prop:"DisplayName",minWidth:"25%"},{label:"标识",prop:"CollectorToken",minWidth:"20%"},{label:"机组位置",prop:"InstallationSite",minWidth:"30%",render:function(e,t){return e("span",{class:"text-overflow-ellipsis MulLineHiding",attrs:{title:t.row.InstallationSite||""}},t.row.InstallationSite)}},{label:"租赁类型",prop:"IsPlatform",minWidth:"25%",render:function(t,a){return t("el-select",{props:{value:a.row.IsPlatform},on:{change:function(t){e.selectOptions(a.row,t)}}},c.map(function(e){return t("el-option",{props:{value:e.value,label:e.label}})}))}}]}},d=(a("PJh5"),{name:"AddCrewDialog",mixins:[l.a],components:{PositionCascader:o.a},props:{},data:function(){return{loading:!1,dialigVisible:!0,searchForm:{DisplayName:"",CollectorToken:"",InstallationSite:""},columns:u.selectCrewColumns(this),selectedColumns:u.selectedCrewColumns(this),dataSource:[],selectData:[],selectDataSource:[],options:{height:"100%",index:!0,labelIndex:"序号",props:{width:60}},paginationCfg:{currentPage:1,pageSize:10,layout:"total, sizes, prev, pager, next",pageSizes:[10,20,30,40],small:!0},dataTotalSelect:0,paginationCfgSelect:{currentPage:1,pageSize:10,layout:"total, sizes, prev, pager, next",pageSizes:[10,20,30,40],small:!0}}},mounted:function(){this.queryTableData()},methods:{queryTableData:function(){var e=this;this.loading=!0;var t={Page:this.paginationCfg.currentPage,PageSize:this.paginationCfg.pageSize},a=s()({DisplayMode:1,IsCanBind:!0},this.searchForm);this.$api.common.getCrewList(a,t).then(function(t){if(1===t.Code){e.dataTotal=t.Data.TotalItemCount;var a=t.Data.Data.map(function(e){return s()({},e,{IsPlatform:1})});console.log(a),e.$set(e,"dataSource",a)}e.loading=!1}).catch(function(){e.loading=!1})},reset:function(){this.$set(this,"searchForm",{DisplayName:"",CollectorToken:"",InstallationSite:""})},setSelectPageData:function(e){var t=this.selectData.slice((this.paginationCfgSelect.currentPage-1)*this.paginationCfgSelect.pageSize,this.paginationCfgSelect.currentPage*this.paginationCfgSelect.pageSize);this.$set(this,"selectDataSource",t),this.dataTotalSelect=this.selectData.length;var a=Math.ceil(this.dataTotalSelect/this.paginationCfgSelect.pageSize);e&&this.paginationCfgSelect.currentPage!==a&&(this.paginationCfgSelect.currentPage=a,this.setSelectPageData())},handleSelect:function(e){this.selectData.push(e),this.dataSource.splice(this.dataSource.indexOf(e),1,s()({},e,{isSelect:!0})),this.$set(this,"dataSource",this.dataSource),this.setSelectPageData(!0)},handleRemove:function(e){this.selectData.splice(this.selectData.indexOf(e),1),this.dataSource.splice(this.dataSource.findIndex(function(t){return t.GeneratorSetId==e.GeneratorSetId}),1,s()({},e,{isSelect:!1,IsPlatform:1})),this.setSelectPageData(!0)},selectOptions:function(e,t){console.log("selectOptions",e,t),e.IsPlatform=t},submitForm:function(){var e=this;console.log(this.selectData);var t={GensetInfoList:this.selectData.map(function(e){return{GeneratorSetId:e.ID,IsPlatform:!!e.IsPlatform}})};this.$api.equipment.AddGensetProjectGensetInfo(t).then(function(t){1===t.Code?e.$message({type:"success",message:"添加机组成功!"}):e.$message({type:"error",message:"添加机组失败，请重新提交!"}),e.$emit("closeDialog",{refresh:!0})})},close:function(){this.$emit("closeDialog")},positionChange:function(e){this.$set(this.searchForm,"InstallationSite",e.crewPosition)},handleChangePageSelect:function(e){this.paginationCfgSelect.currentPage=e,this.setSelectPageData()},handleChangeSizeSelect:function(e){this.paginationCfgSelect.currentPage=1,this.paginationCfgSelect.pageSize=e,this.setSelectPageData()}}}),p={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{staticClass:"add-crew-dialog",attrs:{title:"添加机组",width:"90%",visible:e.dialigVisible,"close-on-click-modal":!1,"close-on-press-escape":!1},on:{"update:visible":function(t){e.dialigVisible=t},close:function(t){return e.close()}}},[a("div",{staticClass:"dialog-content"},[a("div",{staticClass:"left-box"},[a("p",{staticClass:"title"},[e._v("公有云可选机组")]),e._v(" "),a("div",{staticClass:"search-box"},[a("div",{staticClass:"search-item"},[a("span",[e._v("设备名称:")]),e._v(" "),a("el-input",{attrs:{placeholder:"请输入设备名称",maxlength:"20"},model:{value:e.searchForm.DisplayName,callback:function(t){e.$set(e.searchForm,"DisplayName",t)},expression:"searchForm.DisplayName"}})],1),e._v(" "),a("div",{staticClass:"search-item"},[a("span",[e._v("标识:")]),e._v(" "),a("el-input",{attrs:{placeholder:"请输入标识",maxlength:"20"},model:{value:e.searchForm.CollectorToken,callback:function(t){e.$set(e.searchForm,"CollectorToken",t)},expression:"searchForm.CollectorToken"}})],1),e._v(" "),a("div",{staticClass:"search-item"},[a("span",[e._v("机组位置:")]),e._v(" "),a("position-cascader",{attrs:{placeholder:"请选择机组位置",defaultPosition:e.searchForm.InstallationSite},on:{positionChange:e.positionChange}})],1),e._v(" "),a("div",{staticClass:"search-btn-box"},[a("el-button",{staticClass:"reset-btn",attrs:{type:"text"},on:{click:function(t){return e.reset()}}},[e._v("清空筛选")]),e._v(" "),a("el-button",{staticClass:"query-btn",attrs:{type:"primary"},on:{click:function(t){return e.resetCurrentParams()}}},[e._v("\n            查 询\n          ")])],1)]),e._v(" "),a("TableList",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"genset-table",attrs:{options:e.options,columns:e.columns,dataSource:e.dataSource,dataTotal:e.dataTotal,pagination:e.paginationCfg,border:""},on:{handleChangePage:e.handleChangePage,handleChangeSize:e.handleChangeSize}},[a("el-table-column",e._b({attrs:{slot:"operation",label:"操作",align:"center"},slot:"operation",scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"operate-group",staticStyle:{"text-align":"center"}},[a("el-button",{attrs:{disabled:t.row.isSelect,type:"text"},on:{click:function(a){return e.handleSelect(t.row)}}},[e._v("\n                选中\n              ")])],1)]}}])},"el-table-column",e.options&&e.options.props,!1))],1)],1),e._v(" "),a("div",{staticClass:"right-box"},[a("p",{staticClass:"title"},[e._v("已选择机组")]),e._v(" "),a("TableList",{staticClass:"genset-table",attrs:{options:e.options,columns:e.selectedColumns,dataSource:e.selectDataSource,dataTotal:e.dataTotalSelect,pagination:e.paginationCfgSelect,border:""},on:{handleChangePage:e.handleChangePageSelect,handleChangeSize:e.handleChangeSizeSelect}},[a("el-table-column",e._b({attrs:{slot:"operation",label:"操作",align:"center"},slot:"operation",scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"operate-group",staticStyle:{"text-align":"center"}},[a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.handleRemove(t.row)}}},[e._v(" 移除 ")])],1)]}}])},"el-table-column",e.options&&e.options.props,!1))],1)],1)]),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){return e.close()}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm()}}},[e._v("确 定")])],1)])},staticRenderFns:[]};var h=a("VU/8")(d,p,!1,function(e){a("ZFXv")},"data-v-c1145c92",null).exports,m=u.GensetRunStatusEnum,f=u.GensetLeaseStatusEnum,g=u.GensetLeaseTypeEnum,v={name:"LeaseGenset",mixins:[l.a],components:{PositionCascader:o.a,AddLeaseGensetDialog:h},data:function(){return{loading:!1,searchForm:{CollectorToken:"",RunStatus:"-1",Status:"-1",InstallationSite:""},GensetRunStatusEnum:m,GensetLeaseStatusEnum:f,GensetLeaseTypeEnum:g,columns:u.leaseGensetColumns(this),dataSource:[],options:{index:!0,labelIndex:"序号",props:{width:126}},data:[],crewManageVisible:!1,recordInfo:null,dialigVisible:!1,formLabelWidth:"100px",form:{Status:null,IsPlatform:null}}},mounted:function(){this.queryTableData()},methods:{positionChange:function(e){this.$set(this.searchForm,"InstallationSite",e.InstallationSite)},queryTableData:function(){var e=this;this.loading=!0;var t={Page:this.paginationCfg.currentPage,PageSize:this.paginationCfg.pageSize},a=s()({},this.searchForm);this.$api.equipment.GetGensetInfoManage(a,t).then(function(t){if(1===t.Code){console.log(t),e.dataTotal=t.Data.TotalItemCount;var a=t.Data.Data.map(function(e){return s()({},e.GeneratorSet,{CreateUserId:e.CreateUserId,Status:e.Status,IsPlatform:e.IsPlatform,IsCanEdit:e.IsCanEdit,RunStatus:e.GeneratorSet.Status})});e.$set(e,"dataSource",a)}e.loading=!1}).catch(function(){e.loading=!1})},reset:function(){this.$set(this,"searchForm",{CollectorToken:"",RunStatus:"-1",Status:"-1",InstallationSite:""})},handleAddLeaseGenset:function(){this.crewManageVisible=!0},handleEdit:function(e){console.log(e,this.GensetLeaseTypeEnum),this.$set(this,"recordInfo",e),this.$set(this.form,"Status",e.Status),this.$set(this.form,"IsPlatform",this.GensetLeaseTypeEnum.find(function(t){return t.value==e.IsPlatform}).value),this.dialigVisible=!0},submitForm:function(){var e=this;console.log(this.form);var t={id:this.recordInfo.GeneratorSetId},a=s()({},this.form,{IsPlatform:!!this.form.IsPlatform});this.$api.equipment.EditGensetProjectGensetInfo(a,t).then(function(t){1===t.Code?e.$message({type:"success",message:"编辑机组成功!"}):e.$message({type:"error",message:"编辑机组失败，请重新提交!"}),e.closeDialog("dialigVisible",{refresh:!0})})},close:function(){this.closeDialog("dialigVisible")},handleDelete:function(e){var t=this;console.log(e);var a=this.$createElement;this.$confirm("操作提示",{title:"移除机组",message:a("div",[a("p",[a("span","确定移除当前机组吗？")])]),confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var a={id:e.GeneratorSetId};t.$api.equipment.DeleteGensetProjectGensetInfo(a).then(function(e){1===e.Code?(t.$message({type:"success",message:"移除机组成功!"}),t.queryTableData()):t.$message({type:"error",message:"移除机组失败，请重新尝试!"})})}).catch(function(){t.$message({type:"info",message:"已取消"})})},closeDialog:function(e,t){this[e]=!1,t&&t.refresh&&this.queryTableData()}}},b={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("BMainTopComponent"),e._v(" "),a("div",{staticClass:"lease-genset-manage"},[a("div",{staticClass:"search-box"},[a("div",{staticClass:"search-item"},[a("span",[e._v("机组编号:")]),e._v(" "),a("el-input",{attrs:{placeholder:"请输入机组编号",clearable:""},model:{value:e.searchForm.CollectorToken,callback:function(t){e.$set(e.searchForm,"CollectorToken",t)},expression:"searchForm.CollectorToken"}})],1),e._v(" "),a("div",{staticClass:"search-item"},[a("span",[e._v("运行状态:")]),e._v(" "),a("el-select",{attrs:{"popper-append-to-body":!1,placeholder:"请选择运行状态"},model:{value:e.searchForm.RunStatus,callback:function(t){e.$set(e.searchForm,"RunStatus",t)},expression:"searchForm.RunStatus"}},[a("el-option",{attrs:{label:"全部",value:"-1"}}),e._v(" "),e._l(e.GensetRunStatusEnum,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})],2)],1),e._v(" "),a("div",{staticClass:"search-item"},[a("span",[e._v("租赁状态:")]),e._v(" "),a("el-select",{attrs:{"popper-append-to-body":!1,placeholder:"请选择租赁状态"},model:{value:e.searchForm.Status,callback:function(t){e.$set(e.searchForm,"Status",t)},expression:"searchForm.Status"}},[a("el-option",{attrs:{label:"全部",value:"-1"}}),e._v(" "),e._l(e.GensetLeaseStatusEnum,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})],2)],1),e._v(" "),a("div",{staticClass:"search-item"},[a("span",[e._v("机组位置筛选:")]),e._v(" "),a("position-cascader",{attrs:{placeholder:"请选择机组所在位置"},on:{positionChange:e.positionChange}})],1),e._v(" "),a("div",{staticClass:"search-btn-box"},[a("el-button",{staticClass:"reset-btn",attrs:{type:"text"},on:{click:function(t){return e.reset()}}},[e._v("清空筛选")]),e._v(" "),a("el-button",{staticClass:"query-btn",attrs:{type:"primary"},on:{click:function(t){return e.resetCurrentParams()}}},[e._v("查 询")])],1)]),e._v(" "),a("div",{staticClass:"operation-box"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.handleAddLeaseGenset()}}},[e._v(" 添加机组 ")])],1),e._v(" "),a("TableList",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{styleList:{height:"100%"},options:e.options,columns:e.columns,dataSource:e.dataSource,dataTotal:e.dataTotal,pagination:e.paginationCfg,border:""},on:{handleChangePage:e.handleChangePage,handleChangeSize:e.handleChangeSize}},[a("el-table-column",e._b({attrs:{slot:"operation",label:"操作",align:"center"},slot:"operation",scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"operate-group"},[a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.handleEdit(t.row)}}},[e._v(" 编辑 ")]),e._v(" "),a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.handleDelete(t.row)}}},[e._v(" 移除 ")])],1)]}}])},"el-table-column",e.options&&e.options.props,!1))],1)],1),e._v(" "),e.crewManageVisible?a("AddLeaseGensetDialog",{on:{closeDialog:function(t){return e.closeDialog("crewManageVisible",t)}}}):e._e(),e._v(" "),e.dialigVisible?a("el-dialog",{staticClass:"edit-crew-dialog",attrs:{title:"编辑机组",width:"400px",visible:e.dialigVisible,"close-on-click-modal":!1,"close-on-press-escape":!1},on:{"update:visible":function(t){e.dialigVisible=t},close:function(t){return e.close()}}},[a("div",{staticClass:"dialog-content"},[a("el-form",{ref:"projectForm",attrs:{model:e.form,"label-width":e.formLabelWidth}},[a("el-form-item",{attrs:{label:"租赁类型",prop:"ProjectNumber"}},[a("el-select",{attrs:{placeholder:"请选择租赁类型"},model:{value:e.form.IsPlatform,callback:function(t){e.$set(e.form,"IsPlatform",t)},expression:"form.IsPlatform"}},e._l(e.GensetLeaseTypeEnum,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"租赁状态",prop:"ProjectName"}},[a("el-select",{attrs:{placeholder:"请选择租赁状态",disabled:!(e.recordInfo&&e.recordInfo.IsCanEdit)},model:{value:e.form.Status,callback:function(t){e.$set(e.form,"Status",t)},expression:"form.Status"}},e._l(e.GensetLeaseStatusEnum,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value,disabled:e.disabled}})}),1)],1)],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){return e.close()}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm()}}},[e._v("确 定")])],1)]):e._e()],1)},staticRenderFns:[]};var S=a("VU/8")(v,b,!1,function(e){a("eP91")},"data-v-51295ce8",null);t.default=S.exports}});
//# sourceMappingURL=34.4bd3c15c903538cc4c5d.js.map