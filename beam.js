var countBs=function(str){
    return str.match(/B/g).length;   //If the g flag is used, all results matching the complete regular expression will be returned
};
var countChar=function(str,char){
    var count=0
    for(var i=0;i<str.length;i++){
        if(str[i]===char){
            count++;
        }
    }
    return count;
};
console.log(countBs("BBBAbb"));
console.log(countChar("kingkong",'k'));