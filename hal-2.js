{
    var how_many_ads = 1;
var now = new Date()
var sec = now.getSeconds()
var ad = sec % how_many_ads;
ad +=1;
if (ad==1) {
txt="Wow UMY jadi Universitas no.1";
url="https://www.umy.ac.id/";
alt="www.umy.ac.id";
banner="https://i.postimg.cc/fRHpgywp/download.jpg";
width="300";
height="150";
}
document.write('<center>');
document.write('<a href=\"' + url + '\" target=\"_top\">');
document.write('<img src=\"' + banner + '\" width=')
document.write(width + ' height=' + height + ' ');
document.write('alt=\"' + alt + '\" border=0><br>');
document.write('<small>' + txt + '</small></a>');
document.write('</center>');



}