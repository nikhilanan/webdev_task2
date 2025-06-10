function showSection(id) {
  document.querySelectorAll('section').forEach(sec => sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const confirmation = document.getElementById('confirmationMessage');
  const userDetails = document.getElementById('userDetails');
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name && emailPattern.test(email)) {
    confirmation.style.display = 'block';
    userDetails.innerHTML = `<h4>Submitted Details:</h4><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p>`;
    userDetails.style.display = 'block';
  } else {
    confirmation.style.display = 'none';
    userDetails.style.display = 'none';
    alert('Please enter a valid name and email.');
  }
});

function addTask() {
  const input = document.getElementById('todoInput');
  const list = document.getElementById('todoList');
  if (input.value.trim() !== '') {
    const li = document.createElement('li');
    li.textContent = input.value;
    li.onclick = () => li.remove();
    list.appendChild(li);
    input.value = '';
  }
}

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');

document.querySelectorAll('.gallery img').forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src.replace('120x120', '800x800');
    lightbox.style.display = 'flex';
  });
});

lightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
  lightboxImg.src = '';
});
