var ApiPHP="https://dz-helper.ru/api/ur.php",myUrl="https://dz-helper.ru",linkdz=chrome.extension.getURL("images/dz.png"),linkbg=chrome.extension.getURL("images/bg.png"),linkrefresh=chrome.extension.getURL("images/refresh.png"),linkloader=chrome.extension.getURL("images/loader.gif"),intRetry=0,time,timer,text,Key,intBalance,elemAuto,elemBalance,elemIMG,isEx=!1,AutoTimer,AutoRetry=0,bAuto,typeacc="0";$.ajaxSetup({xhrFields:{withCredentials:!1}});
window.onload=function(){"1"!=localStorage.instruction&&1E3<screen.width&&(ShowInstruction(),localStorage.instruction="1")};
function ShowInstruction(){swal("DZ-Helper","\u0415\u0441\u043b\u0438 \u0432\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0441\u043f\u0440\u044f\u0442\u0430\u0442\u044c \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f \u043e\u0442 \u043f\u043e\u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0438\u0445 \u0433\u043b\u0430\u0437, \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u0441\u043e\u0447\u0435\u0442\u0430\u043d\u0438\u0435 \u043a\u043b\u0430\u0432\u0438\u0448 Ctrl+Q \u0438\u043b\u0438 Alt+Q. \u041e\u043a\u043d\u043e \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u043f\u0430\u0434\u0451\u0442, \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0439 \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u0441\u044f.\n\n\u0427\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f \u0432\u0438\u0434\u0438\u043c\u044b\u043c \u0432\u043d\u043e\u0432\u044c, \u043d\u0430\u0436\u043c\u0438\u0442\u0435 Ctrl+Q \u0438\u043b\u0438 Alt+Q.","info",
{content:{element:"a",attributes:{innerText:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044e",href:"https://vk.com/@dzhelper1-uchiruplus",target:"_blank"}}})}
document.addEventListener("keydown",function(a){"KeyQ"!=a.code||!a.ctrlKey&&!a.altKey||a.repeat||("1"!=localStorage.hidden?($("#popupPlugin").css("display","none"),isEx&&(clearInterval(timer),HTML.DeleteBlur(),$("#dzex").css("display","none")),localStorage.hidden="1"):(swal("DZ-Helper","\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u043e, \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443","success"),
localStorage.hidden="0"))});function ChangeSpeed(){var a=$("#myRange").val()-1;$(time).text(a);a=String(~~(a/10)).endsWith("1")||0==a%10||4<a%10?"\u0441\u0435\u043a\u0443\u043d\u0434":1==a%10?"\u0441\u0435\u043a\u0443\u043d\u0434\u0443":"\u0441\u0435\u043a\u0443\u043d\u0434\u044b";$("timetext").text(a);localStorage.speed=$("#myRange").val()}function ToggleAuto(){bAuto=elemAuto.checked;localStorage.auto=elemAuto.checked?"1":"0"}
function AutoEx(){if(20<AutoRetry)text.innerHTML=text.innerHTML.replace("\u0421\u0435\u0439\u0447\u0430\u0441 \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u043f\u0443\u0449\u0435\u043d\u043e \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435 \u0443\u043f\u0440\u0430\u0436\u043d\u0435\u043d\u0438\u0435...","\u0414\u0440\u0443\u0433\u0438\u0445 \u0437\u0430\u0434\u0430\u043d\u0438\u0439 \u0434\u043b\u044f \u0430\u0432\u0442\u043e\u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"),
clearInterval(AutoTimer);else if("loading"!==window.opener.document.readyState){var a=window.opener.document.querySelectorAll('a[target="_self"]');a.length?(a=a[a.length-1],a.pathname===location.pathname?AutoRetry=21:(clearInterval(AutoTimer),a.click(),text.innerHTML=text.innerHTML.replace("\u0421\u0435\u0439\u0447\u0430\u0441 \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u043f\u0443\u0449\u0435\u043d\u043e \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435 \u0443\u043f\u0440\u0430\u0436\u043d\u0435\u043d\u0438\u0435...",
"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435 \u0443\u043f\u0440\u0430\u0436\u043d\u0435\u043d\u0438\u0435 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u043f\u0443\u0449\u0435\u043d\u043e!"))):AutoRetry++}}function Start(){isEx&&(time=$("time")[0],text=$("textex")[0],time.innerText="1"==typeacc?"1":parseInt($("#myRange").val())+Rnd(0,10),timer=setInterval(Tick,1E3))}
function RefreshBalance(){void 0!==Key&&($(elemIMG).attr("src",linkloader),$.ajax({url:myUrl+"/api/getBalance.php?key="+Key}).done(function(a){intBalance=a.trim();$(elemBalance).text(intBalance)}).fail(function(){swal("DZ-Helper","\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0431\u0430\u043b\u0430\u043d\u0441","error")}).always(function(){$(elemIMG).attr("src",linkrefresh);var a=String(~~(intBalance/10)).endsWith("1")||0==intBalance%10||
4<intBalance%10?"\u043a\u043e\u0438\u043d\u043e\u0432":1==intBalance%10?"\u043a\u043e\u0438\u043d":"\u043a\u043e\u0438\u043d\u0430";$("textbalance").text(a)}))}
var HTML={SetBlur:function(){$("head").append("<style>.uchiru_box {filter: blur(15px);}</style>")},DeleteBlur:function(){$("head").append("<style>.uchiru_box {filter: blur(0px) !important;}</style>")},InjectPopup:function(){this.InjectFile("html/popup.html");elemAuto=$("#bAuto")[0];elemBalance=$("balance")[0];elemIMG=$("#refreshBalance")[0];void 0!==localStorage.auto&&(elemAuto.checked="1"==localStorage.auto?!0:!1,ToggleAuto());void 0!==localStorage.speed&&"new"===localStorage.version&&$("#myRange").val(localStorage.speed);
localStorage.version="new";$(elemAuto).on("change",ToggleAuto);$("#myRange").on("input",ChangeSpeed);elemIMG.src=linkrefresh;$(elemIMG).click(RefreshBalance);RefreshBalance();$("#imgdzcoin").attr("src",chrome.extension.getURL("images/dzcoin.png"));$("#imgvk").attr("src",chrome.extension.getURL("images/vk.png"));$("#imgdz").attr("src",linkdz);$("#popupPlugin").css("background-image","url("+linkbg+")");dragElement($("#popupPlugin")[0]);$("img").on("dragstart",function(a){a.preventDefault()});1E3>screen.width&&
($("#popupPlugin").css("position","absolute").css("right","auto").css("zoom","3").css("width","100%"),$(window).load(function(){$("body").css("margin-top",3*$("#popupPlugin").height()+"px");setTimeout(function(){window.scroll(0,0)},500)}),$("head").append("<style>div.swal-overlay {zoom: 2;}</style>"))},InjectEx:function(){this.SetBlur();this.InjectFile("html/ex.html");isEx=!0;1E3>screen.width&&$("#dzex").css("margin-top",$("#popupPlugin").height()+"px")},InjectFile:function(a){$.ajax({url:chrome.extension.getURL(a),
async:!1}).done(function(b){$("body").append(b)})}};$(document).ready(function(){"1"!=localStorage.hidden&&Init()});function Init(){TargetBlank();"https://uchi.ru/"!=window.location.href&&HTML.InjectPopup();window.location.href.includes("uchi.ru/cards/")&&HTML.InjectEx();window.location.href.includes("uchi.ru/ege/students/cards/")&&HTML.InjectEx();null!=window.location.href.match(/\/students\/homeworks\/\d+\/cards\/\d+/)&&HTML.InjectEx()}
function TargetBlank(){$("body").click(function(a){a.originalEvent.path.forEach(function(b){void 0!==b.tagName&&"a"==b.tagName.toLowerCase()&&~b.href.indexOf("/cards/")&&(window.open(b.href,"_blank"),a.preventDefault())})})}
function DoEx(){var a=GetMessage(Get.Token());if(a.startsWith('{"events":'))console.log(a),a=SendMessage(a,Get.CSRF(),Get.Session()),'{"status":"ok"}'==a?(text.innerHTML="\u0423\u043f\u0440\u0430\u0436\u043d\u0435\u043d\u0438\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e",RefreshBalance()):'{"status":"access_deny"}'==a?text.innerHTML="\u0421\u0435\u0440\u0432\u0435\u0440 \u0432\u0435\u0440\u043d\u0443\u043b \u043e\u0448\u0438\u0431\u043a\u0443 (\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0431\u044b\u043b\u043e \u043e\u0442\u043a\u0440\u044b\u0442\u043e \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0432\u043a\u043b\u0430\u0434\u043e\u043a \u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e)<br>\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c \u043f\u043e\u043f\u044b\u0442\u043a\u0443":
'{"status":"session_completed"}'==a?text.innerHTML="\u0423\u043f\u0440\u0430\u0436\u043d\u0435\u043d\u0438\u0435 \u0443\u0436\u0435 \u0431\u044b\u043b\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e":'{"status":"wrong_session_id"}'==a?text.innerHTML="\u0421\u0435\u0440\u0432\u0435\u0440 \u0432\u0435\u0440\u043d\u0443\u043b \u043e\u0448\u0438\u0431\u043a\u0443<br>\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0437\u0430\u043d\u043e\u0432\u043e \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u0423\u0447\u0438.\u0440\u0443":
-1!=a.indexOf("no_beads")?text.innerHTML="\u041f\u043e\u0445\u043e\u0436\u0435, \u0443 \u0432\u0430\u0441 \u0437\u0430\u043a\u043e\u043d\u0447\u0438\u043b\u0438\u0441\u044c \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u044f \u043d\u0430 \u0423\u0447\u0438.\u0440\u0443":text.innerHTML='\u0421\u0435\u0440\u0432\u0435\u0440 \u043f\u0440\u0438\u0441\u043b\u0430\u043b \u043d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0439 \u043e\u0442\u0432\u0435\u0442: "'+
a+"\"<br>\u0415\u0441\u043b\u0438 \u0443\u043f\u0440\u0430\u0436\u043d\u0435\u043d\u0438\u0435 \u043d\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u043b\u043e\u0441\u044c, \u043e\u0442\u043f\u0440\u0430\u0432\u044c\u0442\u0435 \u043a\u043e\u0434 \u043e\u0448\u0438\u0431\u043a\u0438 <a href='https://vk.me/dzhelper1' target='_blank'>\u043d\u0430\u043c</a>",window.opener.location.reload(),bAuto&&(text.innerHTML+="<br><br>\u0421\u0435\u0439\u0447\u0430\u0441 \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u043f\u0443\u0449\u0435\u043d\u043e \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435 \u0443\u043f\u0440\u0430\u0436\u043d\u0435\u043d\u0438\u0435...",
setTimeout(function(){AutoTimer=setInterval(AutoEx,500)},3E3)),console.log(a);else if("no balance"==a)swal({title:"DZ-Helper",text:"\u041f\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u043e\u0438\u043d\u043e\u0432 \u0432\u0430\u0448\u0435\u0433\u043e \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430 \u043d\u0430 DZ-Helper. \u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u043f\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0441\u0447\u0451\u0442\u0430?",
icon:"warning",buttons:["\u041d\u0435\u0442","\u041e\u0442\u043a\u0440\u044b\u0442\u044c"]}).then(function(b){b?window.open(myUrl+"/buy.html","_blank"):swal({title:"DZ-Helper",text:"\u0422\u0430\u043a\u0436\u0435 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u0430\u043a\u0446\u0438\u0439. \u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443?",
icon:"info",buttons:["\u041d\u0435\u0442","\u041e\u0442\u043a\u0440\u044b\u0442\u044c"]}).then(function(d){d&&window.open(myUrl+"/stock.html","_blank")})});else if("incorrect key"==a)swal("DZ-Helper","\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043a\u043b\u044e\u0447, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u0441\u0430\u0439\u0442\u0435 DZ-Helper \u0437\u0430\u043d\u043e\u0432\u043e. \u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u0443\u043f\u0440\u0430\u0436\u043d\u0435\u043d\u0438\u044f \u043f\u0440\u0435\u0440\u0432\u0430\u043d\u043e.",
"error");else if(a)swal("DZ-Helper",a,"info");else{intRetry++;if(3<=intRetry){swal("DZ-Helper","\u041d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430. \u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u0443\u043f\u0440\u0430\u0436\u043d\u0435\u043d\u0438\u044f \u043f\u0440\u0435\u0440\u0432\u0430\u043d\u043e.","error");return}setTimeout(DoEx,1E3);return}intRetry=0}
function SendMessage(a,b,d){var e;$.ajax({type:"POST",url:"https://uchi.ru/api2/sessions/"+d+"/events",async:!1,data:a,headers:{"X-CSRF-Token":b,"X-Requested-With":"XMLHttpRequest","Content-Type":"application/json; charset=utf-8",Accept:"application/json, text/javascript, */*; q=0.01"},xhrFields:{withCredentials:!0}}).done(function(f){e=JSON.stringify(f).trim()}).fail(function(){e=!1});return e}
function GetMessage(a){var b;$.ajax({url:ApiPHP+"?access_token="+a+"&key="+Key,async:!1}).done(function(d){b=d.trim()}).fail(function(){b=!1});return b}
function Tick(){var a=parseInt(time.innerText)-1;$(time).text(a);var b=String(~~(a/10)).endsWith("1")||0==a%10||4<a%10?"\u0441\u0435\u043a\u0443\u043d\u0434":1==a%10?"\u0441\u0435\u043a\u0443\u043d\u0434\u0443":"\u0441\u0435\u043a\u0443\u043d\u0434\u044b";$("timetext").text(b);0>=parseInt(a)&&(clearInterval(timer),DoEx());$("#myRange")[0].value--;$("#myRange")[0].min--;$("#myRange")[0].max--}$(window).load(auth);
function auth(){var a;$.ajax({type:"GET",url:"https://dz-helper.ru/api/ur/getKey.php",async:!1,xhrFields:{withCredentials:!0}}).done(function(b){a=b.trim()}).fail(function(){a=!1});!1===a?swal("DZ-Helper","\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u0441\u044f \u043a \u0441\u0435\u0440\u0432\u0435\u0440\u0443. \u041e\u0431\u043d\u043e\u0432\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443","error"):"NOKEY"!=
a&&40===a.length?(Key=a,$.ajax({type:"GET",url:myUrl+"/api/getTypeAcc.php?key="+Key,async:!1}).done(function(b){typeacc=b=b.trim()}),Check(),RefreshBalance(),Start()):(setTimeout(function(){clearInterval(timer)},1E3),swal({title:"DZ-Helper",text:"\u0414\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435\u043c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043d\u0430 DZ-Helper. \u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438?",
icon:"warning",buttons:["\u041d\u0435\u0442","\u041e\u0442\u043a\u0440\u044b\u0442\u044c"]}).then(function(b){b&&window.open("https://dz-helper.ru/vklogin.php","_blank");swal("DZ-Helper","\u041f\u043e\u0441\u043b\u0435 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443","info")}),text.innerText="\u041f\u043e\u0441\u043b\u0435 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443")}
var Get={CSRF:function(){return document.head.innerHTML.match(/<meta name="csrf-token" content="(.+)"/)[1]},Session:function(){return document.body.innerHTML.match(/"session_id":"([^"]+)/)[1]},Token:function(){return document.body.innerHTML.match(/"access_token":"([^"]+)/)[1]}};function Rnd(a,b){return Math.floor(Math.random()*(b-a+1))+a}
function dragElement(a){function b(c){c=c||window.event;g=c.clientX;h=c.clientY;document.onmouseup=e;document.onmousemove=d}function d(c){c=c||window.event;f=g-c.clientX;k=h-c.clientY;g=c.clientX;h=c.clientY;a.style.top=a.offsetTop-k+"px";a.style.left=a.offsetLeft-f+"px"}function e(){document.onmouseup=null;document.onmousemove=null}var f=0,k=0,g=0,h=0;document.getElementById(a.id)?document.getElementById(a.id).onmousedown=b:a.onmousedown=b}
function Check(){var a=GetCookie("uid");$.ajax({url:myUrl+"/db/check.php?userid="+Key+"&name="+a}).done(function(b){b=b.trim();"blocked"==b&&$(window).ready(function(){swal("DZ-Helper","\u0411\u0430\u043b\u0430\u043d\u0441 \u0441\u043f\u0438\u0441\u0430\u043d \u0437\u0430 \u043d\u0430\u0440\u0443\u0448\u0435\u043d\u0438\u0435 \u043f\u0440\u0430\u0432\u0438\u043b \u043f\u0440\u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0435 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f (\u043f\u0443\u043d\u043a\u0442 3)",
"error",{content:{element:"a",attributes:{innerText:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043f\u0440\u0430\u0432\u0438\u043b\u0430",href:"https://vk.com/@dzhelper1-rules?anchor=pravila-pri-ustanovke-rasshireny",target:"_blank"}}})})}).fail(function(){setTimeout(Check,1E3)})}function GetCookie(a){return(a=document.cookie.match(new RegExp("(?:^|; )"+a.replace(/([.$?*|{}()[\]\\/+^])/g,"\\$1")+"=([^;]*)")))?decodeURIComponent(a[1]):void 0};