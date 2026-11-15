document.querySelectorAll(".quantity").forEach(quantity => {

    const minus = quantity.querySelector(".minus");
    const plus = quantity.querySelector(".plus");
    const input = quantity.querySelector(".qty-input");

    plus.addEventListener("click", function() {
        let value = parseInt(input.value) || 1;
        input.value = value + 1;
    });

    minus.addEventListener("click", function() {
        let value = parseInt(input.value) || 1;

        if (value > 1) {
            input.value = value - 1;
        }
    });

});