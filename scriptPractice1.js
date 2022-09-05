
var nums = ["To live a creative life, we must lose our fear of being wrong.","Trust because you are willing to accept the risk, not because it's safe or certain.", "All our dreams can come true if we have the courage to pursue them.","Good things come to people who wait, but better things come to those who go out and get them.","If you do what you always did, you will get what you always got.","Successful entrepreneurs are givers and not takers of positive energy.","Whenever you see a successful person you only see the public glories, never the private sacrifices to reach them.","Try not to become a person of success, but rather try to become a person of value.","Great minds discuss ideas; average minds discuss events; small minds discuss people.","A successful man is one who can lay a firm foundation with the bricks others have thrown at him."];
let count = 0;
j = 0;
function disp(){
    if(count === 10)
    {
        document.getElementById("textContent").innerHTML = "Sorry!!! Quotes finished!";
        alert("Please refresh the page to generate the quotes again");
        return;
    }
    count++;
    i = nums.length,
    j = Math.floor(Math.random() * (i));
    document.getElementById("textContent").style.fontStyle = "italic";       
    document.getElementById("textContent").style.fontSize = "x-large";
    document.getElementById("textContent").style.textAlign = "center";
    document.getElementById("textContent").innerHTML = nums[j];
    nums.splice(j,1);
}
