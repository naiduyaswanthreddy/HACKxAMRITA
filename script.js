
//==============================================registrtion ends in ===================================================


// Set the date for the countdown (format: 'Month DD, YYYY HH:MM:SS')
const countDownDate = new Date("Nov 4, 2024 23:59:59").getTime();

const countdownFunction = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // If countdown is finished
// If countdown is finished
if (distance < 0) {
  clearInterval(countdownFunction);
  document.getElementById("blast-off").innerHTML = "Registrations closed<br>Contact: 7207171544";
  document.querySelectorAll(".time-unit span").forEach(el => el.innerHTML = "0");
}

}, 1000);





//==========================================scroll bar =========================================================


window.addEventListener('scroll', function() {
  const heroSection = document.querySelector('.hero');
  const scrollIndicator = document.querySelector('.scroll-indicator');
  const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;

  if (window.scrollY >= heroBottom) {
    scrollIndicator.style.display = 'none'; // Hide the scroll indicator
  } else {
    scrollIndicator.style.display = 'flex'; // Show the scroll indicator
  }
});



//=========================================================== nav bar ==========================================



document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    // Calculate the correct offset by considering fixed header height or any top padding/margin
    const offset = 180; // Adjust this value if necessary to match your layout
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;

    // Smoothly scroll to the target position
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
});




var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});





document.querySelectorAll('.accordion-button').forEach(button => {
  button.addEventListener('click', () => {
    const targetCollapse = document.querySelector(button.getAttribute('data-bs-target'));
    if (!targetCollapse.classList.contains('show')) {
      button.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });
});









//===================================================================================================






// Set target date and time for registration (October 29, 2024, at 9:00 AM)
  const registrationStartDate = new Date('2024-10-28T21:00:00');

// Get HTML elements
const countdownDisplay = document.getElementById("countdown");
const registerButton = document.getElementById("register-btn");

// Update countdown every second
const timer = setInterval(() => {
  // Get current date and time
  const now = new Date();

  // Calculate time difference in milliseconds
  const timeDifference = registrationStartDate - now;

  // If countdown is complete
  if (timeDifference <= 0) {
    clearInterval(timer); // Stop timer
    countdownDisplay.style.display = "none"; // Hide countdown display
    registerButton.style.display = "inline-block"; // Show register button
  } else {
    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Display countdown
    countdownDisplay.textContent = `Registration starts in: ${days}d ${hours}h ${minutes}m ${seconds}s`;
  }
}, 1000);












// Schedule data and functionality
// Schedule data
const schedule = [
  { date: "29th Oct", time: "9:00 AM", event: "Registrations Open" },
  { date: "4th Nov", time: "11:59 PM", event: "Registrations Close" },
  { date: "16th Nov", time: "8:00 PM", event: "Domains and Problem Statements Release" },
  { date: "18th Nov", time: "9:00 AM", event: "Hackathon Starts" },
  { date: "18th Nov", time: "4:00 PM", event: "Hackathon Ends" },
  { date: "18th Nov", time: "4:30 PM", event: "Prize Distribution & Closing Ceremony" }
];

let showAll = false;

// Function to display the schedule
function displaySchedule() {
  const list = document.getElementById('schedule-list');
  if (!list) {
    console.error("Element with ID 'schedule-list' not found in the DOM.");
    return;
  }

  list.innerHTML = ''; // Clear the existing content

  // Decide how many schedule items to display
  const displayedSchedule = showAll ? schedule : schedule.slice(0, 3);

  // Create and append schedule items
  displayedSchedule.forEach((item, index) => {
    const div = document.createElement('div');
    div.className = 'schedule-item';
    div.style.animationDelay = `${index * 0.1}s`; // Add animation delay
    div.innerHTML = `
      <div class="row align-items-center">
        <div class="col-md-3"><strong>${item.date}</strong></div>
        <div class="col-md-2">${item.time}</div>
        <div class="col-md-7">${item.event}</div>
      </div>
    `;
    list.appendChild(div);
  });
}

// Initialize everything when the page loads
document.addEventListener('DOMContentLoaded', () => {
  // Ensure the schedule list is created when the DOM is fully loaded
  displaySchedule();

  // Add event listener for the "Show Full Schedule" button
  const showMoreButton = document.getElementById('showMore');
  if (showMoreButton) {
    showMoreButton.addEventListener('click', () => {
      showAll = !showAll; // Toggle showAll variable
      displaySchedule();
      showMoreButton.textContent = showAll ? 'Show Less' : 'Show Full Schedule';
    });
  } else {
    console.error("Element with ID 'showMore' not found in the DOM.");
  }

  // Ensure schedule is reloaded when the schedule tab is shown
  const scheduleTabLink = document.querySelector('a[href="#schedule"]');
  if (scheduleTabLink) {
    scheduleTabLink.addEventListener('shown.bs.tab', () => {
      displaySchedule();
    });
  } else {
    console.error("Schedule tab link not found in the DOM.");
  }
});












  // Set the target date and time for the countdown (December 14, 2024, at 8:00 PM)
  const targetDate2 = new Date('2024-11-16T20:00:00');

  // Get HTML element for countdown display
  const countdownDisplay2 = document.getElementById("countdown2");

  // Update countdown every second
  const countdownTimer2 = setInterval(() => {
    const now = new Date();
    const timeDifference = targetDate2 - now;

    // Check if the countdown is complete
    if (timeDifference <= 0) {
      clearInterval(countdownTimer2); // Stop the timer
      countdownDisplay2.innerHTML = "The wait is over! Check out the problem statements now."; // Message after countdown
    } else {
      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      // Display countdown
      countdownDisplay2.innerHTML = `Problem Statements release in: ${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
  }, 1000);











function createStars() {
  const spaceBackground = document.querySelector('.space-background');
  const numberOfStars = 50;
  
  for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement('div');
    star.className = `star twinkle-${Math.ceil(Math.random() * 3)}`;
    
    // Randomly assign star size
    if (Math.random() > 0.6) {
      star.classList.add('medium');
    } else if (Math.random() > 0.8) {
      star.classList.add('large');
    }
    
    // Random position
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    
    spaceBackground.appendChild(star);
  }
}

// Create rocket trails
function createTrail(rocket) {
  const trail = document.createElement('div');
  trail.className = 'rocket-trail';
  
  const rect = rocket.getBoundingClientRect();
  const rocketCenterX = rect.left + rect.width / 2;
  const rocketCenterY = rect.top + rect.height / 2;
  
  trail.style.left = `${rocketCenterX}px`;
  trail.style.top = `${rocketCenterY}px`;
  
  document.body.appendChild(trail);
  
  trail.style.animation = 'trailFade 1s ease-out forwards';
  setTimeout(() => trail.remove(), 1000);
}

// Start all animations
function initSpaceAnimations() {
  createStars();
  
  const rockets = document.querySelectorAll('.rocket');
  rockets.forEach(rocket => {
    setInterval(() => createTrail(rocket), 100);
  });
}

// Initialize when the page loads
document.addEventListener('DOMContentLoaded', initSpaceAnimations);

// Add hover effects to rockets
document.querySelectorAll('.rocket').forEach(rocket => {
  rocket.addEventListener('mouseover', function() {
    this.style.filter = 'drop-shadow(0 0 20px var(--accent-color))';
  });
  
  rocket.addEventListener('mouseout', function() {
    this.style.filter = 'drop-shadow(0 0 10px rgba(0,242,254,0.5))';
  });
});




//=========================================== Source code  =========================================================

// Prevent right-click, text selection, and specific key combinations
document.addEventListener('contextmenu', event => event.preventDefault());

document.addEventListener('keydown', (e) => {
    // Disable F12
    if (e.key === 'F12') {
        e.preventDefault();
    }
    // Disable Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C
    if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) {
        e.preventDefault();
    }
    // Disable Ctrl+U (View Page Source)
    if (e.ctrlKey && e.key === 'U') {
        e.preventDefault();
        
    }
});




document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.key === 'u') {
      e.preventDefault();
      
  }
});




//=========================================== hamburger ================================================


document.querySelectorAll('#dropdownMenu .nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default anchor behavior

    // Close the dropdown menu and reset the icon to the hamburger
    const menu = document.getElementById("dropdownMenu");
    const menuIcon = document.getElementById("menuIcon");
    menu.style.display = "none";
    menuIcon.classList.remove("fa-arrow-left", "fa-arrow-up");
    menuIcon.classList.add("fa-bars");

    // Get the target section ID from the link's href attribute
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      // Locate the specific element inside target section for alignment
      const scrollTarget = targetElement.querySelector('.text-center.mb-4') || targetElement;
      const offset = 180; // Adjust this as needed for your layout
      
      // Calculate target scroll position
      const targetPosition = scrollTarget.getBoundingClientRect().top + window.pageYOffset - offset;

      // Smooth scroll to the calculated position
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    } else {
      console.warn(`Element with ID ${targetId} not found or does not contain the expected content.`);
    }

    // Set the active class on the main navigation bar
    document.querySelectorAll('.nav-tabs .nav-link').forEach(tab => {
      tab.classList.remove('active');
      if (tab.getAttribute('href') === targetId) {
        tab.classList.add('active');
      }
    });

    // Show the correct tab content pane
    document.querySelectorAll('.tab-pane').forEach(pane => {
      if (`#${pane.id}` === targetId) {
        pane.classList.add('show', 'active');
      } else {
        pane.classList.remove('show', 'active');
      }
    });
  });
});









function toggleMenu() {
  const menu = document.getElementById("dropdownMenu");
  const menuIcon = document.getElementById("menuIcon");

  // Check the window width to determine which icon to use
  if (window.innerWidth >= 1024) {
    // For laptops and larger screens, use the left arrow icon
    if (menu.style.display === "block") {
      menu.style.display = "none";
      menuIcon.classList.remove("fa-arrow-left");
      menuIcon.classList.add("fa-bars");
    } else {
      menu.style.display = "block";
      menuIcon.classList.remove("fa-bars");
      menuIcon.classList.add("fa-arrow-left");
    }
  } else {
    // For phones and smaller screens, use the up arrow icon
    if (menu.style.display === "block") {
      menu.style.display = "none";
      menuIcon.classList.remove("fa-arrow-left");
      menuIcon.classList.add("fa-bars");
    } else {
      menu.style.display = "block";
      menuIcon.classList.remove("fa-bars");
      menuIcon.classList.add("fa-arrow-left");
    }
  }
}

// Event listener for dropdown menu options
document.querySelectorAll('#dropdownMenu .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const menu = document.getElementById("dropdownMenu");
    const menuIcon = document.getElementById("menuIcon");

    // Close the dropdown menu and reset the icon to the hamburger
    menu.style.display = "none";
    menuIcon.classList.remove("fa-arrow-left", "fa-arrow-up");
    menuIcon.classList.add("fa-bars");
  });
});



document.addEventListener('click', (e) => {
  const menu = document.getElementById("dropdownMenu");
  const menuIcon = document.getElementById("menuIcon");

  // Check if the dropdown menu is open
  if (menu.style.display === "block") {
    // Check if the click is outside the dropdown menu and the menu icon
    if (!menu.contains(e.target) && !menuIcon.contains(e.target)) {
      // Close the dropdown menu and reset the icon to the hamburger
      menu.style.display = "none";
      menuIcon.classList.remove("fa-arrow-left", "fa-arrow-up");
      menuIcon.classList.add("fa-bars");
    }
  }
});






// ================================================ see more  =======================================



document.getElementById('seeMoreBtn').addEventListener('click', function() {
  const rulesTab = document.getElementById('rulesTab');
  
  if (rulesTab) {
    // Remove the class that hides the tab on all devices
    rulesTab.classList.remove('d-none');
    // Ensure it remains visible on larger screens
    rulesTab.classList.add('d-block');
  }
  
  // Hide the "See More" button
  this.style.display = 'none';
});
