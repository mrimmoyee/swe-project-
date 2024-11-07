// Sample user data
const users = [
    { id: 1, name: 'John Doe', role: 'Special Child', image: 'https://via.placeholder.com/120', isConnected: false },
    { id: 2, name: 'Jane Smith', role: 'Parent', image: 'https://via.placeholder.com/120', isConnected: false },
    { id: 3, name: 'Michael Adams', role: 'Educator', image: 'https://via.placeholder.com/120', isConnected: false },
    { id: 4, name: 'Sarah Johnson', role: 'Consultant', image: 'https://via.placeholder.com/120', isConnected: false },
    { id: 5, name: 'Emily Taylor', role: 'Content Creator', image: 'https://via.placeholder.com/120', isConnected: false },
    { id: 6, name: 'Oliver Lee', role: 'Volunteer', image: 'https://via.placeholder.com/120', isConnected: false },
  ];
  
  const profileGrid = document.getElementById('profileGrid');
  
  function createProfileCard(user) {
    const card = document.createElement('div');
    card.classList.add('profile-card');
  
    const img = document.createElement('img');
    img.classList.add('profile-img');
    img.src = user.image;
    img.alt = user.name;
  
    const infoDiv = document.createElement('div');
    infoDiv.classList.add('profile-info');
  
    const name = document.createElement('h3');
    name.classList.add('profile-name');
    name.textContent = user.name;
  
    const role = document.createElement('p');
    role.classList.add('profile-role');
    role.textContent = user.role;
  
    const button = document.createElement('button');
    button.classList.add('connect-btn');
    button.textContent = user.isConnected ? 'Request Sent' : 'Connect';
    button.disabled = user.isConnected;
  
    button.addEventListener('click', function() {
      button.textContent = 'Request Sent';
      button.classList.add('request-sent');
      button.disabled = true;
      // Additional logic to handle request sending can be added here.
    });
  
    infoDiv.appendChild(name);
    infoDiv.appendChild(role);
    card.appendChild(img);
    card.appendChild(infoDiv);
    card.appendChild(button);
  
    return card;
  }
  
  // Load profiles
  users.forEach(user => {
    const profileCard = createProfileCard(user);
    profileGrid.appendChild(profileCard);
  });