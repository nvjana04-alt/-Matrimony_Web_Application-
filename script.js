// ===============================
// PROFILE DATA
// ===============================

const profiles = [
    { id: 0, name: "Vithujan", age: 24, location: "Jaffna", hobbies: "Reading, Traveling", img: "profile1.jpg" },
    { id: 1, name: "Jane Smith", age: 26, location: "Kandy", hobbies: "Music, Cooking", img: "profile2.jpg" },
    { id: 2, name: "Karthihajni", age: 24, location: "Galle", hobbies: "Hiking, Painting", img: "profile3.jpg" }
];

// ===============================
// BROWSE PAGE - GENERATE CARDS
// ===============================

const profileCardsContainer = document.getElementById("profileCards");

if (profileCardsContainer) {
    profiles.forEach(profile => {
        const card = document.createElement("div");
        card.classList.add("col-md-4", "mb-4");

        card.innerHTML = `
        <div class="card shadow h-100">
            <div class="ratio ratio-4x3">
                <img src="${profile.img}" class="card-img-top img-fluid rounded" alt="${profile.name}">
            </div>
            <div class="card-body">
                <h5 class="card-title">${profile.name}</h5>
                <p class="card-text">
                    Age: ${profile.age}<br>
                    Location: ${profile.location}
                </p>
                <a href="profile.html?id=${profile.id}" class="btn btn-primary">
                    View Profile
                </a>
            </div>
        </div>
        `;

        profileCardsContainer.appendChild(card);
    });
}

// ===============================
// PROFILE PAGE - LOAD DATA
// ===============================

const nameElement = document.getElementById("name");

if (nameElement) {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"));

    const profile = profiles.find(p => p.id === id);

    if (profile) {
        document.getElementById("name").innerText = profile.name;
        document.getElementById("age").innerText = profile.age;
        document.getElementById("location").innerText = profile.location;
        document.getElementById("hobbies").innerText = profile.hobbies;

        const profileImage = document.getElementById("profileImage");
        if (profileImage) {
            profileImage.src = profile.img;
            profileImage.style.objectFit = "contain"; // full image visible
            profileImage.style.maxHeight = "500px";
            profileImage.style.width = "100%";
        }
    } else {
        alert("Profile not found!");
        window.location.href = "browse.html"; // redirect if invalid ID
    }
}

// ===============================
// QUIZ FUNCTION
// ===============================

function calculateQuiz() {
    const q1 = parseInt(document.getElementById("q1").value) || 0;
    const q2 = parseInt(document.getElementById("q2").value) || 0;
    const score = q1 + q2;
    const result = document.getElementById("quizResult");

    if (score === 2) result.textContent = "You are highly compatible!";
    else if (score === 1) result.textContent = "You are moderately compatible.";
    else result.textContent = "You are less compatible. Keep exploring!";
}

// ===============================
// REGISTRATION FORM VALIDATION
// ===============================

const form = document.getElementById("registrationForm");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Basic validation example
        const nameInput = form.querySelector("#nameInput")?.value;
        const emailInput = form.querySelector("#emailInput")?.value;

        if (!nameInput || !emailInput) {
            alert("Please fill in all required fields!");
            return;
        }

        alert("Form submitted successfully!");
        form.reset();
    });
}
