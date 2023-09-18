// Float Menu Tab
function focusTab(action) {
    switch(action){
        // case 'login':
        //     $('#nav-login-tab').tab('show');
        // break;
        case 'register':
            $('#nav-register-tab').tab('show');
            //loadFileFunction($('#nav-register'), webConfig["BASEURL"]+"login/register");
        break;
        case 'deposit':
            $('#nav-deposit-tab').tab('show');
            //loadFileFunction($('#nav-deposit'), webConfig["BASEURL"]+"deposit/init");
        break;
        case 'withdrawal':
            $('#nav-withdrawal-tab').tab('show');
            //loadFileFunction($('#nav-withdrawal'), webConfig["BASEURL"]+"withdrawal/create");
        break;
        case 'transfer':
            $('#nav-transfer-tab').tab('show');
            //loadFileFunction($('#nav-transfer'), webConfig["BASEURL"]+"transfer/create");
        break;
        case 'promobox':
            $('#nav-promobox-tab').tab('show');
            //loadFileFunction($('#nav-promobox'), webConfig["BASEURL"]+"promo/promobox");
        break;
        case 'mypromo':
            $('#nav-mypromo-tab').tab('show');
            //loadFileFunction($('#nav-mypromo'), webConfig["BASEURL"]+"promo/mypromo");
        break;
        case 'signinpromo':
            $('#nav-signinpromo-tab').tab('show');
            //loadFileFunction($('#nav-signinpromo'), webConfig["BASEURL"]+"promo/signinpromo");
        break;
        case 'mission':
            $('#nav-mission-tab').tab('show');
            //loadFileFunction($('#nav-mission'), webConfig["BASEURL"]+"promo/missionpromo");
        break;
        case 'marqueeannouncement':
            $('#nav-marqueeannouncement-tab').tab('show');
            //loadFileFunction($('#nav-marqueeannouncement'), webConfig["BASEURL"]+"marquee/popup");
        break;
        case 'announcement':
            $('#nav-announcement-tab').tab('show');
            //loadFileFunction($('#nav-announcement'), webConfig["BASEURL"]+"announcement/popup");
        break;
        case 'myvip':
            $('#nav-myvip-tab').tab('show');
            //loadFileFunction($('#nav-myvip'), webConfig["BASEURL"]+"viplevel/reward");
        break;
    }

}

function openMarqueePopUp(action){
    switch(action){
        case 'marqueeannouncement':
            $('#sample_popup').modal('show');
            //$("#sample_popup_list").load(webConfig["BASEURL"]+"marquee/popup");
            break;
            
        case 'announcement':
            $("#sample_popup2").modal('show');
            //$("#sample_popup_list2").load(webConfig["BASEURL"]+"announcement/popup");
            break;
            
        case 'event':
            $("#sample_popup3").modal('show');
            //$("#sample_popup_list3").load(webConfig["BASEURL"]+"event/popup");
            break;
    }
};

 
