const nav =
document.querySelector("nav");
const navList =
document.querySelector("nav ul");
const navLinks=
document.querySelectorAll("nav ul a");
const contactForm=
document.querySelector("#contact form");
const footer=
document.querySelector("footer");
//Create mobile menu botton
const menuButton=
document.createElement("button");
menuButton.textContent="Menu";
menuButton.setAttribute("aria-label","open navigation menu");
menuButton.style.display="none";
menuButton.style.background="#2563eb";
menuButton.style.color="white"
menuButton.style.border="none";
menuButton.style.padding= "8px 12px";
menuButton.style.fontSize="20px";
menuButton.style.cursor="pointer";
//Add button to navigation
 nav.appendChild(menuButton);
//show/hide mobile menu
menuButton.addEventListener("click",()=>{
    navList.classList.toggle("show-menu");
});
// 2.Smooth Scrolling
//
navLinks.forEach(link=>{
    link.addEventListener("click",function(event){
    const targetId=this.getAttribute("href");
    if
    (targetId.startsWith("#")) {
        event.preventDefault();
        const targetSection = document.querySelector(targetId);
        if(targetSection)
        {
            targetSection.scrollIntoView({
                behavior:
                "smooth"
            });
        }
    }
    //Close mobile menu after clicking
    navList.classList.remove("show-menu");
});

});
// 3.Active Navigation Link
//
const sections = document.querySelectorAll("main section");
window.addEventListener("scroll",()=>{
    let currentSection ="";
    sections.forEach(section=> 
    {
        const sectionTop=section.offsetTop-150;
        const sectionHeight=section.offsetHeight;
            if(
                window.scrollY >= sectionTop &&
                window.scrollY >= sectionTop+sectionHeight
            ){
                currentSection=section.getAttribute("id");
            }
});
navLinks.forEach(link=>{
    link.classList.remove("active");
    if
    (link.getAttribute("href")===
    `#${currentSection}` ) {
        link.classList.add("active");
    }
});
});
//
// 4.Contact Form Validation
//
contactForm.addEventListener("submit",function(event){
    event.preventDefault();
    const name=
    document.querySelector("#name").Value.trim();
        const email=
        document.querySelector("#email").Value.trim();
        const message=
        document.querySelector("#message").Value.trim();
        if (name === ""){
            alert("please enter your name.");
               return;
            }
            if(email ===""){
                alert("please enter your email.");
                return;
            }
            if(!email.includes("@")){
                alert("Please enter a valid email address.");
                return;
            }
            if(message === ""){
                alert("Please enter your message.");
                return;
            }
            alert("Thank you! Your message has been submitted.");
            contactForm.reset(); 
        });
        //
        //5. Scroll-to-Top Button
        //
        const topButton
        document.createElement("button");
        topButton.textContent="ij";
        topButton.setAttribute("aria-label","Scroll to top");
        topButton.style.position="fixed";
        topButton.style.bottom="20px";
        topButton.style.right="20px";
        topButton.style.display="none";
        topButton.style.padding= "10px 15px";
        topButton.style.border="none";
        topButton.style.borderRadius="50%";
        topButton.style.background="#2563eb";
        topButton.style.color="white";
        topButton.style.fontSize="20px";
        topButton.style.cursor="pointer";
        document.body.appendChild(topButton);
        // show button after scrolling 
        window.addEventListener("scroll",()=>{
            if (window.scrollY > 400){
                topButton.style.display="block";
            } else{
                topButton.style.display="none";
            }
            });
            // scroll to top
            topButton.addEventListener("click",()=>{
                window.scrollTo({
                    top:0,
                    behavior: "smooth"
                });
            });
            //
            //6.Current Year in Footer
            //
            const year=document.new Date().getFullYear();
            const yearText=document.createElement("p");
            yearText.textContent = `$ {year}Sumayya Jabeen.All Rights Reserveed.`;
            footer.prepend(yearText);
            //
            // 7.Simple Scroll Animation
            //
            const animatedElements = document.querySelectorAll(
                "section,article"
            );
            const observer = new IntersectionObserver(
                (entries)=> {
                    entiries.forEach(entry =>{
                            if (entry.isIntersecting){
                                entry.target.style.opacity="1";
                                entry.target.style.transform="translateY(0)";
                            }
                        });
                }
                {
                    threshold: 0.15
                }
            );
            //Initial animation style
            animatedElements.forEach(element=>{
                element.style.opacity="0";
                element.style.transform="translateY(20px)";
                element.style.transition="opacity 0.6s ease,transform 0.6s ease";
                observer.observe(element);
            });





