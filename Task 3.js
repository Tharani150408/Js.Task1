
    let name=prompt("Hi,What is your name?");
    let userage=prompt("How old are you?");
    userage=Number(userage);
    if(userage>=18)
        {
         alert("Good "+ name +" you are eligible for voting");
         }
     else
        {
    alert("Sorry you are not eligible");
      }
    let final=confirm("Do you want to check again?")
if (final=true)
{
alert("repeat")
}
else {
    alert("Good bye")
}

let username=prompt("Enter your name")
let password=prompt("Enter your password")

if(username=="library" && password=="book123")
{
    let borrow=confirm("do you want to borrow a book?")
    if(borrow)
    {
        let category =prompt("select your type of book :\nfiction\n science\n history")

        switch(category)
        {
            case "fiction":
                alert("you selected fiction")
                break;
                case "science":
                    alert("you selected science")
                    break;
                    case "history":
                        alert("you selected history")
                    default:
                        alert("invalid category")
        }
    }
    else{
        alert("may be next time! goodbye! buddy")
    }
}
else{
    alert("invalid login")
}
