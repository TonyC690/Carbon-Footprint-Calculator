$(".calculation").click(function() {
   let electricity = $(".electricityanswer").val();
    electricity = electricity * 105;
    let gas = $(".gasanswer").val();
    gas = gas * 105;
    let oil = $(".oilanswer").val();
    oil = oil * 105;
    let mileage = $(".mileageanswer").val();
    mileage = mileage * 105;
    let flight = $(".flightanswer").val();
    if (flight < 5) {
        flight= flight * 1100;
        console.log("less than= " + flight);
    }
    else if (flight > 5) {
        flight= flight * 4400;
        console.log("greater than= " + flight);
    }
    let result;
    result = electricity + gas + oil + mileage + flight;
    $(".Carbon-Footprint-result").text(result);
    console.log (result);
   // alert(result);
});