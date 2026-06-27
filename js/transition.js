/**
 * Transition.js — Single-page portfolio transition.
 * Runs a curtain reveal animation on initial page load.
 * Since all content is on one page, no page-to-page navigation transitions are needed.
 */
(function () {
    const ease = "power2.inOut";

    function revealTransition() {
        return new Promise((resolve) => {
            gsap.set(".block", { scaleY: 1 });
            gsap.to(".block", {
                duration: 0.9,
                scaleY: 0,
                stagger: {
                    each: 0.08,
                    from: "start",
                    grid: "auto",
                    axis: "x",
                },
                ease: ease,
                onComplete: resolve,
            });
        });
    }

    function initTransitions() {
        if (!window.gsap) return;

        // On load: reveal the page with a curtain drop
        revealTransition().then(() => {
            gsap.set(".block", { visibility: "hidden" });
        });
    }

    window.initTransitions = initTransitions;
    document.addEventListener('DOMContentLoaded', initTransitions);
})();
