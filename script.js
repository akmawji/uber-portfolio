// Interactive functionality for Uber portfolio

// Resume experience data
const experienceData = {
    university: {
        company: 'University',
        location: 'Starting Point',
        dates: 'Education',
        role: 'Student',
        bullets: [
            'Pursuing degree in Computer Science',
            'Building foundation for software engineering career'
        ]
    },
    shopify: {
        company: 'Shopify',
        location: 'Montreal, Quebec',
        dates: 'January 2026 – April 2026',
        role: 'Software Engineering Intern',
        bullets: [
            'Incoming Winter 2026 Intern'
        ]
    },
    google: {
        company: 'Google',
        location: 'Waterloo, Ontario',
        dates: 'May 2025 – September 2025',
        role: 'Software Engineering Intern',
        bullets: [
            'Integrating Gemini AI into Google Chat to enhance multiplayer AI capabilities, significantly boosting interactive collaboration, user engagement, and real-time responsiveness.',
            'Developed a full-stack \'Export to Sheets\' feature for Gemini Chat Agents, engineering a Java backend with Google Drive API integration to automate the creation of spreadsheets from chat data significantly improving user workflow.',
            'Streamlined the chat publish workflow by creating backend logic and SQL database changes to read and write user preferences, eliminating a repetitive confirmation dialog. Implemented a configure-settings feature for improved testing and user control.',
            'Drove project success thorough comprehensive technical documentation, unit, integration, and screenshot testing to ensure the reliability, quality and seamless functionality of all implemented features.',
            'Maintained high productivity during a major platform migration by quickly adapting to new code bases and naming conventions.'
        ]
    },
    healthcare: {
        company: 'Healthcare Systems R&A',
        location: 'Waterloo, Ontario',
        dates: 'September 2024 – January 2025',
        role: 'Software Engineering Intern',
        bullets: [
            'Added three layers to an existing neural network using the metrics angular displacement, angular velocity and angular acceleration which were found using 3D coordinates for 25 body landmarks to improve model accuracy.',
            'Built and optimized a deep learning model for spine pain prediction using TensorFlow and Keras.',
            'Integrated CNNs, GRU layers, and advanced data augmentation (e.g., Random Flip, Zoom) to enhance accuracy.',
            'Fine-tuned hyperparameters and implemented regularization techniques to improve model generalization.',
            'Developed a desktop application with file upload for model deployment with React and Python.'
        ]
    },
    mining: {
        company: '1266407 B.C. LTD',
        location: 'Surrey, British Columbia - remote',
        dates: 'May 2024 – September 2024',
        role: 'Software Engineering Intern',
        bullets: [
            'Processed missing data with neural networks using probabilistic modeling which improved performance by 5%.',
            'Collaborated on developing a machine learning pipeline for geological data analysis alongside geological experts using Python, TensorFlow, XGBoost, and PyTorch.',
            'Trained an autoencoder neural network containing 61 features to compress and reconstruct geochemical data and evaluated performance metrics (e.g., R² score, MAE, MSE) to refine predictive capabilities.'
        ]
    },
    uber: {
        company: 'Uber',
        location: 'San Francisco, California',
        dates: 'Future Opportunity',
        role: 'Software Engineering Intern',
        bullets: [
            'Final destination in my career journey',
            'Excited to contribute to Uber\'s mission of moving the world forward',
            'Ready to apply my experience in full-stack development, ML pipelines, and large-scale systems',
            'Passionate about building products that impact millions of users daily'
        ]
    }
};

function showExperience(companyKey) {
    const experience = experienceData[companyKey];
    if (!experience) return;

    const panel = document.getElementById('experiencePanel');
    const companyEl = document.getElementById('expCompany');
    const locationEl = document.getElementById('expLocation');
    const datesEl = document.getElementById('expDates');
    const roleEl = document.getElementById('expRole');
    const bulletsEl = document.getElementById('expBullets');

    companyEl.textContent = experience.company;
    locationEl.textContent = experience.location;
    datesEl.textContent = experience.dates;
    roleEl.textContent = experience.role;

    // Clear and populate bullets
    bulletsEl.innerHTML = '';
    experience.bullets.forEach(bullet => {
        const li = document.createElement('li');
        li.textContent = bullet;
        bulletsEl.appendChild(li);
    });

    panel.classList.add('active');
}

function hideExperience() {
    const panel = document.getElementById('experiencePanel');
    panel.classList.remove('active');
}

document.addEventListener('DOMContentLoaded', function() {
    let currentActiveMarker = null;
    
    // Map marker button click handlers
    const markerButtons = document.querySelectorAll('.marker-btn');
    
    markerButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const company = this.getAttribute('data-company');
            
            if (company) {
                // If clicking the same button, toggle it off
                if (currentActiveMarker === company) {
                    hideExperience();
                    currentActiveMarker = null;
                    markerButtons.forEach(btn => btn.classList.remove('active'));
                } else {
                    // Show new experience
                    showExperience(company);
                    currentActiveMarker = company;
                    markerButtons.forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');
                }
            }
        });
    });

    // Close panel button
    const closePanelBtn = document.getElementById('closePanelBtn');
    if (closePanelBtn) {
        closePanelBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            hideExperience();
            currentActiveMarker = null;
            markerButtons.forEach(btn => btn.classList.remove('active'));
        });
    }

    // Close panel when clicking outside
    document.addEventListener('click', function(e) {
        const panel = document.getElementById('experiencePanel');
        const isClickOnButton = e.target.closest('.marker-btn');
        const isClickOnPanel = e.target.closest('.experience-panel');
        
        if (!isClickOnButton && !isClickOnPanel && panel && panel.classList.contains('active')) {
            hideExperience();
            currentActiveMarker = null;
            markerButtons.forEach(btn => btn.classList.remove('active'));
        }
    });
    // Time selector dropdown functionality
    const timeBtn = document.querySelector('.time-btn');
    if (timeBtn) {
        timeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // In a real implementation, this would open a time picker
            console.log('Time picker clicked');
        });
    }

    // Location input interactions
    const locationInputs = document.querySelectorAll('.location-field');
    locationInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.borderColor = '#000000';
            this.parentElement.style.boxShadow = '0 0 0 2px rgba(0, 0, 0, 0.1)';
        });

        input.addEventListener('blur', function() {
            this.parentElement.style.borderColor = '#E0E0E0';
            this.parentElement.style.boxShadow = 'none';
        });
    });

    // Location action button (current location)
    const locationAction = document.querySelector('.location-action');
    if (locationAction) {
        locationAction.addEventListener('click', function(e) {
            e.preventDefault();
            const pickupInput = document.querySelector('.pickup .location-field');
            if (pickupInput) {
                pickupInput.value = 'Current location';
                pickupInput.focus();
            }
        });
    }

    // See prices button
    const seePricesBtn = document.querySelector('.see-prices-btn');
    if (seePricesBtn) {
        seePricesBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const pickup = document.querySelector('.pickup .location-field').value;
            const dropoff = document.querySelector('.dropoff .location-field').value;
            
            if (!pickup || !dropoff) {
                alert('Please enter both pickup and dropoff locations');
                return;
            }
            
            // In a real implementation, this would calculate and show prices
            console.log('Calculating prices for:', pickup, 'to', dropoff);
            alert('Price calculation would happen here! This is a portfolio demo.');
        });
    }

    // Change city link
    const changeCityLink = document.querySelector('.change-city');
    if (changeCityLink) {
        changeCityLink.addEventListener('click', function(e) {
            e.preventDefault();
            const newCity = prompt('Enter a new city:');
            if (newCity) {
                const locationText = document.querySelector('.current-location');
                if (locationText) {
                    locationText.textContent = newCity;
                }
            }
        });
    }

    // Suggestion cards hover effects
    const suggestionCards = document.querySelectorAll('.suggestion-card');
    suggestionCards.forEach(card => {
        card.addEventListener('click', function() {
            const title = this.querySelector('.card-title').textContent;
            console.log('Clicked on:', title);
            // In a real implementation, this would navigate to the service page
        });
    });

    // Navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const linkText = this.textContent.trim();
            console.log('Navigation clicked:', linkText);
        });
    });

    // Sign up button
    const signupBtn = document.querySelector('.signup-btn');
    if (signupBtn) {
        signupBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Sign up clicked');
            alert('Sign up functionality would be implemented here!');
        });
    }

    // Log in link
    const loginLink = document.querySelector('.login-link');
    if (loginLink) {
        loginLink.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Log in clicked');
        });
    }

    // Form validation
    const bookingForm = document.querySelector('.booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Form submission would be handled here
        });
    }
});

