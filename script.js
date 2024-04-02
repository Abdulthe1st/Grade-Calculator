// CS10 Grade Calculator

document.getElementById("btn").addEventListener("click", calculateGrade);

// Function
function calculateGrade() {
  // Input
  let clientOne = +document.getElementById("mrk-1").value;
  let clientTwo = +document.getElementById("mrk-4").value;
  let structureOne = +document.getElementById("mrk-2").value;
  let structureTwo = +document.getElementById("mrk-3").value;
  let projectA = +document.getElementById("mrk-5").value;

  // Process
  let grade = clientOne + clientTwo + structureOne + structureTwo + projectA;

  let completeGrade = grade / 5;

  // Output
  document.getElementById("output").innerHTML = completeGrade;
}
