/**
 * Created by yuxuan on 2017/1/8.
 */
$(function(){
    //$('#dowebok').fullpage({
    //    anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8'],
    //    menu: '.menu'
    //});

    $('#main').fullpage({
        //sectionsColor: ['#fff', '#fff', '#7BAABE', '#f99','red', '#4BBFC3', '#7BAABE', '#f90'],
        //'navigation': true,   //是否显示项目导航

        'afterLoad': function(anchorLink, index){   //滚动到某一屏后的回调函数
            if(index == 1){    //第一屏的时候，调动画
                $('.shan03,.shan01').addClass('run02').removeClass('run01');
                $('.shan02').addClass('run01').removeClass('run02');
            }else{
                $('.shan03,.shan01').addClass('run01').removeClass('run02');
                $('.shan02').addClass('run02').removeClass('run01');
            }

            //右侧导航对应的变色
            $("#menu").find("li").eq(index-1).addClass('active').siblings().removeClass("active");


        },
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8'],
        menu: '.menu'









    });
    $('.logo').click(function(){
        $.fn.fullpage.moveTo(1);
    });

    $('.goBack').click(function(){
        $.fn.fullpage.moveTo(1);
    });

    //第三/四部分 选项卡
    $(".content").css("display","none");   //全部隐藏
    $(".content").eq(0).css("display","block"); //第一个显示
    $(".content").eq(3).css("display","block"); //第3个显示
    $(".content").eq(6).css("display","block"); //第6个显示

    $("#tab01").find("li").on("click",function(){ //遍历li  点击的时候 背景图片换/对应div选项卡换
        //先清除所有的
        $(this).addClass("red_bg").siblings().removeClass("red_bg");
        var index= $(this).index();
        $(".content").eq(index).css("display","block").siblings().css("display","none");
    });

     $("#tab02").find("li").on("click",function(){ //遍历li  点击的时候 背景图片换/对应div选项卡换
        //先清除所有的
        $(this).addClass("red_bg").siblings().removeClass("red_bg");
        var index= $(this).index();
        $(".content").eq(index+3).css("display","block").siblings().css("display","none");
    });

    $("#tab03").find("li").on("click",function(){ //遍历li  点击的时候 背景图片换/对应div选项卡换
        //先清除所有的
        $(this).addClass("red_bg").siblings().removeClass("red_bg");
        var index= $(this).index();
        $(".content").eq(index+6).css("display","block").siblings().css("display","none");
    });

    //点击右侧导航
    $("#menu").find("li").on("click",function(){
        $(this).addClass("active").siblings().removeClass("active");
    })






});


