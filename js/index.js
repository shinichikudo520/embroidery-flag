//获取url的code
var baseUrl = 'https://dr.beilequan.com';
//锁定屏幕滑动

var canTouch = 0;

document.addEventListener("touchmove", function(e) {

    if (canTouch == 0) {

        // e.preventDefault();

        e.stopPropagation();

    }
}, false);



// 禁止安卓图片点击放大

document.addEventListener("click", function(e) {

    if (e.target.nodeName == "IMG") {

        e.preventDefault();

    }

});

//苹果回弹背景
var boo = true;
$("input").focus(function() {
    boo = false;
    setTimeout(function() {
        boo = true;
    }, 20)
})

$("input").blur(function() {
    setTimeout(function() {
        if (boo) {
            $('html,body').animate({ scrollTop: 0 }, 0);
        }
    }, 10)

});

// 适配

var phoneHeight = document.documentElement.clientHeight; //获取当前页面高度
phoneWidth = document.documentElement.clientWidth;

if (phoneHeight / phoneWidth < 1.48) {


    $('.completeFlag .border').css({

        'position': 'absolute',
        'top': '23%',
        'width': '92%',
        'left': '4%'
    })

    $('.enterprisePage .tiananmen').css({

        'top': '-4%'

    })

    $('.indexPage .btn').css({

        'top': '68%'

    })
    $('.xiuPage .xiu_text').css({

        'top': '66%'

    })
    $('.xiuPage .xiu_number').css({

        'top': '66%'

    })
    $('.posterPage .text').css({

        'top': '85%'

    })
    $('.wishPage ul li').css({

        'padding': '6% 0%'

    })
    $('.wishPage ul').css({

        'width': '85%',
        'top': '33%'

    })
    $('.wishPage .stars').css({

        'margin-top': '146%'

    })
    $('.xiuPage .guangxiao').css({

        'height': '40%'

    })
}
if (1.50 < phoneHeight / phoneWidth && phoneHeight / phoneWidth < 1.58) {
    $('.wishPage ul li').css({

        'padding': '7% 0%'

    })
    $('.wishPage ul').css({

        'width': '85%',
        'top': '33%'

    })
}

if (1.61 < phoneHeight / phoneWidth && phoneHeight / phoneWidth < 1.70) {
    $('.wishPage .choose').css({

        'top': '32%'

    })
    $('.wishPage ul').css({

        'top': '36%'

    })
    $('.enterprisePage .tiananmen').css({

        'top': '2%'
    })
}

if (1.7 < phoneHeight / phoneWidth && phoneHeight / phoneWidth < 1.83) {
    $('.wishPage .choose').css({

        'top': '32%'

    })
    $('.wishPage ul').css({

        'top': '36%'

    })
    $('.indexPage .flag').css({

        'top': '27%'
    })
    $('.indexPage .tiananmen').css({

        'top': '46%'
    })
    $('.enterprisePage .tiananmen').css({

        'top': '5%'
    })
    $('.wishPage .stars').css({

            'margin-top': '180%'

        })
        // $('.songzhufu').css({

    //   'width': '68%'

    // })
    $('.wishPage .songzhufu').css({

        'top': '16%',
        'left': '28%'

    })
}

if (phoneHeight / phoneWidth > 1.89) {
    $('.wishPage .choose').css({

        'top': '32%'

    })
    $('.wishPage ul').css({

        'top': '35%'

    })

    $('.wishPage ul li').css({

        'padding': '8.5% 0%'

    })
    $('.indexPage .flag').css({

        'top': '31%'
    })
    $('.indexPage .tiananmen').css({

        'top': '50%'
    })

    $('.enterprisePage .tiananmen').css({

        'top': '7.5%'
    })

    $('.xiuPage .xiu_text').css({

        'top': '59%'

    })
    $('.xiuPage .xiu_number').css({

        'top': '60%'

    })

    $('.wishPage .stars').css({

            'margin-top': '195%'

        })
        // $('.wishPage .btn').css({

    //   'top': '85%'

    // })
    $('.erweima').css({

        'top': '81.5%'

    })
    $('.guangxiao').css({

        'top': '21%'

    })
    $('.wishPage .songzhufu').css({

        'top': '16%'

    })

}

if (phoneHeight / phoneWidth == 1.9) {

    $('.wishPage .choose').css({

        'top': '30%'

    })
    $('.wishPage ul').css({

        'top': '32%',

        'width': '85%'

    })

}

// 手机键盘弹出时的适配

winHeight = $(window).height(); //获取当前页面高度
// alert(winHeight)

$(window).resize(function() {

    var thisHeight = $(this).height();

    if (winHeight - thisHeight > 50) {
        //   alert(111);

        //当软键盘弹出，在这里面操作

        if (phoneHeight / phoneWidth < 1.58) {
            $('.wishPage').css({

                'top': '-90%'

            })
        } else {
            $('.wishPage').css({

                'top': '-30%'

            })
        }
        $('.wishPage .bg').css({

            'position': 'static'

        })
        $('.wishPage .stars').css({

            'margin-top': '0%'

        })

        // if(phoneHeight/phoneWidth<1.578){

        //     //   $('.dataPage').css({

        //     //     'top': '-22%'

        //     //   })

        //     //   alert('aa');

        //     }

        // if (phoneHeight / phoneWidth > 1.624) {

        // //   $('.dataPage').css({

        // //     'top': '-45%'

        // //   })

        // }



    } else {





        //当软键盘收起，在此处操作

        $('.wishPage').css({

            'top': '0%'

        })
        $('.wishPage .bg').css({

            'position': 'fixed'

        })
        $('.wishPage .stars').css({

            'margin-top': '160%'

        })


        if (phoneHeight / phoneWidth > 1.89) {

            $('.wishPage .stars').css({

                'margin-top': '195%'

            })

        } else if (phoneHeight / phoneWidth < 1.83 && phoneHeight / phoneWidth > 1.7) {
            $('.wishPage .stars').css({

                'margin-top': '180%'

            })
        } else if (phoneHeight / phoneWidth < 1.6) {


            $('.aaaaaaaaa').html('1221111');

            $('.wishPage .stars').css({

                'margin-top': '160%'

            })
        }

        if (phoneHeight / phoneWidth < 1.48) {
            $('.wishPage .stars').css({

                'margin-top': '146%'

            })
        }

    }

});



//加载完成事件
document.onreadystatechange = loading;
var percentInt;
var percentNum = 0;

function loading() {
    var screenH = window.screen.height;
    var wid = document.documentElement.clientWidth || document.body.clientWidth;
    var hei = document.documentElement.clientHeight || document.body.clientHeight;

    if (document.readyState == "complete") {

        $('.loader-container').addClass("loader")
        percentInt = setInterval(function() {
            $('.number').html(percentNum);
            percentNum = percentNum + 2;
            if (percentNum >= 101) {
                // $('.loader-container').css({
                //     'width':'100%'
                // })


                clearInterval(percentInt);
                setTimeout(function() {
                    $('.loadingPage').fadeOut();
                    //请求接口  判断用户是否已完成点赞，如果没有点赞，正常流程，如果已点赞，跳转到祝福语页面
                    let api = baseUrl + '/api/PointJudgement/';
                    $.post(api, {
                        uid: uid,
                    }, res => {
                        console.log(res);
                        if (res.result == 'no') { //未点赞
                            //首页
                            $('.indexPage').fadeIn();
                        } else { //已点赞
                            //写祝福语页面
                            $('.wishPage').fadeIn();

                        }
                    });


                    // flag();
                    //console.log(navigator.userAgent);
                    var userAgent = navigator.userAgent;
                    var isAndroid = userAgent.indexOf('Android') > -1 || userAgent.indexOf('Adr') > -1; //android终端
                    var isiOS = !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
                    //console.log(navigator.userAgent,isAndroid,isiOS);
                    if (isAndroid) {
                        musicAndroid(); //播放音乐
                    }
                    // if(isiOS){
                    //   musicIphone();//播放音乐
                    // }
                    // music();//播放音乐

                }, 500)
            }
        }, 50);
    }
};

//音乐



var oc_music = 0;

function autoPlayMusic() {
    /* 自动播放音乐效果，解决浏览器或者APP自动播放问题 */
    function musicInBrowserHandler() {
        musicPlay(true);
        document.body.removeEventListener('touchstart', musicInBrowserHandler);
    }
    document.body.addEventListener('touchstart', musicInBrowserHandler);
    /* 自动播放音乐效果，解决微信自动播放问题 */
    function musicInWeixinHandler() {
        musicPlay(true);
        document.addEventListener("WeixinJSBridgeReady", function() {
            musicPlay(true);
        }, false);
        document.removeEventListener('DOMContentLoaded', musicInWeixinHandler);
    }
    document.addEventListener('DOMContentLoaded', musicInWeixinHandler);
}

function autoPlayMusiciOS() {
    /* 自动播放音乐效果，解决浏览器或者APP自动播放问题 */
    function musicInBrowserHandler() {
        musicPlay(true);
        document.body.removeEventListener('touchstart', musicInBrowserHandler);
    }
    document.body.addEventListener('touchstart', musicInBrowserHandler);
}

function musicPlay(isPlay) {
    // var media = document.getElementById('bgsound'); 
    var media = document.getElementsByTagName('audio')[0]; //获取音乐DOM节点  
    //console.log(media);
    if (isPlay && media.paused) {
        media.play();
        handleLyrics(); //处理歌词
    }
    if (!isPlay && !media.paused) {
        media.pause();
    }
}

function musicAndroid() {
    //console.log('播放音乐')
    document.getElementById("bgsound").play();
    handleLyrics(); //处理歌词

    //console.log(document.getElementById('bgsound'));
    document.addEventListener("WeixinJSBridgeReady", function() {
        document.getElementById("bgsound").play();
        handleLyrics(); //处理歌词
        // document.getElementById("bgsound").load();
    }, false);
    var musicDom = document.getElementById('bgsound');



    autoPlayMusic(); //处理苹果没有声音的问题





    $('.broadcast-icon').click(function() {


        //debugger
        oc_music++;
        //console.log(oc_music);



        if (oc_music % 2 == 1) {



            $('.broadcast-icon img').attr('src', 'images/pause.png');



            document.getElementById('bgsound').pause();



            //alert(oc_music%2);



        } else {



            $('.broadcast-icon img').attr('src', 'images/play.png');



            document.getElementById('bgsound').play();
            handleLyrics(); //处理歌词


            //alert(oc_music%2);



        }



        ;



    });



};

function musicIphone() {
    //console.log('播放音乐')



    document.addEventListener("WeixinJSBridgeReady", function() {



        document.getElementById("bgsound").play();
        handleLyrics(); //处理歌词



        // document.getElementById("bgsound").load();



    }, false);


    autoPlayMusic(); //处理iOS浏览器播放的问题
    $('.broadcast-icon').click(function() {


        //debugger
        oc_music++;



        if (oc_music % 2 == 1) {



            $('.broadcast-icon img').attr('src', 'images/pause.png');



            document.getElementById('bgsound').pause();



            //alert(oc_music%2);



        } else {



            $('.broadcast-icon img').attr('src', 'images/play.png');



            document.getElementById('bgsound').play();
            handleLyrics(); //处理歌词



            //alert(oc_music%2);



        }



        ;



    });




};


var userAgent = navigator.userAgent;
var isiOS = !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
if (isiOS) {
    musicIphone(); //播放音乐
}



// 处理歌词
function handleLyrics() {
    //歌词
    var lrcJSON = {
        // '[ar:彭丽媛]':'',

        // '[ti:绣红旗]':'',

        '[00:05.01]': '彭丽媛 - 绣红旗',

        '[00:10.64]': '词：阎肃',

        '[00:15.78]': '曲：羊鸣/姜春阳',

        '[00:21.10]': '线儿长 针儿密',

        '[00:30.24]': '含着热泪绣红旗',

        '[00:34.81]': '绣呀绣红旗',

        '[00:39.63]': '热泪随着针线走',

        '[00:48.75]': '与其说是悲',

        '[00:53.33]': '不如说是喜',

        '[00:58.07]': '多少年多少代',

        '[01:07.11]': '今天终于盼到了你',

        '[01:16.51]': '盼到了你',

        '[01:30.54]': '千分情 万分爱',

        '[01:39.46]': '化作金星绣红旗',

        '[01:44.04]': '绣呀绣红旗',

        '[01:49.05]': '平日刀丛不眨眼',

        '[01:57.79]': '今日里心跳分外急',

        '[02:07.32]': '一针针 一线线',

        '[02:16.32]': '绣出一片新天地',

        '[02:25.62]': '新天地',
    }

    var lrcTime = []; //歌词对应的时间数组
    var ul = $("#lrclist")[0]; //获取ul

    var i = 0;
    $.each(lrcJSON, function(key, value) { //遍历lrc
        lrcTime[i++] = parseFloat(key.substr(1, 3)) * 60 + parseFloat(key.substring(4, 10)); //00:00.000转化为00.000格式
        ul.innerHTML += "<li><p>" + lrcJSON[key] + "</p></li>"; //ul里填充歌词
    });
    lrcTime[lrcTime.length] = lrcTime[lrcTime.length - 1] + 3; //如不另加一个结束时间，到最后歌词滚动不到最后一句


    var $li = $("#lrclist>li"); //获取所有li

    var currentLine = 0; //当前播放到哪一句了
    var currentTime; //当前播放的时间
    var audio = document.getElementsByTagName("audio")[0];
    var ppxx; //保存ul的translateY值

    audio.ontimeupdate = function() { //audio时间改变事件
        currentTime = audio.currentTime;
        for (j = currentLine, len = lrcTime.length; j < len; j++) {
            if (currentTime < lrcTime[j + 1] && currentTime > lrcTime[j]) {
                currentLine = j;
                ppxx = 64 - (currentLine * 20);
                ul.style.transform = "translateY(" + ppxx + "px)";
                $li.get(currentLine - 1).className = "";
                //console.log("on"+currentLine);
                $li.get(currentLine).className = "on";
                break;
            }
        }
    };

    audio.onseeked = function() { //audio进度更改后事件
        currentTime = audio.currentTime;
        //console.log("  off"+currentLine);
        $li.get(currentLine).className = "";
        for (k = 0, len = lrcTime.length; k < len; k++) {
            if (currentTime < lrcTime[k + 1] && currentTime < lrcTime[k]) {
                currentLine = k;
                break;
            }
        }
    };
}

// // //判断是否是绣国旗页面
// function isXiuPage(){
//   document.addEventListener('click',function(){
//     let xiuPage = $('.xiuPage');//获取绣国旗DOM
//     // //console.log(document.defaultView.getComputedStyle(xiuPage[0]).display);
//     if(xiuPage.css('display') == 'none'){
//       //console.log('暂停歌曲');
//       document.getElementById('bgsound').pause();
//     }else{
//       //console.log('播放歌曲');
//       document.getElementById('bgsound').play();
//       handleLyrics();//处理歌词
//     }
//   })
// }

// isXiuPage();

// 国旗帧图动画
function flag() {
    var flagArr = ['images/index_flag1.png', 'images/index_flag2.png', 'images/index_flag3.png', 'images/index_flag4.png', 'images/index_flag5.png', 'images/index_flag6.png'];
    var flagSrc = 0;
    Time = setInterval(function() {
        flagSrc++;
        if (flagSrc >= flagArr.length) {
            flagSrc = 0;
        }
        $('.flag img').attr('src', flagArr[flagSrc]);
    }, 250)
}
// 绣针帧图动画
function xiuzhen() {
    var xiuzhenArr = ['images/zhen1.png', 'images/zhen2.png', 'images/zhen3.png', 'images/zhen4.png', 'images/zhen5.png', 'images/zhen6.png'];
    var xiuzhenSrc = 0;
    Time = setInterval(function() {
        xiuzhenSrc++;
        if (xiuzhenSrc >= xiuzhenArr.length) {
            xiuzhenSrc = 0;
        }
        $('.xiuzhen').attr('src', xiuzhenArr[xiuzhenSrc]);
    }, 250)
}

$('.indexPage .btn').click(function() {
    $('.indexPage').fadeOut(500);
    $('.completeFlag').fadeIn(500);
})
$('.completeFlag .btn').click(function() {
    $('.completeFlag').fadeOut(500);
    $('.xiuPage').fadeIn(500);
    $(".xiuPage .border_zhezhao").show();

})
$('.xiuPage .btn').click(function() {

        if ($('.mengceng').css('display') == 'block') {

            $('.xiuPage').fadeOut();
            // $('.zhufu_Page').fadeIn(500);
            //点赞完成直接到写祝福语页
            $('.wishPage').fadeIn(500);
            getEnterprise_list(); //获取爱国企业帧数

            // $("#container2").html('');

            setditu("container2");

        } else {

            $('.write-popup').show();
            $('.write-popup-text').html("请先为国旗点赞");
        }

    })
    //获取祝福语模板
getGreetingTemplate();
//获取祝福语模板
function getGreetingTemplate() {
    var greetingTemp = document.getElementsByClassName('greetingTemp');
    console.log('greetingTemp', greetingTemp);
    let api = baseUrl + '/api/message_template/';
    $.get(api, res => {
        //祝福语模板
        var greetingTemplate = res;
        for (let i = 0; i < greetingTemplate.length; i++) {
            greetingTemp[i].innerHTML = greetingTemplate[i].message_coment;
        }
    });
}
//企业名单滚动
var timeouts;

function scrollCorporation() {
    // // $('.tbl-body').css('top', '0');
    //   var tblTop = 0;
    //   var speedhq = 50; // 数值越大越慢
    //   let table = document.getElementsByTagName('table')[0];
    //   var outerHeight = parseInt( document.defaultView.getComputedStyle(table).height);
    //   //console.log('table的高度',outerHeight);
    //   function Marqueehq(){
    //       // //console.log(tblTop, $('.tbl-body').find("tr"),outerHeight);
    //       var firstNode = table.rows[0].cloneNode(true);
    //       var tbody = table.rows[0].parentNode;
    //       tbody.removeChild(table.rows[0].parentNode.children[0]);
    //       // marquee.removeChild(marquee.children[0]);//还有这里
    //       tbody.appendChild(firstNode);//还有这里
    //       if(tblTop <= -outerHeight){
    //           tblTop = 0;
    //       } else {
    //           tblTop -= 1;
    //       }
    //       $('.table').css('top', tblTop+'px');
    //   }

    //   MyMarhq = setInterval(Marqueehq,speedhq);

    clearTimeout(timeouts);
    var table = document.getElementsByTagName('table')[0];
    var offsets = 0;
    // //console.log(marquee,'marquee')
    if (table == null) {
        return
    }
    var scroll = table.offsetHeight; //整个高度
    var firstTr = table.rows[0].cloneNode(true);
    var tbody = table.rows[0].parentNode;
    tbody.removeChild(table.rows[0]); //还有这里
    tbody.appendChild(firstTr); //还有这里
    if (offsets == scroll) {
        offsets = 0;
    }
    table.style.marginTop = "-" + offsets + "px";
    offsets += 1;
    timeouts = setTimeout(scrollCorporation, 2000);


}

$('.guoqi_Page .btn').click(function() {
    $('.guoqi_Page').fadeOut(500);
    $('.enterprisePage').fadeIn(500);


})

//$('.zhufu_Page .btn').click(function (){
//$('.zhufu_Page').fadeOut(500);
//$('.enterprisePage').fadeIn(500);
//setTimeout(scrollCorporation,3000);
//})

$('.zhufu_Page .btn').click(function() {
    $('.zhufu_Page').fadeOut(500);
    $('.wishPage').fadeIn(500);
})


// $('.PatrioticCompanies .btn').click(function (){
//   $('.PatrioticCompanies').fadeOut(500);
//   $('.enterprisePage').fadeIn(500);
// })
$('.enterprisePage .btn').click(function() {
    $('.enterprisePage').fadeOut(500);
    $('.wishPage').fadeIn(500);
})

// var _touch;
// var _x;
// var _x1;
// var _x2;
// // 判断画圆
// $('.kuang').on('touchstart',function(e) {
//     $(".xiuPage .border_zhezhao").hide();
//     _touch = e.originalEvent.targetTouches[0];
//    _x= _touch.pageX;

//     // //console.log(_x,11);

// });

// // $('.kuang').on('touchmove',function(e) {
// //     var _touch = e.originalEvent.targetTouches[0];
// //     var _x2= _touch.pageX;
// //     //console.log(_x2,22);
// // });



// $('.kuang').on('touchend',function(e) {
//      _touch = e.originalEvent.changedTouches[0];
//     _x1= _touch.pageX;
//     // //console.log(_x1,33);
//     _x2=_x-_x1;
//     // //console.log(_x2);


//     if(Math.abs(_x2)>20){
//         // //console.log(11);
//         $(".xiuPage .border_zhezhao").show();
//         $(".xiuPage .border_zhezhao .failed").show();
//     }else{
//         $(".xiuPage .xiuzhen").show();
//         xiuzhen();
//         setTimeout(function(){
//             clearInterval(Time);

//             $(".xiuPage .xiuzhen").hide();
//             $(".xiuPage .zhezhaoceng").show();

//     }, 2000);

//     }
// })


var _touch = _x = _x1 = _x2 = _y = _y1 = _y2 = juli = juli_num = 0;

// 判断画圆
$('.kuang').on('touchstart', function(e) {

    _touch = e.originalEvent.targetTouches[0];
    _x = _touch.pageX;
    _y = _touch.pageY;

    //console.log(_x,"star x");
    //console.log(_y,"star y");

});

$('.kuang').on('touchmove', function(e) {
    var _touch = e.originalEvent.targetTouches[0];

    // var _x3= _touch.pageX;
    // var _y3= _touch.pageY;
    // //console.log(_x3,22);

    // 移动的距离
    //  juli =  Math.sqrt(_x2 * _x2 + _y2 * _y2);

    //  //console.log(juli,"移动的距离");
    //  //console.log(juli_num,"移动的距离");


});

$('.xiuPage .kuang').on('touchend', function(e) {
    $(".xiuPage .border_zhezhao").hide();



    //$(".xiuPage .xiuzhen").show();
    $(".xiuPage .guangxiao").show()
    var left = $(".xiuPage .xiuzhen").get(0).offsetLeft - $(".xiuPage .guangxiao").get(0).offsetWidth / 2;
    var top = $(".xiuPage .xiuzhen").get(0).offsetTop + $(".xiuPage .xiuzhen").get(0).offsetHeight - $(".xiuPage .guangxiao").get(0).offsetHeight / 2;
    //$(".xiuPage .guangxiao").css({'left':left,'top':top});
    //console.log('燃放烟花');

    let api = baseUrl + '/api/daily_embroidery/';
    // let api = 'http://174.137.63.203:80/check_url';
    // let d = new Date();
    // let timestamp = d.valueOf().toString();


    // $.ajaxPrefilter( function (options) {
    //   if (options.crossDomain && jQuery.support.cors) {
    //     var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
    //     options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
    //   }
    // });

    $.post(api, {
        user_id: uid,
        ip_out: ip,
    }, res => {
        //console.log(res);
    });

    //   $.ajax({
    //     type:"post",
    //     url:api,
    //     data:JSON.stringify({ //【这里填写是传给服务端的数据 可传可不传 数据必须是json格式】
    //       user_id:uid,
    //       ip_out:ip,
    //       // 'timestamp':timestamp,
    //     }),

    //     dataType:'json',  //【这里要小心啊，不要用jsonp，一定是json】
    //     headers: { 
    //         'Content-Type': 'application/json;charset=UTF-8'  //multipart/form-data;boundary=--xxxxxxx   application/json
    //     },  
    //     crossDomain: true,  //【这个很重要，一定要加】
    //     success:function(result){
    //         //console.log('成功',result);

    //     },
    //     error:function(result){
    //         //console.log('失败',result);
    //     }
    // });



    //xiuzhen();
    setTimeout(function() {
        // clearInterval(Time);

        $(".xiuPage .xiuzhen").hide();
        $(".xiuPage .guangxiao").hide();
        $(".xiuPage .zhezhaoceng").show();
        $(".xiuPage .mengceng").show();
    }, 2500);
    return;

    _touch = e.originalEvent.changedTouches[0];
    _x1 = _touch.pageX;
    _y1 = _touch.pageY;

    //console.log(_x1,"end x");
    //console.log(_y1,"end y");

    _x2 = Math.abs(_x - _x1);
    _y2 = Math.abs(_y - _y1);
    //console.log(_x2,"x");
    //console.log(_y2,"y");




    if (Math.abs(_x2) > 20 || Math.abs(_y2) > 20 || Math.abs(_x2) == 0 || Math.abs(_y2) == 0) {
        // //console.log(11);
        $(".xiuPage .border_zhezhao").show();
        $(".xiuPage .border_zhezhao .failed").show();
    } else {
        $(".xiuPage .xiuzhen").show();
        xiuzhen();
        setTimeout(function() {
            clearInterval(Time);

            $(".xiuPage .xiuzhen").hide();
            $(".xiuPage .zhezhaoceng").show();
            $(".xiuPage .mengceng").show();

        }, 2000);

    }
})



$('.xiuPage .queren').click(function() {
        $(".xiuPage .zhezhaoceng").hide();
    })
    // 领取优惠券按钮
$('.xiuPage .invite').click(function() {
    $(".xiuPage .zhezhaoceng").hide();
    // $(".fenxiang_Page").show();
    window.location.href = 'http://drshop.beilequan.com/wap/#/pages/index/custom?page_code=lqhb';

})
$('.fenxiang_Page').click(function() {

    $(".fenxiang_Page").hide();

})








// // 输入祝福语
// var num;
// var a;
// $("#textarea").keyup(function(){
//     a = $(this).val().length;
//     if(a >70){
//          num=$("#textarea").val().substr(0,70);
//         $("#textarea").val(num);
//         // alert("字数不能超过70");
//     }
// });
// $("#textarea").change(function(){
//     a = $(this).val().length;
//     if(a >70){
//         num=$("#textarea").val().substr(0,70);
//         $("#textarea").val(num);
//         // alert("字数不能超过70");

//     }
// });

// $('.wishPage .btn').click(function (){
//    if(a>70){
//     $('.write-popup').show();
//     $('.write-popup-text').html("字数请不要超过70字");
//     $('.write-popup-close').click(function () {
//         $('.write-popup').hide();

//     })
//    }else if(a==0){
//     $('.write-popup').show();
//     $('.write-popup-text').html("请输入祝福语");
//     $('.write-popup-close').click(function () {
//         $('.write-popup').hide();

//     })
//    }

// })

$('.posterPage .invite_btn').click(function() {
    $(".fenxiang_Page").fadeIn();
})
$('.posterPage .look_btn').click(function() {

    $(".posterPage").fadeOut();
    $(".zhufu_Page").fadeIn();
})
$('.guoqi_Page .guoqi_btn').click(function() {

    $(".guoqi_Page").fadeOut();
    $(".zhufu_Page").fadeIn();
    getEnterprise_list(); //获取爱国企业帧数
    $("#container").html('');
    setditu("container2");
})
$('.zhufu_Page .zhufubang_btn').click(function() {
    $(".zhufu_Page").fadeOut();
    $(".guoqi_Page").fadeIn();
    $("#container2").html('');
    setditu("container");
})

// $('.guoqi_Page .guoqi_invite').click(function (){
//     $(".fenxiang_Page").show();
// })
$('.zhufu_Page .zhufubang_invite').click(function() {
    $(".fenxiang_Page").show();
})
$('.posterPage .backIndex').click(function() {
    $(".posterPage").fadeOut();
    // window.location.reload();
    $(".indexPage").fadeIn();
    getTotalNum(); //重新获取点赞数
    $('.xiuPage .mengceng').css({ 'display': 'none' }); //将绣红旗页的蒙层隐藏，不然显示烟花的gif绑定事件无法获取
    // $('#textarea').val('');//写祝福语页将文本框的值清空
    // $('.wishPage .name input').val('')//写祝福语页将署名清空
    //console.log($('#li_in').val());
    $('#li_in').val('');
    // flag();//首页红旗摇动的动画
})
$('.posterPage .wishShowBtn').click(function() {
    $(".posterPage").fadeOut();
    $(".wishShow").fadeIn();
})
$('.zhufu_Page .zhufubang_corporation').click(function() {
        $(".zhufu_Page").fadeOut();
        $(".corporation_Page").fadeIn();
    })
    // $('.zhufu_Page .zhufubang_again').click(function (){
    //     $(".zhufu_Page").fadeOut();
    //     window.location.reload()
    //     $(".indexPage").fadeIn();
    // })

$('.wishShow .btn').click(function() {
    $(".wishShow").fadeOut();
    // window.location.reload();
    $(".indexPage").fadeIn();
    getTotalNum(); //重新获取点赞数
    $('.xiuPage .mengceng').css({ 'display': 'none' }); //将绣红旗页的蒙层隐藏，不然显示烟花的gif绑定事件无法获取
    // $('#textarea').val('');//将文本框的值清空
    // $('.wishPage .name input').val('')//写祝福语页将署名清空
    $('#li_in').val('');
    // flag();//首页红旗摇动的动画

})

// 关闭提示框
$(".write-popup-close").click(function() {

    $(".write-popup").hide()

});


var mydate = new Date();

years = mydate.getFullYear(); //获取完整的年份(4位,1970-????)
month = mydate.getMonth() + 1; //获取当前月份(0-11,0代表1月)
date = mydate.getDate(); //获取当前日(1-31)
//console.log(years);
//console.log(month);
//console.log(date);
$('.years').html(years);
$('.month').html(month);
$('.day').html(date);


// 输入祝福语
// 判断字数是否超出19字
var num;
var a;
var s1;
var val;

$('.wishPage li').click(function() {

        s1 = $(this).index()

        $(this).css('font-weight', '700');

        $(this).siblings().css('font-weight', '400');

        val = $(this).find($(".text")).html();

        // 判断是否选中的是D选项要手动输入
        if (s1 == 3) {

            $("#li_in").keyup(function() {
                a = $(this).val().length;
                if (a > 19) {
                    // 截取前19个字符
                    num = $("#li_in").val().substr(0, 19);
                    $("#li_in").val(num);

                    $('.write-popup').show();
                    $('.write-popup-text').html("字数请不要超过19字");
                    $('.write-popup-close').click(function() {
                        $('.write-popup').hide();

                    })
                }
                val = $('#li_in').val();
            });
            $("#li_in").change(function() {
                a = $(this).val().length;
                if (a > 19) {
                    // 截取前19个字符
                    num = $("#li_in").val().substr(0, 19);
                    $("#li_in").val(num);
                    $('.write-popup').show();
                    $('.write-popup-text').html("字数请不要超过19字");
                    $('.write-popup-close').click(function() {
                        $('.write-popup').hide();

                    })

                }
                val = $('#li_in').val();
            });
        }

        //console.log("点击的li为",s1);
        //console.log("点击的li内容为",val);
    })
    //祝福语留言
var user_name;

function sendMessage(Content) {
    if (Content == undefined) {
        Content = '为祖国送祝福';
    }
    //console.log('Content',Content);
    let api = baseUrl + '/api/leaving_message/';
    $.post(api, {
        user_id: uid,
        message_content: Content,
        ip_out: ip,
    }, res => {
        user_name = res.user_name;

        //合成图片
        $("#hecheng_textarea").html(Content);
        $("#user_name").html(user_name);
        // 执行合成图片函数 screenshot.init('id名', function(img) { });
        screenshot.init('hechengPage', function(img) {
            //console.log(img);
            saveImg(img); //保存海报图片
            $('.posterPage_bg').attr('src', img);
        });

        //console.log(res,'祝福语留言');
        if (res.audit_status == 'ok') {
            $('#li_in').val('');
        }
        console.log('user_name', user_name);
    });
}
//保存图片
function saveImg(imgUrl) {
    let api = baseUrl + '/api/poster_generation/';
    $.post(api, {
        user_id: uid,
        // image_url:imgUrl,
        image_url: imgUrl,
    }, res => {
        //console.log(res,'保存海报');
        // if(res.data.state == 'ok'){
        //   // $('.write-popup').show();
        //   // $('.write-popup-text').html("为企业助威成功");
        // }
    });
}
//获取祝福语列表
function getGreetingList() {
    let api = baseUrl + '/api/greeting';
    $.get(api, res => {
        //console.log('祝福语列表',res);
        $('#marquee').html('');
        for (let i = 0; i < res.length; i++) {
            let liNode = `
          <li>
              <p class="text">` + res[i].message_content + `</p>
              <p class="name">————   ` + res[i].user_name + `</p>
          </li>
          
          `
            $('#marquee').append(liNode);
        }
        scrollAnimation(); //祝福语滚动
    });
}
// 合成图片
$('.wishPage .btn').click(function() {

    var text_val = $('#textarea').val();
    var input_val = $('.wishPage .name input').val();

    // $(".hechengPage .name span").html(input_val);
    //console.log('填写的祝福语',val);
    sendMessage(val); //祝福语留言

    //  $('.name span').html('test');//获取用户署名






    $('.poster').show();

    setTimeout(function() {

        $('.wishPage').fadeOut();
        $('.poster').hide();
        $('.posterPage').fadeIn();
        getGreetingList(); //获取祝福语列表

    }, 1000)

})

// 把需要合成的图片内容转成base64
window.onload = function() {
    //无法修改img.js的erweima配置的图片路径，只能手动修改
    imgData.erweima = '../images/erweima.png';
    $(".hechengPage .bg").attr("src", imgData.wish_bg);
    $(".hechengPage .dian1").attr("src", imgData.diandian1);
    $(".hechengPage .dian2").attr("src", imgData.diandian2);
    $(".hechengPage .wish_70 img").attr("src", imgData.seventy);
    $(".hechengPage .wish_zhou img").attr("src", imgData.index_zhou);
    $(".hechengPage .wish_nian img").attr("src", imgData.index_nian);

    $(".hechengPage .wish_title img").attr("src", imgData.wish_title);
    $(".hechengPage .star1").attr("src", imgData.star);
    $(".hechengPage .star2").attr("src", imgData.star);
    $(".hechengPage .star3").attr("src", imgData.star);
    $(".hechengPage .star4").attr("src", imgData.star);
    $(".hechengPage .star5").attr("src", imgData.star);
    $(".hechengPage .star6").attr("src", imgData.star);
    $(".hechengPage .star7").attr("src", imgData.star);
    $(".hechengPage .star8").attr("src", imgData.star);
    $(".hechengPage .star9").attr("src", imgData.star);
    $(".hechengPage .star10").attr("src", imgData.star);
    $(".hechengPage .text img").attr("src", imgData.hecheng_text);
    $(".hechengPage .erweima img").attr("src", imgData.erweima);
}

// 祝福语滚动
var timeout;

function scrollAnimation() {
    clearTimeout(timeout);
    var marquee = document.getElementById('marquee');
    var offset = 0;
    // //console.log(marquee,'marquee')
    if (marquee == null) {
        return
    }
    var scrollheight = marquee.offsetHeight; //整个高度
    //console.log(marquee.children.length,'li的个数');
    if (marquee.children.length == 0) {
        return
    }
    var firstNode = marquee.children[0].cloneNode(true);
    marquee.removeChild(marquee.children[0]); //还有这里
    marquee.appendChild(firstNode); //还有这里
    if (offset == scrollheight) {
        offset = 0;
    }
    marquee.style.marginTop = "-" + offset + "px";
    offset += 1;
    timeout = setTimeout(scrollAnimation, 1500);
}


//企业名单滚动
// function scrollCorporation(){
//   // $('.tbl-body').css('top', '0');
//     var tblTop = 0;
//     var speedhq = 50; // 数值越大越慢
//     // var outerHeight = document.getElementsByTagName('tr')[0].offsetHeight;
//     let td = document.getElementsByTagName('td')[0];
//     var outerHeight = parseInt( document.defaultView.getComputedStyle(td).height);
//     var item = document.getElementsByTagName('table')[0].rows;
//     //console.log('tr的个数',item.length,'td的高度',outerHeight);
//     function Marqueehq(){
//         // //console.log(tblTop, $('.tbl-body').find("tr"),outerHeight);
//         if(tblTop <= -outerHeight*item.length){
//             tblTop = 0;
//         } else {
//             tblTop -= 1;
//         }
//         $('.table').css('top', tblTop+'px');
//     }

//     MyMarhq = setInterval(Marqueehq,speedhq);

//     // 鼠标移上去取消事件
//     $(".tbl-header tbody").hover(function (){
//         clearInterval(MyMarhq);
//     },function (){
//         clearInterval(MyMarhq);
//         MyMarhq = setInterval(Marqueehq,speedhq);
//     })
// }


//处理数据
//加载绣国旗总帧数
function getTotalNum() {
    // $.ajaxPrefilter( function (options) {
    //   if (options.crossDomain && jQuery.support.cors) {
    //     var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
    //     options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
    //   }
    // });

    // if(firebase.auth().currentUser.uid.toString()== author){
    //   //你的代码


    //  } else {
    //   res.status(401).send('User does not have permission to complete the operation。');
    //  } 

    // let api = 'http://localhost:8080/total_Pin_number';
    let api = baseUrl + '/api/total_Pin_number';

    $.get(api, (res) => {
        //console.log(res);
        total_nums = res[0].Patriotic_nums.toString();
        total_nums_length = total_nums.length;
        //9：亿级点赞数
        leaveNum = 9 - total_nums_length;
        // debugger
        for (let i = 0; i < leaveNum; i++) {
            total_nums = '0' + total_nums;
        }
        let totalArr = total_nums.split("");

        for (let i = 0; i < 9; i++) {
            document.getElementsByClassName('input' + i)[0].innerHTML = totalArr[i];
            document.getElementsByClassName('input' + i)[1].innerHTML = totalArr[i];
        }

        //console.log(total_nums,total_nums_length,leaveNum,totalArr);
    });


}
getTotalNum();
var Enterprise_list;
//获取爱国企业帧数
function getEnterprise_list() {
    let api = baseUrl + '/api/enterprise_list';
    $.get(api, res => {
        //console.log('爱国企业帧数',res);
        $('.partentTable').html('');
        Enterprise_list = res;
        for (let i = 0; i < res.length; i++) {
            // $('.firstTd img')[i].src = res[i].img_url;
            // $('.secondTd span')[i].innerHTML = res[i].enterprise_count;
            // let progressWidth = (res[i].enterprise_count/10000)*100;
            // //console.log('progressWidth',progressWidth);
            // //console.log($('.loader-container')[i],i);
            // $('.loader-container')[i].classList .add('checked');
            // $('.loader-container')[i].style.width = progressWidth+'%';  
            var trNode = `
        <tr>
            <td class="firstTd">
                <img src="../images/` + res[i].img_url + `.png" alt="">
            </td>
            <td class="secondTd">
                <span>` + res[i].enterprise_count + `</span>
                <div class="progress">
                        <div class="loader-container" style='width:` + (res[i].enterprise_count / 10000) * 100 + `%'></div>
                </div>
              
            </td>
            <td class="thirdTd">
                <button type="button" class="btn-primary btn-sm" onclick='cheerCorporation(` + i + `)'>为他助威</button>
            </td>
        </tr>
      `
            $('.partentTable').append(trNode);

        }
    });
}

//为企业助威
function cheerCorporation(index) {
    //console.log(index,typeof index,'下标','企业id',Enterprise_list[index].enterprise_id);
    let corporationId = Enterprise_list[index].enterprise_id;
    let api = baseUrl + '/api/patriotic_enterprise/';
    $.post(api, {
        user_id: uid,
        enterprise_id: corporationId,
        // ip_out:ip,//外网ip
    }, res => {
        //console.log(res,'为企业助威');
        if (res.state == 'ok') {
            $('.write-popup').show();
            $('.write-popup-text').html("为企业助威成功");
        }
    });
}