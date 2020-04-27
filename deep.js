function deepequals(a,b){
    if(a===b){
        return true;
    }
    if(typeof a=="object" && typeof b=="object" && a!=null && b!=null){
        return true;
    }
}