const navImage = document.getElementById("navImage");
const settingsBar = document.getElementById("settingsBar");
const header = document.querySelector("header");

navImage.addEventListener("click", () => {

    if (window.scrollY < header.offsetHeight) {

        settingsBar.classList.toggle("open");

    } else {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
});

/* beepbeepineedtosleep*/

window.addEventListener("scroll", () => {

    if (window.scrollY > header.offsetHeight) {
        settingsBar.classList.remove("open");
    }

});

const dyslexicBtn = document.getElementById('dyslexicfont');
const commentsBtn = document.getElementById('interact'); 
const body = document.body;


dyslexicBtn.addEventListener('click', () => {
    body.classList.toggle('dyslexic-font');
});


document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("interact");

    if (button) {
        button.addEventListener("click", function () {

            // Start fade-out animation
            document.body.classList.add("fade-out");

            // Wait for animation to finish, then navigate
            setTimeout(function () {
                window.location.href = "ndinteract.html";
            }, 500); // matches CSS transition time
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {

    // ---------------------------
    // SIGNUP FORM
    // ---------------------------
    const signupForm = document.getElementById("signupForm");

    signupForm.addEventListener("submit", function (e) {
        e.preventDefault(); // prevent page reload

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();

        if (name && email) {
            alert(`Thanks for signing up, ${name}!`);
            // You can add code here to send this data to a server
            signupForm.reset();
        }
    });

    // ---------------------------
    // GMAIL BUTTON
    // ---------------------------
    const gmailBtn = document.getElementById("gmailBtn");

    gmailBtn.addEventListener("click", function () {
        alert("Gmail sign-up is not set up yet.");
        // Here you could integrate Google OAuth
    });

    // ---------------------------
    // COMMENTS SECTION
    // ---------------------------
    const commentForm = document.getElementById("commentForm");
    const commentsList = document.getElementById("commentsList");

    commentForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const commentName = document.getElementById("commentName").value.trim() || "Anonymous";
        const commentText = document.getElementById("commentText").value.trim();

        if (!commentText) return;

        // Create comment element
        const commentDiv = document.createElement("div");
        commentDiv.className = "comment";
        commentDiv.innerHTML = `
            <p><strong>${commentName}:</strong></p>
            <p>${commentText}</p>
            <hr>
        `;

        // Add comment to list
        commentsList.prepend(commentDiv); // newest comment on top

        commentForm.reset();
    });

});