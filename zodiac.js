let date = parseInt(prompt('enter date'));
let month = prompt('enter month').toLowerCase(); 
if (date <1 || date > 31) {
    document.write("Invalid Date") ; 
}

else if (((date>=21  && date<=31 ) &&  month =="march") || ((date>=1 && date<=19) && month=="april")){
    document.write(" Zodiac_sign = Aries ♈")
}

else if(((date>=20  && date<=30 ) && month=="april" ) ||( (date>=1 && date<=20) && month=="may")){
    document.write(" Zodiac_sign = Taurus ♉");
}
else if(((date>=21 && date<=31) && month=="may") || ((date>=1 && date<=20 )&& month=="june")){
    document.write(" Zodiac_sign = Gemini ♊");
}

else if(((date>=21  && date<=30 ) && month=="june" )|| ((date>=1 && date<=22) && month=="july")){
    document.write("Zodiac_sign = Cancer ♋");
}
else if(((date>=23 && date<=31)  && month=="july") || ((date>=1 && date<=22 )&& month=="august")){
    document.write("Zodiac_sign = Leo ♌");
}

else if(((date>=23 && date<=31 ) && month=="august") || (( date>=1 && date<=22 )&& month=="september")){
    document.write("Zodiac_sign = Virgo ♍");
}

else if(((date>=23  && date<=30 )&& month=="september") ||( ( date>=1 && date<=22) && month=="october")){
    document.write("Zodiac_sign = Libra ♎");
}

else if(((date>=23 && date<=31 )&& month=="october") || (( date>=1 && date<=21) && month=="november")){
    document.write("Zodiac_sign = Scorpio ♏");
}
else if(((date>=22 && date<=30 ) && month=="november") ||((date>=1 && date<=21 ) && month=="december")){
    document.write("Zodiac_sign = Sagittarius ♐");
}
else if(((date>=22 && date<=31) && month=="december") || (( date>=1 && date<=19) && month=="january")){
    document.write("Zodiac_sign = Capricorn ♑");
}
else if(((date>=20 && date<=31 )&& month=="january") || (( date>=1 && date<=18) && month=="february")){
    document.write("Zodiac_sign = Aquarius ♒");
}
else if(((date>=19 && date<=29 )&& month=="february" )|| ((date>=1 && date<=20) && month=="march")){
    document.write("Zodiac_sign = Pisces ♓");
}
else{
    document.write("No match ");
}