// Departments data
const departments = [
  { name: "Cardiology", img: "images/departments/cardio.jpg" },
  { name: "Neurology", img: "images/departments/neuro.jpg" },
  { name: "Orthopedics", img: "images/departments/ortho.jpg" },
  { name: "Pediatrics", img: "images/departments/pedia.jpg" }
];

// Doctors data
const doctors = [
  { name: "Dr. Sharma", spec: "Cardiologist", img: "images/doctors/doc1.jpg" },
  { name: "Dr. Mehta", spec: "Neurologist", img: "images/doctors/doc2.jpg" },
  { name: "Dr. Reddy", spec: "Orthopedic", img: "images/doctors/doc3.jpg" },
  { name: "Dr. Priya", spec: "Pediatrician", img: "images/doctors/doc4.jpg" }
];

// Load Departments
function loadDepartments() {
  const container = document.getElementById("departments");
  container.innerHTML = "";

  departments.forEach(dep => {
    container.innerHTML += `
      <div class="col-md-3">
        <div class="card">
          <img src="${dep.img}">
          <h4>${dep.name}</h4>
        </div>
      </div>
    `;
  });
}

// Load Doctors
function loadDoctors() {
  const container = document.getElementById("doctors");
  container.innerHTML = "";

  doctors.forEach(doc => {
    container.innerHTML += `
      <div class="col-md-3">
        <div class="card">
          <img src="${doc.img}">
          <h5>${doc.name}</h5>
          <p>${doc.spec}</p>
        </div>
      </div>
    `;
  });
}

// Init
window.onload = function () {
  loadDepartments();
  loadDoctors();
};