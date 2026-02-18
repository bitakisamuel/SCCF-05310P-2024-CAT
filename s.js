document.getElementById("serviceForm").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("serviceResponse").innerText =
        "Service request submitted successfully!";
});
