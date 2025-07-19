"use client";
import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { cvData } from "../../data/cvData";

// Generate Python code from cvData
const generatePythonCode = () => {
  const educationCode = cvData.education.map(edu => {
    if (edu.subjects) {
      return `    def ${edu.institution.toLowerCase().replace(/[^a-z]/g, '')}():
        return {
            "qualification": "${edu.institution}",
            "subjects": [${edu.subjects.map(s => `"${s}"`).join(', ')}],
            "year": "${edu.year}",
            "location": "${edu.location}"
        }`;
    } else {
      return `    def ${edu.institution.toLowerCase().replace(/[^a-z]/g, '')}():
        return {
            "institution": "${edu.institution}",
            "degree": "${edu.degree}",
            "year": "${edu.year}",
            "location": "${edu.location}"
        }`;
    }
  }).join('\n\n');

  const experienceCode = cvData.experience.map(exp => {
    return `    def ${exp.company.toLowerCase().replace(/[^a-z]/g, '')}():
        return {
            "company": "${exp.company}",
            "role": "${exp.role}",
            "period": "${exp.period}",
            "highlights": [
${exp.highlights.map(h => `                "${h}"`).join(',\n')}
            ]
        }`;
  }).join('\n\n');

  const projectsCode = cvData.projects.map(proj => {
    return `    def ${proj.title.toLowerCase().replace(/[^a-z]/g, '')}():
        return {
            "title": "${proj.title}",
            "description": """\n${proj.description}\n"""
        }`;
  }).join('\n\n');

  const skillsCode = Object.entries(cvData.skills).map(([key, value]) => {
    return `    ${key.toUpperCase()} = [\n        ${value.map(v => `"${v}"`).join(',\n        ')}\n    ]`;
  }).join('\n\n');

  const interestsCode = `    HOBBIES = [\n        ${cvData.interests.map(i => `"${i}"`).join(',\n        ')}\n    ]`;

  const softSkillsCode = `    ${cvData.softSkills.map(skill => skill.toUpperCase().replace(/\s+/g, '_')).join(' = True\n    ')} = True`;

  return `/**
 * Copyright (c) ${cvData.copyright}
 * Licensed under the ${cvData.license} license: https://opensource.org/license/mit
 */

"""
${cvData.name}
Resume | Seeking Internship or Part-Time Role
Title: ${cvData.title}
"""

class Information:
    NAME = "${cvData.name}"
    TITLE = "${cvData.title}"
    EMAIL = "${cvData.email}"
    PHONE = "${cvData.phone}"
    ADDRESS = "${cvData.address}"
    WEBSITE = "${cvData.website}"
    BIRTHDATE = "${cvData.birthdate}"
    LINKEDIN = "${cvData.linkedin}"

class Languages:
${cvData.languages.map(lang => `    ${lang.name.toUpperCase()} = "${lang.level}"`).join('\n')}

class Education:
${educationCode}

class Experience:
${experienceCode}

class Projects:
${projectsCode}

class Skills:
${skillsCode}

class Interests:
${interestsCode}

class SoftSkills:
    ${softSkillsCode}
`;
};

const code = generatePythonCode();

export default function CVPage() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-2 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="rounded-2xl shadow-2xl bg-gradient-to-br from-[#181c24]/90 to-[#232526]/90 border border-white/10 p-0 md:p-8 overflow-x-auto relative"
      >
        <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-r from-[#00ffe7]/10 via-[#7f00ff]/10 to-transparent rounded-t-2xl pointer-events-none" />
        <SyntaxHighlighter
          language="python"
          style={vscDarkPlus}
          showLineNumbers
          customStyle={{
            background: "transparent",
            fontSize: "1rem",
            padding: 0,
            margin: 0,
            borderRadius: "1rem",
            boxShadow: "none"
          }}
          lineNumberStyle={{ color: "#00ffe7", opacity: 0.5, marginRight: "16px" }}
          className="!bg-transparent !text-[#b5e0ff] !leading-relaxed !whitespace-pre !break-words !p-4 md:!p-8 !overflow-x-auto scrollbar-thin scrollbar-thumb-[#00ffe7]/30 scrollbar-track-transparent"
        >
          {code}
        </SyntaxHighlighter>
      </motion.div>
    </main>
  );
} 