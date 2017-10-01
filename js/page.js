"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(){agGrid.initialiseAgGridWithAngular1(angular);var e=angular.module("chooseApp",["ngMaterial","agGrid"]),t=function(e,t){function n(e){i=e.data.common,r.totalCount=i.length,r.gridOptions.api.setRowData(e.data.common)}function o(e){console.log(e)}function a(e){f=[],s.forEach(function(e,t){f.push({filterType:s[t],filterValue:r.selected[t]})}),r.gridOptions.api.onFilterChanged(),l()}function l(){r.totalCount=r.gridOptions.api.getDisplayedRowCount()}var r=this,i=[],s=[],u=[],c=!1;r.selected=[],r.totalCount=0,e.get("/choose-frameworks/assets/json/common.json?").then(n,o),r.search={ownertype:"",written:""},r.allItemsInit=function(e,t){u.push(t.split(",")),s.push(e),r.selected.push([])},r.toggle=function(e,t,n){var o=t.indexOf(e);o>-1?t.splice(o,1):t.push(e),c=!0,a()},r.exists=function(e,t,n){return t.indexOf(e)>-1},r.isIndeterminate=function(e){return!!r.selected[e]&&(0!==r.selected[e].length&&r.selected[e].length!==u[e].length)},r.isChecked=function(e){return!!r.selected[e]&&r.selected[e].length===u[e].length},r.toggleAll=function(e){r.selected[e].length===u[e].length?r.selected[e]=[]:(0===r.selected[e].length||r.selected[e].length>0)&&(r.selected[e]=u[e].slice(0)),a()};var d=[{headerName:"Name",field:"name",cellRenderer:function(e){return'<a href="/pages/'+e.data.urlEndPoint+'">'+e.value+"</a>"}},{headerName:"Primary Language",field:"primaryLanguage.name"},{headerName:"Stars",field:"stargazers.totalCount"},{headerName:"Issues",field:"issues.totalCount"},{headerName:"Watchers",field:"watchers.totalCount"},{headerName:"Last Pushed",field:"pushedAt",valueFormatter:function(e){return moment(e.value).format("ll")}}];r.gridOptions={columnDefs:d,rowData:null,animateRows:!0,enableSorting:!0,sortingOrder:["desc","asc",null],isExternalFilterPresent:function(){return c},doesExternalFilterPass:function(e){var t=!0;return f.forEach(function(n,o){t&&0!==n.filterValue.length&&("object"===_typeof(_.get(e.data,s[o]))?(console.log(n.filterValue),console.log(_.get(e.data,s[o])),_.get(e.data,s[o]).forEach(function(e){t=n.filterValue.includes(e)})):t=n.filterValue.includes(_.get(e.data,s[o])))}),t},onGridReady:function(e){e.api.sizeColumnsToFit()}};var f=[];r.onSearchChanged=function(){r.gridOptions.api.setQuickFilter(r.searchName)},r.filterReset=function(){r.selected=[],r.searchName="",r.onSearchChanged(),s.forEach(function(e,t){r.selected.push([])}),a()},r.toggleLeft=function(e){return function(){t(e).toggle()}}("left")};t.$inject=["$http","$mdSidenav"],e.controller("pageController",t)}();