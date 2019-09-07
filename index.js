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
    }
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
    // menuli.fadeIn(3000);
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
    window.location.href = "./vCompute/vCompute.html"
});
$("#data").click(function(){
    window.location.href = "./vData/vData.html"
});
$("#analyze").click(function(){
    window.location.href = "./vAnalyze/vAnalyze.html"
});
$("#maker").click(function(){
    window.location.href = "./vMaker/vMaker.html"
});
$("#studio").click(function(){
    window.location.href = "./vStudio/vStudio.html"
});
$("#director").click(function(){
    window.location.href = "./vDirector/vDirector.html"
});
$("#computea").click(function(){
    window.location.href = "./vCompute/vCompute.html"
});
$("#dataa").click(function(){
    window.location.href = "./vData/vData.html"
});
$("#analyzea").click(function(){
    window.location.href = "./vAnalyze/vAnalyze.html"
});
$("#makera").click(function(){
    window.location.href = "./vMaker/vMaker.html"
});
$("#studioa").click(function(){
    window.location.href = "./vStudio/vStudio.html"
});
$("#directora").click(function(){
    window.location.href = "./vDirector/vDirector.html"
});
//点击顶部li滑动到对应区域
// $('#top a').click(function(){
//     $('html,body').animate({
//         scrollTop:$('.toptop').offset().top
//     }, 1500);
// }); 
// $('#cooperation a').click(function(){
//     $('html,body').animate({
//         scrollTop:$('.cooperation').offset().top
//     }, 1500);
// }); 
// $('#logo a').click(function(){
//     $('html,body').animate({
//         scrollTop:$('.logo').offset().top
//     }, 1500);
// });   

//图片层叠轮播
let classes = ['left','center','right'];
function before(){
    let last = classes.pop();
    classes.unshift(last);
    for(let i=0;i<classes.length;i++){
        $('#ul>li:eq('+i+')').attr("class",classes[i]);
    }
    for(let i=0;i<classes.length;i++){
        if($('#ul>li:eq('+i+')').attr("class")=='center'){
        }
    }
};
function after(){
    let first = classes.shift();
    classes.push(first);
    for(let i=0;i<classes.length;i++){
        $('#ul>li:eq('+i+')').attr("class",classes[i]);
    }
    for(let i=0;i<classes.length;i++){
        if($('#ul>li:eq('+i+')').attr("class")=='center'){
        }
    }
};
for(let i=0;i<classes.length;i++){
    (function(i){
        $('#ul>li:eq('+i+')').click(function(){
            if($('#ul>li:eq('+i+')').attr("class")=="left"){
                after();
            }else if($('#ul>li:eq('+i+')').attr("class")=="right"){
                before();
            }else{
                return false;
            }
        });
    })(i);
};

  
