document.getElementById("MenuIcon").addEventListener("click", menuSwitchFunc);
    //變數
    var menuSwitch="close";
    
    function menuSwitchFunc(){  
        if  (menuSwitch=="close"){
            document.getElementById("MenuList").style.display="block";
            menuSwitch="open";
            console.log(menuSwitch);
        }
        else{
            document.getElementById("MenuList").style.display="none";
            menuSwitch="close";
            console.log(menuSwitch);
        }

        document.getElementsByTagName("BODY")[0].onresize = function() {myFunction()};

        function myFunction() {
            document.getElementById("MenuList").style.display="block";
            menuSwitch="close";
        }
    }