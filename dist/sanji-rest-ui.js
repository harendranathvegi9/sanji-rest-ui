!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("angular"),require("ng-file-upload")):"function"==typeof define&&define.amd?define(["angular","ng-file-upload"],t):"object"==typeof exports?exports.sjRest=t(require("angular"),require("ng-file-upload")):e.sjRest=t(e.angular,e.ngFileUpload)}(this,function(e,t){return function(e){function t(r){if(n[r])return n[r].exports;var u=n[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,t),u.l=!0,u.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,t,n){Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=4)}([function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=["$http"],o=function(){function e(){for(var t=this,r=arguments.length,u=Array(r),o=0;o<r;o++)u[o]=arguments[o];n(this,e),e.$inject.forEach(function(e,n){return t[e]=u[n]})}return r(e,[{key:"get",value:function(e){return this.$http.get.apply(null,e)}},{key:"post",value:function(e){return this.$http.post.apply(null,e)}},{key:"put",value:function(e){return this.$http.put.apply(null,e)}},{key:"delete",value:function(e){return this.$http.delete.apply(null,e)}}]),e}();o.$inject=u,t.default=o},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=[],o=function(){function e(){for(var t=this,r=arguments.length,u=Array(r),o=0;o<r;o++)u[o]=arguments[o];n(this,e),e.$inject.forEach(function(e,n){return t[e]=u[n]}),this.config={service:"http",basePath:""},this.configure=function(e){return Object.assign(t.config,e)}}return r(e,[{key:"$get",value:["$q","$log","$injector","Upload",function(e,t,n,r){"ngInject";function u(t,n,r,u){var i=e.defer(),c=u||{},f=c.basePath||o.basePath,l=[f+n];return t=t.toLowerCase(),t.match(/post|put/)&&l.push(r),t.match(/delete/)&&(c.data=r,c.headers={"Content-Type":"application/json"}),l.push(c),a[t](l).then(function(e){i.resolve(e)}).catch(function(e){i.reject(e)}),i.promise}var o=this.config,a=n.get(o.service);return{configure:function(e){return Object.assign(o,e)},get:function(e,t){return u("get",e,null,t)},post:function(e,t,n,a){if("http"===o.service&&Array.isArray(n)){a=a||{};var i=a.basePath||o.basePath,c={url:i+e,method:"POST",data:{file:n[0]}};return t&&(c.data=Object.assign({},c.data,t)),r.upload(Object.assign(c,a))}return u("post",e,t,a)},put:function(e,t,n,a){if("http"===o.service&&Array.isArray(n)){a=a||{};var i=a.basePath||o.basePath,c={url:i+e,method:"PUT",data:{file:n[0]}};return t&&(c.data=Object.assign({},c.data,t)),r.upload(Object.assign(c,a))}return u("put",e,t,a)},delete:function(e,t,n){return u("delete",e,t,n)}}}]}]),e}();o.$inject=u,t.default=o},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.sjRest=void 0;var u=n(2),o=r(u),a=n(3),i=r(a),c=n(0),f=r(c),l=n(1),s=r(l),p=o.default.module("sanji.rest",[i.default]).service("http",f.default).provider("rest",s.default).name;t.sjRest=p}])});