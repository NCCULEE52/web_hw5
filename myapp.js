/*
Skycons is a set of ten animated weather glyphs, procedurally generated by JavaScript using the HTML5 canvas tag.
http://darkskyapp.github.io/skycons/
*/
$(document).ready(function(){
  //  
  var TPE='https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22taipei%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';
  $.getJSON(TPE,function(data){
  var currentTemperature = data.query.results.channel.item.condition.temp  ; // 就可以找到現在溫度
  var temp=$(".temperature");
  //var c =currentTemperature;
  var c= (currentTemperature-32)*5/9;
  c=parseInt(c,10);
  temp.text(c);
  console.log("temp:"+temp.text());
//taipei data set
var datechange=$(".date");
var getdate=data.query.results.channel.item.condition.date;
getdate=getdate.split(" ");
getdate[0]=getdate[0].replace(",","");
datechange.text(getdate[1]+" "+getdate[2]+" "+getdate[3]);
    //getdate[0]+" "+
    var getweather=data.query.results.channel.item.condition;
    getweather=getweather['text'];
    console.log("today weather:"+getweather);
    datechange.text(datechange.text()+" "+" "+getweather);
    var gftext1=data.query.results.channel.item.forecast[1]['text'];
    var gftext2=data.query.results.channel.item.forecast[2]['text'];
    var gftext3=data.query.results.channel.item.forecast[3]['text'];
    console.log("todaynew:"+getweather+gftext1+gftext2+gftext3)
    sky(getweather,gftext1,gftext2,gftext3);
    var forecast1=$(".t1");
    var forecast2=$(".t2");
    var forecast3=$(".t3");
    var getforecast1=data.query.results.channel.item.forecast[1].date;
    var getforecast2=data.query.results.channel.item.forecast[2].date;
    var getforecast3=data.query.results.channel.item.forecast[3].date;

    console.log(getforecast1);
    forecast1.text(getforecast1);
    forecast2.text(getforecast2);
    forecast3.text(getforecast3);
    var gf1h=data.query.results.channel.item.forecast[1].high;
    var gf1l=data.query.results.channel.item.forecast[1].low;
    var gf2h=data.query.results.channel.item.forecast[2].high;
    var gf2l=data.query.results.channel.item.forecast[2].low;
    var gf3h=data.query.results.channel.item.forecast[3].high;
    var gf3l=data.query.results.channel.item.forecast[3].low;
    console.log(","+gf1h+","+gf1l+","+gf2h+","+gf2l+","+gf3h+","+gf3l);
    gf1h= (gf1h-32)*5/9;gf1h=parseInt(gf1h,10);
    gf1l= (gf1l-32)*5/9;gf1l=parseInt(gf1l,10);
    gf2h= (gf2h-32)*5/9;gf2h=parseInt(gf2h,10);
    gf2l= (gf2l-32)*5/9;gf2l=parseInt(gf2l,10);
    gf3h= (gf3h-32)*5/9;gf3h=parseInt(gf3h,10);
    gf3l= (gf3l-32)*5/9;gf3l=parseInt(gf3l,10);
    console.log(","+gf1h+","+gf1l+","+gf2h+","+gf2l+","+gf3h+","+gf3l);
    var fdegree1=$(".d1");
    var fdegree2=$(".d2");
    var fdegree3=$(".d3");
    fdegree1.text(gf1l+"-"+gf1h+"˚C");
    fdegree2.text(gf2l+"-"+gf2h+"˚C");
    fdegree3.text(gf3l+"-"+gf3h+"˚C");
//end of taipei data set
})
  //

  var setVariable= function (name, t){
    ///////////
   // jQuery('<strong>man</strong>').appendTo('h1');
   // $('<span>。</span>').appendTo('h1').text('COLON');
    //jQuery("#"+name).text(t);
   // var blank = document.createElement("&nbsp");
    //var c=t;
    var c= (t-32)*5/9;
    c=parseInt(c,10);
    jQuery("#"+name).append(c+"˚C");
   // jQuery(t).appendTo("#"+name);
 }
 var getalltemp = function(){
  var city={
    '臺北市' : 'Taipei',
    '新北市' : 'New Taipei City',
    '台中市' : 'Taichung',
    '臺南市' : 'Tainan',
    '高雄市' : 'Kaohsiung',
    '基隆市' : 'Keelung',
    '桃園市' : 'Taoyuan',
    '新竹市' : 'Hsinchu ',
    '新竹縣' : 'Hsinchu',
    '苗栗縣' : 'Miaoli',
    '彰化縣' : 'Changhua',
    '南投縣' : 'Nantou',
    '雲林縣' : 'Yunlin' ,
    '嘉義市' : 'Chiayi City' ,
    '嘉義縣' : 'Chiayi',
    '屏東縣' : 'Pingtung',
    '宜蘭縣' : 'Yilan',
    '花蓮縣' : 'Hualien',
    '台東縣' : 'Taitung',
    '澎湖縣' : 'Penghu',
    '金門縣' : 'Kinmen',
    '連江縣' : 'Lianjiang'
  };
  $("li").each(function(){
    var first = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22';
      var last = '%20City%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';
  var a = $(this).text();
      //console.log("site");
      console.log(city[$(this).text()]);
     // console.log(first+city[$(this).text()]+last);
     $.getJSON(first+city[$(this).text()]+last,function(data){
      var currentTemperature = data.query.results.channel.item.condition.temp  ; // 就可以找到現在溫度
      setVariable(a,currentTemperature )
    }
    )
   });
}
// var getcurrent=function(){
//   jQuery(".date").append("Correct");
//   var datechange=$(".date");
//   var getdate=data.query.results.channel.item.condition.temp  ;
//   datechange.append(getdate);
// }  
// getcurrent();
getalltemp();

});
var gftext1;
var gftext2;
var gftext3;
var getcity;

var sky=function(today,d1,d2,d3){
  var weather={
    'Cloudy': 'CLOUDY',
    'Rain' : 'RAIN',
    'Sunny' : 'CLEAR_DAY',
    'Partly Cloudy' : 'PARTLY_CLOUDY_DAY',
    'Mostly Sunny' : 'CLEAR_DAY',
    'Mostly Cloudy' : 'CLOUDY',
    'Breezy' : 'WIND',
    'Scattered Thunderstorms' : 'SLEET',
    'Thunderstorms' : 'RAIN',
    'Scattered Showers' :'SLEET',
    'Showers' : 'SLEET'
  };
  var skycons = new Skycons();
  // on Android, a nasty hack is needed: {"resizeClear": true}
  // you can add a canvas by it's ID...
  skycons.add("today", Skycons.PARTLY_CLOUDY_DAY);
  skycons.add("day1", Skycons.CLEAR_DAY);
  skycons.add("day2", Skycons.CLOUDY);
  skycons.add("day3", Skycons.SLEET);
  // start animation!
  skycons.play();
  console.log("today:"+today+" d1:",d1," d2:",d2," d3:",d3);
  console.log("^__^"+weather[d1]);
//today
if(weather[today]=='CLOUDY'){
  skycons.set("today", Skycons.CLOUDY);}
  else if (weather[today]=='RAIN'){
   skycons.set("today", Skycons.RAIN);}
   else if (weather[today]=='CLEAR_DAY'){
     skycons.set("today", Skycons.CLEAR_DAY);}
     else if (weather[today]=='PARTLY_CLOUDY_DAY'){
       skycons.set("today", Skycons.PARTLY_CLOUDY_DAY);}
       else if (weather[today]=='CLOUDY'){
         skycons.set("today", Skycons.CLOUDY);}
         else if (weather[today]=='WIND'){
           skycons.set("today", Skycons.WIND);}
           else if (weather[today]=='SLEET'){
             skycons.set("today", Skycons.SLEET);}

//day1
if(weather[d1]=='CLOUDY'){
  skycons.set("day1", Skycons.CLOUDY);}
  else if (weather[d1]=='RAIN'){
   skycons.set("day1", Skycons.RAIN);}
   else if (weather[d1]=='CLEAR_DAY'){
     skycons.set("day1", Skycons.CLEAR_DAY);}
     else if (weather[d1]=='PARTLY_CLOUDY_DAY'){
       skycons.set("day1", Skycons.PARTLY_CLOUDY_DAY);}
       else if (weather[d1]=='CLOUDY'){
         skycons.set("day1", Skycons.CLOUDY);}
         else if (weather[d1]=='WIND'){
           skycons.set("day1", Skycons.WIND);}
           else if (weather[d1]=='SLEET'){
             skycons.set("day1", Skycons.SLEET);}
//day 2
if(weather[d2]=='CLOUDY'){
  skycons.set("day2", Skycons.CLOUDY);}
  else if (weather[d2]=='RAIN'){
   skycons.set("day2", Skycons.RAIN);}
   else if (weather[d2]=='CLEAR_DAY'){
     skycons.set("day2", Skycons.CLEAR_DAY);}
     else if (weather[d2]=='PARTLY_CLOUDY_DAY'){
       skycons.set("day2", Skycons.PARTLY_CLOUDY_DAY);}
       else if (weather[d2]=='CLOUDY'){
         skycons.set("day2", Skycons.CLOUDY);}
         else if (weather[d2]=='WIND'){
           skycons.set("day2", Skycons.WIND);}
           else if (weather[d2]=='SLEET'){
             skycons.set("day2", Skycons.SLEET);}
//day 3
if(weather[d3]=='CLOUDY'){
  skycons.set("day3", Skycons.CLOUDY);}
  else if (weather[d3]=='RAIN'){
   skycons.set("day3", Skycons.RAIN);}
   else if (weather[d3]=='CLEAR_DAY'){
     skycons.set("day3", Skycons.CLEAR_DAY);}
     else if (weather[d3]=='PARTLY_CLOUDY_DAY'){
       skycons.set("day3", Skycons.PARTLY_CLOUDY_DAY);}
       else if (weather[d3]=='CLOUDY'){
         skycons.set("day3", Skycons.CLOUDY);}
         else if (weather[d3]=='WIND'){
           skycons.set("day3", Skycons.WIND);}
           else if (weather[d3]=='SLEET'){
             skycons.set("day3", Skycons.SLEET);}
/*
CLEAR_DAY,CLEAR_NIGHT,PARTLY_CLOUDY_DAY
,PARTLY_CLOUDY_NIGHT,CLOUDY,RAIN,SLEET,SNOW,WIND,FOG
*/
}

  // want to change the icon? no problem:
  //skycons.add("today", Skycons.PARTLY_CLOUDY_DAY);
  //skycons.set("today", Skycons.PARTLY_CLOUDY_NIGHT);
 // skycons.set("today", Skycons.CLEAR_NIGHT);
//Scattered Showers
/*
Get value from Bootstrap dropdown menu
*/
console.log("start");
document.getElementById("dropdown").addEventListener("click", function(){
    // document.getElementById("dropdown").innerHTML = "Hello World";
  });
// jQuery("h1").text("jQuery is the GREATEST!!!");
// jQuery('<strong>man</strong>').appendTo('h1');
// $('<span>。</span>').appendTo('h1').text('Bartolo Colon');
// $('<span>。</span>')
console.log(jQuery("li").text());

$('#dropdown li').on('click', function(){
 // sky();
 var city={
  '臺北市' : 'Taipei',
  '新北市' : 'New Taipei City',
  '台中市' : 'Taichung',
  '臺南市' : 'Tainan',
  '高雄市' : 'Kaohsiung',
  '基隆市' : 'Keelung',
  '桃園市' : 'Taoyuan',
  '新竹市' : 'Hsinchu ',
  '新竹縣' : 'Hsinchu',
  '苗栗縣' : 'Miaoli',
  '彰化縣' : 'Changhua',
  '南投縣' : 'Nantou',
  '雲林縣' : 'Yunlin' ,
  '嘉義市' : 'Chiayi City' ,
  '嘉義縣' : 'Chiayi',
  '屏東縣' : 'Pingtung',
  '宜蘭縣' : 'Yilan',
  '花蓮縣' : 'Hualien',
  '台東縣' : 'Taitung',
  '澎湖縣' : 'Penghu',
  '金門縣' : 'Kinmen',
  '連江縣' : 'Lianjiang'
};
//alert($(this).text());
getcity = $(this).text();
//
var a = $(this).text();
var res = a.substr(0,3);
  //console.log("site");
  console.log($(this).text());
  console.log("LEBRON"+res);

  console.log("getcity:"+getcity);
  console.log("city[res]:"+city[res]);
  //  https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Miaoli%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys         
  var first = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22';   
  // var last = '%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';
var last = '%20City%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';
$.getJSON(first+city[res]+last,function(data)
{
    console.log (data) ; // 可以比較方便你找到你要的資料在這個物件的哪個位置
    // 例如
    var currentTemperature = data.query.results.channel.item.condition.temp  ; // 就可以找到現在溫度
    console.log("temperature:"+currentTemperature);
    var temp=jQuery("li");
   // jQuery(".date").append("_Bsddsds_");
   //  jQuery(".date").append("XXXXX");
   var datechange=$(".date");
   var getdate=data.query.results.channel.item.condition.date;
   getdate=getdate.split(" ");
   getdate[0]=getdate[0].replace(",","");
   datechange.text(getdate[1]+" "+getdate[2]+" "+getdate[3]);
    //getdate[0]+" "+
    var getweather=data.query.results.channel.item.condition;
    getweather=getweather['text'];
    console.log("today weather:"+getweather);
    datechange.text(datechange.text()+" "+" "+getweather);
    // jQuery(".date").append("XQX");
    // temp.text(temp.text()+currentTemperature);
    var temp=$(".temperature");
    var c= (currentTemperature-32)*5/9;
    c=parseInt(c,10);
    temp.text(c);
    console.log("temp:"+temp.text());
//button change
var btn =$(".btn");
console.log("iambtn"+btn.text());
btn.text(getcity);
console.log("iambtnCHANGE"+btn.text());
//future forecast
var forecast1=$(".t1");
var forecast2=$(".t2");
var forecast3=$(".t3");
console.log(forecast1.text());
var getforecast1=data.query.results.channel.item.forecast[1].date;
var getforecast2=data.query.results.channel.item.forecast[2].date;
var getforecast3=data.query.results.channel.item.forecast[3].date;

console.log(getforecast1);
forecast1.text(getforecast1);
forecast2.text(getforecast2);
forecast3.text(getforecast3);

var gf1h=data.query.results.channel.item.forecast[1].high;
var gf1l=data.query.results.channel.item.forecast[1].low;
var gf2h=data.query.results.channel.item.forecast[2].high;
var gf2l=data.query.results.channel.item.forecast[2].low;
var gf3h=data.query.results.channel.item.forecast[3].high;
var gf3l=data.query.results.channel.item.forecast[3].low;
console.log(","+gf1h+","+gf1l+","+gf2h+","+gf2l+","+gf3h+","+gf3l);
gf1h= (gf1h-32)*5/9;gf1h=parseInt(gf1h,10);
gf1l= (gf1l-32)*5/9;gf1l=parseInt(gf1l,10);
gf2h= (gf2h-32)*5/9;gf2h=parseInt(gf2h,10);
gf2l= (gf2l-32)*5/9;gf2l=parseInt(gf2l,10);
gf3h= (gf3h-32)*5/9;gf3h=parseInt(gf3h,10);
gf3l= (gf3l-32)*5/9;gf3l=parseInt(gf3l,10);
console.log(","+gf1h+","+gf1l+","+gf2h+","+gf2l+","+gf3h+","+gf3l);
var fdegree1=$(".d1");
var fdegree2=$(".d2");
var fdegree3=$(".d3");
fdegree1.text(gf1l+"-"+gf1h+"˚C");
fdegree2.text(gf2l+"-"+gf2h+"˚C");
fdegree3.text(gf3l+"-"+gf3h+"˚C");
var ftext1=$(".d1");
var ftext2=$(".d2");
var ftext3=$(".d3");
gftext1=data.query.results.channel.item.forecast[1]['text'];
gftext2=data.query.results.channel.item.forecast[2]['text'];
gftext3=data.query.results.channel.item.forecast[3]['text'];
console.log("todaynew:"+getweather+gftext1+gftext2+gftext3)
sky(getweather,gftext1,gftext2,gftext3);
}
)
});

// $(document).ready(function(){
//   $("button").click(function(){
//     $("li").each(function(){
//       alert($(this).text())
//     });
//   });
// });


