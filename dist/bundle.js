!function(t){var e={};function i(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},i.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){"use strict";i.r(e);var n,o=function(){function t(t,e){this.x=t,this.y=e,this.nextField=void 0}return t.prototype.detectCollision=function(t){return this.x===t.x&&this.y===t.y},t}();!function(t){t[t.UP=0]="UP",t[t.RIGHT=1]="RIGHT",t[t.DOWN=2]="DOWN",t[t.LEFT=3]="LEFT"}(n||(n={}));var r,s=function(){function t(){}return t.GAME_WIDTH=20,t.GAME_HEIGHT=20,t.FIELD_SIZE=20,t}(),h=function(){function t(t){this.head=new o(2,7),this.tail=[],this.size=0,this.game=t}return t.prototype.draw=function(t){t.fillStyle="red",this.drawField(this.head,t,s.FIELD_SIZE);for(var e=0;e<this.tail.length;e++)this.drawField(this.tail[e],t,s.FIELD_SIZE)},t.prototype.changeDirection=function(t){t===n.LEFT&&this.direction===n.RIGHT||t===n.UP&&this.direction===n.DOWN||t===n.DOWN&&this.direction===n.UP||t===n.RIGHT&&this.direction===n.LEFT||(this.direction=t)},t.prototype.move=function(){void 0!==this.direction&&(this.tail.push(this.head),this.head=this.getNext(),this.head.detectCollision(this.game.food)&&(this.size++,console.log("Food")),this.tail.length>this.size&&this.tail.splice(0,1))},t.prototype.getNext=function(){switch(this.direction){case n.UP:return this.head.y-1<1?new o(this.head.x,s.GAME_HEIGHT):new o(this.head.x,this.head.y-1);case n.RIGHT:return this.head.x+1>s.GAME_WIDTH?new o(1,this.head.y):new o(this.head.x+1,this.head.y);case n.DOWN:return this.head.y===s.GAME_HEIGHT?new o(this.head.x,1):new o(this.head.x,this.head.y+1);case n.LEFT:return this.head.x-1==0?new o(s.GAME_WIDTH,this.head.y):new o(this.head.x-1,this.head.y)}},t.prototype.drawField=function(t,e,i){e.fillRect((t.x-1)*i,(t.y-1)*i,i,i)},t}(),c=(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])},function(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),a=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return c(e,t),e.prototype.draw=function(t){t.fillStyle="green",t.fillRect((this.x-1)*s.FIELD_SIZE,(this.y-1)*s.FIELD_SIZE,s.FIELD_SIZE,s.FIELD_SIZE)},e}(o);i.d(e,"SnakeGame",function(){return d});var d=function(){function t(){var t=this,e=document.getElementById("snake");this.ctx=e.getContext("2d"),this.snake=new h(this),this.food=new a(4,4),this.draw(),setInterval(function(){t.nextStep()},100),this.keyboardInput(),this.score=0}return t.prototype.nextStep=function(){this.snake.move(),this.draw()},t.prototype.snakeFoundFood=function(){this.placeNewFood(),this.increaseScore()},t.prototype.placeNewFood=function(){},t.prototype.increaseScore=function(){this.score++},t.prototype.draw=function(){this.ctx.fillStyle="grey",this.ctx.fillRect(0,0,s.GAME_WIDTH*s.FIELD_SIZE,s.GAME_HEIGHT*s.FIELD_SIZE),this.food.draw(this.ctx),this.snake.draw(this.ctx)},t.prototype.startGame=function(){},t.prototype.keyboardInput=function(){var t=this;document.addEventListener("keydown",function(e){37===e.keyCode?t.snake.changeDirection(n.LEFT):38===e.keyCode?t.snake.changeDirection(n.UP):39===e.keyCode?t.snake.changeDirection(n.RIGHT):40===e.keyCode&&t.snake.changeDirection(n.DOWN)})},t}();new d}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpZWxkLnRzIiwid2VicGFjazovLy8uL3NyYy9kaXJlY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50LnRzIiwid2VicGFjazovLy8uL3NyYy9zbmFrZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZm9vZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc25ha2VfZ2FtZS50cyJdLCJuYW1lcyI6WyJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiZXhwb3J0cyIsIm1vZHVsZSIsImkiLCJsIiwibW9kdWxlcyIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiY29uZmlndXJhYmxlIiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJ2YWx1ZSIsIm4iLCJfX2VzTW9kdWxlIiwib2JqZWN0IiwicHJvcGVydHkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsInAiLCJzIiwiRGlyZWN0aW9uIiwiRmllbGQiLCJ4IiwieSIsInRoaXMiLCJuZXh0RmllbGQiLCJ1bmRlZmluZWQiLCJkZXRlY3RDb2xsaXNpb24iLCJmaWVsZCIsIkNvbnN0YW50IiwiR0FNRV9XSURUSCIsIkdBTUVfSEVJR0hUIiwiRklFTERfU0laRSIsInNuYWtlX1NuYWtlIiwiU25ha2UiLCJnYW1lIiwiaGVhZCIsInRhaWwiLCJzaXplIiwiZHJhdyIsImN0eCIsImZpbGxTdHlsZSIsImRyYXdGaWVsZCIsImxlbmd0aCIsImNoYW5nZURpcmVjdGlvbiIsImRpcmVjdGlvbiIsIkxFRlQiLCJSSUdIVCIsIlVQIiwiRE9XTiIsIm1vdmUiLCJwdXNoIiwiZ2V0TmV4dCIsImZvb2QiLCJjb25zb2xlIiwibG9nIiwic3BsaWNlIiwic25ha2VQYXJ0IiwiZmlsbFJlY3QiLCJmb29kX0Zvb2QiLCJfc3VwZXIiLCJGb29kIiwiX19leHRlbmRzIiwic25ha2VfZ2FtZV9TbmFrZUdhbWUiLCJTbmFrZUdhbWUiLCJfdGhpcyIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0Iiwic25ha2UiLCJzZXRJbnRlcnZhbCIsIm5leHRTdGVwIiwia2V5Ym9hcmRJbnB1dCIsInNjb3JlIiwic25ha2VGb3VuZEZvb2QiLCJwbGFjZU5ld0Zvb2QiLCJpbmNyZWFzZVNjb3JlIiwic3RhcnRHYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwia2V5Q29kZSJdLCJtYXBwaW5ncyI6ImFBQ0EsSUFBQUEsS0FHQSxTQUFBQyxFQUFBQyxHQUdBLEdBQUFGLEVBQUFFLEdBQ0EsT0FBQUYsRUFBQUUsR0FBQUMsUUFHQSxJQUFBQyxFQUFBSixFQUFBRSxJQUNBRyxFQUFBSCxFQUNBSSxHQUFBLEVBQ0FILFlBVUEsT0FOQUksRUFBQUwsR0FBQU0sS0FBQUosRUFBQUQsUUFBQUMsSUFBQUQsUUFBQUYsR0FHQUcsRUFBQUUsR0FBQSxFQUdBRixFQUFBRCxRQUtBRixFQUFBUSxFQUFBRixFQUdBTixFQUFBUyxFQUFBVixFQUdBQyxFQUFBVSxFQUFBLFNBQUFSLEVBQUFTLEVBQUFDLEdBQ0FaLEVBQUFhLEVBQUFYLEVBQUFTLElBQ0FHLE9BQUFDLGVBQUFiLEVBQUFTLEdBQ0FLLGNBQUEsRUFDQUMsWUFBQSxFQUNBQyxJQUFBTixLQU1BWixFQUFBbUIsRUFBQSxTQUFBakIsR0FDQVksT0FBQUMsZUFBQWIsRUFBQSxjQUFpRGtCLE9BQUEsS0FJakRwQixFQUFBcUIsRUFBQSxTQUFBbEIsR0FDQSxJQUFBUyxFQUFBVCxLQUFBbUIsV0FDQSxXQUEyQixPQUFBbkIsRUFBQSxTQUMzQixXQUFpQyxPQUFBQSxHQUVqQyxPQURBSCxFQUFBVSxFQUFBRSxFQUFBLElBQUFBLEdBQ0FBLEdBSUFaLEVBQUFhLEVBQUEsU0FBQVUsRUFBQUMsR0FBc0QsT0FBQVYsT0FBQVcsVUFBQUMsZUFBQW5CLEtBQUFn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WSxPQUNyQmpCLEtBQUtnQixJQUFJa0IsU0FBUyxFQUFHLEVBQUc3QixFQUFTQyxXQUFhRCxFQUFTRyxXQUFZSCxFQUFTRSxZQUFjRixFQUFTRyxZQUNuR1IsS0FBSzZCLEtBQUtkLEtBQUtmLEtBQUtnQixLQUNwQmhCLEtBQUs4QyxNQUFNL0IsS0FBS2YsS0FBS2dCLE1BR2pCd0IsRUFBQWhELFVBQUE4RCxVQUFSLGFBSVFkLEVBQUFoRCxVQUFBeUQsY0FBUixlQUFBUixFQUFBekMsS0FDSTJDLFNBQVNZLGlCQUFpQixVQUFXLFNBQUNDLEdBQ1osS0FBbEJBLEVBQU1DLFFBQ1ZoQixFQUFLSyxNQUFNMUIsZ0JBQWdCeEIsRUFBVTBCLE1BQ1IsS0FBbEJrQyxFQUFNQyxRQUNiaEIsRUFBS0ssTUFBTTFCLGdCQUFnQnhCLEVBQVU0QixJQUNaLEtBQWxCZ0MsRUFBTUMsUUFDYmhCLEVBQUtLLE1BQU0xQixnQkFBZ0J4QixFQUFVMkIsT0FDWixLQUFsQmlDLEVBQU1DLFNBQ2JoQixFQUFLSyxNQUFNMUIsZ0JBQWdCeEIsRUFBVTZCLFNBSXJEZSxFQTdEQSxHQStEdUIsSUFBSUQiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImV4cG9ydCBjbGFzcyBGaWVsZCB7XHJcbiAgICBwdWJsaWMgbmV4dEZpZWxkIDogRmllbGQ7XHJcbiAgICBwdWJsaWMgeCA6IG51bWJlcjtcclxuICAgIHB1YmxpYyB5IDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHggOiBudW1iZXIsIHkgOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgdGhpcy5uZXh0RmllbGQgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRldGVjdENvbGxpc2lvbihmaWVsZDogRmllbGQpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMueCA9PT0gZmllbGQueCAmJiB0aGlzLnkgPT09IGZpZWxkLnkpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGVudW0gRGlyZWN0aW9uIHtcclxuICAgIFVQLFxyXG4gICAgUklHSFQsXHJcbiAgICBET1dOLFxyXG4gICAgTEVGVFxyXG59IiwiZXhwb3J0IGNsYXNzIENvbnN0YW50IHtcclxuICAgIHN0YXRpYyByZWFkb25seSBHQU1FX1dJRFRIIDogbnVtYmVyID0gMjA7XHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgR0FNRV9IRUlHSFQgOiBudW1iZXIgPSAyMDtcclxuICAgIHN0YXRpYyByZWFkb25seSBGSUVMRF9TSVpFIDogbnVtYmVyID0gMjA7XHJcbn0iLCJpbXBvcnQgeyBGaWVsZCB9IGZyb20gXCIuL2ZpZWxkXCI7XHJcbmltcG9ydCB7IERpcmVjdGlvbiB9IGZyb20gXCIuL2RpcmVjdGlvblwiO1xyXG5pbXBvcnQgeyBTbmFrZUdhbWUgfSBmcm9tIFwiLi9zbmFrZV9nYW1lXCI7XHJcbmltcG9ydCB7IENvbnN0YW50IH0gZnJvbSBcIi4vY29uc3RhbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTbmFrZSB7XHJcbiAgICBwcml2YXRlIGdhbWUgOiBTbmFrZUdhbWU7XHJcbiAgICBwcml2YXRlIGhlYWQgOiBGaWVsZDtcclxuICAgIHByaXZhdGUgdGFpbCA6IEZpZWxkW107XHJcbiAgICBwcml2YXRlIHNpemUgOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGRpcmVjdGlvbjogRGlyZWN0aW9uO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGdhbWU6IFNuYWtlR2FtZSkge1xyXG4gICAgICAgIHRoaXMuaGVhZCA9IG5ldyBGaWVsZCgyLCA3KTtcclxuICAgICAgICB0aGlzLnRhaWwgPSBbXTtcclxuICAgICAgICB0aGlzLnNpemUgPSAwO1xyXG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRyYXcoY3R4IDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKTogdm9pZCB7XHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmVkXCI7XHJcbiAgICAgICAgdGhpcy5kcmF3RmllbGQodGhpcy5oZWFkLCBjdHgsIENvbnN0YW50LkZJRUxEX1NJWkUpO1xyXG4gICAgICAgIGZvcih2YXIgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMudGFpbC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmRyYXdGaWVsZCh0aGlzLnRhaWxbaV0sIGN0eCwgQ29uc3RhbnQuRklFTERfU0laRSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjaGFuZ2VEaXJlY3Rpb24oZGlyZWN0aW9uOiBEaXJlY3Rpb24pOiB2b2lkIHtcclxuICAgICAgICBpZihkaXJlY3Rpb24gPT09IERpcmVjdGlvbi5MRUZUICYmIHRoaXMuZGlyZWN0aW9uID09PSBEaXJlY3Rpb24uUklHSFQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSBEaXJlY3Rpb24uVVAgJiYgdGhpcy5kaXJlY3Rpb24gPT09IERpcmVjdGlvbi5ET1dOKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gRGlyZWN0aW9uLkRPV04gJiYgdGhpcy5kaXJlY3Rpb24gPT09IERpcmVjdGlvbi5VUCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09IERpcmVjdGlvbi5SSUdIVCAmJiB0aGlzLmRpcmVjdGlvbiA9PT0gRGlyZWN0aW9uLkxFRlQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbW92ZSgpOiB2b2lkIHtcclxuICAgICAgICBpZih0aGlzLmRpcmVjdGlvbiA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gYWRkIGN1cnJlbnQgaGVhZCB0byB0YWlsXHJcbiAgICAgICAgdGhpcy50YWlsLnB1c2godGhpcy5oZWFkKTtcclxuXHJcbiAgICAgICAgLy8gZ2V0IG5leHQgcG9zaXRpb25cclxuICAgICAgICB0aGlzLmhlYWQgPSB0aGlzLmdldE5leHQoKTtcclxuICAgICAgICBpZih0aGlzLmhlYWQuZGV0ZWN0Q29sbGlzaW9uKHRoaXMuZ2FtZS5mb29kKSkge1xyXG4gICAgICAgICAgICB0aGlzLnNpemUrKztcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJGb29kXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZml4IHRoZSB3b3JtIHNpemVcclxuICAgICAgICBpZiAodGhpcy50YWlsLmxlbmd0aCA+IHRoaXMuc2l6ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnRhaWwuc3BsaWNlKDAsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldE5leHQoKTogRmllbGQge1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5kaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgY2FzZSBEaXJlY3Rpb24uVVA6XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmhlYWQueSAtIDEgPCAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBGaWVsZCh0aGlzLmhlYWQueCwgQ29uc3RhbnQuR0FNRV9IRUlHSFQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEZpZWxkKHRoaXMuaGVhZC54LCB0aGlzLmhlYWQueSAtIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIERpcmVjdGlvbi5SSUdIVDpcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuaGVhZC54ICsgMSA+IENvbnN0YW50LkdBTUVfV0lEVEgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEZpZWxkKDEsIHRoaXMuaGVhZC55KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBGaWVsZCh0aGlzLmhlYWQueCArIDEsIHRoaXMuaGVhZC55KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBEaXJlY3Rpb24uRE9XTjpcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuaGVhZC55ID09PSBDb25zdGFudC5HQU1FX0hFSUdIVCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRmllbGQodGhpcy5oZWFkLngsIDEpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEZpZWxkKHRoaXMuaGVhZC54LCB0aGlzLmhlYWQueSArIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIERpcmVjdGlvbi5MRUZUOlxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5oZWFkLnggLSAxID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBGaWVsZChDb25zdGFudC5HQU1FX1dJRFRILCB0aGlzLmhlYWQueSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRmllbGQodGhpcy5oZWFkLngtMSwgdGhpcy5oZWFkLnkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRyYXdGaWVsZChzbmFrZVBhcnQ6IEZpZWxkLCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgc2l6ZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgY3R4LmZpbGxSZWN0KChzbmFrZVBhcnQueCAtIDEpICogc2l6ZSwgKHNuYWtlUGFydC55IC0gMSkgKiBzaXplLCBzaXplLCBzaXplKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEZpZWxkIH0gZnJvbSBcIi4vZmllbGRcIjtcclxuaW1wb3J0IHsgQ29uc3RhbnQgfSBmcm9tIFwiLi9jb25zdGFudFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZvb2QgZXh0ZW5kcyBGaWVsZCB7XHJcbiAgICBwdWJsaWMgZHJhdyhjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCk6dm9pZCB7XHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiZ3JlZW5cIjtcclxuICAgICAgICBjdHguZmlsbFJlY3QoKHRoaXMueCAtIDEpICogQ29uc3RhbnQuRklFTERfU0laRSwgKHRoaXMueSAtIDEpICogQ29uc3RhbnQuRklFTERfU0laRSxDb25zdGFudC5GSUVMRF9TSVpFLCBDb25zdGFudC5GSUVMRF9TSVpFKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFNuYWtlIH0gZnJvbSBcIi4vc25ha2VcIjtcclxuaW1wb3J0IHsgRm9vZCB9IGZyb20gXCIuL2Zvb2RcIjtcclxuaW1wb3J0IHsgRGlyZWN0aW9uIH0gZnJvbSBcIi4vZGlyZWN0aW9uXCI7XHJcbmltcG9ydCB7IENvbnN0YW50IH0gZnJvbSBcIi4vY29uc3RhbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTbmFrZUdhbWUge1xyXG4gICAgcHVibGljIGZvb2QgOiBGb29kO1xyXG4gICAgcHJpdmF0ZSBzbmFrZSA6IFNuYWtlO1xyXG4gICAgcHJpdmF0ZSBjdHggOiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiAgICBwcml2YXRlIHNjb3JlIDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHZhciBjYW52YXMgOiBIVE1MQ2FudmFzRWxlbWVudCA9IDxIVE1MQ2FudmFzRWxlbWVudD4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbmFrZVwiKTtcclxuICAgICAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgICAgdGhpcy5zbmFrZSA9IG5ldyBTbmFrZSh0aGlzKTtcclxuICAgICAgICB0aGlzLmZvb2QgPSBuZXcgRm9vZCg0LCA0KTtcclxuICAgICAgICB0aGlzLmRyYXcoKTtcclxuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dFN0ZXAoKTtcclxuICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgIHRoaXMua2V5Ym9hcmRJbnB1dCgpO1xyXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZXh0U3RlcCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNuYWtlLm1vdmUoKTtcclxuICAgICAgICB0aGlzLmRyYXcoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc25ha2VGb3VuZEZvb2QoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wbGFjZU5ld0Zvb2QoKTtcclxuICAgICAgICB0aGlzLmluY3JlYXNlU2NvcmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHBsYWNlTmV3Rm9vZCgpOiB2b2lkIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbmNyZWFzZVNjb3JlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2NvcmUrKztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRyYXcoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJncmV5XCI7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgQ29uc3RhbnQuR0FNRV9XSURUSCAqIENvbnN0YW50LkZJRUxEX1NJWkUsIENvbnN0YW50LkdBTUVfSEVJR0hUICogQ29uc3RhbnQuRklFTERfU0laRSk7XHJcbiAgICAgICAgdGhpcy5mb29kLmRyYXcodGhpcy5jdHgpO1xyXG4gICAgICAgIHRoaXMuc25ha2UuZHJhdyh0aGlzLmN0eCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGFydEdhbWUoKTogdm9pZCB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUga2V5Ym9hcmRJbnB1dCgpOiB2b2lkIHtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM3KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc25ha2UuY2hhbmdlRGlyZWN0aW9uKERpcmVjdGlvbi5MRUZUKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSAzOCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbmFrZS5jaGFuZ2VEaXJlY3Rpb24oRGlyZWN0aW9uLlVQKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSAzOSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbmFrZS5jaGFuZ2VEaXJlY3Rpb24oRGlyZWN0aW9uLlJJR0hUKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSA0MCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbmFrZS5jaGFuZ2VEaXJlY3Rpb24oRGlyZWN0aW9uLkRPV04pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbnZhciBHYW1lIDogU25ha2VHYW1lID0gbmV3IFNuYWtlR2FtZSgpO1xyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9