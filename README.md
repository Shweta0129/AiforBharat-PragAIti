# PragAIti – AI Healthcare Platform for Bharat

PragAIti is an AI-powered healthcare platform designed to give patients ownership of their medical records while enabling doctors to collaborate through structured consultations and AI-assisted insights.

The platform aims to solve one of the biggest healthcare problems in India: **fragmented medical records and lack of longitudinal health intelligence.**

Patients often visit multiple doctors across different hospitals and clinics. Their health data remains scattered across prescriptions, reports, and hospital systems. PragAIti provides a **unified digital health record platform** where patients and doctors can access and update medical information securely.

---

# 🌐 Live Prototype

**Frontend Demo**

http://pragaiti-health-app.s3-website-us-east-1.amazonaws.com

---

# 📦 GitHub Repository

https://github.com/Shweta0129/AiforBharat-PragAIti

---

# 🧠 Problem Statement

Healthcare data in India is fragmented.

• Patients do not own their medical history
• Doctors lack access to longitudinal patient records
• Prescriptions and reports remain paper-based
• Preventive healthcare insights are rarely available

This leads to repeated tests, delayed diagnoses, and inefficient treatment decisions.

---

# 💡 Our Solution

PragAIti creates a **longitudinal AI-powered health intelligence layer** where:

• Patients maintain lifelong medical records
• Doctors can access structured consultation history
• Prescriptions can be digitized and stored
• AI provides health insights and risk indicators

The goal is to move healthcare from **reactive treatment → proactive preventive care.**

---

# 🚀 Key Features

### Patient Dashboard

Patients can view and manage their health information in one place.

Features include:

• Health score overview
• AI-generated health insights
• Medication tracking
• Medical visit timeline
• Prescription uploads

---

### Doctor Dashboard

Doctors can search for patients and add structured consultations including:

• Symptoms
• Diagnosis
• Prescriptions
• Medical advice

All consultations become part of the patient's **longitudinal health record.**

---

### Prescription Upload

Patients can upload prescription images which are stored and linked to their medical timeline.

This demonstrates the foundation for future **AI prescription extraction and medication tracking.**

---

### AI Health Insights

The platform generates simple health insights based on stored patient information.

Example insights include:

• Risk indicators
• Preventive health alerts
• Medication tracking
• Follow-up recommendations

---

# 🏗️ System Architecture

PragAIti is built using a **serverless cloud architecture on AWS.**

Frontend
AWS S3 Static Website Hosting

API Layer
Amazon API Gateway

Backend Logic
AWS Lambda Functions

Database
Amazon DynamoDB

Architecture Flow

User → S3 Frontend → API Gateway → Lambda → DynamoDB

This architecture ensures:

• scalability
• low operational cost
• high availability
• rapid deployment

---

# 🛠️ Tech Stack

Frontend
HTML
CSS
JavaScript

Cloud Infrastructure
AWS S3
AWS API Gateway
AWS Lambda
AWS DynamoDB

Development Tools
GitHub
VS Code

---

# 📂 Project Structure

```
AiforBharat-PragAIti
│
├── landing.html
├── login.html
├── signup.html
├── patient-dashboard.html
├── doctor-dashboard.html
├── consultation.html
│
├── style.css
├── app.js
│
└── README.md
```

---

# 🎥 Demo Flow

1. Open the landing page
2. Sign up or login as a patient
3. View patient health dashboard
4. Upload prescription image
5. Review health insights and timeline
6. Login as a doctor
7. Add a consultation for the patient

This demonstrates the **complete patient–doctor interaction cycle.**

---

# 🇮🇳 Impact for Bharat

PragAIti can significantly improve healthcare accessibility in India by:

• enabling patient-owned health records
• reducing duplicate tests and medical history loss
• supporting rural healthcare providers
• enabling AI-driven preventive health monitoring

The platform aligns with India's vision of **digital health infrastructure and accessible healthcare for all.**

---

# 🔮 Future Enhancements

• AI prescription text extraction
• multilingual patient interface
• AI risk prediction models
• integration with diagnostic labs
• secure patient sharing permissions for doctors

---

# 🏆 AI for Bharat Hackathon Submission

PragAIti demonstrates how AI and cloud technology can be used to build scalable digital healthcare infrastructure for India.

The platform focuses on **patient empowerment, AI insights, and seamless doctor collaboration.**
