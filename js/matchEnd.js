$(function() {
    var fid, fontS;
    // 3ec8e1a14bee49a1bb1b8763945ed356    测服
    // 5c0094f3c2bf4dbf9b424595c616444c   真实
    fid = getQueryString('fid');
    queryDataSetByTxno({ txno: 6023, fid: fid }, null, null, null, function(jdata) {
        // console.log(jdata);
        if (jdata.result == '0') {
            addData(jdata);
        } else {
            if (jdata.msg) {
                window.aow.alert(jdata.msg);
            }
        }
    }, -1);




    function getURL() {
        var url = window.location.href.split('#objc')[0];
        if (!getQueryString('share')) {
            return url = url + (url.indexOf("?") >= 0 ? "&" : "?") + "share=1";
        }
    }


    // 第五页    点击  下载
    if (isWeiXin) {
        $('.section3>p').on('click', function() {
            _TITLE_DOWNLOAD_APP();
        });
    }

    function addData(jdata) {
        var rotateDeg;
        window['days'] = parseInt(jdata.data2.days);
        window['rate'] = jdata.data3.rate;
        window['name'] = jdata.data1.name;
        window['mysit'] = jdata.date4.mysit;
        window['dayranks'] = jdata.date4.dayranks;
        window['maxback'] = jdata.date5.maxback.split('%')[0];
        window['maxbackrank'] = jdata.date5.maxbackrank.split('%')[0];
        window['mytrans'] = jdata.date5.mytrans;
        window['avgtrans'] = (jdata.date5.avgtrans).toFixed(2);
        window['mysitA'] = (jdata.data3.rank).toFixed(2);
        window['mysitB'] = ((window['rate'] - 10000) / 100).toFixed(2);
        $('.startDate').html(jdata.data2.begindate);
        $('.rank').html((jdata.data3.rank).toFixed(2) + '%');

        try {
            aow.enableShared(JSON.stringify({
                url: getURL(),
                title: '我的组合获得' + window['mysitB'] + '%的收益，超越了' + window['mysitA'] + '%的专业理财师。',
                desc: window['name'] + '和“基”战2017跨年资产配置争霸赛的故事',
                logo: "http://www.ifaxgj.com:9934/WEALTH/res/root/app/zMatch/images/dsicon.jpg"
            }));
        } catch (e) {}



        //  周排行   或者日排行
        if (jdata.date4.weekwin && jdata.date4.daywin) {
            $('.ranking').html('<p class="letter"> 在总计9个比赛周中</p> <p class="letter"> 曾经<a> ' + jdata.date4.weekwin + '</a> 次周排行前五</p><p class="letter"> 在总计43个比赛日中</p><p class="letter"> 曾经<a> ' + jdata.date4.daywin + '</a> 次日排行前三</p>');
        } else if (jdata.date4.weekwin && !jdata.date4.daywin) {
            $('.ranking').html('<p class="letter"> 在总计9个比赛周中</p> <p class="letter"> 曾经<a> ' + jdata.date4.weekwin + '</a> 次周排行前五</p>');
        } else if (!jdata.date4.weekwin && jdata.date4.daywin) {
            $('.ranking').html('<p class="letter"> 在总计43个比赛日中</p><p class="letter"> 曾经<a> ' + jdata.date4.daywin + '</a> 次日排行前三</p>');
        } else {
            $('.ranking').html('<p class="letter"> 虽然我没有上榜</p><p class="letter"> 但是我努力在上榜的路上</p>');
        }

        // 第四页旋转等级字体变亮

        if ((window['mysit']).toFixed(2) >= 70) {
            $('.classify').removeClass('active').eq(2).addClass('active');
        } else if ((window['mysit']).toFixed(2) >= 50) {
            $('.classify').removeClass('active').eq(4).addClass('active');
        } else if ((window['mysit']).toFixed(2) >= 30) {
            $('.classify').removeClass('active').eq(6).addClass('active');
        } else if ((window['mysit']).toFixed(2) >= 10) {
            $('.classify').removeClass('active').eq(8).addClass('active');
        } else {
            $('.classify').removeClass('active').eq(10).addClass('active');
        }



        //第四页   （我的大赛总排名曲线）


        // 第五页
        /* $('.maxback').html(jdata.date5.maxback.split('%')[0]);
         $('.maxbackrank').html(jdata.date5.maxbackrank.split('%')[0]);
         $('.mytrans').html(jdata.date5.mytrans);
         $('.avgtrans').html((jdata.date5.avgtrans).toFixed(2));*/

        if (jdata.date5.activesit / 1 > jdata.date5.keepsit / 1) {
            window['dataRank'] = (jdata.date5.activesit * 100).toFixed(2);
            $('.part3>p').html('<i></i> 调仓的热情共超越选手');
        } else {
            window['dataRank'] = (jdata.date5.keepsit * 100).toFixed(2);
            $('.part3>p').html('<i class="heart"></i> 持久的耐心共超越选手');
        }
        //  持久的热情超越



    }
})
