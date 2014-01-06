/*! kcharts - v1.3 - 2014-01-06 9:55:15 AM
* Copyright (c) 2014 数据可视化小组; Licensed  */
KISSY.add("gallery/kcharts/1.3/linechart/theme",function(){var t="{COLOR}",e={"ks-chart-default":{title:{content:"",css:{"text-align":"center","font-size":"16px","font-weight":"bold",color:"#666"},isShow:!0},subTitle:{content:"",css:{"text-align":"center","font-size":"12px",color:"#666"},isShow:!0},points:{attr:{stroke:"#fff",r:4,"stroke-width":1.5,fill:t},hoverAttr:{stroke:"#fff",r:5,fill:t,"stroke-width":0}},xGrids:{css:{color:"#eee"}},yGrids:{css:{color:"#eee"}},yAxis:{css:{color:"#ccc"}},xAxis:{css:{color:"#ccc"}},xLabels:{css:{color:"#666","font-size":"12px"}},yLabels:{css:{color:"#666","font-size":"12px"}},pointLine:{css:{color:"#ccc"}},tip:{css:{border:"1px solid {COLOR}"}}},"ks-chart-analytiks":{title:{content:"",css:{"text-align":"center","font-size":"16px","font-weight":"bold",color:"#666"},isShow:!0},subTitle:{content:"",css:{"text-align":"center","font-size":"12px",color:"#666"},isShow:!0},points:{attr:{type:"circle",stroke:"{COLOR}",fill:"#fff",r:4,"stroke-width":2},hoverAttr:{type:"circle",stroke:"{COLOR}",fill:"#fff",r:5,"stroke-width":2}},xGrids:{css:{color:"#eee"}},yGrids:{css:{color:"#eee"}},yAxis:{css:{color:"#ccc"}},xAxis:{css:{color:"#ccc"}},xLabels:{css:{color:"#666","font-size":"12px"}},yLabels:{css:{color:"#666","font-size":"12px"}},pointLine:{css:{color:"#ccc"}},tip:{css:{border:"1px solid {COLOR}"}}},"ks-chart-rainbow":{title:{content:"",css:{"text-align":"center","font-size":"16px","font-weight":"bold",color:"#666"},isShow:!0},subTitle:{content:"",css:{"text-align":"center","font-size":"12px",color:"#666"},isShow:!0},points:{attr:{type:"circle",stroke:"#fff",r:4,"stroke-width":1.5,fill:t},hoverAttr:{type:"circle",stroke:"#fff",r:5,fill:t,"stroke-width":0}},xGrids:{css:{color:"#eee"}},yGrids:{css:{color:"#eee"}},yAxis:{css:{color:"#ccc"}},xAxis:{css:{color:"#ccc"}},xLabels:{css:{color:"#666","font-size":"12px"}},yLabels:{css:{color:"#666","font-size":"12px"}},pointLine:{css:{color:"#ccc"}},tip:{css:{border:"1px solid {COLOR}"}}}};return e}),KISSY.add("gallery/kcharts/1.3/linechart/index",function(t,e,i,n,r,s,a,o,c,l,h,f,d,p,_,g){var u,x,v=t.all,m="ks-chart-",y=m+"default",b=m+"evtlayout",w="{COLOR}",k=["circle","triangle","rhomb","square"],L={initializer:function(){this.init()},init:function(){var e,i,n=this;if(n._cfg||(n._cfg=n.userConfig),o.prototype.init.call(n,n._cfg),n.chartType="linechart",n._$ctnNode[0]){var r={themeCls:y,autoRender:!0,comparable:!1,lineType:"straight",colors:[],title:{content:"",css:{"text-align":"center","font-size":"16px"},isShow:!0},subTitle:{content:"",css:{"text-align":"center","font-size":"12px"},isShow:!0},points:{attr:{type:"circle",stroke:"#fff",r:4,"stroke-width":1.5,fill:w},hoverAttr:{type:"circle",stroke:"#fff",r:5,fill:w,"stroke-width":0}},xLabels:{isShow:!0,css:{color:"#666","font-size":"12px","white-space":"nowrap",position:"absolute"}},yLabels:{isShow:!0,css:{color:"#666","font-size":"12px","white-space":"nowrap",position:"absolute"}},xAxis:{isShow:!0,css:{zIndex:10}},yAxis:{isShow:!0,css:{zIndex:10},num:5},xGrids:{isShow:!0,css:{}},yGrids:{isShow:!0,css:{}},areas:{isShow:!1,css:{}},line:{isShow:!0,attr:{"stroke-width":"3px"},hoverAttr:{"stroke-width":"4px"}},pointLine:{isShow:!1,css:{}},legend:{isShow:!1},tip:{isShow:!0,clsName:"",template:"",css:{},offset:{x:0,y:0},boundryDetect:!0}};n._lines={},n._finished=[],y=n._cfg.themeCls||r.themeCls,n._cfg=t.mix(t.mix(r,f[y],d,d,!0),n._cfg,d,d,!0),n.color=u=new c({themeCls:y}),n._cfg.colors.length>0&&u.removeAllColors();for(var s in n._cfg.colors)u.setColor(n._cfg.colors[s]);n.__cfg=n.cloneSeriesConfig(["line","points"]),e=n._points[0],i=Math.round(e&&e[0]&&e[1]&&e[1].x-e[0].x||n.getInnerContainer().width),i&&n.set("area-width",i),n._cfg.autoRender&&n.render(!0)}},cloneSeriesConfig:function(e){var i,n=this,r={},s=t.clone(n._cfg);if(e){for(var a in e)for(var o in n._cfg.series)i=n._cfg.series[o][e[a]]?t.mix(s[e[a]],n._cfg.series[o][e[a]],d,d,!0):n._cfg[e[a]],i&&(r[e[a]]||(r[e[a]]=[]),r[e[a]][o]=i);return r}},drawTitle:function(){if(this._cfg.title.isShow){var e=this,i=e.htmlPaper,n=y+"-title",r=e._cfg,s=e._innerContainer,a=.6*s.y;e._title=i.rect(0,0,e._$ctnNode.width(),a).addClass(n).css(t.mix({"line-height":a+"px"},r.title.css)).html(r.title.content)}},drawSubTitle:function(){if(this._cfg.subTitle.isShow){var e=this,i=e.htmlPaper,n=y+"-subtitle",r=e._cfg,s=e._innerContainer,a=.4*s.y;e._subTitle=i.rect(0,.6*s.y,e._$ctnNode.width(),a).addClass(n).css(t.mix({"line-height":a+"px"},r.subTitle.css)).html(r.subTitle.content)}},getRealPointsNum:function(t){var e=0;for(var i in t)t[i].x&&t[i].y&&e++;return e},getVisableLineNum:function(){for(var t=this,e=t._cfg,i=e.series.length,n=i,r=0;i>r;r++)0==e.series[r].isShow&&n--;return n},drawLine:function(t,e){var i=this,n=i._points[t];if(n&&n.length){var r=i.getLinePath(n),s=i.paper,a=i.color.getColor(t).DEFAULT,o=i.__cfg.line[t].attr,c=s.path(r).attr(o).attr({stroke:a}),l=i.getVisableLineNum();return i._stocks[t].stocks=i.drawStocks(t,i.processAttr(i._cfg.points.attr,a)),i._finished.push(!0),i._finished.length==l&&e&&e(),c}},getFirstUnEmptyPointIndex:function(t){var e=this,i=e._points[t];for(var n in i)if(!e.isEmptyPoint(i[n]))return n},animateLine:function(e,i){var n,r,s,o,c,l=this,h=[],f=0,d=0,p=l._cfg,g=l.paper,x=l._points[e],v=l._stocks[e].type,m=l.getLinePath(x),y=a.getTotalLength(m),b=(x.length||0,l.getRealPointsNum(x),p.anim?p.anim.duration||500:500),w="easeNone",k=l.get("area-width"),L=t.mix({stroke:u.getColor(e).DEFAULT},p.line.attr),C=l.__cfg.line[e].attr,A=g.path(n).attr(C).attr({stroke:u.getColor(e).DEFAULT});for(var S in l._points[e])h[S]="";return c=l.getFirstUnEmptyPointIndex(e),h[c]=l.drawStock(x[c].x,x[c].y,l.processAttr(p.points.attr,L.stroke),v),o=l.getVisableLineNum(),new _({},{},{duration:b,easing:w,frame:function(){r=arguments[1]*y,n=a.getSubpath(m,d,r),s=a.pathBBox(n),f=Math.floor(1.01*s.width/k)- -c,!h[f]&&x[f]&&(h[f]=l.drawStock(x[f].x,x[f].y,l.processAttr(p.points.attr,L.stroke),v));for(var t in x)f>t&&(h[t]||(h[t]=l.drawStock(x[t].x,x[t].y,l.processAttr(p.points.attr,L.stroke),v)));A&&A.attr({path:n})},endframe:function(){l._stocks[e].stocks=h,l._finished.push(!0),l._finished.length==o&&i&&i()}}),A},getLinePath:function(t){var e=this,i="",n=(e._innerContainer.bl.y,e.getRealPointsNum(t)),r=0;if(!t)return"";if(r=function(){for(var i in t)if(!e.isEmptyPoint(t[i]))return Math.round(i)}(),i+="M"+t[r].x+","+t[r].y,"arc"==e._cfg.lineType&&n>2){i+=" R";for(var s=r+1,n=t.length;n>s;s++)t[s].x&&t[s].y&&(i+=t[s].x+","+t[s].y+" ")}else for(var s=r+1,n=t.length;n>s;s++)t[s].x&&t[s].y&&(i+=" L"+t[s].x+","+t[s].y);return i},drawLines:function(e){var i=this,n=i._cfg,r=k.length;i._lines={},i._stocks={};for(var s in i._points){var a,o=i.getLinePath(i._points[s]),c=u.getColor(s),l=i.processAttr(i._cfg.points.attr,c.DEFAULT),h=i.processAttr(i._cfg.points.hoverAttr,c.HOVER);if(i._stocks[s]={points:i._points[s],color:c,attr:l,hoverAttr:h,type:"auto"==l.type?k[s%r]:l.type},n.anim)try{a=0==n.series[s].isShow?d:i.animateLine(s,e)}catch(f){a=0==n.series[s].isShow?d:i.drawLine(s,e)}else a=0==n.series[s].isShow?d:i.drawLine(s,e);i._lines[s]={line:a,path:o,points:i._points[s],color:c,attr:t.mix({stroke:c.DEFAULT},i._cfg.line.attr),isShow:n.series[s].isShow===!1?!1:!0}}return i._lines},processAttr:function(e,i){var n=t.clone(e);for(var r in n)n[r]&&"string"==typeof n[r]&&(n[r]=n[r].replace(w,i));return n},drawStocks:function(t,e){var i=this,n=[],r=i._points[t],s=i._stocks[t].type;for(var a in r)r[a].x&&r[a].y?n.push(i.drawStock(r[a].x,r[a].y,e,s)):n.push("");return n},drawStock:function(t,e,i,n){var r,s=this,a=s.paper,o=s._cfg.points.attr;if(t&&e){switch(n){case"triangle":r=g.triangle(a,t,e,1.4*o.r);break;case"rhomb":r=g.rhomb(a,t,e,2.4*o.r,2.4*o.r);break;case"square":r=g.rhomb(a,t,e,2.4*o.r,2.4*o.r,45);break;default:r=a.circle(t,e,o.r,i)}return r.attr(o).attr(i),r}return""},drawGridsX:function(){if(this._cfg.xGrids.isShow){for(var t=this,e=t._points[0],i=function(){var t=e.length,i=[];if(t>1){var n=(e[1].x-e[0].x)/2;i.push({x:e[0].x-n});for(var r in e)i.push({x:e[r].x- -n})}return i}(),n=0,r=i.length;r>n;n++){var s=t.drawGridX(i[n]);t._gridsX.push(s)}return t._gridsX}},drawGridX:function(t,e){var i=this,n=i._innerContainer.tl.y,r=i._innerContainer.height,e=e||i._cfg.xGrids.css,s=i.htmlPaper,a=i._cfg.themeCls+"-gridsx";return s.lineY(t.x,n,r).addClass(a).css(i._cfg.xGrids.css)},drawGridY:function(t,e){var i=this,n=i._innerContainer.width,e=e||i._cfg.yGrids.css,r=i.htmlPaper,s=i._cfg.themeCls+"-gridsy";return r.lineX(t.x,t.y,n).addClass(s).css(e)},drawGridsY:function(){if(this._cfg.yGrids.isShow)for(var t=this,e=t._innerContainer.tl.x,i=t._pointsY,n=0,r=i.length;r>n;n++)t._gridsY[n]={0:t.drawGridY({x:e,y:i[n].y}),num:t.coordNum[n]}},drawAreas:function(){if(this._cfg.areas.isShow)for(var t=this,e=t._innerContainer,i=e.tl.y,n=t._points[0],r=Math.round(n&&n[0]&&n[1]&&n[1].x-n[0].x||e.width),s=Math.round(t._innerContainer.height),a=t.htmlPaper,o=t._cfg.themeCls+"-areas",c=t._cfg.areas.css,l=0,h=n.length;h>l;l++){var f=a.rect(n[l].x-r/2,i,r,s).addClass(o).css(c);t._areas.push(f)}},drawAxisX:function(){if(this._cfg.xAxis.isShow){var t=this,e=t._innerContainer,i=e.bl,n=e.width,r=t.htmlPaper,s=t._cfg.themeCls+"-axisx";return t._axisX=r.lineX(i.x,i.y,n).addClass(s).css(t._cfg.xAxis.css||{}),t._axisX}},drawAxisY:function(){if(this._cfg.yAxis.isShow){var t=this,e=t._innerContainer,i=e.tl,n=e.height,r=t.htmlPaper,s=t._cfg.themeCls+"-axisy";return t._axisY=r.lineY(i.x,i.y,n).addClass(s).css(t._cfg.yAxis.css||{}),t._axisY}},drawLabelsX:function(){if(this._cfg.xLabels.isShow){var t=this,e=t._cfg.xAxis.text;for(var i in e)t._labelX[i]=t.drawLabelX(i,e[i])}},drawLabelsY:function(){if(this._cfg.yLabels.isShow){var t=this;for(var e in t._pointsY)t._labelY[e]={0:t.drawLabelY(e,t._pointsY[e].number),num:t._pointsY[e].number};return t._labelY}},drawLabelX:function(e,i){var n,r=this,a=r.htmlPaper,o=r._pointsX,c=o.length||0,l=r._cfg.themeCls+"-xlabels",h="{{data}}",f="";return c>e?(h=r._cfg.xLabels.template||h,f=t.isFunction(h)?h(e,i):s(h).render({data:i}),n=o[e],n[0]=a.text(n.x,n.y,"<span class="+l+">"+f+"</span>","center").children().css(r._cfg.xLabels.css),n[0]):d},drawLabelY:function(e,i){var n=this,r=n.htmlPaper,a=n._cfg.themeCls+"-ylabels",o="{{data}}",c="";return o=n._cfg.yLabels.template||o,c=t.isFunction(o)?o(e,i):s(o).render({data:i}),c&&r.text(n._pointsY[e].x,n._pointsY[e].y,"<span class="+a+">"+c+"</span>","right","middle").children().css(n._cfg.yLabels.css)},drawPointLine:function(){if(this._cfg.comparable){var t=this,e=t.htmlPaper,i=t._cfg.themeCls+"-pointline",n=t._innerContainer;return t._pointline=e.lineY(0,n.tl.y,n.height).addClass(i).css(t._cfg.pointLine.css).css({display:"none"}),t._pointline}},renderTip:function(){if(this._cfg.tip.isShow){var e=this,i=e._cfg,n=e._innerContainer,r=i.tip.boundryDetect?{x:n.tl.x,y:n.tl.y,width:n.width,height:n.height}:{},s=t.mix(i.tip,{rootNode:e._$ctnNode,clsName:i.themeCls,boundry:r},d,d,!0);return e.tip=new p(s),e.tip}},renderEvtLayout:function(){var t,e=this,i=e._innerContainer,n=(i.tl.y,e._points[0]),r=n&&n[0]&&n[1]&&n[1].x-n[0].x||i.width,s=i.height,a=e._multiple,o=e._evtEls._areas=[],c=e._evtEls._rects=[];t=e._evtEls.paper?e._evtEls.paper:e._evtEls.paper=new l(e._$ctnNode,{clsName:b,prependTo:!1,width:i.width,height:s,left:i.tl.x,top:i.tl.y,css:{"z-index":20,background:"#fff",filter:"alpha(opacity =1)","-moz-opacity":.01,"-khtml-opacity":.01,opacity:.01}});for(var h=0,f=n.length;f>h;h++)o[h]={x:n[h].x-r/2,y:i.tl.y,width:r,height:s};if(a)for(var h in e._stocks){var d=e._stocks[h],c=[],n=d.points;if(d.stocks){for(var p in n)c[p]={x:n[p].x-r/2,y:n[p].y-5,width:r,height:10};e._evtEls._rects[h]=c}}},clearEvtLayout:function(){var t=this;t._evtEls._areas&&t._evtEls._areas.length&&(t._evtEls._areas=[]),t._evtEls._rects&&t._evtEls._rects.length&&(t._evtEls._rects=[])},renderLegend:function(){if(this._cfg.legend.isShow){var e=this,i=e._cfg.legend,n=i.container&&v(i.container)[0]?v(i.container):e._$ctnNode,r=e._stocks,s=e._innerContainer,a=e.color._colors,o=a.length,c=e._cfg,l=e._cfg.series,f=t.map(l,function(t,e){e%=o;var i={},n=a[e];i.text=t.text,i.DEFAULT=n.DEFAULT,i.HOVER=n.HOVER;var s=r[e].type;return i.icontype="line"+s,i.iconsize=[1,1],i}),d=t.merge({interval:20,iconright:5,showicon:!0},c.legend.globalConfig);return e.legend=new h({container:n,paper:e.paper,bbox:{width:s.width,height:s.height,left:s.x,top:s.y},align:c.legend.align||"bc",offset:c.legend.offset||[0,30],globalConfig:d,config:f}),e.legend.on("click",function(t){var e=t.index,i=(t.text,t.icon,t.el);1!=i.hide?(this.hideLine(e),i.hide=1,i.disable()):(this.showLine(e),i.hide=0,i.enable())},this),e.legend}},render:function(e){var i=this,n=i._cfg,r=n.themeCls;i.beforeRender(),e&&i._$ctnNode.html(""),i.paper=a(i._$ctnNode[0],n.width,n.height),i.htmlPaper=new l(i._$ctnNode,{clsName:r}),i.drawTitle(),i.drawSubTitle(),i.renderTip(),i.drawAreas(),i.drawGridsX(),i.drawGridsY(),i.drawPointLine(),i.drawAxisX(),i.drawAxisY(),i.drawLabelsX(),i.drawLabelsY(),n.anim?i.drawLines(function(){i.renderEvtLayout(),i.bindEvt(),i.renderLegend(),t.log("finish"),i.afterRender(),i.fix2Resize()}):(i.drawLines(),i.renderEvtLayout(),i.bindEvt(),i.renderLegend(),i.afterRender(),i.fix2Resize()),t.log(i)},bindEvt:function(){var t=this,e=(t._cfg,t._evtEls);t.curStockIndex=function(){for(var e in t._stocks)if(t._stocks[e].stocks)return e}(),t.curLineIndex=t.getFirstVisibleLineIndex(),r.detach(e.paper.$paper,"mouseleave"),r.on(e.paper.$paper,"mouseleave",function(){t._lines[0].line.attr(t._lines[0].attr),t.tip&&t.tip.hide(),t._pointline&&t._pointline.hide();for(var e in t._stocks)for(var i in t._stocks[e].stocks)t._stocks[e].stocks[i]&&t._stocks[e].stocks[i].attr&&t._stocks[e].stocks[i].attr(t._stocks[e].attr);t.curStockIndex=d,t.paperLeave()}),r.detach(e.paper.$paper,"mousemove"),r.on(e.paper.$paper,"mousemove",function(e){e=t.getOffset(e),t.delegateMouseMove(e)}),r.detach(e.paper.$paper,"click"),r.on(e.paper.$paper,"click",function(e){e=t.getOffset(e),t.delegateClick(e)})},delegateClick:function(t){var e=this,i=e.getInnerContainer();for(var n in e._evtEls._rects)for(var r in e._evtEls._rects[n]){var s=e._evtEls._rects[n][r];if(e.isInSide(t.offsetX+i.x,t.offsetY+i.y,s.x,s.y,s.width,s.height))return e.stockClick(n,r),d}},delegateMouseMove:function(t){var e=this,i=e.getInnerContainer(),n=e.curStockIndex;for(var r in e._evtEls._areas){var s=e._evtEls._areas[r];if(e.isInSide(t.offsetX+i.x,t.offsetY+i.y,s.x,s.y,s.width,s.height)&&(n===d||n!=r))return e.curStockIndex=r,e.tipHandler(e.curLineIndex,e.curStockIndex),d}for(var r in e._evtEls._rects)for(var a in e._evtEls._rects[r]){var o=e._evtEls._rects[r][a];if(e.isInSide(t.offsetX+i.x,t.offsetY+i.y,o.x,o.y,o.width,o.height)){if(e.curLineIndex===r)return;return e.lineChangeTo(r),e.tipHandler(e.curLineIndex,e.curStockIndex),d}}},tipHandler:function(e,i){var n=this;if(e!==d&&i!==d){var r,s=n.tip,a=n._cfg,c=a.series,l=a.tip.template,h=(s.getInstance(),n._cfg.themeCls+"-areas-hover"),f=n._points[e][i],p=n._lines[e].color.DEFAULT;if(l&&a.tip.isShow&&n.curStockIndex!==d){if(currentPoints=n._points[e],currentStocks=n._stocks[e],currentPoints&&!n.isEmptyPoint(currentPoints[i])&&n._lines[e].isShow){n._pointline&&n._pointline.css({"margin-left":n._pointsX[i].x}).show();for(var _ in n._stocks)for(var g in n._stocks[_].stocks)n._stocks[_].stocks[g]&&n._stocks[_].stocks[g].attr&&n._stocks[_].stocks[g].attr(n._stocks[_].attr);if(n._cfg.comparable)for(var _ in n._stocks)n._stocks[_].stocks&&n._stocks[_].stocks[i]&&n._stocks[_].stocks[i].attr&&n._stocks[_].stocks[i].attr(n._stocks[_].hoverAttr);else currentStocks&&currentStocks.stocks&&currentStocks.stocks[i]&&currentStocks.stocks[i].attr&&currentStocks.stocks[i].attr(currentStocks.hoverAttr);n._areas[i]&&n._areas[i].addClass(h).siblings().removeClass(h)}else{var u=n.getFirstNotEmptyPointsLineIndex(i);u&&n.lineChangeTo(u)}if(n._points[e][i].dataInfo&&n._lines[e].isShow&&n.stockChange(e,i),n._cfg.comparable){var x={datas:{}},v=[];for(var _ in n._points)if(n._stocks[_].stocks&&n._points[_][i].dataInfo){n._points[_][i].dataInfo.color=n._stocks[_].color.DEFAULT;var m=t.merge(n._points[_][i].dataInfo,c[_]);delete m.data,x.datas[_]=m}for(var _ in x.datas)v.push(x.datas[_]);x.datas=o.prototype.arraySort(v,!0,"y"),r=x}else{var r=t.merge(n._points[e][i].dataInfo,c[e]);delete r.data}n.areaChange(i),n.isEmptyPoint(currentPoints[i])||(t.mix(r,{lineindex:e,pointindex:i}),s.fire("setcontent",{data:r}),s.fire("move",{x:f.x,y:f.y,style:n.processAttr(a.tip.css,p)}))}}},getFirstNotEmptyPointsLineIndex:function(t){var e=this;for(var i in e._points)if(!e.isEmptyPoint(e._points[i][t])&&e._lines[i].isShow)return i+"";return""},getFirstVisibleLineIndex:function(){var t=this;for(var e in t._lines)if(t._lines[e].isShow)return e},isEmptyPoint:function(t){return t&&t.dataInfo?!1:!0},hideLine:function(e){var i,n=this,r=500;if(n._lines[e].isShow){n._lines[e].isShow=!1,e==n.curLineIndex&&(n.curLineIndex=n.getFirstVisibleLineIndex()),o.prototype.removeData.call(n,e),n.animateGridsAndLabels(),n._lines[e].line.remove();for(var s in n._stocks){if(e==s){for(var a in n._stocks[e].stocks)n._stocks[e].stocks[a]&&n._stocks[e].stocks[a].remove();delete n._stocks[e].stocks}n._stocks[s].points=n._points[s]}for(var s in n._lines)if(s!=e){var c=n.getLinePath(n._points[s]),l=n._lines[s].path;if(l!=c&&""!=c){n._isAnimating=!0,n._lines[s].line&&n._lines[s].line.stop()&&n._lines[s].line.animate({path:c},r,function(){n._isAnimating=!1}),n._lines[s].path=c;for(var a in n._stocks[s].stocks)n._stocks[s].stocks[a]&&(i=n._stocks[s].stocks[a],i.stop().animate({transform:"T"+(n._stocks[s].points[a].x-n._stocks[s].stocks[a].attr("cx"))+","+(n._stocks[s].points[a].y-n._stocks[s].stocks[a].attr("cy"))},r))}}n.clearEvtLayout(),n.renderEvtLayout(),n.bindEvt(),t.log(n)}},showLine:function(t){var e,i=this,n=500;if(!i._lines[t].isShow){i._lines[t].isShow=!0,i._cfg.series[t].isShow=!0,o.prototype.recoveryData.call(i,t),i.animateGridsAndLabels(),i._lines[t].line=i.drawLine(t);for(var r in i._stocks)i._stocks[r].points=i._points[r];for(var r in i._lines){var s=i.getLinePath(i._points[r]),a=i._lines[r].path;if(a!=s&&i._lines[r].line){i._isAnimating=!0,i._lines[r].line&&i._lines[r].line.stop().animate({path:s},n,function(){i._isAnimating=!1}),i._lines[r].path=s;for(var c in i._stocks[r].stocks)i._stocks[r].stocks[c]&&(e=i._stocks[r].stocks[c],e.stop(),e.animate({transform:"T"+(i._stocks[r].points[c].x-i._stocks[r].stocks[c].attr("cx"))+","+(i._stocks[r].points[c].y-i._stocks[r].stocks[c].attr("cy"))},n))}}i.clearEvtLayout(),i.renderEvtLayout(),i.bindEvt()}},animateGridsAndLabels:function(){var t=this,e=t._cfg,i=e.zoomType;if("y"==i){for(var n in t._labelX)t._labelX[n]&&t._labelX[n][0]&&v(t._labelX[n][0]).remove();for(var n in t._gridsX)t._gridsX[n]&&t._gridsX[n][0]&&v(t._gridsX[n][0]).remove();t.drawLabelsX(),t.drawGridsX()}else if("x"==i){for(var n in t._labelY)t._labelY[n]&&t._labelY[n][0]&&t._labelY[n][0].remove();for(var n in t._gridsY)t._gridsY[n]&&t._gridsY[n][0]&&t._gridsY[n][0].remove();t.drawGridsY(),t.drawLabelsY()}},lineChangeTo:function(t){var e=this,i=(e._cfg,e.__cfg.line[t].hoverAttr);if(!e._isAnimating&&e._lines[t].isShow){for(var n in e._stocks)e._stocks[n].points=e._points[n];for(var n in e._lines)n!=t&&e._lines[n].line&&e._lines[n].line.attr(e.__cfg.line[n].attr);e._lines[t].line.remove();for(var n in e._stocks[t].stocks)e._stocks[t].stocks[n]&&e._stocks[t].stocks[n].remove&&e._stocks[t].stocks[n].remove();e._lines[t].line=e.drawLine(t).attr(i);for(var n in e._stocks)for(var r in e._stocks[n].stocks)if(e._stocks[n].stocks[r]){var s=e._stocks[n].stocks[r];s.attr&&s.attr(e._stocks[n].attr)}e.curLineIndex=t}},fix2Resize:function(){var e=this;e._$ctnNode,e._cfg.anim="";var i=t.buffer(function(){e.init()},200);!e.__isFix2Resize&&e.on("resize",function(){e.__isFix2Resize=1,i()})},areaChange:function(t){var e=this;e.fire("areaChange",{index:t})},paperLeave:function(){var t=this;t.fire("paperLeave",t)},stockClick:function(e,i){var n=this,r=n._stocks[e],s=r.stocks&&r.stocks[i],a=t.mix({target:s,currentTarget:s,lineIndex:Math.round(e),stockIndex:Math.round(i)},r.points[i]);n.fire("stockClick",a)},stockChange:function(e,i){var n=this,r=n._stocks[e],s=r.stocks&&r.stocks[i],a=t.mix({target:s,currentTarget:s,lineIndex:Math.round(e),stockIndex:Math.round(i)},r.points[i]);n.fire("stockChange",a)},beforeRender:function(){var t=this;t.fire("beforeRender",t)},afterRender:function(){var t=this;t.fire("afterRender",t)},getHtmlPaper:function(){return this.htmlPaper},getRaphaelPaper:function(){return this.paper},clear:function(){this._$ctnNode.html("")}};return e.extend?x=o.extend(L):(x=function(t){var e=this;e._cfg=t,e.init()},t.extend(x,o,L)),x},{requires:["base","node","dom","event","gallery/template/1.0/index","gallery/kcharts/1.3/raphael/index","gallery/kcharts/1.3/basechart/index","gallery/kcharts/1.3/tools/color/index","gallery/kcharts/1.3/tools/htmlpaper/index","gallery/kcharts/1.3/legend/index","./theme","gallery/kcharts/1.3/tools/touch/index","gallery/kcharts/1.3/tip/index","gallery/kcharts/1.3/animate/index","gallery/kcharts/1.3/tools/graphtool/index"]});