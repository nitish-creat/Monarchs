document.addEventListener("DOMContentLoaded", () => {
    const ariseText = document.getElementById("arise-text");
    const buttonsContainer = document.querySelector(".buttons-container");
    const video = document.getElementById("bg-video");
    const signInButton = document.getElementById("sign-in");
    const signUpButton = document.getElementById("sign-up");
    video.play().catch(error => {
        console.error("Video playback failed:", error);
    });
    

    gsap.timeline()
        .set(video, { opacity: 1 })
        .fromTo(ariseText, 
            { opacity: 0, scale: 0.5, y: 50 }, 
            { opacity: 1, scale: 1.8, y: 0, duration: 3, ease: "bounce.out" })
        .to(ariseText, { scale: 1, duration: 2, ease: "elastic.out(1, 0.5)" })
        .to(ariseText, { opacity: 0, duration: 1, delay: 0.5})
        .to(".overlay", { opacity: 0, duration: 1 })
        .to(buttonsContainer, { opacity: 1, y: -20, duration: 1, ease: "power3.out" });

    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("mouseenter", () => {
            gsap.to(button, { scale: 1.2, duration: 0.2, backgroundColor: "#ff6600" });
        });
        button.addEventListener("mouseleave", () => {
            gsap.to(button, { scale: 1, duration: 0.2, backgroundColor: "" });
        });
    });
    signInButton.addEventListener("click", () => {
        window.location.href = "signinpage.html"; 
    });
    
    signUpButton.addEventListener("click", () => {
        window.location.href = "loginpage.html"; 
    });
});
