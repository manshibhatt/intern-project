import React from "react";
import "./HomePage.css";
import { useState } from "react";

import navbarStyles from "../Utilities/Navbar.module.css";
import indexStyles from "../Utilities/Index.module.css";
import restPageStyles from "../Utilities/RestPage.module.css";
import leftStyles from "../Utilities/Left.module.css";
import topStyles from "../Utilities/Top.module.css";
import contentStyles from "../Utilities/Content.module.css";
import bottomStyles from "../Utilities/Bottom.module.css"

const HomePage = () => {
  const roadmapData = [
    {
      type: "section",
      title: "Understand The SDE Role",
      items: [
        { text: "About SDE", completed: true, first: true },
        { text: "Skills Required For SDE", completed: true },
      ],
    },
    {
      type: "section",
      title: "Learn Basics",
      items: [
        { text: "Internet", first: true },
        { text: "How Does The Internet Work?", active: true },
        { text: "What Is HTTP?" },
        { text: "What Is Domain Name?" },
        { text: "DNS & How It Works" },
      ],
    },
    {
      type: "section",
      title: "Learn Hosting Services To do Hosting",
      items: [
        { text: "Repo Hosting Services", locked: true, first: true },
        { text: "GitHub" },
        { text: "GitLab" },
        { text: "BitBucket" },
      ],
      buttonText: "Take a Quick Test",
    },
    {
      type: "section",
      title: "It's Recommended To Learn Any Of The Two API Structures",
      items: [
        { text: "APIs", locked: true, first: true },
        { text: "RestL" },
        { text: "JSON APIs" },
        { text: "SOAP" },
        { text: "GraphQL" },
      ],
      buttonText: "Take a Quick Test",
    },
    {
      type: "section",
      title: "After Learning APIs Learn How To Test Your Code",
      items: [
        { text: "APIs", locked: true, first: true },
        { text: "RestL" },
        { text: "JSON APIs" },
        { text: "SOAP" },
        { text: "GraphQL" },
      ],
    },
  ];

  const resources = [
    { type: "Rubrik.ai", label: "Introduction to internet", color: "blue" },
    { type: "Article", label: "How does the Internet Work?", color: "purple" },
    { type: "Article", label: "How does the Internet Work?", color: "purple" },
    { type: "Video", label: "How does the Internet Work?", color: "purple" },
    { type: "Article", label: "The Internet explained", color: "red" },
    { type: "Video", label: "How does the Internet Work?", color: "red" },
  ];
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="whole ">
      <div className={`${navbarStyles.Navbar} ${indexStyles["flex-col"]}`}>
        <div className={`${indexStyles["flex-col"]} ${indexStyles["gap-2"]} ${indexStyles["items-center"]}`}>
          <img src="logo.svg" alt="Logo" className="logo" />
          <img src="six.svg" alt="five" className={`${navbarStyles.icons}`} />
          <img src="five.svg" alt="one" className={`${navbarStyles.icons}`} />
          <div className={`${navbarStyles["background-1"]} `}>
          <img
            src="four.svg"
            alt="two"
            className={`${navbarStyles.icons}`}
          />
          <span>Career</span>
          </div>
          <img
            src="three.svg"
            alt="three"
            className={`${navbarStyles.icons}`}
          />
          <img src="two.svg" alt="four" className={`${navbarStyles.icons}`} />
          <img src="six.svg" alt="six" className={`${navbarStyles.icons}`} />
        </div>
        <div
          // className={`${navbarStyles.second} ${indexStyles["flex-col"]} ${indexStyles["items-center"]} ${indexStyles["gap-2"]}`}
          className={`${indexStyles["flex-col"]} ${indexStyles["gap-2"]} ${indexStyles["items-center"]} ${navbarStyles.second}`}
        >
          <img src="ring.svg" alt="ring" className={`${navbarStyles.icons}`} />
          <img
            src="profile.svg"
            alt="profile"
            className={`${navbarStyles.icons} ${indexStyles.circle}`}
          />
        </div>
      </div>

      <div className="rest-page">
      {/* <div className={`${restPageStyles.separator}`}> */}
        <div className={`${restPageStyles.top}`}>
          <button className={`${indexStyles["clr-1"]}`}>Role Based</button>
          <button className={`${indexStyles["clr-2"]} ${restPageStyles.role}`}>Skill Based</button>
          {/* <hr className={`${restPageStyles.hr}`}></hr> */}
          </div>
        {/* </div> */}

        <div className={`${indexStyles.flex} ${indexStyles["gap-1"]}`}>
          <div className={`${indexStyles["flex-col"]}`}>
            <div className={`${leftStyles.head}`}> 
              Software Development Engineer
            </div>

            <div className={`${leftStyles["list-container"]}`}>
              <div className={`${leftStyles["list-part"]}`}>
                <div className={`${leftStyles["vertical-line"]}`}></div>
                {/* <div className="vertical-line progress-line"></div> */}

                <div className="all-sections">
                  {roadmapData.map((section, sectionIndex) => (
                    <div key={sectionIndex} className={`${leftStyles.section}`}>
                      <span className={`${leftStyles["section-title"]}`}>
                        {section.title}
                      </span>

                      <div className={`${leftStyles["section-items"]}`}>
                        {section.items.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className={`${leftStyles["item-box"]} 
                          ${item.completed ? leftStyles["item-completed"] : ""} 
                          ${item.active ? leftStyles["item-active"] : ""} 
                          ${item.locked ? leftStyles["item-locked"] : ""} 
                          ${
                            !item.completed && !item.active && !item.locked
                              ? leftStyles["item-default"]
                              : ""
                          } 
                          ${
                            item.first
                              ? leftStyles["first-horizontal-line"]
                              : ""
                          }
                        `}
                          >
                            {item.first && <hr />}
                            <span
                              className={`${leftStyles["item-text"]} ${
                                item.active ? leftStyles["text-white"] : ""
                              }`}
                            >
                              {item.text}
                            </span>

                            {item.completed && (
                              <img src="tick-circle.svg" alt="" className={`${leftStyles.iconss}`}/>
                            )}

                            {item.locked && <img src="lock.svg" alt="" className={`${leftStyles.iconss}`}/>} 
                          </div>
                        ))}

                        {section.buttonText && (
                          <button className={`${leftStyles["section-button"]}`}>
                            {section.buttonText}
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                  <button className={`${leftStyles["submit-project-btn"]}`}>
                    Submit A Project
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="right">
            <div className={`${topStyles["right-top"]} ${indexStyles.flex}`}>
              <div className={`${topStyles["section-1"]}`}>
                <div
                  className={`${topStyles["date"]} ${indexStyles["flex-col"]} ${indexStyles["gap-half"]}`}
                >
                  <div
                    className={`${topStyles["up"]} ${indexStyles.flex} ${indexStyles["justify-center"]}`}
                  >
                    <span className={indexStyles["clr-2"]}>JAN 2022</span>
                  </div>
                  <hr className={indexStyles["clr-2"]} />
                  <div className={`${topStyles["middle"]}`}>
                    <img src="left.svg" alt="" />
                    <div className={topStyles["week-row"]}>
                      <span>MON</span>
                      <span>TUE</span>
                      <span>WED</span>
                      <span>THU</span>
                      <span>FRI</span>
                      <span>SAT</span>
                      <span>SUN</span>
                    </div>
                    <img src="right-.svg" alt="" />
                  </div>

                  <div
                    className={`${topStyles["down"]} ${topStyles["week-row"]}`}
                  >
                    <div className={`${topStyles["completed"]}`}>
                      <img src="streak.svg" alt="" />
                      <img src="streak.svg" alt="" />
                    </div> 
                    <span>😩</span>
                    <span>😩</span>
                    <span>😩</span>
                    <img
                      src="double-circle.svg"
                      alt=""
                      style={{ width: "27px" }}
                    />
                    <img
                      src="double-circle.svg"
                      alt=""
                      style={{ width: "27px" }}
                    />
                  </div>
                </div>

                <hr />

                <div
                  className={`${topStyles["streak"]} flex items-center justify-between`}
                > 
                  <div
                    className={`${topStyles["c-1"]} ${indexStyles["clr-3"]} ${indexStyles["clr-4"]} ${indexStyles["items-center"]} ${indexStyles["justify-between"]}`}
                  >
                    <div>
                      <span>Streak </span>
                      <img src="fire.svg" alt="" />
                    </div>
                    <span>0</span>
                  </div>

                  <div
                    className={`${topStyles["c-1"]} ${indexStyles["clr-3"]} ${indexStyles["clr-4"]} items-center justify-between`}
                  >
                    <div>
                      <span>Top </span>
                      <img src="fire.svg" alt="" />
                    </div>
                    <span>3</span>
                  </div>

                  <div
                    className={`${topStyles["c-1"]} ${indexStyles["clr-3"]} ${indexStyles["clr-4"]} items-center justify-between`}
                  >
                    <div>
                      <span>College Top </span>
                      <img src="fire.svg" alt="" />
                    </div>
                    <span>25</span>
                  </div>
                </div>

                <hr />

                <div className={`${topStyles["timer"]} ${indexStyles["flex-col"]}`}>
                  <img src="timer.svg" alt="" />
                  <div className={`${topStyles.time} ${indexStyles["flex-col"]} ${indexStyles["items-end"]} ${indexStyles["gap-quart"]}`}>
                    <span className={indexStyles["clr-1"]}>15 mins</span>
                    <span className={indexStyles["clr-2"]}>Daily Target</span>
                  </div>
                </div>
              </div>

              <div className={`${topStyles["section-2"]} ${indexStyles["flex-col"]}`}>
                <img src="stars.svg" alt="" />
                <span>Congratulations! You've improved 12% in coding</span>
              </div>
            </div>

            <div className={`${restPageStyles["right-bottom"]}`}>
              <div
                className={`${contentStyles["bottom-1"]} ${indexStyles["clr-2"]} ${indexStyles["flex"]} ${indexStyles["items-center"]} ${indexStyles["space-between"]}`}
              >
                <span className={indexStyles["clr-1"]}>Learn</span>
                <span>Test My Knowledge</span>
                <span>Ask AI</span>
                <span>Notes</span>

                <div
                  className={`${indexStyles["flex"]} ${indexStyles["gap-half"]}`}
                >
                  <img src="import.svg" alt="" />
                  <img src="archive-tick.svg" alt="" />
                  <span>Study Mode</span>
                  <div className={contentStyles["switch-static"]}>
                    <div className={contentStyles["circle-static"]}></div>
                  </div>
                </div>

                <div className={contentStyles["mark"]}>
                  <img
                    src="tick.svg"
                    alt=""
                    className={contentStyles["icon"]}
                  />
                  <span>Mark As Done</span>
                </div>
              </div>

              <hr />

              <div className={contentStyles["bottom-2"]}>
                <span className={indexStyles["clr-5"]}>Internet</span>
                <p>
                  The internet is a global network of interconnected computers
                  that communicate using standardized protocols, primarily
                  TCP/IP. When you request a webpage, your device sends a data
                  packet through your internet service provider (ISP) to a DNS
                  server, which translates the website's domain name into an IP
                  address. The packet is then routed across various networks
                  (using routers and switches) to the destination server, which
                  processes the request and sends back the response. This
                  back-and-forth exchange enables the transfer of data like web
                  pages, emails, and files, making the internet a dynamic,
                  decentralized system for global communication.
                </p>

                <span className={indexStyles["clr-5"]}>
                  Basic Concepts And Terminology
                </span>
                <div className={contentStyles["space"]}>
                  <ul className={contentStyles["term-list"]}>
                    <li>
                      <span
                        className={`${contentStyles["term"]} ${indexStyles["clr-5"]}`}
                      >
                        Packet:
                      </span>{" "}
                      <span
                        className={`${contentStyles["definition"]} ${indexStyles["clr-5"]}`}
                      >
                        A small unit of data that is transmitted over the
                        internet.
                      </span>
                    </li>
                    <li>
                      <span
                        className={`${contentStyles["term"]} ${indexStyles["clr-5"]}`}
                      >
                        Router:
                      </span>{" "}
                      <span
                        className={`${contentStyles["definition"]} ${indexStyles["clr-5"]}`}
                      >
                        A device that directs packets of data between different
                        networks.
                      </span>
                    </li>
                    <li>
                      <span
                        className={`${contentStyles["term"]} ${indexStyles["clr-5"]}`}
                      >
                        IP Address:
                      </span>{" "}
                      <span
                        className={`${contentStyles["definition"]} ${indexStyles["clr-5"]}`}
                      >
                        A unique identifier assigned to each device on a
                        network, used to route data to the correct destination.
                      </span>
                    </li>
                    <li>
                      <span
                        className={`${contentStyles["term"]} ${indexStyles["clr-5"]}`}
                      >
                        Domain Name:
                      </span>{" "}
                      <span
                        className={`${contentStyles["definition"]} ${indexStyles["clr-5"]}`}
                      >
                        A human-readable name that is used to identify a
                        website, such as google.com.
                      </span>
                    </li>
                    <li>
                      <span
                        className={`${contentStyles["term"]} ${indexStyles["clr-5"]}`}
                      >
                        DNS:
                      </span>{" "}
                      <span
                        className={`${contentStyles["definition"]} ${indexStyles["clr-5"]}`}
                      >
                        The Domain Name System is responsible for translating
                        domain names into IP addresses.
                      </span>
                    </li>
                    <li>
                      <span
                        className={`${contentStyles["term"]} ${indexStyles["clr-5"]}`}
                      >
                        HTTP:
                      </span>{" "}
                      <span
                        className={`${contentStyles["definition"]} ${indexStyles["clr-5"]}`}
                      >
                        The Hypertext Transfer Protocol is used to transfer data
                        between a client.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

          <div className={`${bottomStyles["bottom-3"]} ${indexStyles["flex-col"]} `}>
  <div className={`${bottomStyles["three-top"]} ${indexStyles["flex"]} ${indexStyles["items-center"]} ${indexStyles["gap-1"]}`}>
    <img src="star.svg" alt="" />
    <span>Free Resources</span>
  </div>

  <div className={`${bottomStyles["three-down"]} ${indexStyles["items-center"]} ${indexStyles["flex"]}`}>
    <div className={bottomStyles["resources-column"]}>
      {resources.slice(0, 3).map((resource, index) => (
        <div key={index} className={`${indexStyles["flex"]} ${indexStyles["items-center"]}`}>
          <span className={`${bottomStyles["resource-type-tag"]} ${bottomStyles[`tag-${resource.color}`]}`} underline-text>
            {resource.type}
          </span>
          <a href="#" className={bottomStyles["resource-label"]}> 
            {resource.label}
          </a>
        </div>
      ))}
    </div>

    <div className={bottomStyles["grid-separator"]}></div>

    <div className={bottomStyles["resources-column"]}>
      {resources.slice(3, 6).map((resource, index) => (
        <div key={index} className={bottomStyles["resource-item"]}>
          <span className={`${bottomStyles["resource-type-tag"]} ${bottomStyles[`tag-${resource.color}`]}`}>
            {resource.type}
          </span>
          <a href="#" className={bottomStyles["resource-label"]}>
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
