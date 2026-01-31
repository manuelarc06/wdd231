document.addEventListener("DOMContentLoaded", () => {

  const courses = [
    {
      subject: "WDD",
      number: 130,
      title: "Web Fundamentals",
      credits: 2,
      certificate: "Web & Computer Programming",
      description: "Introduction to basic web technologies and design.",
      technology: ["HTML", "CSS"],
      completed: true
    },
    {
      subject: "WDD",
      number: 131,
      title: "Dynamic Web Fundamentals",
      credits: 2,
      certificate: "Web & Computer Programming",
      description: "JavaScript and dynamic web content.",
      technology: ["HTML", "CSS", "JavaScript"],
      completed: true
    },
    {
      subject: "WDD",
      number: 231,
      title: "Frontend Web Development I",
      credits: 2,
      certificate: "Web & Computer Programming",
      description: "Advanced HTML, CSS, and JavaScript for responsive websites.",
      technology: ["HTML", "CSS", "JavaScript"],
      completed: false
    },
    {
      subject: "CSE",
      number: 110,
      title: "Programming Building Blocks",
      credits: 2,
      certificate: "Web & Computer Programming",
      description: "Introduction to programming logic and problem solving.",
      technology: ["Python"],
      completed: true
    },
    {
      subject: "CSE",
      number: 111,
      title: "Programming with Functions",
      credits: 2,
      certificate: "Web & Computer Programming",
      description: "Using functions and modular programming.",
      technology: ["Python"],
      completed: true
    },
    {
      subject: "CSE",
      number: 210,
      title: "Programming with Classes",
      credits: 2,
      certificate: "Web & Computer Programming",
      description: "Object-oriented programming concepts.",
      technology: ["Python and C#"],
      completed: false
    }
  ];

  const courseList = document.querySelector("#course-list");
  const creditText = document.querySelector("#total-credits");
  const courseDetails = document.querySelector("#course-details");

  const allButton = document.querySelector("#all");
  const wddButton = document.querySelector("#wdd");
  const cseButton = document.querySelector("#cse");

  function displayCourses(courseArray) {
    courseList.innerHTML = "";

    courseArray.forEach(course => {
      const li = document.createElement("li");

      li.textContent = course.completed
        ? `${course.subject} ${course.number} ✔`
        : `${course.subject} ${course.number}`;

      li.addEventListener("click", () => {
        displayCourseDetails(course);
      });

      courseList.appendChild(li);
    });

    updateCredits(courseArray);
  }

  function updateCredits(courseArray) {
    const totalCredits = courseArray.reduce(
      (sum, course) => sum + course.credits,
      0
    );

    creditText.textContent =
      `The total credits for courses listed above is ${totalCredits}`;
  }

  function displayCourseDetails(course) {
    courseDetails.innerHTML = `
      <button id="closeModal">❌</button>
      <h2>${course.subject} ${course.number}</h2>
      <h3>${course.title}</h3>
      <p><strong>Credits:</strong> ${course.credits}</p>
      <p><strong>Certificate:</strong> ${course.certificate}</p>
      <p>${course.description}</p>
      <p><strong>Technologies:</strong> ${course.technology.join(", ")}</p>
    `;

    courseDetails.showModal();

    document.querySelector("#closeModal").addEventListener("click", () => {
      courseDetails.close();
    });

    courseDetails.addEventListener("click", (event) => {
      if (event.target === courseDetails) {
        courseDetails.close();
      }
    });
  }

  allButton.addEventListener("click", () => {
    displayCourses(courses);
  });

  wddButton.addEventListener("click", () => {
    const wddCourses = courses.filter(course => course.subject === "WDD");
    displayCourses(wddCourses);
  });

  cseButton.addEventListener("click", () => {
    const cseCourses = courses.filter(course => course.subject === "CSE");
    displayCourses(cseCourses);
  });

  displayCourses(courses);
});
