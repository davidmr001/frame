webpackJsonp([11],{"6Y0y":function(e,t,a){var i=a("76Ed");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("rjj0")("63730ce0",i,!0)},"76Ed":function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"\n.custom-tree-node[data-v-4af8a81e] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  font-size: 14px;\n  padding-right: 8px;\n}\n",""])},TOP7:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main-contain-holder"},[a("div",{staticClass:"filter-container",staticStyle:{"margin-bottom":"15px"}},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px",float:"right","margin-left":"10px"},attrs:{placeholder:"搜索"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.onSearch(t)}},model:{value:e.table.searchValue,callback:function(t){e.$set(e.table,"searchValue",t)},expression:"table.searchValue"}}),e._v(" "),a("el-button",{staticStyle:{float:"left"},attrs:{type:"primary"},on:{click:e.loadTableData}},[a("svg-icon",{attrs:{"icon-class":"refresh"}}),e._v("刷新")],1),e._v(" "),a("el-button",{staticStyle:{float:"left"},attrs:{type:"primary"},on:{click:e.handleClickAddButton}},[e._v("添加")])],1),e._v(" "),a("el-table",{attrs:{data:e.table.data,stripe:"",border:"",loading:e.table.loading}},[a("el-table-column",{attrs:{label:"ID",align:"center",type:"index",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{label:"名称",prop:"name",width:"150"}}),e._v(" "),a("el-table-column",{attrs:{label:"权限",prop:"name"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._l(t.row.menus,function(t){return a("el-tag",{key:t,staticStyle:{"margin-left":"8px"},attrs:{type:"success"}},[e._v(e._s(t))])}),e._v(" "),t.row.mappings.length>0?a("hr",{staticStyle:{color:"#d3dce6"}}):e._e(),e._v(" "),e._l(t.row.mappings,function(t){return a("el-tag",{key:t,staticStyle:{"margin-left":"8px"},attrs:{type:"warning"}},[e._v(e._s(t))])})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"250px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){e.handleEditRow(t.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(a){e.handleDeleteRow(t.row)}}},[e._v("删除")]),e._v(" "),a("el-button",{attrs:{type:"success",size:"mini"},on:{click:function(a){e.handleEditPermissionRow(t.row)}}},[e._v("编辑权限")])]}}])})],1),e._v(" "),a("div",{staticClass:"block",staticStyle:{padding:"15px",float:"right"}},[a("el-pagination",{attrs:{"current-page":e.pagination.currentPage,"page-sizes":e.pagination.pageSizes,"page-size":e.pagination.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.pagination.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),e._v(" "),a("div",[a("el-dialog",{attrs:{title:"添加",visible:e.dialogAddPermissionGroup.visible,width:"40%"},on:{"update:visible":function(t){e.$set(e.dialogAddPermissionGroup,"visible",t)}}},[a("el-form",{ref:"addPermissionGroupForm",attrs:{model:e.dialogAddPermissionGroup.data,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"名称"}},[a("el-input",{model:{value:e.dialogAddPermissionGroup.data.name,callback:function(t){e.$set(e.dialogAddPermissionGroup.data,"name",t)},expression:"dialogAddPermissionGroup.data.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"备注"}},[a("el-input",{model:{value:e.dialogAddPermissionGroup.data.remark,callback:function(t){e.$set(e.dialogAddPermissionGroup.data,"remark",t)},expression:"dialogAddPermissionGroup.data.remark"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"名称"}},[a("el-input",{attrs:{type:"number"},model:{value:e.dialogAddPermissionGroup.data.sort,callback:function(t){e.$set(e.dialogAddPermissionGroup.data,"sort",t)},expression:"dialogAddPermissionGroup.data.sort"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"启用"}},[a("el-switch",{model:{value:e.dialogAddPermissionGroup.data.enabled,callback:function(t){e.$set(e.dialogAddPermissionGroup.data,"enabled",t)},expression:"dialogAddPermissionGroup.data.enabled"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogAddPermissionGroup.visible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.addPermissionGroupSubmit}},[e._v("确 定")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"编辑权限",visible:e.dialogEditPermission.visible,width:"60%"},on:{"update:visible":function(t){e.$set(e.dialogEditPermission,"visible",t)}}},[a("el-row",[a("el-col",{attrs:{span:16}},[[a("el-transfer",{attrs:{titles:["待选","已选"],filterable:"","filter-placeholder":"搜索",data:e.dialogEditPermission.transferData},model:{value:e.dialogEditPermission.data.permissionSelected,callback:function(t){e.$set(e.dialogEditPermission.data,"permissionSelected",t)},expression:"dialogEditPermission.data.permissionSelected"}})]],2),e._v(" "),a("el-col",{attrs:{span:8}},[a("el-tree",{ref:"permissionTree",attrs:{data:e.dialogEditPermission.treeData,"default-expanded-keys":e.dialogEditPermission.data.menuSelected,props:e.dialogEditPermission.defaultProps,"node-key":"id","show-checkbox":""}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogEditPermission.visible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.editPermissionSubmit}},[e._v("确 定")])],1)],1)],1)],1)},staticRenderFns:[]};var n=a("VU/8")({name:"permission-manage",data:function(){return{baseUrl:"/ucenter/manage/permission-group",table:{data:[],searchValue:"",loading:!1},pagination:{currentPage:1,pageSizes:[20,30,50,100],pageSize:20,total:0},dialogAddPermissionGroup:{data:{name:"",remark:"",sort:1,enabled:!0},visible:!1},dialogEditPermission:{visible:!1,data:{groupId:-1,permissionSelected:[],menuSelected:[]},transferData:[],treeData:[],defaultProps:{children:"children",label:"label"}}}},methods:{handleSizeChange:function(e){},handleCurrentChange:function(e){},loadTableData:function(){var e=this;e.table.loading=!0;var t="/ucenter/manage/permission-group/datatable.json?page_num="+e.pagination.currentPage+"&page_size="+e.pagination.pageSize+"&search_value="+e.table.searchValue;e.$request.get(t).then(function(t){e.pagination=t.pagination,e.table.data=t.data,e.table.loading=!1})},onSearch:function(){},handleEditRow:function(e){},handleDeleteRow:function(e){var t=e.id,a=this;this.$confirm("删除, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.$request.delete("/ucenter/manage/permission-group?id="+t).then(function(e){a.$message.success(e.message),a.loadTableData()})})},handleClickAddButton:function(){this.dialogAddPermissionGroup.visible=!0},addPermissionGroupSubmit:function(){var e=this;e.$request.post("/ucenter/manage/permission-group",e.dialogAddPermissionGroup.data).then(function(t){e.$message.success(t.message),e.dialogAddPermissionGroup.visible=!1,e.loadTableData()})},handleEditPermissionRow:function(e){var t=this;t.dialogEditPermission.data.groupId=e.id,t.$request.get(t.baseUrl+"/menu-tree.json?groupId="+e.id).then(function(a){t.dialogEditPermission.treeData=a.data.treeData,a.data.treeSelected&&(t.dialogEditPermission.data.menuSelected=a.data.treeSelected),t.$request.get(t.baseUrl+"/api-transfer.json?groupId="+e.id).then(function(e){t.dialogEditPermission.transferData=e.data.list,t.dialogEditPermission.data.permissionSelected=e.data.selectedList,t.dialogEditPermission.visible=!0})})},editPermissionSubmit:function(){var e=this;e.dialogEditPermission.data.menuSelected=this.$refs.permissionTree.getCheckedKeys(),e.$request.post(e.baseUrl+"/save.do",e.dialogEditPermission.data).then(function(t){e.$message.success(t.message),e.dialogEditPermission.visible=!1})}},mounted:function(){this.loadTableData()},watch:{"dialogEditPermission.data.menuSelected":function(e,t){this.$refs.permissionTree.setCheckedKeys(e)}}},i,!1,function(e){a("6Y0y")},"data-v-4af8a81e",null);t.default=n.exports}});