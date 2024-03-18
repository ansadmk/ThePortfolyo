import dynamic from "next/dynamic";
import React, { useEffect } from "react";
import { activeSkillProgress } from "../utilits";
import { useDispatch, useSelector } from "react-redux";
import { about, skills } from "../../Redux/selectors";
import { FetchData } from "../../Redux/axios";

const ParallaxVideo = dynamic(import("./Parallax"), {
  ssr: false,
});

const Skills = () => {
  const dispatch=useDispatch()

  useEffect(() => {
    dispatch(FetchData())
    
  },[])
  useEffect(() => {
    window.addEventListener("scroll", activeSkillProgress);
  });
  const aboutData=useSelector(about)
  const Skill=useSelector(skills)
  if (Skill.length>0 && aboutData.description) {
    
  

  return (
    <div className="kura_tm_section" id="skills">
      <div className="kura_tm_skills">
        <div className="container">
          <div className="skills_inner">
            <div className="left">
              <div className="kura_tm_main_title light">
                <span>Skills</span>
                <h3>Programming Skills</h3>
              </div>
              <div className="text wow fadeInUp" data-wow-duration=".7s">
                <p>
                 {aboutData.description}
                </p>
              </div>
              <div
                className="dodo_progress wow fadeInUp"
                data-wow-duration=".7s"
                data-wow-delay=".2s"
              >
                
                {Skill.filter((i)=>i.enabled==true).map((item)=>(<div className="progress_inner" data-value={item.percentage}>
                  <span>
                    <span className="label"><img src={item.image.url} width={64} height={64}/>{item.name}</span>
                    <span className="number">{item.percentage}%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" style={{ width: `${item.percentage}%` }}></div>
                    </div>
                  </div>
                </div>))}
              </div>
            </div>
            <div className="right">
              <ParallaxVideo />
              <div
                className="my_image jarallax"
                data-speed="0"
                style={{
                  backgroundImage: "url(https://cdn.pixabay.com/animation/2022/07/31/05/09/05-09-47-978_512.gif)",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );}
  return null
};

export default Skills;
