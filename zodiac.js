let date = parseInt(prompt('enter date'));
let month = prompt('enter month'); 
if (date <1 || date > 31) {
    document.write("Invalid Date"); 
}

else if ((date>=21 &&  month =="march") || date<=19 && month=="april"){
    document.write(" Zodiac_sign = Aries ♈")
}

else if((date>=20 && month=="april")  || date<=20 && month=="may"){
    document.write(" Zodiac_sign = Taurus ♉");
}
else if((date>=21 && month=="may") || date<=20 && month=="june"){
    document.write(" Zodiac_sign = Gemini ♊");
}

else if((date>=21 && month=="june") || date<=22 && month=="july"){
    document.write("Zodiac_sign = Cancer ♋");
}
else if((date>=23 && month=="july") || date<=22 && month=="august"){
    document.write("Zodiac_sign = Leo ♌");
}

else if((date>=23 && month=="august") || date<=22 && month=="september"){
    document.write("Zodiac_sign = Virgo ♍");
}

else if((date>=23 && month=="september") || date<=22 && month=="october"){
    document.write("Zodiac_sign = Libra ♎");
}

else if((date>=23 && month=="october") || date<=21 && month=="november"){
    document.write("Zodiac_sign = Scorpio ♏");
}
else if((date>=22 && month=="november") || date<=21 && month=="december"){
    document.write("Zodiac_sign = Sagittarius ♐");
}
else if((date>=22 && month=="december") || date<=19 && month=="january"){
    document.write("Zodiac_sign = Capricorn ♑");
}
else if((date>=20 && month=="january") || date<=18 && month=="february"){
    document.write("Zodiac_sign = Aquarius ♒");
}
else if((date>=19 && month=="february") || date<=20 && month=="march"){
    document.write("Zodiac_sign = Pisces ♓");
}
else{
    document.write("No match ");
}