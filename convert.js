let input = document.getElementById("in");
let output = document.getElementById("out");
let select1 = document.getElementById("sel");
let select2 = document.getElementById("opt")
let here = document.getElementById("here");
// let there = document.getElementById("there");
// let btn = document.getElementById("btn");

// btn.addEventListener('click',change);
input.addEventListener('keyup',change);
select1.addEventListener('change',change);
select2.addEventListener('change',change);

let choice1,choice2;

function change(){
    choice1 = select1.value;
    choice2 = select2.value;
    // here.innerHTML = select1.value;
    // there.innerHTML = select2.value; 
    
    // Convert Decimal To Other
    if(choice1 === "Decimal" && choice2 === "Binary"){

        
        output.value = DecToBin(input.value);
        // console.log(output.value);
    }
    else if(choice1 === "Decimal" && choice2 === "Hexadecimal"){
        
        output.value = DecToHex(input.value);
        
        console.log(output.value);
        
    }
    else if(choice1 === "Decimal" && choice2 === "Octal"){
        
        output.value = DecToOct(input.value);
        // console.log(output.value);
    }
    else{
        output.value = input.value ;
        // console.log(output.value);
    }

    // Convert Hexadecimal To Other
    if(choice1 === "Hexadecimal" && choice2 === "Decimal"){
        let hexStr1 = input.value; 
        let number1 = parseInt(hexStr1, 16);
        console.log(number1);

        output.value = number1;
        // console.log(output.value);
    }
    else if(choice1 === "Hexadecimal" && choice2 === "Binary"){
        
        output.value = HexToBin(input.value);
       
        // console.log(output.value);
    }
    else if(choice1 === "Hexadecimal" && choice2 === "Octal"){
        var  bin;
 
        // convert HexaDecimal to Binary
        bin = HexToBin(input.value);
        console.log(bin)
    
        
        output.value = BinToOct(bin);
            
        console.log(output.value);
    }
    else{
        
    }

    // Convert Octal To Other
    if(choice1 === "Octal" && choice2 === "Binary"){
        output.value = OctToBin(input.value);
        // console.log(output.value);
    }
    else if(choice1 === "Octal" && choice2 === "Hexadecimal"){
        let n = OctToDec(input.value)
        output.value = DecToHex(n);
        // console.log(output.value);
    }
    else if(choice1 === "Octal" && choice2 === "Decimal"){
        output.value = OctToDec(input.value);
        // console.log(output.value);
    }
    else{
        
    }

    if(choice1==="Binary"){
        let BinNum = input.value;
        while(BinNum!=0){
            console.log(BinNum % 10); 
            if((BinNum%10) > 1){
                 here.innerHTML = "pls enter valid binary number";
                 output.value = "";
                 return;
                
                       
            }
            BinNum = Math.floor(BinNum/10);
        }
        here.innerHTML = "";
    
        // Convert Binary To Other
        if(choice1 === "Binary" && choice2 === "Decimal"){
            // if(input.value == 0 || input.value == 1){
                function BinToDec(n){
                    let num = n;
                    let dec_value = 0;
                    let base = 1;
                    let temp = num;
                    while(temp>0){
                        let last_digit = Math.floor(temp%10);
                        temp = Math.floor(temp/10);
                        dec_value += last_digit*base;
                        base = base*2;
                    }
                    return dec_value;
                }
            
            
            output.value = BinToDec(input.value);
            // console.log(output.value);
        }
        else if(choice1 === "Binary" && choice2 === "Hexadecimal"){
            output.value = BinToHex(input.value);
            // console.log(output.value);
        }
        else if(choice1 === "Binary" && choice2 === "Octal"){
            output.value = BinToOct(input.value);
            // console.log(output.value);
        }
        else{
            
        }
    }
    
}

function DecToBin(n){
    let arr = new Array(32);
    let i = 0;
    while(n>0){
        arr[i] = n%2;
        n = Math.floor(n/2);
        i++;
    }
   
    for(let j=i-1; j>=0; j--){
       
        arr[j];
    
    }
    return arr.reverse().join("");
}

function HexToBin(hex){
    var bin, place;
    var i = 0;

    bin = 0;
    place = 0;

    // Hexadecimal to binary conversion
    for (i = 0; i < hex.length; i++) {
        bin = bin * place;

        switch (hex[i]) {
        case '0':
            bin += 0;
            break;
        case '1':
            bin += 1;
            break;
        case '2':
            bin += 10;
            break;
        case '3':
            bin += 11;
            break;
        case '4':
            bin += 100;
            break;
        case '5':
            bin += 101;
            break;
        case '6':
            bin += 110;
            break;
        case '7':
            bin += 111;
            break;
        case '8':
            bin += 1000;
            break;
        case '9':
            bin += 1001;
            break;
        case 'a':
        case 'A':
            bin += 1010;
            break;
        case 'b':
        case 'B':
            bin += 1011;
            break;
        case 'c':
        case 'C':
            bin += 1100;
            break;
        case 'd':
        case 'D':
            bin += 1101;
            break;
        case 'e':
        case 'E':
            bin += 1110;
            break;
        case 'f':
        case 'F':
            bin += 1111;
            break;
        default:
            console.log("Invalid hexadecimal input.");
        }

        place = 10000;
    }

    return bin;
}


function BinToHex(n){
    var hexa = parseInt(n, 2). toString(16);
    console.log(hexa.toUpperCase()) ;
    
    return hexa.toUpperCase();
}

function BinToOct(x){
    x = parseInt(x, 2);//Convert binary to decimal
    x = x.toString(8);//Convert decimal to octal
    console.log(x);
    return x;
}

function OctToDec(n){
    let num = n;
    let dec_value = 0;
 
    let base = 1;
 
    let temp = num;
    while (temp > 0) {
            
        let last_digit = Math.floor(temp%10);
        temp = Math.floor(temp / 10);
 
        dec_value += last_digit * base;
 
        base = base * 8;
    }
    return dec_value;

}

function DecToHex( n)
{
     
    
    var hexaDeciNum = new Array(100);
     
   
    var i = 0;
    while(n != 0)
    {   
        var temp  = 0;
        temp = n % 16;
           
        if (temp < 10)
        {
            hexaDeciNum[i] = temp + 48;
            i++;
        }
        else
        {
            hexaDeciNum[i] = temp + 87;
            i++;
        }
        n = Math.floor(n / 16);
    }
     
    var ans = "";
       
    for(var j = i - 1; j >= 0; j--)
    {
        ans += String.fromCharCode(hexaDeciNum[j]);
    }
    return ans.toUpperCase();
}

function OctToBin(octnum)
{
    let i = 0;
   
    let binary = "";
      
    while (i<octnum.length) {
          
        let c=octnum[i];
        switch (c) {
        case '0':
            binary += "000";
            break;
        case '1':
            binary += "001";
            break;
        case '2':
            binary += "010";
            break;
        case '3':
            binary += "011";
            break;
        case '4':
            binary += "100";
            break;
        case '5':
            binary += "101";
            break;
        case '6':
            binary += "110";
            break;
        case '7':
            binary += "111";
            break;
        default:
            document.write( "<br>Invalid Octal Digit "+ octnum[i]);
            break;
        }
        i++;
    }
   
    return binary;
}

function DecToOct(n){
    let octalNum = new Array(100);
 
        // counter for octal number array
        let i = 0;
        while (n != 0) {
 
            // Storing remainder in octal array
            octalNum[i] = Math.floor(n % 8);
            n = Math.floor(n / 8);
            i++;
        }
 
        // Printing octal number array in reverse order
        for (let j = i - 1; j >= 0; j--){
            octalNum[j];
        }
        // console.log( octalNum);
        return  octalNum.reverse().join("");
            
}

