(function() {
    // Saketh Reddy Gurram
    //CWID: A20552741
    // ITMD 541-01 Graduate Student

    // 1. Change the main headline text in the hero section
    const headline = document.querySelector(".text-4xl.font-bold.mb-4.text-white.relative.z-20");
    if (headline) headline.innerText = "Uplift Your Brand with Stellar Marketing";

    // 2. Change the text below the hero headline
    const subHeadline = document.querySelector(".text-xl.mb-6.text-white.relative.z-20");
    if (subHeadline) subHeadline.innerText = "Utilize cutting-edge strategies from Stellar Marketing to help your business thrive and excel.";

    // 3. Remove the "Get Started" button
    const getStartedBtn = document.querySelector(".relative.bg-blue-600.text-white.px-6.py-2.rounded.hover\\:bg-blue-700.z-20");
    if (getStartedBtn) getStartedBtn.remove();

    // 4. Change the background image in the hero section
    const heroSection = document.getElementById("hero");
    if (heroSection) {
        heroSection.style.backgroundImage = "url('https://picsum.photos/id/683/1280/720')";
    }

    // 5. Change the background color of the header (navbar)
    const navbar = document.querySelector("header");
    if (navbar) navbar.style.backgroundColor = "#1F2937";

    // 6. Center align the headings for sections (Services, Solutions, Contact)
    const headings = document.querySelectorAll("main section h2");
    headings.forEach(heading => {
        heading.style.textAlign = "center";
    });

    // 7. Change the color of the icons in the services section
    const serviceIcons = document.querySelectorAll("#services span.material-symbols-outlined");
    serviceIcons.forEach(icon => {
        icon.style.color = "#47C714";
    });

    // 8. Change the digital marketing icon to 'ads_click'
    const digitalMarketingIcon = document.querySelector('span[data-icon="digital"]');
    if (digitalMarketingIcon) {
        digitalMarketingIcon.innerText = "ads_click";
    }

    // 9. Update the grid layout for specialized marketing solutions section (4 columns on >= 1024px)
    const solutionsContainer = document.querySelector("section#solutions div[data-section='product_cards']");
    if (solutionsContainer) {
        solutionsContainer.classList.add("lg:grid-cols-4");
    }

    // 10. Change the Musicians image
    const musiciansImg = document.querySelector('img[alt="Musicians"]');
    if (musiciansImg) {
        musiciansImg.src = "https://picsum.photos/id/453/400/300";
    }

    // 11. Handle form submission and prevent broken URL submission
    const contactForm = document.querySelector("#contact form");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();  // Prevent the form from submitting to a broken URL

            const nameInput = document.getElementById("name");
            const emailInput = document.getElementById("email");
            const name = nameInput ? nameInput.value.trim() : "";
            const email = emailInput ? emailInput.value.trim() : "";

            // Check if both name and email are provided and show alerts accordingly
            if (name && email) {
                alert(`Thank you, ${name}! We will be in touch with you shortly at ${email}.`);
            } else {
                alert("Please provide a name and email.");
            }
        });
    }

    console.log("WebPageChange executed successfully!");

})();
