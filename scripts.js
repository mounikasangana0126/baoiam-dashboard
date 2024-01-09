document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("form-section").style.display = "none";
    document.getElementById("edit-details").addEventListener("click", () => {
        
        document.getElementById("form-section").style.display = "block";
        document.getElementById("blackshadow").style.display="block";
    })
    document.getElementById("close-details").addEventListener("click", () => {
        
        document.getElementById("form-section").style.display = "none";
        document.getElementById("blackshadow").style.display="none";

       
    })

    
})