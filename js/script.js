function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function kecx(){
    var budzet = parseFloat(document.getElementById("budzet_1x2").value);
    var kvota1 = parseFloat(document.getElementById("kvota1_1x2").value);
    var kvotaX = parseFloat(document.getElementById("kvotaX_1x2").value);
    var kvota2 = parseFloat(document.getElementById("kvota2_1x2").value);
    var ulog1 = document.getElementById("main2_ulog1");
    var ulogX = document.getElementById("main2_ulogX");
    var ulog2 = document.getElementById("main2_ulog2");
    var profit = document.getElementById("main2_profit");
    var profit_ukupno = document.getElementById("main2_profit_ukupno");
    
    var f_in1 = budzet/kvota1
    var f_inX = budzet/kvotaX
    var f_in2 = budzet/kvota2
    var pr = budzet-(f_in1+f_inX+f_in2)

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
        ulogX.innerHTML = numberWithCommas(f_inX.toFixed(2));
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
        ulogX.innerHTML = "";
        ulog2.innerHTML = "";
        profit.innerHTML = "";
        profit_ukupno.innerHTML = "";
    }

}

function budzet(){
    var budzet = parseFloat(document.getElementById("budzet").value);
    var kvota1 = parseFloat(document.getElementById("kvota1").value);
    var kvota2 = parseFloat(document.getElementById("kvota2").value);
    var ulog1 = document.getElementById("main0_ulog1");
    var ulog2 = document.getElementById("main0_ulog2");
    var profit = document.getElementById("main0_profit");
    var profit_ukupno = document.getElementById("main0_profit_ukupno");
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
    var ulog1 = document.getElementById("main1_ulog1");
    var ulog2 = document.getElementById("main1_ulog2");
    var profit = document.getElementById("main1_profit");
    var profit_ukupno = document.getElementById("main1_profit_ukupno");
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
    if(current_tab!=tab){
        current_tab = tab
        for (let i = 0; i < num_tabs; i++) {
            if(i==tab){
                main[i].classList.remove("hidden")
                tabs[i].classList.add("selected")
            }
            else{
                main[i].classList.add("hidden")
                tabs[i].classList.remove("selected")
            }
        }
    }
}
current_tab = 0
num_tabs = 3
var main = []
var tabs = []
for (let i = 0; i < num_tabs; i++) {
    main[i] = document.getElementById("main"+i)
    tabs[i] = document.getElementById("tab"+i)
}

