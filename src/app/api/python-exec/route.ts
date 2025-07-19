import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  // Instead of executing, return a formatted output of the CV data
  const output = `
Paul Micky D Costa
Resume | Seeking Internship or Part-Time Role
Title: Software Engineer and Data Scientist

Information:
  Name: PAUL MICKY D COSTA
  Title: Software Engineer and Data Scientist
  Email: paulmickydcosta2023@gmail.com
  Phone: +45 50 37 12 25
  Address: 37 Avenue Berlioz, 93270 Sevran, France
  Website: https://paulmickydcosta.com
  Birthdate: 06/02/1999
  LinkedIn: https://linkedin.com/in/paul-micky-d-costa-b7287a330

Languages:
  English: Proficient
  Danish: Proficient (written)
  Bangla: Native
  French: Beginner
  Hindi: Beginner

Education:
  ESILV - École Supérieure d'Ingénieurs Léonard de Vinci
    MSc in Computer Science & Data Science (2025–2026), France
  International Business Academy (IBA)
    Top-Up Degree in Informatics (2024–Present), Kolding, Denmark
  Independent University, Bangladesh
    BSc in Computer Science Engineering (Major), International Business (Minor) (2018–2023), Dhaka, Bangladesh
  A'Levels: Math, Physics (2016–2017), Dhaka, Bangladesh
  O'Levels: Math, Physics, Chemistry, English, Bangla (2014), Dhaka, Bangladesh

Experience:
  Tech Trioz Solutions (Feb 2023 – May 2023)
    Role: Front-End Developer
    Highlights:
      - Designed UI/UX using Figma
      - Developed apps with Vue3 on Linux
      - Used GitHub for version control
      - Created project docs (Gantt charts, flowcharts, reports)
      - Built 'Shahajjo' online marketplace
      - Developed Employee Tracker for Grameenphone
      - Enhanced UI for Bangladesh Stock Market app

Projects:
  DAX – Job Time Record Tracker for Denmark
    DAX is a comprehensive income tracking application designed for individuals working in Denmark. It helps users manage work hours, track income from multiple jobs, and maintain financial records in compliance with Danish tax laws.

Skills:
  Programming Languages: Python, JavaScript, SQL, PHP, HTML5, CSS
  Frameworks/Libraries: Vue3, Flutter, React, Node Modules, Pygame
  Tools: VS Code, Git, GitHub, Figma, Photoshop, Canva, Adobe Illustrator, Midjourney, ElevenLabs, Leonardo AI, Suno AI
  Databases: MySQL, MongoDB, Supabase
  Environments: Linux, Kali Linux, Linux Mint, Ubuntu, Windows
  Platforms: Jupyter Notebook, Cursor, WordPress, Elementor
  Tech Areas: Full-Stack Development, Web & Mobile App Development, UI/UX Design, Game Development, AI Animation, Machine Learning, Data Visualization, Software Development
  Creative: Writing Prompts, Creative Writing, Graphic Design, Video Editing

Interests:
  - Exploring neighborhoods
  - Playing football with local Danish students
  - Singing and playing guitar
  - Cooking healthy meals
  - Painting with acrylics
  - PC gaming
  - Spending time with family
  - Daily workouts
  - Writing music lyrics with AI

Soft Skills:
  Collaboration, Problem Solving, Adaptability, Attention to Detail, Continuous Learning
`;
  return NextResponse.json({ output });
} 