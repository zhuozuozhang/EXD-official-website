//页面滚动顶部列表固定在窗口上方
var a=$(document);
a.scroll(function(){
    var len=a.scrollTop();
    // console.log(len);
    if(len>0){
        $(".scroll").show();
        $(".top").hide();
        
    }else{
        $(".top").show();
        $(".scroll").hide();
    };
});
//鼠标滑过出现下拉菜单
var up = $(".up");
var down = $(".downa");
var menu  = $("#menu a");
var menuli = $(".menu-li");
menu.mouseover(function(){      
    down.css("display","block");
    up.css("display","none"); 
    menuli.css("display","block");
    });
menuli.mouseover(function(){      
    down.css("display","block");
    up.css("display","none"); 
    menuli.css("display","block");
    });
menu.mouseout(function(){      
    up.css("display","block");
    down.css("display","none"); 
    menuli.css("display","none");
    });   
//鼠标点击下拉菜单出现
var isClick=true;      
menu.click(function(){  
    if(isClick){    
        menuli.css("display","block");  
        down.css("display","block");
        up.css("display","none");
        isClick=false;
    }else{
        up.css("display","block");
        down.css("display","none"); 
        menuli.css("display","none");
        isClick=true;
    }
});
//滚轮滚动下拉菜单消失
var a=$(document);
a.scroll(function(){
    var len=a.scrollTop();
    // console.log(len);
    if(len>0){
        up.css("display","block");
        down.css("display","none"); 
        menuli.css("display","none");         
    }
});
 //点击下拉菜单内容跳转到对应界面
$("#compute").click(function(){
    window.location.href = "../vCompute/vCompute.html"
});
$("#data").click(function(){
    window.location.href = "../vData/vData.html"
});
$("#analyze").click(function(){
    window.location.href = "../vAnalyze/vAnalyze.html"
});
$("#maker").click(function(){
    window.location.href = "../vMaker/vMaker.html"
});
$("#studio").click(function(){
    window.location.href = "../vStudio/vStudio.html"
});
$("#director").click(function(){
    window.location.href = "../vDirector/vDirector.html"
});
$("#computea").click(function(){
    window.location.href = "../vCompute/vCompute.html"
});
$("#dataa").click(function(){
    window.location.href = "../vData/vData.html"
});
$("#analyzea").click(function(){
    window.location.href = "../vAnalyze/vAnalyze.html"
});
$("#makera").click(function(){
    window.location.href = "../vMaker/vMaker.html"
});
$("#studioa").click(function(){
    window.location.href = "../vStudio/vStudio.html"
});
$("#directora").click(function(){
    window.location.href = "../vDirector/vDirector.html"
});

//创建和初始化地图函数：
function initMap(){
    createMap();//创建地图
    setMapEvent();//设置地图事件
    addMapControl();//向地图添加控件
    addMarker();//向地图中添加marker
    addPolyline();//向地图中添加线
}
//创建地图函数：
function createMap(){
    var map = new BMap.Map("dituContent");//在百度地图容器中创建一个地图
    var point = new BMap.Point(116.304763,40.052804);//定义一个中心点坐标
    map.centerAndZoom(point,18);//设定地图的中心点和坐标并将地图显示在地图容器中
    window.map = map;//将map变量存储在全局
}
//地图事件设置函数：
function setMapEvent(){
    map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
    map.enableScrollWheelZoom();//启用地图滚轮放大缩小
    map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
    map.enableKeyboard();//启用键盘上下左右键移动地图
}
//地图控件添加函数：
function addMapControl(){
    //向地图中添加缩放控件
var ctrl_nav = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
map.addControl(ctrl_nav);
    //向地图中添加缩略图控件
var ctrl_ove = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:1});
map.addControl(ctrl_ove);
    //向地图中添加比例尺控件
var ctrl_sca = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
map.addControl(ctrl_sca);
}
//标注点数组
var markerArr = [{
    title:"详细信息☚",
    content:"北京中关村软件园5号楼汉王大厦150室<br/>电话：010-6446626<br/>邮箱：info@smartsct.com",
    point:"116.304668|40.053301",
    icon:"./Aboutus-png/background.png",
    isOpen:0,icon:{w:23,h:25,l:46,t:21,x:9,lb:12}
}];
//创建marker
function addMarker(){
    for(var i=0;i<markerArr.length;i++){
        var json = markerArr[i];
        var p0 = json.point.split("|")[0];
        var p1 = json.point.split("|")[1];
        var point = new BMap.Point(p0,p1);
        var iconImg = createIcon(json.icon);
        var marker = new BMap.Marker(point,{icon:iconImg});
        var iw = createInfoWindow(i);
        var label = new BMap.Label(json.title,{"offset":new BMap.Size(json.icon.lb-json.icon.x-40,16)});
        marker.setLabel(label);
        map.addOverlay(marker);
        label.setStyle({
            borderWidth:"2px",
            borderColor:"#808080",
            fontSize:"16px",
            color:"red",
            cursor:"pointer"
        });
        
        (function(){
            var index = i;
            var _iw = createInfoWindow(i);
            var _marker = marker;
            _marker.addEventListener("click",function(){
                this.openInfoWindow(_iw);
            });
            _iw.addEventListener("open",function(){
                _marker.getLabel().hide();
            })
            _iw.addEventListener("close",function(){
                _marker.getLabel().show();
            })
            label.addEventListener("click",function(){
                _marker.openInfoWindow(_iw);
            })
            if(!!json.isOpen){
                label.hide();
                _marker.openInfoWindow(_iw);
            }
        })()
    }
}
//创建InfoWindow
function createInfoWindow(i){
    var json = markerArr[i];
    var iw = new BMap.InfoWindow("<b class='iw_poi_title' title='" + json.title + "'>" + json.title + "</b><div class='iw_poi_content'>"+json.content+"</div>");
    return iw;
}
//创建一个Icon
function createIcon(json){
    var icon = new BMap.Icon("./Cooperation-png/background.png", new BMap.Size(json.w,json.h),{imageOffset: new BMap.Size(-json.l,-json.t),infoWindowOffset:new BMap.Size(json.lb+5,1),offset:new BMap.Size(json.x,json.h)})
    return icon;
}
//标注线数组
var plPoints = [{style:"solid",weight:4,color:"green",opacity:0.6,points:["116.304174|40.053253","116.304444|40.052811","116.30527|40.053074","116.304929|40.053509","116.304183|40.053246"]}
     ];
//向地图中添加线函数
function addPolyline(){
    for(var i=0;i<plPoints.length;i++){
        var json = plPoints[i];
        var points = [];
        for(var j=0;j<json.points.length;j++){
            var p1 = json.points[j].split("|")[0];
            var p2 = json.points[j].split("|")[1];
            points.push(new BMap.Point(p1,p2));
        }
        var line = new BMap.Polyline(points,{strokeStyle:json.style,strokeWeight:json.weight,strokeColor:json.color,strokeOpacity:json.opacity});
        map.addOverlay(line);
    }
}

initMap();//创建和初始化地图