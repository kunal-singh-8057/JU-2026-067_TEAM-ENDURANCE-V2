# 🌱 Orgik — AI-Powered Smart Farming Assistant

Orgik is an AI-powered smart farming assistant designed to help farmers monitor their fields, detect agricultural threats, and make better farming decisions using Artificial Intelligence, IoT, robotics, and data analytics.

The system combines a field-deployable rover, real-time AI-based insect detection, a farmer-facing web platform, and data visualization to provide actionable insights for modern agriculture.

---

## 🚜 What is Orgik?

Orgik is designed as an intelligent agricultural ecosystem that can:

- 🐛 Detect insects and pests using AI and computer vision
- 🌱 Monitor crop and field conditions
- 💧 Identify irrigation-related requirements
- 🧪 Analyze soil and nutrient-related conditions
- 🌦️ Monitor potential agricultural threats such as droughts and floods
- 📡 Collect field data using a mobile rover
- 📊 Visualize collected data through dashboards
- 🛒 Provide crop, market, and selling-related information
- 🤖 Allow farmers to interact with and control the rover through a web platform

---

## 🎯 Problem

Farmers often face difficulties in continuously monitoring large agricultural fields and identifying crop threats at an early stage.

Manual monitoring can be:

- Time-consuming
- Labor-intensive
- Difficult across large areas
- Dependent on expert knowledge
- Slow in identifying pests and crop-related problems

Orgik aims to provide an intelligent and accessible system that assists farmers in monitoring their fields and responding to agricultural problems earlier.

---

## 💡 Solution

Orgik combines multiple technologies into one integrated platform.

### 🤖 Smart Agricultural Rover

A field-deployable rover can move through agricultural areas and collect information from the field.

The rover is designed to support:

- Field monitoring
- Insect detection
- Environmental data collection
- Crop observation
- Future integration of additional agricultural sensors

### 🐛 AI Insect Detection

Orgik uses computer vision and YOLO-based object detection to identify insects and agricultural pests from camera input.

The AI module can process camera frames and identify supported insect classes in real time.

### 🌐 Farmer Web Platform

The web application provides farmers with an interface to:

- Monitor rover information
- Connect with the rover
- View collected data
- Access agricultural insights
- Explore crop recommendations
- Access market and selling information

### 📊 Data Analytics

Orgik can integrate collected agricultural data with dashboards and reporting systems to provide useful visual insights.

---

## 🏗️ Project Architecture

```text
                    ┌──────────────────────┐
                    │       Farmer         │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │    Orgik Web App     │
                    │  React + Vite + UI   │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │    Backend / API     │
                    │   Node.js + Express  │
                    └───────┬────────┬─────┘
                            │        │
                  ┌─────────┘        └─────────┐
                  ▼                            ▼
        ┌──────────────────┐          ┌──────────────────┐
        │   AI Detection   │          │   Rover System   │
        │ YOLO + Computer  │          │ Camera + Sensors │
        │     Vision       │          │                  │
        └──────────────────┘          └──────────────────┘
                            │
                            ▼
                  ┌──────────────────┐
                  │ Data Analytics   │
                  │    Power BI      │
                  └──────────────────┘
```

---

## 🛠️ Technology Stack

### Frontend

- React
- Vite
- Chakra UI
- JavaScript

### Backend

- Node.js
- Express.js
- REST APIs
- JWT Authentication

### Artificial Intelligence

- Python
- YOLO
- OpenCV
- Computer Vision
- Machine Learning

### Rover

- Robotics hardware
- Camera
- Agricultural sensors
- IoT technologies

### Data Analytics

- Microsoft Power BI

---

## 📁 Project Structure

```text
Orgik/
│
├── frontend/
│   └── React + Vite application
│
├── backend/
│   └── Node.js + Express API
│
├── ai/
│   ├── models/
│   └── detection/
│
├── rover/
│   └── Rover hardware and control system
│
├── powerbi/
│   └── Data analytics and dashboards
│
├── README.md
└── .gitignore
```

---

## 🚀 Key Features

| Feature | Description |
|---|---|
| 🐛 AI Pest Detection | Detects supported insects using computer vision |
| 🤖 Smart Rover | Enables field-level monitoring |
| 📷 Real-Time Camera | Captures live field information |
| 🌱 Crop Monitoring | Helps identify agricultural conditions |
| 💧 Irrigation Insights | Supports irrigation-related monitoring |
| 🧪 Soil Monitoring | Designed for soil and nutrient analysis |
| 🌦️ Threat Detection | Supports monitoring of environmental threats |
| 📊 Analytics | Provides data visualization and reporting |
| 🛒 Market Information | Helps farmers explore crop selling and market information |
| 🌾 Crop Recommendations | Helps identify potentially suitable crops |
| 🌐 Web Platform | Provides a centralized farmer interface |

---

## 🔮 Future Scope

Orgik can be expanded with:

- Advanced crop disease detection
- More insect and pest classes
- Soil nutrient sensors
- Automated irrigation control
- GPS-based field mapping
- Autonomous rover navigation
- Weather API integration
- Satellite imagery
- Crop yield prediction
- Disease severity estimation
- Multilingual farmer interface
- Voice-based agricultural assistant
- Mobile application
- Automated farm alerts

---

## 🌱 Vision

> **Making intelligent farming more accessible, automated, and data-driven.**

Orgik aims to bridge the gap between modern technology and traditional agriculture by bringing AI, robotics, computer vision, and data analytics together into a single smart farming ecosystem.
