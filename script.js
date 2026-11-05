
// Wait until the HTML is fully loaded
document.addEventListener("DOMContentLoaded", function () {

    const billingToggle = document.getElementById("billingToggle");
    const prices = document.querySelectorAll(".price");

    // Monthly / Yearly toggle
    billingToggle.addEventListener("change", function () {
        prices.forEach(price => {
            const amount = billingToggle.checked
                ? price.dataset.yearly
                : price.dataset.monthly;

            const period = billingToggle.checked ? "/year" : "/month";

            price.innerHTML = `${amount}<span>${period}</span>`;
        });
    });

    // Handle all Choose Plan buttons
    document.addEventListener("click", function (event) {
        const button = event.target.closest(".plan-btn");

        if (!button) return;

        const selectedPlan = button.dataset.plan;

        alert("You selected the " + selectedPlan + " plan!");
    });

});

