document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const subject = encodeURIComponent("Let’s connect — from " + name);
    const body = encodeURIComponent(message);

    window.location.href = `mailto:behroozshahri@gmail.com?subject=${subject}&body=${body}`;
});