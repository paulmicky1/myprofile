"use client";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState } from "react";
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

export default function PDFResumePage() {
  const [output, setOutput] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

  const handleRunCode = async () => {
    setLoading(true);
    setError("");
    setOutput("");
    try {
      const res = await fetch("/api/python-exec", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });
      const data = await res.json();
      setOutput(data.output);
    } catch (_err) {
      setError("Failed to run code. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="max-w-5xl mx-auto py-12 px-2 md:px-8 flex flex-col items-center gap-6">
      {/* VSCode-style header bar */}
      <div className="w-full flex items-center gap-2 bg-[#232526] rounded-t-xl px-4 py-2 border-b border-white/10">
        <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
        <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block" />
        <span className="w-3 h-3 rounded-full bg-green-500 inline-block" />
        <span className="ml-4 text-xs text-gray-300 font-mono">PaulMickyDCosta_CV.py</span>
      </div>
      <div className="w-full rounded-b-xl overflow-hidden shadow-2xl border border-white/10 bg-[#181c24]">
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
      </div>
      <button
        onClick={handleRunCode}
        disabled={loading}
        className="mt-4 px-6 py-2 rounded-lg bg-green-600 text-white font-semibold shadow hover:bg-green-700 transition focus:outline-none focus:ring-2 focus:ring-green-400 disabled:opacity-60"
      >
        {loading ? "Running..." : "Run Code"}
      </button>
      {(output || error) && (
        <div className="w-full max-w-3xl bg-black/80 text-green-300 font-mono rounded-lg p-4 mt-2 border border-green-700 shadow-inner whitespace-pre-wrap">
          {error ? error : output}
        </div>
      )}
    </main>
  );
} 