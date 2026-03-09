// Dummy patient data
const patientData = {
    'PT2024001': {
        name: 'Rajesh Kumar',
        age: 45,
        gender: 'Male',
        bloodGroup: 'O+',
        phone: '9876543210',
        chronicConditions: ['Hypertension', 'Type 2 Diabetes'],
        allergies: ['Penicillin', 'Sulfa drugs'],
        visits: [
            {
                date: 'June 15, 2024',
                title: 'Viral Infection',
                symptoms: 'Fever, cough, body ache',
                diagnosis: 'Upper respiratory tract infection',
                medicines: 'Paracetamol, Azithromycin'
            },
            {
                date: 'March 10, 2024',
                title: 'BP Check & Follow-up',
                symptoms: 'BP: 145/92 mmHg',
                diagnosis: 'Hypertension monitoring',
                medicines: 'Amlodipine 5mg'
            },
            {
                date: 'January 22, 2024',
                title: 'Fever Consultation',
                symptoms: 'High fever, throat pain',
                diagnosis: 'Bacterial throat infection',
                medicines: 'Tests: CBC, Throat swab'
            }
        ]
    }
};

// Language toggle functionality
let currentLang = 'en';

function initLanguageToggle() {
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }
}

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'hi' : 'en';
    const langToggle = document.getElementById('langToggle');
    
    if (currentLang === 'hi') {
        langToggle.textContent = '🌐 English';
    } else {
        langToggle.textContent = '🌐 हिंदी';
    }
    
    // Update all translatable elements
    const elements = document.querySelectorAll('[data-en][data-hi]');
    elements.forEach(el => {
        el.textContent = el.getAttribute(`data-${currentLang}`);
    });
}

// Load patient record (Doctor Dashboard)
function loadPatient() {
    const searchInput = document.getElementById('patientSearch');
    const searchValue = searchInput.value.trim();
    
    // Find patient by ID or phone
    let patient = null;
    for (let id in patientData) {
        if (id === searchValue || patientData[id].phone === searchValue) {
            patient = patientData[id];
            break;
        }
    }
    
    if (patient) {
        // Show patient profile
        document.getElementById('patientProfile').style.display = 'block';
        document.getElementById('patientName').textContent = patient.name;
        document.getElementById('patientAge').textContent = patient.age + ' years';
        document.getElementById('patientGender').textContent = patient.gender;
        document.getElementById('patientBlood').textContent = patient.bloodGroup;
        
        // Show patient summary
        document.getElementById('patientSummary').style.display = 'block';
        
        // Show AI risk card
        document.getElementById('aiRiskCard').style.display = 'block';
        
        // Show AI recommendations
        document.getElementById('aiRecommendations').style.display = 'block';
        
        // Show timeline
        document.getElementById('patientTimeline').style.display = 'block';
        
        // Show consultation form
        document.getElementById('consultationCard').style.display = 'block';
        
        // Scroll to profile
        document.getElementById('patientProfile').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } else {
        alert('Patient not found. Try: PT2024001 or 9876543210');
    }
}

// Submit consultation
function submitConsultation() {
    const form = document.getElementById('consultationForm');
    if (form) {
        // Simulate form submission
        alert('Consultation submitted successfully!\n\nStructured record has been generated and added to patient history.');
        form.reset();
    } else {
        // From consultation.html page
        document.querySelector('.consultation-grid').style.display = 'none';
        document.querySelector('.consultation-actions').style.display = 'none';
        document.getElementById('successMessage').style.display = 'block';
    }
}

// Generate AI Summary
function generateAISummary() {
    const summary = "AI analysis indicates recurring respiratory infection patterns across recent visits. " +
                   "Blood pressure readings show upward trend. Recommend lifestyle modifications and regular monitoring.";
    return summary;
}

// Prescription upload functionality
function initPrescriptionUpload() {
    const input = document.getElementById('prescriptionInput');
    const uploadArea = document.getElementById('uploadArea');
    const preview = document.getElementById('uploadPreview');
    const previewImage = document.getElementById('previewImage');
    const removeBtn = document.getElementById('removeImage');
    
    if (!input) return;
    
    input.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function(e) {
                previewImage.src = e.target.result;
                uploadArea.querySelector('.upload-placeholder').style.display = 'none';
                preview.style.display = 'block';
            };
            reader.readAsDataURL(file);
        }
    });
    
    if (removeBtn) {
        removeBtn.addEventListener('click', function() {
            input.value = '';
            previewImage.src = '';
            uploadArea.querySelector('.upload-placeholder').style.display = 'block';
            preview.style.display = 'none';
        });
    }
    
    // Drag and drop
    uploadArea.addEventListener('dragover', function(e) {
        e.preventDefault();
        uploadArea.style.borderColor = 'var(--primary)';
    });
    
    uploadArea.addEventListener('dragleave', function(e) {
        e.preventDefault();
        uploadArea.style.borderColor = 'var(--border)';
    });
    
    uploadArea.addEventListener('drop', function(e) {
        e.preventDefault();
        uploadArea.style.borderColor = 'var(--border)';
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
            input.files = e.dataTransfer.files;
            input.dispatchEvent(new Event('change'));
        }
    });
}

// Add medicine row in consultation page
function addMedicine() {
    const medicineList = document.getElementById('medicineList');
    const newEntry = document.createElement('div');
    newEntry.className = 'medicine-entry';
    newEntry.innerHTML = `
        <input type="text" class="input-field" placeholder="Medicine name">
        <input type="text" class="input-field" placeholder="Dosage (e.g., 500mg)">
        <input type="text" class="input-field" placeholder="Frequency (e.g., 2x daily)">
        <input type="text" class="input-field" placeholder="Duration (e.g., 5 days)">
    `;
    medicineList.appendChild(newEntry);
}

// Save draft
function saveDraft() {
    alert('Consultation saved as draft');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initLanguageToggle();
    initPrescriptionUpload();
    initAuthForms();
});

// Auth form handlers
function initAuthForms() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    if (signupForm) {
        signupForm.addEventListener('submit', handleSignup);
    }
}

function handleLogin(e) {
    e.preventDefault();
    const role = document.querySelector('input[name="role"]:checked').value;
    
    // Simulate login
    if (role === 'patient') {
        window.location.href = 'patient-dashboard.html';
    } else {
        window.location.href = 'doctor-dashboard.html';
    }
}

function handleSignup(e) {
    e.preventDefault();
    const role = document.querySelector('input[name="role"]:checked').value;
    
    // Simulate signup
    alert('Account created successfully!');
    
    if (role === 'patient') {
        window.location.href = 'patient-dashboard.html';
    } else {
        window.location.href = 'doctor-dashboard.html';
    }
}

function toggleSignupFields() {
    const role = document.querySelector('input[name="role"]:checked').value;
    const patientFields = document.getElementById('patientFields');
    const doctorFields = document.getElementById('doctorFields');
    
    if (role === 'patient') {
        patientFields.style.display = 'block';
        doctorFields.style.display = 'none';
    } else {
        patientFields.style.display = 'none';
        doctorFields.style.display = 'block';
    }
}

// Share medical history
function generateShareLink() {
    const shareResult = document.getElementById('shareResult');
    shareResult.style.display = 'block';
    
    // Scroll to result
    shareResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function copyShareLink() {
    const link = 'https://pragaiti.health/share/PT2024001-ABC123';
    navigator.clipboard.writeText(link).then(() => {
        alert('Link copied to clipboard!');
    });
}
