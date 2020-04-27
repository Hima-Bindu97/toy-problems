var deepequals=function(a,b){
    if(a===b){
        return true;
    }
    else if(typeof a=="object" && typeof b=="object" && a!=null && b!=null){
        if(Object.keys(a).length!=Object.keys(b).length){
            return false;
        }
        for(var prop in a){   //prop represents the value of a
            if(b.hasOwnProperty(prop)){  //used to check whether the object has specified property as its own property
                if(!deepEqual(a[prop],b[prop])){    //deepequal() checks if two objects and their child objects are equal
                    return false;       
                }
                else{
                    return false;
                }
            }
            return true;
        }
        return true;
    }
    else{
        return false;
    }
}
console.log(deepequals(2,5));
console.log(deepequals(5,5));