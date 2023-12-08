for(let f=1;f<=100;f++){
    
  if(f%3==0 && f%5==0){
    document.write('fizzbuzz');
  }else{
  if(f%3==0){
    document.write('fizz');
  }else{
    if(f%5==0){
        document.write('buzz');
    }else{
        document.write(f);
    }
    
  }
}
  document.write('<br>');
  
}