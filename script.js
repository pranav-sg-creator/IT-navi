```javascript
/* ==========================================
   IT STUDENT NAVIGATOR
   JAVASCRIPT
========================================== */


document.addEventListener("DOMContentLoaded", function () {


    /* ==========================================
       CAREER DATA
    ========================================== */

    const careers = {

        web: {
            title: "💻 Web Developer",

            description:
                "A web developer creates websites and web applications.",

            skills: [
                "HTML",
                "CSS",
                "JavaScript",
                "Git and GitHub"
            ],

            projects: [
                "Personal Portfolio",
                "Online Course Website",
                "College Website"
            ]
        },


        cyber: {
            title: "🔐 Cybersecurity",

            description:
                "Cybersecurity professionals help protect systems, networks and data.",

            skills: [
                "Computer Networks",
                "Linux Basics",
                "Security Basics",
                "Cybersecurity Concepts"
            ],

            projects: [
                "Password Strength Checker",
                "Network Monitoring Demo",
                "Cybersecurity Awareness Website"
            ]
        },


        data: {
            title: "📊 Data Analyst",

            description:
                "A data analyst studies data and finds useful information from it.",

            skills: [
                "Excel",
                "SQL",
                "Python Basics",
                "Data Visualization"
            ],

            projects: [
                "Student Result Analysis",
                "Attendance Analysis",
                "Sales Data Dashboard"
            ]
        },


        cloud: {
            title: "☁️ Cloud Computing",

            description:
                "Cloud professionals work with online servers, storage and applications.",

            skills: [
                "Computer Networks",
                "Linux",
                "Cloud Basics",
                "Server Concepts"
            ],

            projects: [
                "Cloud Storage Demo",
                "Cloud Learning Portal",
                "Server Monitoring Dashboard"
            ]
        },


        app: {
            title: "📱 App Developer",

            description:
                "App developers create applications for smartphones and other devices.",

            skills: [
                "Programming",
                "UI Design",
                "Database",
                "Mobile Development"
            ],

            projects: [
                "Student Attendance App",
                "College Event App",
                "Study Planner App"
            ]
        },


        database: {
            title: "🗄️ Database Professional",

            description:
                "Database professionals store, organize and manage data.",

            skills: [
                "SQL",
                "MySQL",
                "Database Design",
                "DBMS Concepts"
            ],

            projects: [
                "Student Database",
                "Library Database",
                "College Management Database"
            ]
        }

    };


    /* ==========================================
       CAREER EXPLORER
    ========================================== */

    const careerCards =
        document.querySelectorAll(".career-card");

    const careerModal =
        document.getElementById("careerModal");

    const careerDetails =
        document.getElementById("careerDetails");

    const closeCareer =
        document.getElementById("closeCareer");


    careerCards.forEach(function (card) {

        card.addEventListener("click", function () {

            const careerName =
                card.getAttribute("data-career");

            const career =
                careers[careerName];


            let skillList = "";

            career.skills.forEach(function (skill) {

                skillList +=
                    "<li>" + skill + "</li>";

            });


            let projectList = "";

            career.projects.forEach(function (project) {

                projectList +=
                    "<li>" + project + "</li>";

            });


            careerDetails.innerHTML = `

                <h2>${career.title}</h2>

                <p>
                    ${career.description}
                </p>

                <h3>📚 Skills to Learn</h3>

                <ul>
                    ${skillList}
                </ul>

                <h3>🚀 Project Ideas</h3>

                <ul>
                    ${projectList}
                </ul>

            `;


            careerModal.style.display = "flex";

        });

    });


    closeCareer.addEventListener("click", function () {

        careerModal.style.display = "none";

    });


    /* Close popup when clicking outside */

    careerModal.addEventListener("click", function (event) {

        if (event.target === careerModal) {

            careerModal.style.display = "none";

        }

    });


// ===============================
// PROJECT LEVEL SECTION
// ===============================

const projectLevels = {

    beginner: [
        "Personal Portfolio Website",
        "Student Registration Form",
        "Digital Calculator",
        "Digital Clock",
        "College Timetable Website"
    ],

    intermediate: [
        "Online Course Website",
        "Student Result Management System",
        "Library Management System",
        "Online Shopping Website",
        "Quiz Application"
    ],

    advanced: [
        "IT Student Navigator",
        "College Management System",
        "Career Recommendation System",
        "Student Skill Tracking System",
        "Student Skill Tracking Dashboard"
    ]

};


// Find all project buttons
const projectButtons = document.querySelectorAll(".project-btn");


// Add click event to every button
projectButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        // Get selected level
        const level = button.getAttribute("data-level");

        // Get projects of selected level
        const selectedProjects = projectLevels[level];

        // Create heading
        let result = `
            <h3>${level.toUpperCase()} PROJECTS</h3>
            <ul>
        `;

        // Add projects one by one
        selectedProjects.forEach(function(project) {

            result += `<li>${project}</li>`;

        });

        result += "</ul>";

        // Show projects on webpage
        document.getElementById("projectResult").innerHTML = result;

    });

});


    /* ==========================================
       QUIZ
    ========================================== */

    const questions = [

        {
            question:
                "Which language is used to create the structure of a webpage?",

            options: [
                "HTML",
                "CSS",
                "JavaScript",
                "SQL"
            ],

            answer: "HTML"
        },


        {
            question:
                "Which language is mainly used to style a webpage?",

            options: [
                "C",
                "CSS",
                "SQL",
                "Java"
            ],

            answer: "CSS"
        },


        {
            question:
                "Which language adds interaction to webpages?",

            options: [
                "HTML",
                "CSS",
                "JavaScript",
                "SQL"
            ],

            answer: "JavaScript"
        },


        {
            question:
                "Which language is commonly used to manage databases?",

            options: [
                "SQL",
                "HTML",
                "CSS",
                "XML"
            ],

            answer: "SQL"
        },


        {
            question:
                "What does CPU stand for?",

            options: [
                "Central Processing Unit",
                "Computer Personal Unit",
                "Central Program Utility",
                "Computer Processing User"
            ],

            answer:
                "Central Processing Unit"
        }

    ];


    let currentQuestion = 0;

    let score = 0;

    let selectedAnswer = "";


    const questionNumber =
        document.getElementById("questionNumber");

    const questionText =
        document.getElementById("question");

    const optionsBox =
        document.getElementById("options");

    const nextButton =
        document.getElementById("nextButton");

    const quizResult =
        document.getElementById("quizResult");


    /* Load first question */

    function loadQuestion() {

        const current =
            questions[currentQuestion];


        questionNumber.innerHTML =
            "Question " +
            (currentQuestion + 1) +
            " of " +
            questions.length;


        questionText.innerHTML =
            current.question;


        optionsBox.innerHTML = "";


        selectedAnswer = "";


        quizResult.innerHTML = "";


        current.options.forEach(function (option) {

            const button =
                document.createElement("button");


            button.className = "option";

            button.textContent = option;


            button.addEventListener("click", function () {

                const allOptions =
                    document.querySelectorAll(".option");


                allOptions.forEach(function (item) {

                    item.classList.remove("selected");

                });


                button.classList.add("selected");


                selectedAnswer = option;

            });


            optionsBox.appendChild(button);

        });

    }


    /* Next Question */

    nextButton.addEventListener("click", function () {


        if (selectedAnswer === "") {

            alert("Please select an answer.");

            return;

        }


        if (
            selectedAnswer ===
            questions[currentQuestion].answer
        ) {

            score++;

        }


        currentQuestion++;


        if (
            currentQuestion <
            questions.length
        ) {

            loadQuestion();

        }

        else {

            questionNumber.innerHTML =
                "Quiz Completed";


            questionText.innerHTML =
                "🎉 Well Done!";


            optionsBox.innerHTML = "";


            nextButton.style.display =
                "none";


            quizResult.innerHTML =
                "Your Score: " +
                score +
                " / " +
                questions.length;

        }

    });


    /* Start quiz */

    loadQuestion();


    /* ==========================================
       INTERVIEW QUESTIONS
    ========================================== */

    const interviewQuestions = [

        {
            question:
                "What is HTML?",

            answer:
                "HTML stands for HyperText Markup Language. It is used to create the structure of webpages."
        },


        {
            question:
                "What is CSS?",

            answer:
                "CSS stands for Cascading Style Sheets. It is used to design and style webpages."
        },


        {
            question:
                "What is JavaScript?",

            answer:
                "JavaScript is a programming language used to add interaction and dynamic behavior to webpages."
        },


        {
            question:
                "What is a database?",

            answer:
                "A database is an organized collection of data that can be stored, managed and accessed easily."
        },


        {
            question:
                "What is a variable?",

            answer:
                "A variable is a named storage location used to store a value in a program."
        }

    ];


    let currentInterview = 0;


    const interviewQuestion =
        document.getElementById("interviewQuestion");

    const interviewAnswer =
        document.getElementById("interviewAnswer");

    const showAnswerButton =
        document.getElementById("showAnswer");

    const nextInterviewButton =
        document.getElementById("nextInterview");

    const interviewCount =
        document.querySelector(".interview-count");


    /* Load interview question */

    function loadInterviewQuestion() {

        const current =
            interviewQuestions[currentInterview];


        interviewQuestion.innerHTML =
            current.question;


        interviewAnswer.innerHTML =
            'Click "Show Answer" to see the answer.';


        interviewCount.innerHTML =
            "Question " +
            (currentInterview + 1) +
            " of " +
            interviewQuestions.length;

    }


    /* Show Answer */

    showAnswerButton.addEventListener(
        "click",
        function () {

            interviewAnswer.innerHTML =
                interviewQuestions[currentInterview].answer;

        }
    );


    /* Next Interview Question */

    nextInterviewButton.addEventListener(
        "click",
        function () {

            currentInterview++;


            if (
                currentInterview >=
                interviewQuestions.length
            ) {

                currentInterview = 0;

            }


            loadInterviewQuestion();

        }
    );


    /* Start interview */

    loadInterviewQuestion();


});
```javascript
// CAREER INFORMATION

const careers = {
    web: {
        title: "Web Developer",
        description: "A Web Developer creates websites and web applications.",
        skills: ["HTML", "CSS", "JavaScript", "Responsive Design"],
        jobs: ["Frontend Developer", "Backend Developer", "Full Stack Developer"],
        projects: ["Portfolio Website", "Online Shopping Website", "College Website"]
    },

    cyber: {
        title: "Cyber Security",
        description: "Cyber Security protects computers, networks and data from attacks.",
        skills: ["Networking", "Linux", "Security Basics", "Ethical Hacking"],
        jobs: ["Security Analyst", "Cyber Security Engineer", "Security Tester"],
        projects: ["Password Strength Checker", "Network Security Tool", "Login Security System"]
    },

    data: {
        title: "Data Analyst",
        description: "A Data Analyst studies data and finds useful information from it.",
        skills: ["Excel", "SQL", "Python", "Data Visualization"],
        jobs: ["Data Analyst", "Business Analyst", "Junior Data Scientist"],
        projects: ["Student Result Analysis", "Sales Analysis", "Attendance Analysis"]
    },

    cloud: {
        title: "Cloud Computing",
        description: "Cloud professionals work with online servers, storage and cloud services.",
        skills: ["Cloud Basics", "Networking", "Linux", "Cloud Platforms"],
        jobs: ["Cloud Engineer", "Cloud Support Engineer", "Cloud Administrator"],
        projects: ["Cloud Storage System", "Online File Sharing", "Cloud Backup System"]
    },

    app: {
        title: "App Developer",
        description: "App Developers create applications for mobile devices.",
        skills: ["Java", "Kotlin", "Flutter", "UI Design"],
        jobs: ["Android Developer", "Mobile App Developer", "Flutter Developer"],
        projects: ["Student App", "College Notice App", "Expense Tracker"]
    },

    database: {
        title: "Database Developer",
        description: "Database professionals store, manage and organize data.",
        skills: ["SQL", "MySQL", "DBMS", "Database Design"],
        jobs: ["Database Developer", "Database Administrator", "SQL Developer"],
        projects: ["Student Database", "Library Management", "College Management System"]
    }
};


// SELECT CAREER CARDS

const careerCards = document.querySelectorAll(".career-card");

careerCards.forEach(function(card) {

    card.addEventListener("click", function() {

        const careerName = card.getAttribute("data-career");

        const career = careers[careerName];

        document.getElementById("careerDetails").innerHTML = `
            
            <h2>${career.title}</h2>

            <p>${career.description}</p>

            <h3>Skills Required</h3>
            <ul>
                ${career.skills.map(skill => `<li>${skill}</li>`).join("")}
            </ul>

            <h3>Job Opportunities</h3>
            <ul>
                ${career.jobs.map(job => `<li>${job}</li>`).join("")}
            </ul>

            <h3>Project Ideas</h3>
            <ul>
                ${career.projects.map(project => `<li>${project}</li>`).join("")}
            </ul>
        `;

        document.getElementById("careerModal").style.display = "flex";
    });

});


// CLOSE CAREER POPUP

document.getElementById("closeCareer").addEventListener("click", function() {
    document.getElementById("careerModal").style.display = "none";
});


// CLOSE WHEN CLICKING OUTSIDE POPUP

document.getElementById("careerModal").addEventListener("click", function(event) {

    if (event.target === this) {
        this.style.display = "none";
    }

});
```

```
