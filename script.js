let string ="";
let pastString="";
let buttons = document.querySelectorAll(".btn");


Array.from(buttons).forEach((button)=>{
 button.addEventListener("click",(e)=>{

    if(e.target.innerHTML == '='){
string = eval(string);
 pastString=string ;
document.querySelector('input').value=string;
    }
    
    else if(e.target.innerHTML == 'Ans'){
        document.querySelector('input').value=pastString;
            }

    else if(e.target.innerHTML == 'AC'){
        string = '';
        document.querySelector('input').value=string;
            }
       
            else if(e.target.innerHTML == 'DEL'){
                string = string.substring(0, string.length - 1);
                document.querySelector('input').value=string;
                    }

            else if(e.target.innerHTML == '^2'){
                string = string*string;
                document.querySelector('input').value=string;
                    }

                    else if(e.target.innerHTML == '^3'){
                        string = string*string*string;
                        document.querySelector('input').value=string;
                            }
                            else if(e.target.innerHTML == '√'){
                                string = Math.sqrt(string);
                                document.querySelector('input').value=string;
                                    }
                                    else if(e.target.innerHTML == '3√'){
                                        string = Math.cbrt(string);
                                        document.querySelector('input').value=string;
                                            }
                                            
                                                    else if(e.target.innerHTML == 'sin'){
                                                        string = Math.sin((Math.PI/180)*string);
                                                        document.querySelector('input').value=string;
                                                            }
                                                            else if(e.target.innerHTML == 'cos'){
                                                                string = Math.cos((Math.PI/180)*string);
                                                                document.querySelector('input').value=string;
                                                                    }
                                                                    else if(e.target.innerHTML == 'tan'){
                                                                        string = Math.tan((Math.PI/180)*string);
                                                                        document.querySelector('input').value=string;
                                                                            }
                                                                            else if(e.target.innerHTML == 'asin'){
                                                                                string = (180/Math.PI )*Math.asin(string);
                                                                                document.querySelector('input').value=string;
                                                                                    }
                                                                                    else if(e.target.innerHTML == 'acos'){
                                                                                        string = (180/Math.PI )*Math.acos(string);
                                                                                        document.querySelector('input').value=string;
                                                                                            }
                                                                                            else if(e.target.innerHTML == 'atan'){
                                                                                                string = (180/Math.PI )*Math.atan(string);
                                                                                                document.querySelector('input').value=string;
                                                                                                    }
        
    else {
    string = string + e.target.innerHTML;
    document.querySelector('input').value=string;}

 })   
})

