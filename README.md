# 🚑 AI Emergency Assistant (Rural Focus)

## 📌 Overview

AI Emergency Assistant is a smart, real-time emergency support system designed for rural areas. It helps users quickly understand medical situations, take immediate action, and connect with emergency services — reducing the delay between symptom detection and medical response.

---

## 🎯 Problem Statement

In rural regions:

* Ambulance response is often delayed
* People fail to recognize emergency symptoms
* Lack of awareness about nearby hospitals
* Poor coordination during emergencies

➡️ This delay in response can lead to critical loss of life.

---

## 💡 Solution

Our system provides an AI-powered assistant that:

* Analyzes symptoms in real time
* Determines if the situation is critical
* Triggers emergency actions instantly
* Connects users with nearby healthcare services

---

## ⚙️ Key Features

### 🤖 AI Symptom Analysis

* User inputs symptoms via text or voice
* AI classifies severity (normal vs emergency)
* Suggests next steps

### 🚨 SOS Emergency Button (Core Feature)

One-tap emergency activation:

* 📞 Calls emergency number (112 / 108)
* 📍 Shares live location
* 👨‍👩‍👧 Sends alert to selected contacts
* 🏥 Displays nearby hospitals

### 📍 Location-Based Assistance

* Detects nearest hospitals
* Shows distance and directions
* Integrated with maps

### 📚 Verified Medical Guidance (RAG)

* Provides first aid instructions
* Uses trusted data sources
* Avoids AI hallucination

### 🧠 Agentic AI System

* Symptom Analysis Agent
* Emergency Decision Agent
* Location Agent
* Autonomous decision-making

### 🔗 Agent-to-Agent Communication (A2A)

* Agents communicate internally
* Ensures fast and coordinated response

### 🗣 Natural Language Interaction (GenAI)

* Supports simple Hindi/English
* User-friendly conversational interface
* Optional voice input

---

## 🏗️ System Architecture

User Input
↓
GenAI Chat Interface
↓
Agent System (Decision Making)
↓
RAG Knowledge Retrieval
↓
Emergency Actions (SOS / Hospital / Guidance)

---

## 🛠 Tech Stack

| Layer     | Technology              |
| --------- | ----------------------- |
| Frontend  | React / Web App         |
| Backend   | Python (FastAPI)        |
| AI/GenAI  | OpenAI / Gemini API     |
| RAG       | FAISS / Vector Database |
| Maps      | Google Maps API         |
| Messaging | Fast2SMS / Twilio       |
| Database  | Firebase                |

---

## 🌍 SDG Alignment

**Primary Goal: SDG 3 — Good Health & Well-being**

This project improves:

* Emergency healthcare access
* Response time in critical situations
* Rural healthcare connectivity

---

## 💥 Impact

* Faster emergency response
* Better decision-making during critical situations
* Improved access to healthcare in underserved areas
* Potential to save lives

---

## 🚀 Future Scope

* Real-time ambulance tracking
* Integration with hospitals
* Offline emergency support
* Wearable device integration
* AI accuracy improvement

---

## Prototype Note

This is a Minimum Viable Product (MVP) built using rapid prototyping techniques.
We leveraged existing APIs and models to focus on solving the real-world problem efficiently.

---

## My Contribution

* Implemented voice input feature using speech recognition
* Developed backend database models (User, History)
* Contributed to backend structure and API integration
* Assisted in testing and improving system flow

---

## Team

* Ankush Dubey (Backend, Data & API Contribution)
* Aryan Bais (Core AI & System Architecture)

---

## 📢 Pitch Line

**“We reduce the time between symptom detection and medical response, helping save lives in rural areas.”**
