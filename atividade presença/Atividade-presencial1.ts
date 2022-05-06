function numRan(){

    var maximo = 6;
    
    var aleatorio = [];
    
    for(var x = 0; x<maximo; x++){
    
        var selec = Math.floor(Math.random()*60);
    
        if (aleatorio.indexOf(selec) == -1){

            aleatorio.push(selec);
        }
        
        
    
        else
    
        x--;
    
    }
    
    console.log(aleatorio)
    
}   
    console.log(numRan());