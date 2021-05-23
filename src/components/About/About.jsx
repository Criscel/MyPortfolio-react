import React from 'react';
import "./About.scss";

const About = () => {
    return (
        <div className="container">
            <h1 className="header">About Me</h1>

            <p className="info">Hi, I am Cel, a  Junior Programmer.  Passionate about developing interfaces and applications.  Hardworking, team oriented and can work under pressure while maintaining a positive attitude.</p>

            {/* <img src="./Assets/images/about.jpg"> */}

                <h3>Skills and Qualification</h3>

                <div className="wrap">
                    <p className="selection">Frontend</p>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Bootstrap</li>
                        <li>Javascript</li>
                        <li>Web API</li>
                        <li>Handlebar</li>
                        <li>Local Storage</li>
                        <li>JQuery</li>
                        <li>AJAX</li>
                    </ul>


                    <p className="selection">Backend</p>
                    <ul>
                        <li>Nodes.js</li>
                        <li>Object-Oriented Programming</li>
                        <li>Express.js</li>
                        <li>ORM</li>
                    </ul>

                    <p className="selection">Database</p>
                    <ul>
                        <li>MySQL</li>
                        <li>Sequelize</li>
                        <li>Mongo</li>
                        <li>Mongoose </li>
                        <li>Oracle 10g</li>
                    </ul>
                    <p className="selection">Operating System</p>
                    <ul>
                        <li>Windows</li>
                        <li>MAC</li>
                        <li>Unix</li>
                    </ul>
                    <p className="selection">Other Skills</p>
                    <ul>
                        <li>Oracle PeopleSoft</li>
                        <li>HP QC</li>
                        <li>Crystal Reports</li>
                        <li>Microsoft Office</li>
                        <li>Adobo Photoshop</li>
                        <li>Cisco Routers and Switches</li>
                        <li>Hospital Information Systems (TrakCare, SimDay, Marvin, Clinic-to-cloud)</li>
                    </ul>
                </div>

                <h3>Education</h3>
                <div className="education">
                    <ul>
                        <li>Full Stack Developer Bootcamp</li>
                        <p>University of Sydney</p>

                        <li>Bachelor of Business Administration</li>
                        <p>Australian Institute of Higher Education</p>

                        <li>Bachelor of Information Technology</li>
                        <p>Mapua Institute of Technology - Philippines</p>
                    </ul>
                </div>

 </div>
    )
}

export default About
