// //无限加载
function checkImg(){
    var oCont = document.getElementsByClassName("choose-menu-color")[0];
    var oP = document.createElement("p");
    // oP.className="order-enjoy-pic";
    var oEm1 = document.createElement("em");
    oEm1.innerHTML="勃更第酒红";
    oEm1.className="left";
    var oEm2 = document.createElement("em");
    oEm2.innerHTML="锈红";
    oEm2.className="right";
    var oEm3 = document.createElement("em");
    // oA1.href="details.html";
    var oEm4 = document.createElement("em");
    // oA2.href="details.html";
    oEm1.appendChild(oEm3);
    oEm2.appendChild(oEm4);
    oP.appendChild(oEm1);
    oP.appendChild(oEm2);
    oCont.appendChild(oP);
    $(".choose-menu-lining.choose-menu-color p em").click(function () {
            $(".content .choose-menu .choose-menu-lining.choose-menu-color p em").removeClass("on");
            $(this).addClass("on");
        }
    );
}

 function scrollBottomTest(){
    $(".choose-menu").scroll(function(){
        var $this =$(this),
            viewH =$(this).height(),//可见高度
            contentH =$(this).get(0).scrollHeight,//内容高度
            scrollTop =$(this).scrollTop();//滚动高度
        if(contentH - viewH - scrollTop <= 100) { //到达底部100px时,加载新内容
        // if(scrollTop/(contentH -viewH)>=0.95){ //到达底部100px时,加载新内容
            // 这里加载数据..
            checkImg();
        }
    });
}
scrollBottomTest();