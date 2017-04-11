(function($,sr){var debounce=function(func,threshold,execAsap){var timeout;return function debounced(){var obj=this,args=arguments;function delayed(){if(!execAsap)func.apply(obj,args);timeout=null;};if(timeout)clearTimeout(timeout);else if(execAsap)func.apply(obj,args);timeout=setTimeout(delayed,threshold||150);};}
jQuery.fn[sr]=function(fn){return fn?this.bind('resize',debounce(fn)):this.trigger(sr);};})(jQuery,'smartresize');(function($){$.Gal=function(options,element){this.element=$(element);this._init(options);};$.Gal.settings={selector:'.item',width:225,gutter:20,animate:false,animationOptions:{speed:200,duration:300,effect:'fadeInOnAppear',queue:true,complete:function(){}},};$.Gal.prototype={_init:function(options){var container=this;this.name=this._setName(5);this.gridArr=[];this.gridArrAppend=[];this.gridArrPrepend=[];this.setArr=false;this.setGrid=false;this.setOptions;this.cols=0;this.itemCount=0;this.prependCount=0;this.isPrepending=false;this.appendCount=0;this.resetCount=true;this.ifCallback=true;this.box=this.element;this.options=$.extend(true,{},$.Gal.settings,options);this.gridArr=$.makeArray(this.box.find(this.options.selector));this.isResizing=false;this.w=0;this.boxArr=[];this._setCols();this._renderGrid('append');$(this.box).addClass('gridalicious');$(window).smartresize(function(){container.resize();});},_setName:function(length,current){current=current?current:'';return length?this._setName(--length,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".charAt(Math.floor(Math.random()*60))+current):current;},_setCols:function(){this.cols=Math.floor(this.box.width()/this.options.width);if(this.cols<1){this.cols=1;}diff=(this.box.width()-(this.cols*this.options.width)-this.options.gutter)/this.cols;w=(this.options.width+diff)/this.box.width()*100;this.w=w;for(var i=0;i<this.cols;i++){var div=$('<div></div>').addClass('galcolumn').attr('id','item'+i+this.name).css({'width':w+'%','paddingLeft':this.options.gutter,'paddingBottom':this.options.gutter,'float':'left','-webkit-box-sizing':'border-box','-moz-box-sizing':'border-box','-o-box-sizing':'border-box','box-sizing':'border-box'});this.box.append(div);}this.box.find($('#clear'+this.name)).remove();var clear=$('<div></div>').css({'clear':'both','height':'0','width':'0','display':'block'}).attr('id','clear'+this.name);this.box.append(clear);},_renderGrid:function(method,arr,count,prepArray){var items=[];var boxes=[];var prependArray=[];var itemCount=0;var prependCount=this.prependCount;var appendCount=this.appendCount;var gutter=this.options.gutter;var cols=this.cols;var name=this.name;var i=0;var w=$('.galcolumn').width();if(arr){boxes=arr;if(method=="append"){appendCount+=count;itemCount=this.appendCount;}if(method=="prepend"){this.isPrepending=true;itemCount=Math.round(count%cols);if(itemCount<=0)itemCount=cols;}if(method=="renderAfterPrepend"){appendCount+=count;itemCount=count;}}else{boxes=this.gridArr;appendCount=$(this.gridArr).size();}$.each(boxes,function(index,value){var item=$(value);var width='100%';if(item.hasClass('not-responsive')){width='auto';}item.css({'marginBottom':gutter,'zoom':'1','filter':'alpha(opacity=0)','opacity':'0'}).find('img, object, embed, iframe').css({'width':width,'height':'auto','display':'block','margin-left':'auto','margin-right':'auto'});if(method=='prepend'){itemCount--;$("#item"+itemCount+name).prepend(item);items.push(item);if(itemCount==0)itemCount=cols;}else{$("#item"+itemCount+name).append(item);items.push(item);itemCount++;if(itemCount>=cols)itemCount=0;if(appendCount>=cols)appendCount=(appendCount-cols);}});this.appendCount=appendCount;this.itemCount=itemCount;if(method=="append"||method=="prepend"){if(method=="prepend"){this._updateAfterPrepend(this.gridArr,boxes);}this._renderItem(items);this.isPrepending=false;}else{this._renderItem(this.gridArr);}},_collectItems:function(){var collection=[];$(this.box).find(this.options.selector).each(function(i){collection.push($(this));});return collection;},_renderItem:function(items){var speed=this.options.animationOptions.speed;var effect=this.options.animationOptions.effect;var duration=this.options.animationOptions.duration;var queue=this.options.animationOptions.queue;var animate=this.options.animate;var complete=this.options.animationOptions.complete;var i=0;var t=0;if(animate===true&&!this.isResizing){if(queue===true&&effect=="fadeInOnAppear"){if(this.isPrepending)items.reverse();$.each(items,function(index,value){setTimeout(function(){$(value).animate({opacity:'1.0'},duration);t++;if(t==items.length){complete.call(undefined,items)}},i*speed);i++;});}else if(queue===false&&effect=="fadeInOnAppear"){if(this.isPrepending)items.reverse();$.each(items,function(index,value){$(value).animate({opacity:'1.0'},duration);t++;if(t==items.length){if(this.ifCallback){complete.call(undefined,items);}}});}if(queue===true&&!effect){$.each(items,function(index,value){$(value).css({'opacity':'1','filter':'alpha(opacity=1)'});t++;if(t==items.length){if(this.ifCallback){complete.call(undefined,items);}}});}}else{$.each(items,function(index,value){$(value).css({'opacity':'1','filter':'alpha(opacity=1)'});});if(this.ifCallback){complete.call(items);}}},_updateAfterPrepend:function(prevItems,newItems){var gridArr=this.gridArr;$.each(newItems,function(index,value){gridArr.unshift(value);})
this.gridArr=gridArr;},resize:function(){this.box.find($('.galcolumn')).remove();this._setCols();this.ifCallback=false;this.isResizing=true;this._renderGrid('append');this.ifCallback=true;this.isResizing=false;},append:function(items){var gridArr=this.gridArr;var gridArrAppend=this.gridArrPrepend;$.each(items,function(index,value){gridArr.push(value);gridArrAppend.push(value);});this._renderGrid('append',items,$(items).size());},prepend:function(items){this.ifCallback=false;this._renderGrid('prepend',items,$(items).size());this.ifCallback=true;},}
$.fn.gridalicious=function(options,e){if(typeof options==='string'){this.each(function(){var container=$.data(this,'gridalicious');container[options].apply(container,[e]);});}else{this.each(function(){$.data(this,'gridalicious',new $.Gal(options,this));});}return this;}})(jQuery);