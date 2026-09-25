document.addEventListener("DOMContentLoaded", () => {
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll(".main-nav a");

    navLinks.forEach(link => {
        const linkPage = link.getAttribute("href");

        if (linkPage === currentPage) {
            link.classList.add("active");
        }
    });

    const animatedElements = document.querySelectorAll(
        ".hero-content, .page-hero, .overview-card, .project-card, .timeline-item, .value-item, .skill-item, .contact-link, .future-card"
    );

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12
        }
    );

    animatedElements.forEach(element => {
        element.classList.add("animate");
        observer.observe(element);
    });

    const buttons = document.querySelectorAll('a[href^="#"]');

    buttons.forEach(button => {
        button.addEventListener("click", event => {
            const targetId = button.getAttribute("href");

            if (targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    const yearElements = document.querySelectorAll(".current-year");

    yearElements.forEach(element => {
        element.textContent = new Date().getFullYear();
    });

    const pageLinks = document.querySelectorAll("a");

    pageLinks.forEach(link => {
        link.addEventListener("click", event => {
            const href = link.getAttribute("href");

            if (
                !href ||
                href.startsWith("#") ||
                href.startsWith("mailto:") ||
                href.startsWith("https://") ||
                href.startsWith("http://")
            ) {
                return;
            }

            event.preventDefault();

            document.body.classList.add("page-exit");

            setTimeout(() => {
                window.location.href = href;
            }, 250);
        });
    });
});