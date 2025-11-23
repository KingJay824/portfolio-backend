import mongoose from "mongoose";
import dotenv from "dotenv";
import Project from "./models/projects.model.js";
import Service from "./models/services.model.js";

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB for seeding"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

const seedProjects = [
  {
    title: "ICET Student Survey",
    completion: new Date("2025-12-01"),
    description: "A desktop application with a structured form to collect student survey data, including residency, program selection, and courses."
  },
  {
    title: "Flight Booking System",
    completion: new Date("2025-11-01"),
    description: "A flight booking form that lets users enter personal details, passenger count, travel class, and departure date in a user-friendly interface."
  },
  {
    title: "Project Three (Coming Soon)",
    completion: new Date("2026-01-01"),
    description: "An upcoming project I am currently working on. Details will be shared soon!"
  }
];

const seedServices = [
  { title: "Web Development", description: "Building responsive and scalable websites using React, HTML, CSS, and modern frameworks." },
  { title: "Mobile App Development", description: "Developing mobile-friendly applications for Android and iOS platforms." },
  { title: "UI/UX Design", description: "Designing clean, user-friendly interfaces that enhance user experience." }
];

const seedDB = async () => {
  try {
    // Clear existing documents if needed
    await Project.deleteMany();
    await Service.deleteMany();

    // Insert seed data
    await Project.insertMany(seedProjects);
    await Service.insertMany(seedServices);

    console.log("✅ Projects and Services seeded successfully");
    mongoose.connection.close();
  } catch (err) {
    console.error(err);
    mongoose.connection.close();
  }
};

seedDB();
