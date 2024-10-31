function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    // sidebar.style.display = 'flex'
    sidebar.classList.add("open");
}

function closeSidebar() {
    const sidebar = document.querySelector('.sidebar')
    // sidebar.style.display = 'none'
    sidebar.classList.remove("open");
}

function showTopButton() {
    console.log("Loaded");

    const toTop = document.querySelector('.totop');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            toTop.classList.add('active')
        } else {
            toTop.classList.remove('active')
        }
    })
}

function showContactButtons() {
    console.log("Loaded");

    const telbutton = document.querySelector('.telbutton');
    const mailbutton = document.querySelector('.mailbutton');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            telbutton.classList.add('active')
            mailbutton.classList.add('active')
        } else {
            telbutton.classList.remove('active')
            mailbutton.classList.remove('active')
        }
    })
}

function animateHeader() {
    console.log("Loaded");

    const header = document.querySelector('.header');
    const smalllogo = document.querySelector('#smalllogo');
    const biglogo = document.querySelector('#biglogo');
    const links = document.querySelector('.links');
    const menubtn = document.querySelector('.menubtn');

    const mainContent = document.querySelector('.main-content');

    menubtn.style.display = "none"
    mainContent.style.marginTop = "0";

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 40) {
            header.classList.add('full')
            smalllogo.style.display = "block"
            biglogo.style.display = "none"
            links.style.display = "none"
            menubtn.style.display = "block"
            mainContent.style.marginTop = "110px";
        } else {
            header.classList.remove('full')
            smalllogo.style.display = "none"
            biglogo.style.display = "block"
            links.style.display = "flex"
            menubtn.style.display = "none"
            mainContent.style.marginTop = "0";
        }
    })
}

document.addEventListener('DOMContentLoaded', function() {
    showTopButton();
    showContactButtons();
    animateHeader();
    // smoothScrollWithOffset('#scroll-arrow');
})

const observer = new IntersectionObserver((entries => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
}));

document.addEventListener('DOMContentLoaded', function() {
    const hiddenElements = document.querySelectorAll(".animate");
    hiddenElements.forEach((el) => observer.observe(el));

    const containers = document.querySelectorAll(".website-container");
    const containersportfolio = document.querySelectorAll(".website-containerpo");

    containers.forEach(container => {
        const img = container.querySelector("img");

        if (img) {
            const imgSrc = img.getAttribute("src");

            // Setze das Hintergrundbild
            container.style.setProperty("--background-image", `url(${imgSrc})`);
        }
    });

    containersportfolio.forEach(container => {
        const img = container.querySelector("img");
        const anchor = container.querySelector("a");
        const isMobileView = window.matchMedia("(max-width: 690px)").matches;

        if (img && anchor) {
            const imgSrc = img.getAttribute("src");
            const anchorHref = anchor.getAttribute("href");

            // Setze das Hintergrundbild
            container.style.setProperty("--background-image", `url(${imgSrc})`);

            if (isMobileView){
                // Erstelle einen neuen Anker, der das gesamte Container überlagert
                const newAnchor = document.createElement('a');
                newAnchor.href = anchorHref;
                newAnchor.style.position = 'absolute';
                newAnchor.style.top = '0';
                newAnchor.style.left = '0';
                newAnchor.style.width = '100%';
                newAnchor.style.height = '80%';
                newAnchor.style.zIndex = '0';  // Damit es unter dem Text, aber über dem Hintergrund ist

                // Füge den neuen Anker zum Container hinzu
                container.appendChild(newAnchor);
            }
        }
    });
});

// function smoothScrollWithOffset(selector, offset = 200) {
//     const link = document.querySelector(selector);
//     link.onclick = function(e) {
//       e.preventDefault();
//       const target = document.querySelector(this.getAttribute('href'));
//       window.scrollTo({
//         top: target.offsetTop - offset,
//         behavior: 'smooth'
//       });
//     };
//   }

