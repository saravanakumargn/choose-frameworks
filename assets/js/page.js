"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(){agGrid.initialiseAgGridWithAngular1(angular);var e=angular.module("chooseApp",["ngMaterial","agGrid"]),t=function(e,t){function n(e){l=e.data.common,i.totalCount=l.length,i.gridOptions.api.setRowData(e.data.common)}function o(e){}function a(e){f=[],s.forEach(function(e,t){f.push({filterType:s[t],filterValue:i.selected[t]})}),i.gridOptions.api.onFilterChanged(),r()}function r(){i.totalCount=i.gridOptions.api.getDisplayedRowCount()}var i=this,l=[],s=[],u=[],c=!1;i.selected=[],i.totalCount=0,e.get("/choose-frameworks/assets/json/common.json?v="+getCurrentTime).then(n,o),i.search={ownertype:"",written:""},i.allItemsInit=function(e,t){u.push(t.split(",")),s.push(e),i.selected.push([])},i.toggle=function(e,t,n){var o=t.indexOf(e);o>-1?t.splice(o,1):t.push(e),c=!0,a()},i.exists=function(e,t,n){return t.indexOf(e)>-1},i.isIndeterminate=function(e){return!!i.selected[e]&&(0!==i.selected[e].length&&i.selected[e].length!==u[e].length)},i.isChecked=function(e){return!!i.selected[e]&&i.selected[e].length===u[e].length},i.toggleAll=function(e){i.selected[e].length===u[e].length?i.selected[e]=[]:(0===i.selected[e].length||i.selected[e].length>0)&&(i.selected[e]=u[e].slice(0)),a()};var d=[{headerName:"Name",field:"name",cellRenderer:function(e){return'<a href="/choose-frameworks/pages/'+e.data.urlEndPoint+'">'+e.value+"</a>"}},{headerName:"Primary Language",field:"primaryLanguage.name"},{headerName:"Stars",field:"stargazers.totalCount"},{headerName:"Issues",field:"issues.totalCount"},{headerName:"Watchers",field:"watchers.totalCount"},{headerName:"Last Pushed",field:"pushedAt",valueFormatter:function(e){return moment(e.value).format("ll")}}];i.gridOptions={columnDefs:d,rowData:null,animateRows:!0,enableSorting:!0,sortingOrder:["desc","asc",null],isExternalFilterPresent:function(){return c},doesExternalFilterPass:function(e){var t=!0;return f.forEach(function(n,o){t&&0!==n.filterValue.length&&("object"===_typeof(_.get(e.data,s[o]))?_.get(e.data,s[o]).forEach(function(e){t=n.filterValue.includes(e)}):t=n.filterValue.includes(_.get(e.data,s[o])))}),t},onGridReady:function(e){e.api.sizeColumnsToFit()}};var f=[];i.onSearchChanged=function(){i.gridOptions.api.setQuickFilter(i.searchName)},i.filterReset=function(){i.selected=[],i.searchName="",i.onSearchChanged(),s.forEach(function(e,t){i.selected.push([])}),a()},i.toggleLeft=function(e){return function(){t(e).toggle()}}("left")};t.$inject=["$http","$mdSidenav"],e.controller("pageController",t)}();