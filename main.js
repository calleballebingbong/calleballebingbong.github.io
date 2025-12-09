const heartCreate = () => {
    const heart = document.createElement("div");

    heart.classList.add("heart");
    
    const img = document.createElement("img");
    img.src = "tedkid.png";
    img.style.width = "50px";
    img.style.height = "50px";
    heart.appendChild(img);

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);  
}

setInterval(heartCreate, 300);