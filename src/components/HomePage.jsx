import React from 'react';
import './HomePage.css'
import {useState} from 'react'

const HomePage = () => {
  const roadmapData = [
    {
      type: 'section',
      title: 'Understand The SDE Role',
      items: [
        { text: 'About SDE', completed: true, first:true },
        { text: 'Skills Required For SDE', completed: true },
      ],
    },
    {
      type: 'section',
      title: 'Learn Basics',
      items: [
        { text: 'Internet' , first:true },
        { text: 'How Does The Internet Work?', active: true },
        { text: 'What Is HTTP?' },
        { text: 'What Is Domain Name?' },
        { text: 'DNS & How It Works' },
      ],
    },
    {
      type: 'section',
      title: 'Learn Hosting Services To do Hosting',
      items: [
        { text: 'Repo Hosting Services', locked: true , first:true },
        { text: 'GitHub' },
        { text: 'GitLab' },
        { text: 'BitBucket' },
      ],
      buttonText: 'Take a Quick Test',
    },
    {
      type: 'section',
      title: "It's Recommended To Learn Any Of The Two API Structures",
      items: [
        { text: 'APIs', locked: true , first:true },
        { text: 'RestL' },
        { text: 'JSON APIs' },
        { text: 'SOAP' },
        { text: 'GraphQL' },
      ],
      buttonText: 'Take a Quick Test',
    },
    {
      type: 'section',
      title: 'After Learning APIs Learn How To Test Your Code',
      items: [
        { text: 'APIs', locked: true , first:true  },
        { text: 'RestL' },
        { text: 'JSON APIs' },
        { text: 'SOAP' },
        { text: 'GraphQL' },
      ],
    },
  ];

  const resources = [
    { type: 'Rubrik.ai', label: 'Introduction to internet', color: 'blue' },
    { type: 'Article', label: 'How does the Internet Work?', color: 'purple' },
    { type: 'Article', label: 'How does the Internet Work?', color: 'purple' },
    { type: 'Video', label: 'How does the Internet Work?', color: 'purple' },
    { type: 'Article', label: 'The Internet explained', color: 'red' },
    { type: 'Video', label: 'How does the Internet Work?', color: 'red' },
  ];
  const [isOn, setIsOn] = useState(false);


  return (
    <div className='whole flex'>
      <div className="Navbar flex-col">
        <div className="first flex-col gap-2 items-center ">
          <img src="logo.svg" alt="Logo" className="logo"/>
          <img src="six.svg" alt="five" className="icons"/>
          <img src="five.svg" alt="one" className="icons"/>
          <img src="four.svg" alt="two" className='background-1 icons'/>
          <img src="three.svg" alt="three" className="icons"/>
          <img src="two.svg" alt="four" className="icons"/>
          <img src="six.svg" alt="six" className="icons"/>
        </div> 
        <div className="second flex-col items-center gap-2">
          <img src="ring.svg" alt="ring"className="icons" />
          <img src="profile.svg" alt="profile"className="icons circle" />
        </div>
      </div>

      <div className="rest-page">
        <div className="top">
          <button className="clr-1">Role Based</button>
          <button className="clr-2">Skill Based</button>
        </div>

        <div className="bottom">
          <div className="left">
            <div className="head">
              Software Development Engineer 
            </div>

            <div className="list-part">
  <div className="list-container">
    <div className="vertical-line"></div> 

    {roadmapData.map((section, sectionIndex) => (
      <div key={sectionIndex} className="section">

        <span className="section-title clr-2">{section.title}</span>

        <div className="section-items">
          {section.items.map((item, itemIndex) => (
            <div
              key={itemIndex}
              className={`item-box
                ${item.completed ? 'item-completed' : ''}
                ${item.active ? 'item-active' : ''}
                ${item.locked ? 'item-locked' : ''}
                ${
                  !item.completed && !item.active && !item.locked
                    ? 'item-default'
                    : ''
                }`}
            >
                {/* {item.first && (
                         <div className="horizontal-connector"></div>
                       )} */}
              <span className={`item-text ${item.active ? 'text-white' : ''}`}>
                {item.text}
              </span>

              {item.completed && 
              <img src="tick-circle.svg" alt=""/>
              }

              {item.locked && 
              <img src="lock.svg" alt=""/>
              }
            </div>
          ))}

          {section.buttonText && (
            <button className="section-button">{section.buttonText}</button>
          )}
        </div>
      </div>
    ))}
    <button class="submit-project-btn">Submit A Project</button>
  </div>
</div>


          </div>

          <div className="right">
            
             <div className="right-top flex gap-2">
                   <div className="section-1 flex">
                   <div className="date flex-col gap-half">
                  <div className="up flex justify-center">
                      <span className='clr-2'>JAN 2022</span>
                  </div>
                  <hr className='clr-2'></hr>
                  <div className="middle flex clr-2 gap-half">
                    <img src="left.svg" alt="" />
                    <span>MON</span>
                    <span>TUE</span>
                    <span>WED</span>
                    <span>THU</span>
                    <span>FRI</span>
                    <span>SAT</span>
                    <span>SUN</span>
                    <img src="right-.svg" alt="" />
                  </div>
              
                  <div className="down flex gap-half items-center justify-center">
                    <img src="streak.svg" alt="" />
                    <img src="streak.svg" alt="" />
                    <span>😩</span>
                    <span>😩</span>
                    <span>😩</span>
                    <img src="double-circle.svg" alt="" />
                    <img src="double-circle.svg" alt="" />
                  </div>

                 </div>
                 <hr></hr>
                 <div className="streak flex items-center justify-between">
                      <div className="c-1 clr-3 clr-4">
                        <span>Streak</span>
                        <img src="fire.svg" alt="" />
                        <span>0</span>
                      </div>
                      <div className="c-1 clr-3 clr-4">
                        <span>Top</span>
                        <img src="fire.svg" alt="" />
                        <span>3</span>
                      </div>
                      <div className="c-1 clr-3 clr-4">
                        <span>College Top</span>
                        <img src="fire.svg" alt="" />
                        <span>25</span>
                      </div>
                 </div>

                 <hr></hr>

                 <div className="timer flex-col">
                      <img src="timer.svg" alt="" />
                      <div className='flex-col items-end'>
                      <span className='clr-1'>15 mins</span>
                      <span className='clr-2'>Daily Target</span>
                      </div>
                 </div> 
                   </div>

                   <div className="section-2 flex-col ">
                    <img src="stars.svg" alt=""></img>
                   <span>Congratulations! You've improved 12% in coding</span>
                   </div>
             </div>

             <div className="right-bottom">
                  <div className="bottom-1 clr-2 flex items-center space-between">
                       <span className='clr-1'>Learn</span>
                       <span>Test My Knowledge</span>
                       <span>Ask AI</span>
                       <span>Notes</span>
                       <div className='flex gap-half'>
                        <img src="import.svg" alt="" />
                        <img src="archive-tick.svg" alt="" />
                        <span>Study Mode</span>
                        <div className="switch-static">
                   <div className="circle-static"></div>
                          </div>
                       </div>
                       <div className='mark'>
                        <img src="tick.svg" alt="" className='icon'/>
                       <span >Mark As Done</span>
                       </div>
                
                  </div>
                  <hr />
                  <div className="bottom-2">
                       <span className='clr-5'>Internet</span>
                       <p>The internet is a global network of interconnected computers that communicate using standardized protocols, primarily TCP/IP. When you request a webpage, your device sends a data packet through your internet service provider (ISP) to a DNS server, which translates the website's domain name into an IP address. The packet is then routed across various networks (using routers and switches) to the destination server, which processes the request and sends back the response. This back-and-forth exchange enables the transfer of data like web pages, emails, and files, making the internet a dynamic, decentralized system for global communication.</p> 
                       <span className='clr-5'>Basic Concepts And Terminology</span>
                       <div className="space">
                       <ul class="term-list">
                       <li><span className="term clr-5">Packet:</span> <span className="definition clr-5">A small unit of data that is transmitted over the internet.</span></li>
                       <li><span class="term clr-5">Router:</span> <span className="definition clr-5">A device that directs packets of data between different networks.</span></li>
                       <li><span class="term clr-5">IP Address:</span> <span className="definition clr-5">A unique identifier assigned to each device on a network, used to route data to the correct destination.</span></li>
                       <li><span class="term clr-5">Domain Name:</span> <span className="definition clr-5">A human-readable name that is used to identify a website, such as google.com.</span></li>
                       <li><span class="term clr-5">DNS:</span> <span className="definition clr-5">The Domain Name System is responsible for translating domain names into IP addresses.</span></li>
                       <li><span class="term clr-5">HTTP:</span> <span className="definition clr-5">The Hypertext Transfer Protocol is used to transfer data between a client.</span></li>
                     </ul>
                    </div>

                  </div>
                  <div className="bottom-3 flex-col gap-2">
                     <div className="three-top flex items-center gap-1">
                      <img src="star.svg" alt="" />
                      <span>Free Resources</span>
                     </div>
                     <div className="three-down resources-grid items-center">
                     <div className="resources-column">
          {resources.slice(0, 3).map((resource, index) => (
            <div key={index} className="resource-item flex items-center">
              <span className={`resource-type-tag tag-${resource.color}`} underline-text>
                {resource.type}
              </span>
              <a href="#" className="resource-label">
                {resource.label}
              </a>
            </div>
          ))}
        </div>
                        
         <div className="grid-separator"></div> 
        <div className="resources-column">
          {resources.slice(3, 6).map((resource, index) => (
            <div key={index} className="resource-item">
              <span className={`resource-type-tag tag-${resource.color}`}>
                {resource.type}
              </span>
              <a href="#" className="resource-label">
                {resource.label}
              </a>
            </div>
          ))}
        </div>

                     </div>
                  </div>
             </div>



          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
