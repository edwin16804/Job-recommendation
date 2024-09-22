import "./dashboard.css";
import image from "./user1.png";
import {useState} from 'react';

const Dashboard = (props) => {
    const jobDataDivs = Array(10).fill().map((_, index) => (
        <div className="job-data" key={index}>
            <h6>Job {index + 1}</h6>
        </div>
    ));
    const[content,setContent]=useState(
        <div className="postings">
                    <h2>Explore jobs that matches your skillset,</h2>
                    <div className="postings-grid">
                        {jobDataDivs}
                    </div> 
        </div>
    );

    const Applied=()=>{
        setContent(
            <div className="postings">
                    <h2>Applications</h2>
        </div>
        );
    }
    const JobsMatched=()=>{
        setContent(
            <div className="postings">
                    <h2>Explore jobs that matches your skillset,</h2>
                    <div className="postings-grid">
                        {jobDataDivs}
                    </div> 
        </div>

        );
    }

    const FindTalents=()=>{
        setContent(
            <div className="postings">
                    <h2>Search for candidates</h2>
        </div>

        );
    }
    const PostJob=()=>{
        setContent(
            <div className="postings">
                    <h2>Post a job opening,</h2>
        </div>

        );
    }
    return (
        <div className="dashboard-main">
            <div className="dash-header">
                <h1 onClick={JobsMatched}>JobAI</h1>
                <img src={image} alt="logo" style={{height:40, width:40,position:'absolute',left:1400,top:25,display:'flex'}}/>
            </div>
            <div className="main-body">
                <div className="sidebar">
                    <ul className="sidebar-list">
                        <li><button className="upload-btn">Upload resume</button></li>
                        <li><h3 onClick={Applied}>Applied jobs</h3></li>
                        <li><h3 onClick={FindTalents}>Find talents</h3></li>
                        <li><h3 onClick={PostJob}>Post Jobs</h3></li>
                    </ul>
                </div>
                {content}
                
            </div>

        </div>
    )
}

export default Dashboard;