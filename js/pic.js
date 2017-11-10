//无限加载
function checkImg(){
    const oCont = document.getElementsByClassName("content")[0];
    for(var i=3;i<=8;){
        var oDiv1 = document.createElement("div");
        oDiv1.className="cont-spic";
        var oDiv2 = document.createElement("div");
        oDiv2.className="cont-spic-left";
        var oDiv3 = document.createElement("div");
        oDiv3.className="cont-spic-right";
        var oDiv4 = document.createElement("div");
        oDiv4.className="cont-spic-image";
        var oDiv5 = document.createElement("div");
        oDiv5.className="cont-spic-image";
        var oImg1 = document.createElement("img");
        oImg1.src="img/home/like/"+i+".png";
        var oImg2 = document.createElement("img");
        oImg2.src="img/home/like/"+(i+1)+".png";
        oDiv4.appendChild(oImg1);
        oDiv5.appendChild(oImg2);
        oDiv3.appendChild(oDiv5);
        oDiv2.appendChild(oDiv4);
        oDiv1.appendChild(oDiv2);
        oDiv1.appendChild(oDiv3);
        oCont.appendChild(oDiv1);
        i=i+2;
    }
    $(".content .cont-spic .cont-spic-image img").click(function () {
        window.location="special.html";
    });
    isScrollToPageBottom();
    watchScroll();
}

function getViewportSize(w){
    //使用指定的窗口，如果不带参数则使用当前窗口
    w=w||window;
    //除了IE8及更早的版本以外，其他浏览器都能用
    if(w.innerWidth!=null)return{w:w.innerWidth,h:w.innerHeight};
    //对标准模式下的IE（或任意浏览器）
    var d=w.document;
    if(document.compatMode=="CSS1Compat")
        return{w:d.documentElement.clientWidth,
            h:d.documentElement.clientHeight};
    //对怪异模式下的浏览器
    return{w:d.body.clientWidth,h:d.body.clientHeight};
}

//检测滚动条是否滚动到页面底部
function isScrollToPageBottom(){
    //文档高度
    var documentHeight=document.documentElement.offsetHeight;
    var viewPortHeight=getViewportSize().h;
    var scrollHeight=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;
    return documentHeight-viewPortHeight-scrollHeight<200;
}

//页面滚到底部的时候加载新的图片
function watchScroll(){
    if(!isScrollToPageBottom()){
        setTimeout(arguments.callee,0);
        return;
    }else{
        checkImg();
    }
}