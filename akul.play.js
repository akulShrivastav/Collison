function isTouching(obj1,obj2){
    if(Math.abs(obj1.x-obj2.x )<= obj1.width/2+obj2.width/2 && (Math.abs(obj1.y-obj2.y)<=obj1.height/2+obj2.height/2)){
    return true;
    }
    else{
      return false;
    }
    
  
  
  }










