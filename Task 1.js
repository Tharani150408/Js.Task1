let num="55";
let a=Number(num);

switch(true){
    case num>=90 && num<=100:
    console.log("Grade: A");
    break;
    case num>=75 && num<=89:
        console.log("Grade: B");
        break;
        case num>=50 && num<=74:
            console.log("Grade: C");
            break;
        default:
            console.log("Fail");
}