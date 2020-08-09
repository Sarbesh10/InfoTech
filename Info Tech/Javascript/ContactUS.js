/*Creating JS*/
func1()
    function func1(){
        document.getElementById("US").style.fontSize = "30px";
        setTimeout(func2, 1000);
        }
    function func2(){
        document.getElementById("US").style.fontSize = "40px";
        setTimeout(func1, 1000);
}