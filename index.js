function calculateAge() {
  const dob = document.getElementById('birthday').value;
  const dobDate = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - dobDate.getFullYear();
  const monthDifference = today.getMonth() - dobDate.getMonth();
  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() 
< dobDate.getDate())) {
    age--;
  }
  const result = document.getElementById('result');
  result.textContent = `Your age is ${age} years old`;
}