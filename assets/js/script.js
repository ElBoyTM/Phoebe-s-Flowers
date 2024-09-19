//all jquery must be in these curly braces!
$(function () {
    $("#cartModalDiv").load("cart.html");
    $("#couponModalDiv").load("coupon.html");

    function showCouponUponLoad() {
        //set interval 
        // let counter = 1;
        const couponInterval = setInterval(function () {
            $("#couponModalDiv").modal('show');
            clearInterval(couponInterval);
        }, 2500);
    }
    // showCouponUponLoad();
});

