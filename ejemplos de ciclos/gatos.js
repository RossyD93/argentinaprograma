let cats = ["bill", "jeff", "pete", "biggles", "jasmin"];
let info = "My cats are called; ";

for( i = 0; i < cats.length; i++){
    if( i=== cats.length -1){
        info += "and " + cats[i] + ".";

    } else if ( i === cats.length -2){
            info +=cats[i] + " ";
            
    } else  {
        info += cats[i] + " , ";
    }
}

console.log(info);