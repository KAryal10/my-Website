import React from 'react';
import './resume-style.css'

export default function Resume() {
    return ( 
           <div class='resume'>
                    <a class="btn download-link" href="Kritan_Aryal_Resume.pdf" download>Download PDF</a>
            {/* <!-- //  INTRO  // --> */}
            <header>
              <div class="content-wrapper">
                <h1>Kritan Aryal</h1>
                <h2>B.S. Computer Science</h2>
              </div>
            </header>

            <main class="content-wrapper">
              {/* <!-- //  PROFILE  // --> */}
              <section class="resume-section">
                <h2>Profile</h2>
                <p> I am currently a junior majoring in B.S Computer Science. </p>
                
                <a href="index.html">Back to homepage</a>
              </section>

              {/* <!-- //  PROJECTS  // --> */}
              <section class="resume-section">
                <h2>Projects</h2>

                <div class="project-wrapper">
                  <section class="project-item">
                    <img src="images/bg-home-office-bookshelf.jpg" srcset="images/bg-home-office-bookshelf.jpg 2x" alt="Decoded by Christina YouTube video thumbnails" />
                    <h3>Roll the Ball Game</h3>
                    <p>Designed and developed a basic ball-rolling game using Blueprint and C++ in Unreal Engine 5, requiring users to follow a precise set of Instructions to achieve victory. Demonstrated proficiency in programming and user engagement.</p>
                    <a class="btn" href="https://www.youtube.com/@madebychristina" target="_blank">See the game</a>
                  </section>

                  <section class="project-item">
                    <img src="images/bg-home-office-bookshelf.jpg" srcset="images/bg-home-office-bookshelf.jpg 2x" alt="List of course names and thumbnails" />
                    <h3>Personal Website</h3>
                    <p>Designed and developed a personal website using HTML and CSS, featuring comprehensive information about my background, projects, and a resume. Demonstrated proficiency in web design, front-end development, and content presentation.</p>
                    <a class="btn" href="index.html" target="_blank">Go to website</a>
                  </section>

                  <section class="project-item">
                    <img src="images/bg-home-office-bookshelf.jpg" srcset="images/bg-home-office-bookshelf.jpg 2x" alt="The TROY podcast website homepage" />
                    <h3>Geometric Analysis</h3>
                    <p>Developed a program in Java to read and process files containing coordinates of triangles, rectangles, and points. Implemented algorithms to determine the relationships between shapes, checking for containment and overlap. Presented results in tabular format, including the percentage of points inside geometric figures, showcasing strong data analysis abilities</p>
                    <a class="btn" href="https://troypodcast.com/" target="_blank">Check this project</a>
                  </section>
                  
                  
                </div>
              </section>

              {/* <!-- //  WORK EXPERIENCE  // --> */}
              <section class="resume-section">
                {/* <!-- Start content edits below this line.  --> */}
                <h2>Work Experience</h2>
                <p>My complete work history is available on <a href="http://linkedin.com/in/kritan-aryal-45ab55234" target="_blank">LinkedIn</a>.</p>

                <section class="work-item">
                  <div class="work-details">
                    <h3>Manufacturing Engineering Intern</h3>
                    <p>First Solar Inc.</p>
                    <p>August 2023 - Present</p>
                  </div>
                  
                  <div class="work-summary">
                    <ul>
                      <li> Conducted daily throughput analysis utilizing real-time data from SQL databases within JMP statistical software to achieve throughput goals. Regularly presented findings and insights to the team.</li>
                      <li> Designed customized JMP Scripts to facilitate real-time data monitoring, significantly improving critical process tracking.</li>
                      <li> Engineered specialized tools using SolidWorks, enabling metal arms of automated machines to swing inside, granting workers safe access to cleaning procedures. Pioneered a solution ensuring heightened safety standards within the workspace.</li>
                      <li> Implemented a Python-based automated parts ordering system for hot swap cabinets, streamlining the procurement process by seamlessly placing orders and enhancing efficiency and accuracy in part management.</li>
                    </ul>
                    </div>
                </section>
          
                <section class="work-item">
                  <div class="work-details">
                    <h3>Engagement Ambassador</h3>
                    <p>The University of Toledo Foundation</p>
                    <p>September 2021 - May 2022</p>
                  </div>
                  
                  <div class="work-summary">
                    
                    <ul>
                      <li>Initiated effective communication with university alumni to gather insights on their university experiences. Successfully persuaded alumni to actively participate in and contribute to the foundation, fostering a stronger sense of community support</li>
                      <li>Collaborated closely with multiple clients daily, demonstrating strong teamwork and communication skills. Played a pivotal role in conducting a successful fundraising campaign, raising $1.9 million during the University of Toledo’s Giving Day.</li>
                    </ul>
                  </div>
                </section>
              </section>


              {/* <!-- //  EDUCATION   // --> */}
              <section class="resume-section">
                <h2>Education</h2>

                <section class="education-item">
                  <h3>The University of Toledo - Toledo,Ohio</h3>
                  <p>Bachelor of Science: Computer Science and Engineering </p>
                  <a class="btn" href="" target="_blank">Unofficial Transcript</a>
                </section>
              </section>

              {/* <!-- // CERTIFICATIONS //-->    */}
              <section class="resume-section">
                <h2>Certificates</h2>
                <section class="education-item">
                  <h3>Dale Carnefie Certification</h3> <a class="btn" href="https://www.linkedin.com/posts/kritan-aryal-45ab55234_dalecarnegie-professionaldevelopment-communication-activity-7055271121868242944-MBb2?utm_source=share&utm_medium=member_desktop" target="_blank">Show certificate</a>
                </section>
                <section class="education-item">
                  <h3>Six Sigma: Green Belt</h3> <a class="btn" href="https://www.linkedin.com/learning/certificates/0c60399c275503600bad0c0600aafa990e1c50060a2249c3078b1591faa39805?u=88585826" target="_blank">Show certificate</a>
                </section>
                <section class="education-item">
                  <h3>Career Essentials in Software Development</h3> <a class="btn" href="https://www.linkedin.com/learning/certificates/39678b0022ec4f761328d4aa7e3029925a6ad8c0ed6f065f542fc0ad304a972b" target="_blank">Show certificate</a>
                </section>
          
              
              </section>
            </main>
           </div>
        );
    }
    