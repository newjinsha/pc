var alertExitTiming, alertCheck = true;
var clickOnce = true;
var jan_label = "一月";
var feb_label = "二月";
var mar_label = "三月";
var apr_label = "四月";
var may_label = "五月";
var jun_label = "六月";
var jul_label = "七月";
var aug_label = "八月";
var sep_label = "九月";
var oct_label = "十月";
var nov_label = "十一月";
var dec_label = "十二月";
var sun_label = "日";
var mon_label = "一";
var tue_label = "二";
var wed_label = "三";
var thu_label = "四";
var fri_label = "五";
var sat_label = "六";
var today_label = "今天";
var yesterday_label = "昨天";
var last_7_day_label = "近7天";
var last_30_day_label = "近30天";
var apply_label = "应用";
var clear_label = "清空";
var custom_range_label = "自订范围";
var btn_cancel_label = "取消";
var btn_confirm_label = "确定";
var btn_cs_label = "客户服务";
var securityLevel = '0.00';
var vipProgress = '0.00';

$(function(){
    ShowTime();

    $('.progress-ring__circle').each(function(index){
        var circle = $('.progress-ring__circle')[index];
        var radius = circle.r.baseVal.value;
        var circumference = radius * 2 * Math.PI;

        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = `${circumference}`;

        function setProgress(percent) {
            const offset = circumference - (percent / 100) * circumference;
            circle.style.strokeDashoffset = offset;
        }
        setProgress(securityLevel);
    });

    // VIP task progress
    $('.progress-vip_task_ring_circle').each(function(index){
        var circle2 = $('.progress-vip_task_ring_circle')[index];
        var radius2 = circle2.r.baseVal.value;
        var circumference2 = radius2 * 2 * Math.PI;

        circle2.style.strokeDasharray = `${circumference2} ${circumference2}`;
        circle2.style.strokeDashoffset = `${circumference2}`;

        function setProgress2(percent2) {
            const offset2 = circumference2 - (percent2 / 100) * circumference2;
            circle2.style.strokeDashoffset = offset2;
        }

        setProgress2(vipProgress);
    });

    $(document).on('click','.date_filter', function(){
        $('.date_filter').removeClass('active');
        $(this).addClass('active');
        var search_input = $(this).data('input');
        var filter_range = $(this).data('range');
        if (filter_range=='yesterday') {
            $('#'+search_input).val(moment().subtract(1, 'days').format('YYYY-MM-DD')+' - '+moment().subtract(1, 'days').format('YYYY-MM-DD'));
        } else if (filter_range=='last7day') {
            $('#'+search_input).val(moment().subtract(6, 'days').format('YYYY-MM-DD')+' - '+moment().format('YYYY-MM-DD'));
        } else if (filter_range=='last30day') {
            $('#'+search_input).val(moment().subtract(29, 'days').format('YYYY-MM-DD')+' - '+moment().format('YYYY-MM-DD'));
        } else {
            $('#'+search_input).val(moment().format('YYYY-MM-DD')+' - '+moment().format('YYYY-MM-DD'));
        }
    });

    $("body").append(`<div class="alert_msg">
        <div class="alert_msg_pos">
            <div class="alert_msg_dialog">
                <div class="alert_msg_header">
                    <div id="alert_title"></div>
                    <div>
                        <div id="alert_icon" class="ico-alert-success"></div>
                    </div>
                </div>
                <div class="alert_msg_body">
                    <div class="msg_show"></div>
                    <div class="form_show"></div>
                    <div class="button_area"></div>
                </div>
            </div>
        </div>
    </div>
    <div id="loading_screen" style="display: none;"><div class="lds-ring large"><div></div><div></div><div></div><div></div></div></div>`);

    $(document).on("click", ".alert_msg .cancel_btn a, .alert_msg .cancel_btn button, [data-dismiss='alert']", function(e){
        e.preventDefault();
        clearTimeout(alertExitTiming);
        var thisObj = $(this);
        thisObj.parents(".alert_msg").removeClass("active");
        setTimeout(function(){
            thisObj.parents(".alert_msg").removeClass("delay");
            alertCheck = true;
        }, 300);
    });

    // $(document).on("click", ".alert_msg, .alert_msg_pos", function(e){
    //     e.preventDefault();
    //     clearTimeout(alertExitTiming);
    //     var thisObj = $(this);
    //     thisObj.removeClass("active");
    //     setTimeout(function(){
    //         thisObj.removeClass("delay");
    //         alertCheck = true;
    //     }, 300);
    // });

    $(document).on("click touchend", ".modal_bottom div, .alert_msg_pos div", function(e){
        e.stopPropagation();
    });

    $(document).on('click', '.toggle_text_btn span', function(e){
        e.preventDefault();
        $(this).parent().removeClass('left');
        $(this).parent().removeClass('right');

        if($(this).index() < 1){
            $(this).parent().addClass('left');
            
        }
        else{
            $(this).parent().addClass('right');
        }
    });

    $(window).on("scroll", function(){
        if($(this).scrollTop() > 0){
            $(".header_bottom_outside").addClass("scrolling");
        }
        else{
            $(".header_bottom_outside").removeClass("scrolling");
        }
    });

    $(document).on("click", ".view_to_top", function(){
        $("html, body").animate({ scrollTop: 0 }, 500);
    });

    // alertMessage("已复制！", "已复制已复制", "warning", 
    //     function(){ console.log("success"); }, 
    //     null, 
    //     {
    //         "cancelname": btn_cancel_label,
    //         "cancelcallback": function(){ console.log("cancel"); }
    //     }
    // );
    // $(window).on('load',function(){
    //     $('#sample_popup').modal('show');
    // });

    $(document).on("click", '.toggle_password .ico', function(e){
        $(this).toggleClass("ico-eye_open ico-eye_close");
        var input = $(this).parent().children("input");
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    })
});

function ShowTime() {
    var timezone = (new Date().getTimezoneOffset() / 60) * -1;
    if (timezone >= 0) timezone = "+" + timezone;
    var todayTime = new Date();
    $("#moment").html("GMT" + timezone + " " + GetFormattedDate(todayTime) + " " + addZ(todayTime.getHours()) + ":" + addZ(todayTime.getMinutes()) + ":" + addZ(todayTime.getSeconds()));
    setTimeout("ShowTime()", 1000);
}

function GetFormattedDate(todayTime) {
    var month = addZ(todayTime.getMonth() + 1);
    var day = addZ(todayTime.getDate());
    var year = todayTime.getFullYear();
    return year + "-" + month + "-" + day;
}

function addZ(n) {
    return n < 10 ? "0" + n : "" + n;
}

// setStartDate and setEndDate format: with time(YYYY-MM-DD hh:mm A) AND without time (YYYY-MM-DD)
function datePicker(elementObj, format = "single", setStartDate = null, setEndDate = null){
    var params = {};
    var minDate = (moment().subtract(29, 'days').format('YYYY/MM/DD'));
    var maxDate = (moment().format('YYYY/MM/DD'));
    var dateRanges_label = {};
    dateRanges_label[today_label] = [moment(), moment()];
    dateRanges_label[yesterday_label] = [moment().subtract(1, 'days'), moment().subtract(1, 'days')];
    dateRanges_label[last_7_day_label] = [moment().subtract(6, 'days'), moment()];
    dateRanges_label[last_30_day_label] = [moment().subtract(29, 'days'), moment()];
    if(format == "single"){
        params = {
            dateFormat: 'YYYY-MM-DD',
            dateRanges: false,
            minDate: (moment().subtract(100, 'years').format('YYYY/MM/DD')),
            maxDate: maxDate,
            calendarDrop: 'down',
            singleDatePicker: true,
            timePicker: false,
            showDropdowns: true,            
        }

        if(setStartDate != null){
            setStartDate = moment(moment(setStartDate, 'YYYY-MM-DD').toDate()).format('YYYY-MM-DD')
            elementObj.val(setStartDate)
        }
    }
    else if(format == "range"){
        params = {
            dateFormat: 'YYYY-MM-DD',
            dateRanges: dateRanges_label,
            minDate: minDate,
            maxDate: maxDate,
            calendarDrop: 'down',
            singleDatePicker: false,
            timePicker: false,
            showDropdowns: true,

            
        }

        if(setStartDate != null){
            setStartDate = moment(moment(setStartDate, 'YYYY-MM-DD').toDate()).format('YYYY-MM-DD')
            setEndDate = moment(moment(setEndDate, 'YYYY-MM-DD').toDate()).format('YYYY-MM-DD')
            elementObj.val(setStartDate+' - '+setEndDate);
        }
    }
    else if(format == "single datetime"){
        params = {
            dateFormat: 'YYYY-MM-DD hh:mm A',
            dateRanges: false,
            minDate: minDate,
            maxDate: maxDate,
            calendarDrop: 'down',
            singleDatePicker: true,
            timePicker: true,
            showDropdowns: true,
        }

        if(setStartDate != null){
            setStartDate = moment(moment(setStartDate, 'YYYY-MM-DD hh:mm A').toDate()).format('YYYY-MM-DD hh:mm A')
            elementObj.val(setStartDate)
        }
    }
    else if(format == "range datetime"){
        params = {
            dateFormat: 'YYYY-MM-DD hh:mm A',
            dateRanges: dateRanges_label,
            minDate: minDate,
            maxDate: maxDate,
            calendarDrop: 'down',
            singleDatePicker: false,
            timePicker: true,
            showDropdowns: true,
        }

        if(setStartDate != null){
            setStartDate = moment(moment(setStartDate, 'YYYY-MM-DD hh:mm A').toDate()).format('YYYY-MM-DD hh:mm A')
            setEndDate = moment(moment(setEndDate, 'YYYY-MM-DD hh:mm A').toDate()).format('YYYY-MM-DD hh:mm A')
            elementObj.val(setStartDate+' - '+setEndDate)
        }
    }

    elementObj.daterangepicker({
        locale: {
            format: params.dateFormat,
            cancelLabel: clear_label,
            applyLabel: apply_label,
            customRangeLabel: custom_range_label,
            daysOfWeek: [
                sun_label,
                mon_label,
                tue_label,
                wed_label,
                thu_label,
                fri_label,
                sat_label
            ],
            monthNames: [
                jan_label,
                feb_label,
                mar_label,
                apr_label,
                may_label,
                jun_label,
                jul_label,
                aug_label,
                sep_label,
                oct_label,
                nov_label,
                dec_label
            ],
        },
        parentEl: "body",
        singleDatePicker: params.singleDatePicker,
        autoUpdateInput: false,
        
        timePicker: params.timePicker,        
        showDropdowns: params.showDropdowns,        
        drops: params.calendarDrop,
        alwaysShowCalendars: true,
        minDate: params.minDate,
        maxDate: params.maxDate,
        ranges: params.dateRanges,
    })
    .on('cancel.daterangepicker', function(ev, picker) {
        $(this).val("");
        $(this).trigger("change");
    })
    .on('show.daterangepicker', function (ev, picker) {
        if ((picker.element.offset().top - $(window).scrollTop() + picker.container.outerHeight()) > $(window).height()) {
            picker.drops = 'up';
            var topPos = picker.element.offset().top - 280;
            $('.daterangepicker').addClass("drop-up") + 'px';
            $('.daterangepicker').css({top: topPos})
        } else {
            $('.daterangepicker').removeClass("drop-up");
            picker.drops = 'down';
        }
    })
    .on('apply.daterangepicker', function(ev, picker) {
        if(params.singleDatePicker)
            $(this).val(picker.startDate.format(params.dateFormat));
        else
            $(this).val(picker.startDate.format(params.dateFormat) + ' - ' + picker.endDate.format(params.dateFormat));

        $(this).trigger("change");
    });
}

function percentageFormat(data) {
    if(checkFloatNum(data))
        return (data * 100).toFixed(2) + ' %';

    return data;
}

function checkFloatNum(value) {
    return (parseFloat(value) * 1) || (parseInt(value) == 0) && !isNaN(value);
}

function currencyFormat(number, decimals = 2) {
    if (number == '-') {
        return '-';
    }
    var is_negative = number < 0;
    number = is_negative ? Math.abs(number) : number;
    const dec_point = '.';
    const thousands_sep = ',';
    // Strip all characters but numerical ones.
    number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
        s = '',
        toFixedFix = function (n, prec) {
            var k = Math.pow(10, prec),
                j = (n * k).toFixed(prec); // Fix 78.1*100 = 7809.999999
            if(is_negative){
                return '-' + Math.floor(j) / k;
            }
            return '' + Math.floor(j) / k;
        };
    // Fix for IE parseFloat(0.55).toFixed(0) = 0;
    s = (prec ? toFixedFix(n, prec) : '' + Math.floor(n)).split('.');
    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
}

function datetimeFormat(date, splitting = false, format="timestamp", displayText="") {
    if (format == "timestamp") {
        //var previous = new Date(date * 1000);
        //var current = new Date();

        var previous = moment(date *1000);
        if (!splitting)
            return previous.format('YYYY-MM-DD HH:mm A');
        else {
            if(displayText == "day"){
                return previous.format('DD');
            }else if(displayText == "dateGroup"){
                return previous.format('YYYY-MM');
            }else if(displayText == "time"){
                return previous.format('HH:mm A');
            }else{
                return previous.format('YYYY-MM-DD') + '<br />' + previous.format('HH:mm');
            }
        }

        // }
    }
    else{
        if(!splitting)
            return date;
        else{
            return date.split(" ")[0] +"<br />"+ date.split(" ")[1];
        }
    }
}

function ajaxFunction(url, callBack, params = null, showLoading = true){
    if(showLoading){
        $("#loading_screen").show();
    }

    var myMethod = (params == null ? "GET" : "POST");
    var contentType = 'application/x-www-form-urlencoded; charset=UTF-8';
    var processData = true, async = true;
    if(params != null){
        if(params instanceof FormData){
            contentType = false;
            processData = false;
        }
    }

    if (clickOnce) {
        clickOnce = false;
        $.ajax({
            method: myMethod,
            url: url,
            data: params,
            cache: false,
            async: async,
            contentType: contentType,
            processData: processData,
            timeout: 30000
        }).done(function(data){
            callBack(data);
            setTimeout(function(){
                $("#loading_screen").hide();
                clickOnce = true;
            },700);
        });
    }
}

function loadFileFunction(element, url, showLoading = true){
    if(showLoading){
        $("#loading_screen").show();
    }

    setTimeout(function(){
        // element.load(url, function(){
        //     $("#loading_screen").hide();
        // });
        element.load(url, 
            function (responseText, textStatus, req) {
                if(responseText.includes("!DOCTYPE html")){
                    window.location.replace(webConfig["BASEURL"]);
                    return false;
                }
                $("#loading_screen").hide();
        });
    }, 100);
}

// Restricts input for the given textbox to the given inputFilter.
function setInputFilter(textbox, inputFilter) {
    // textbox.on("input keydown keyup mousedown mouseup select contextmenu drop", function() {
    var flag = true;
    var iOS = /iPad|iPhone|iPod/.test(navigator.platform || "");

    // if (iOS) {
        textbox.on("input", function() {
            var _this = this;
            setTimeout(function(){
                if(flag){
                    if (inputFilter(_this.value)) {
                        _this.oldValue = _this.value;
                        _this.oldSelectionStart = _this.selectionStart;
                        _this.oldSelectionEnd = _this.selectionEnd;
                    } else if (_this.hasOwnProperty("oldValue")) {
                        _this.value = _this.oldValue;
                        _this.setSelectionRange(_this.oldSelectionStart, _this.oldSelectionEnd);
                    } else {
                        _this.value = "";
                    }
                }
            },0);
        }).on('compositionstart', function() {
            flag = false;
            console.log('开始输入');
        })
        .on('compositionend', function() {
            flag = true;
            console.log('输入结束');
        });
    // } else {
    //     textbox.on("input keydown keyup", function() {
    //         var _this = this;
    //         if (inputFilter(_this.value)) {
    //             _this.oldValue = _this.value;
    //             _this.oldSelectionStart = _this.selectionStart;
    //             _this.oldSelectionEnd = _this.selectionEnd;
    //         } else if (_this.hasOwnProperty("oldValue")) {
    //             _this.value = _this.oldValue;
    //             _this.setSelectionRange(_this.oldSelectionStart, _this.oldSelectionEnd);
    //         } else {
    //             _this.value = "";
    //         }
    //     })
    // } 
}

function alertMessage(title, msg, icon = 'warning', callBack = null, html = null, customIconButton = {}, disableConfirmBtn = false, disableOverlayClick = false){
    var data = [], confirmButtonName, confirmButtonClass, csButtonName, csButtonClass, cancalButtonName, cancalButtonCallback, alertIcon, tempHtml = "";
    $(".alert_msg #alert_title, .alert_msg .alert_msg_body .button_area, .alert_msg .alert_msg_body .msg_show, .alert_msg .alert_msg_body .form_show").empty();
    $(".alert_msg #alert_icon").empty().removeAttr("class");
    $(".alert_msg").removeClass("toasted");

    if(Object.entries(customIconButton).length > 0){
        if("comfirmclass" in customIconButton){
            confirmButtonClass = customIconButton.comfirmclass;
        } else {
            confirmButtonClass = "btn";
        }

        if("comfirmname" in customIconButton){
            confirmButtonName = customIconButton.comfirmname;
        }
        else{
            confirmButtonName = btn_confirm_label;
        }

        if("csclass" in customIconButton){
            csButtonClass = customIconButton.csclass;
        } else {
            csButtonClass = "btn";
        }

        if("csname" in customIconButton){
            csButtonName = customIconButton.csname;
        }
        else{
            csButtonName = btn_cs_label;
        }

        if("cancelcallback" in customIconButton){
            cancalButtonCallback = customIconButton.cancelcallback;
        }
        if("cancelname" in customIconButton){
            cancalButtonName = customIconButton.cancelname;
        }
        else{
            cancalButtonName = btn_cancel_label;
        }

        if("alerticon" in customIconButton){
            alertIcon = customIconButton.alerticon;
            $(".alert_msg #alert_icon").html("<img src='"+alertIcon+"'>");
        }
        else{
            $(".alert_msg #alert_icon").addClass("ico-alert-"+icon);
        }
    }
    else{
        confirmButtonName = btn_confirm_label;
        cancalButtonName = btn_cancel_label;
        confirmButtonClass = "btn";
        if(icon != "success" && icon != "warning" && icon != "error" && icon != "info" && icon != "process"){
            icon = 'warning';
        }
        $(".alert_msg #alert_icon").addClass("ico-alert-"+icon);
    }

    $(".alert_msg").addClass("active delay");

    $(".alert_msg #alert_title").html(title);
    $(".alert_msg .alert_msg_body .msg_show").html(msg);
    if(html != null){
        $(".alert_msg .alert_msg_body .form_show").html(html);
    }

    if(callBack != null && html != null){
        var disableClass = (disableConfirmBtn) ? "disabled" : "";
        tempHtml += `<div class="confirm_btn"><button class="`+confirmButtonClass+` w-100 `+disableClass+`">`+confirmButtonName+`</button></div>`;
        tempHtml += `<div class="cancel_btn"><a>`+cancalButtonName+`</a></div>`;
        data.push({'name': 'form', 'value': 'true'})
    }
    else if((callBack != null && icon == 'error') || (callBack != null && icon == 'warning') || (callBack != null && icon == 'process')){
        tempHtml += `<div class="confirm_btn"><button class="`+confirmButtonClass+` w-100">`+confirmButtonName+`</button></div>`;

        if ("csname" in customIconButton) {
            tempHtml += `<div class="cs_btn"><button class="`+csButtonClass+` w-100" onclick="window.location.href='`+baseUrl+`about/index#contact_us'">`+csButtonName+`</button></div>`;
        }
        if("cancelname" in customIconButton){
            tempHtml += `<div class="cancel_btn"><a>`+cancalButtonName+`</a></div>`;
        }
    }
    else if(callBack != null){
        if(!("comfirmname" in customIconButton)){
            tempHtml += `<div class="confirm_btn"><button class="`+confirmButtonClass+` w-100">`+confirmButtonName+`</button></div>`;
        }
        if(!("cancelname" in customIconButton)){
            tempHtml += `<div class="cancel_btn"><a>`+cancalButtonName+`</a></div>`;
        }
    }
    else{
        if(icon == 'success'){
            if(msg == ""){
                $(".alert_msg").addClass("toasted");
            }
            alertExitTiming = setTimeout(function(){
                if($(".alert_msg").hasClass("active"))
                    $(".alert_msg.active").trigger("click");
            }, 3000);
        }
        else if(icon == 'error' || icon == "info" || icon == "warning"){
            if(msg == ""){
                $(".alert_msg").addClass("toasted");
                
                alertExitTiming = setTimeout(function(){
                    if($(".alert_msg").hasClass("active"))
                        $(".alert_msg.active").trigger("click");
                }, 3000);
            }

            tempHtml += `<div class="confirm_btn"><button class="`+confirmButtonClass+` w-100">`+confirmButtonName+`</button></div>`;

            if("cancelname" in customIconButton){
                tempHtml += `<div class="cancel_btn"><a>`+cancalButtonName+`</a></div>`;
            }
        }
    }

    $(".alert_msg .alert_msg_body .button_area").html(tempHtml);

    if("cancelcallback" in customIconButton){
        $(".alert_msg .cancel_btn button, .alert_msg .cancel_btn a").click(cancalButtonCallback);
    }

    if(disableOverlayClick){
        $(document).off("click", ".alert_msg, .alert_msg_pos");
    }
    else{
        $(document).off("click", ".alert_msg, .alert_msg_pos").on("click", ".alert_msg, .alert_msg_pos", function(e){
            e.preventDefault();
            clearTimeout(alertExitTiming);
            var thisObj = $(this);
            thisObj.removeClass("active");
            setTimeout(function(){
                thisObj.removeClass("delay");
                alertCheck = true;
            }, 300);
        });
    }

    // $(".alert_msg .confirm_btn button, .alert_msg .confirm_btn a").click(function(e){
    //     e.preventDefault();

    //     clearTimeout(alertExitTiming);
    //     var thisObj = $(this);
    //     if (!thisObj.hasClass('disabled')) {
    //         if(alertCheck){
    //             $(".alert_msg").removeClass("active");
    //             setTimeout(function(){
    //                 $(".alert_msg").removeClass("delay");
    //                 alertCheck = true;
    //             }, 300);
    //         }
    //         if(callBack != null){
    //             responseCallback(true);
    //         }
    //     } else {
    //         return false;
    //     }
    // });

    function responseCallback(value){
        if(value){
            if(data.length > 0){
                data = [];
                data.push({'name': 'form', 'value': 'true'});
                $(".alert_msg_body .form_show input, .alert_msg_body .form_show select, .alert_msg_body .form_show textarea").each(function (index, prop) {
                    data.push({'name': $(prop).attr("name"), 'value': $(prop).val()})
                });
                callBack(data);
            }
            else{
                callBack(value);
            }
        }
    }
}

function errorMessage(element, msg){
    element.parents(".textbox_content").children(".error_msg").html(msg);
}

function copyText(thisObj) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(thisObj.data("copy")).select();
    document.execCommand("copy");
    $temp.remove();
    alertMessage("复制成功!", '', 'success');
}

function getHashValue(){
    if(window.location.hash) {
        return window.location.hash;
    }
    else{
        return "";
    }
}

$(document).keydown(function(event){ 
    if (event.keyCode === 27) { 
        $('.modal').modal('hide');
    }
});