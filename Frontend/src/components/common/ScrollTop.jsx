import { useEffect, useState } from "react";

export default function ScrollTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);

      const navbar = document.getElementById("navbar");

      if (navbar) {
        navbar.classList.toggle(
          "scrolled",
          window.scrollY > 50
        );
      }
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  // Reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "visible"
            );
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    const elements =
      document.querySelectorAll(".reveal");

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <button
      type="button"
      className={`scroll-top ${
        isVisible ? "active" : ""
      }`}
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      aria-label="Scroll to top"
    >
      <i
        className="ti ti-arrow-up"
        aria-hidden="true"
      ></i>
    </button>
  );
}