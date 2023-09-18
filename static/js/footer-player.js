var uc = $('#utils-core');
var webConfig = {   'BASEURL': uc.data('baseurl'), 
                    'CSRF_NAME': uc.data('csrfname'), 
                    'CSRF_TOKEN': uc.data('csrftoken'),
                    'EMPTY_USERNAME': uc.data('empty-username'),
                    'EMPTY_PASSWORD': uc.data('empty-password'),
                    'EMPTY_MOBILE' : uc.data('empty-mobile'),
                    'LOGIN_CREDENTIALS': uc.data('login_credentials'),
                    'ACCOUNT_FREEZE': uc.data('account-freeze'),
                    'GAME_UNDER_MAINTAINANCE': uc.data('game-under-maintenance'),
                    'GAME_PLEASE_LOGIN': uc.data('please-login'),
                    'ENTER_VALID_OTP' : uc.data('enter-valid-otp'),
                    'SUCCESS_SEND_PASSWORD_TO_MOBILE' : uc.data('success-send-password-to-your-mobile'),
                    'CHINA_MOBILE_FORMAT' : uc.data('china-mobile-format')
                };
                
function logoutInit() {
    $("#loading_screen").show();
    var postdata = [];
    postdata.push({'name':webConfig["CSRF_NAME"],'value':webConfig["CSRF_TOKEN"]});
    $.post(webConfig["BASEURL"]+'login/logout', postdata, function(response) {
        if (response['success']) {
            window.location.replace(webConfig["BASEURL"]);
        } else {
            $("#loading_screen").hide();
            return false;
        }
    });   
}

function kick_player() {
    var postdata = [];
    postdata.push({'name':webConfig["CSRF_NAME"],'value':webConfig["CSRF_TOKEN"]});
    $.post(webConfig["BASEURL"]+'login/kickPlayer', postdata, function(response) {
        if (response['success']) {
            window.location.replace(webConfig["BASEURL"]);
        }
    }); 
}

function check_online() {
    var postdata = [];
    postdata.push({'name':webConfig["CSRF_NAME"],'value':webConfig["CSRF_TOKEN"]});
    $.post(webConfig["BASEURL"]+'login/Checkonline', postdata, function(response) {
        if (response['success']) {
            window.location.replace(webConfig["BASEURL"]);
        }
    }); 
}