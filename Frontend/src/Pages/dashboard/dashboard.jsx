import "./dashboard.css";
import image from "./user1.png";
import { useState } from "react";
import axios from "axios";

const Dashboard = (props) => {
    const job_descriptions = [
        "Looking for a data scientist proficient in machine learning, deep learning, and data analysis.",
        "Hiring a software engineer with experience in cloud technologies like AWS.",
        "Seeking a project manager with strong skills in Agile methodologies and team leadership.",
        "Seeking a Data Scientist/ML Engineer with expertise in AI, Python, Flask, MySQL, machine learning, and NLP for innovative projects.",
        "Lead engineering projects, optimize outcomes, and mentor teams. Requires strong project management skills, expertise in structural engineering, and a results-oriented mindset.",
    ];

    const [file, setFile] = useState(null); // Store the selected file
    const [summary, setSummary] = useState("");
    const [error, setError] = useState(null);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        console.log("Selected file:", selectedFile); // Debugging log
        setFile(selectedFile);
    };
    

    const handleFileUpload = async () => {
        console.log("Button clicked"); // Debugging log
        if (!file) {
            setError("Please select a file first.");
            return;
        }
    
        const formData = new FormData();
        formData.append("file", file);
    
        try {
            const endpoint = "http://127.0.0.1:8000/summary/";
            const response = await fetch(endpoint, {
                method: "POST",
                body: formData,
            });
    
            if (response.ok) {
                const data = await response.json();
                console.log("Response data:", data);
                setSummary(`File uploaded: ${data.filename}`);
                setError(null);
            } else {
                console.error("Upload failed with status:", response.status);
                setError("Failed to upload file or generate summary.");
            }
        } catch (err) {
            setError("Failed to upload file or generate summary.");
            console.error(err);
        }
    };
        
    const [content, setContent] = useState(
        <div className="resume-upload">
            <h2>Upload Your Resume</h2>
            <form>
                <label htmlFor="resume">Choose a file:</label>
                <input
                    type="file"
                    id="resume"
                    name="resume"
                    accept=".pdf"
                    required
                    onChange={handleFileChange}
                />
                <br />
                <button
                    type="button"
                    className="upload-btn"
                    onClick={handleFileUpload}
                >
                    Generate Summary
                </button>
            </form>
            {summary && (
                <div className="summary-output">
                    <h3>Summary:</h3>
                    <p>{summary}</p>
                </div>
            )}
            {error && <p className="error-message">{error}</p>}
        </div>
    );

    const Applied = () => {
        setContent(
            <div className="postings">
                <h2>Applications</h2>
            </div>
        );
    };

    const JobsMatched = () => {
        setContent(
            <div className="postings">
                <h2>Explore jobs that match your skillset</h2>
                <div className="postings-grid">
                    {job_descriptions.map((description, index) => (
                        <div className="job-data" key={index}>
                            <h4>Job {index + 1}</h4>
                            <p>{description}</p>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className="dashboard-main">
            <div className="dash-header">
                <h1>JobAI</h1>
                <img
                    src={image}
                    alt="logo"
                    style={{
                        height: 40,
                        width: 40,
                        position: "absolute",
                        left: 1400,
                        top: 25,
                        display: "flex",
                    }}
                />
            </div>
            <div className="main-body">
                <div className="sidebar">
                    <ul className="sidebar-list">
                        <li>
                            <button
                                className="upload-btn"
                                onClick={() =>
                                    setContent(
                                        <div className="resume-upload">
                                            <h2>Upload Your Resume</h2>
                                            <form>
                                                <label htmlFor="resume">Choose a file:</label>
                                                <input
                                                    type="file"
                                                    id="resume"
                                                    name="resume"
                                                    accept=".pdf"
                                                    required
                                                    onChange={handleFileChange}
                                                />
                                                <br />
                                                <button
                                                    type="button"
                                                    className="upload-btn"
                                                    onClick={handleFileUpload}
                                                >
                                                    Generate Summary
                                                </button>
                                            </form>
                                            {summary && (
                                                <div className="summary-output">
                                                    <h3>Summary:</h3>
                                                    <p>{summary}</p>
                                                </div>
                                            )}
                                            {error && <p className="error-message">{error}</p>}
                                        </div>
                                    )
                                }
                            >
                                Upload Resume
                            </button>

                        </li>
                        <li>
                            <h3 onClick={JobsMatched}>Explore Jobs</h3>
                        </li>
                        <li>
                            <h3 onClick={Applied}>Applied jobs</h3>
                        </li>
                    </ul>
                </div>
                {content}
            </div>
        </div>
    );
};

export default Dashboard;
