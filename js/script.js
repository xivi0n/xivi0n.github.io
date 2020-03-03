function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function budzet(){
    var budzet = parseFloat(document.getElementById("budzet").value);
    var kvota1 = parseFloat(document.getElementById("kvota1").value);
    var kvota2 = parseFloat(document.getElementById("kvota2").value);
    var ulog1 = document.getElementById("ulog1");
    var ulog2 = document.getElementById("ulog2");
    var profit = document.getElementById("profit");
    var profit_ukupno = document.getElementById("profit_ukupno");
    if (kvota1>kvota2){
        var pom = kvota1;
        kvota1 = kvota2;
        kvota2 = pom;
    }
    var diff = kvota1/kvota2;
    var f_in1 = budzet/(1+diff);
    var f_in2 = diff*f_in1;
    var pr = kvota1*f_in1-(f_in1+f_in2);
    if(!Number.isNaN(pr)){
        if(pr<0){
            profit.classList.add("bad-profit")
            profit.classList.remove("ok-profit")
            profit_ukupno.classList.add("bad-profit")
            profit_ukupno.classList.remove("ok-profit")
        }
        else{
            profit.classList.remove("bad-profit")
            profit.classList.add("ok-profit")
            profit_ukupno.classList.remove("bad-profit")
            profit_ukupno.classList.add("ok-profit")
        }
        ulog1.innerHTML = numberWithCommas(f_in1.toFixed(2));
        ulog2.innerHTML = numberWithCommas(f_in2.toFixed(2));
        profit.innerHTML = (100*pr/budzet).toFixed(2)+"%";
        profit_ukupno.innerHTML = numberWithCommas(pr.toFixed(2));
    }
    else{
        profit.classList.remove("bad-profit")
        profit.classList.remove("ok-profit")
        profit_ukupno.classList.remove("bad-profit")
        profit_ukupno.classList.remove("ok-profit")
        ulog1.innerHTML = "";
        ulog2.innerHTML = "";
        profit.innerHTML = "";
        profit_ukupno.innerHTML = "";
    }
    
}

function ulog(){
    var f_in1 = parseFloat(document.getElementById("ulog").value);
    var kvota1 = parseFloat(document.getElementById("kvota1_ulog").value);
    var kvota2 = parseFloat(document.getElementById("kvota2_ulog").value);
    var ulog1 = document.getElementById("ulog1");
    var ulog2 = document.getElementById("ulog2");
    var profit = document.getElementById("profit");
    var profit_ukupno = document.getElementById("profit_ukupno");
    var f_in2 = f_in1*kvota1/kvota2;
    var pr = kvota1*f_in1-(f_in1+f_in2);
    var budzet = f_in1 + f_in2;
    if(!Number.isNaN(pr)){
        if(pr<0){
            profit.classList.add("bad-profit")
            profit.classList.remove("ok-profit")
            profit_ukupno.classList.add("bad-profit")
            profit_ukupno.classList.remove("ok-profit")
        }
        else{
            profit.classList.remove("bad-profit")
            profit.classList.add("ok-profit")
            profit_ukupno.classList.remove("bad-profit")
            profit_ukupno.classList.add("ok-profit")
        }
        ulog1.innerHTML = numberWithCommas(f_in1.toFixed(2));
        ulog2.innerHTML = numberWithCommas(f_in2.toFixed(2));
        profit.innerHTML = (100*pr/budzet).toFixed(2)+"%";
        profit_ukupno.innerHTML = numberWithCommas(pr.toFixed(2));
    }
    else{
        profit.classList.remove("bad-profit")
        profit.classList.remove("ok-profit")
        profit_ukupno.classList.remove("bad-profit")
        profit_ukupno.classList.remove("ok-profit")
        ulog1.innerHTML = "";
        ulog2.innerHTML = "";
        profit.innerHTML = "";
        profit_ukupno.innerHTML = "";
    }
}

function doged(){
    var body = document.getElementsByTagName("BODY")[0]
    document.getElementById("doge").classList.add("hidden")
    body.classList.add("doged")
}

function change_tab(tab){
    var main1 = document.getElementById("main1")
    var main2 = document.getElementById("main2")
    var tab1 = document.getElementById("tab1")
    var tab2 = document.getElementById("tab2")
    if(tab == 1 && current_tab == 2){
        current_tab = 1
        main2.classList.add("hidden")
        main1.classList.remove("hidden")
        tab1.classList.add("selected")
        tab2.classList.remove("selected")
        budzet()
    }
    else if(tab == 2 && current_tab == 1){
        current_tab = 2
        tab2.classList.add("selected")
        tab1.classList.remove("selected")
        main1.classList.add("hidden")
        main2.classList.remove("hidden")
        ulog()
    }
}
current_tab = 1


