export   function FindLongestWord2(tab){
// .Map ==> 
return tab.reduce(
    (acc,curr)=>{
      return  acc.length<curr.length ? {mot:acc,longueur:acc.length}:{mot:curr,longueur:curr.length}
    })
    }
    

