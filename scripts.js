document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("form-section").style.display = "none";
    document.getElementById("edit-details").addEventListener("click", () => {
        
        document.getElementById("form-section").style.display = "revert";
        document.getElementById("registered-details-section").style.display = "none";
        document.getElementById("head-section-content").style.display = "none";
        document.getElementById("courses").style.display = "none";
    })
    document.getElementById("close-details").addEventListener("click", () => {
        
        document.getElementById("form-section").style.display = "none";
        document.getElementById("registered-details-section").style.display = "revert";
        document.getElementById("head-section-content").style.display = "revert";
        document.getElementById("courses").style.display = "revert";
    })

    
})