'use client'
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { timeline } from "../../Redux/selectors";
import moment from "moment";
import { TimelineModal } from "./ContentModal";

const Timeline = () => {
  const timelines=useSelector(timeline)
  const [open, setOpen] = useState(false);
  const [modalValue, setModalValue] = useState({});
  const onOpenModal = (items) => {
    setOpen(true);
    setModalValue(items);
  };
  const onCloseModal = () => {
    setOpen(false);
    setModalValue({});
  };
  if (timelines.length>0) {
    
  
  return (
    <div className="kura_tm_section" id="timeline">
      <div className="kura_tm_timeline">
        <div className="container">
          <div className="kura_tm_main_title">
            <span>Timeline</span>
            <h3>Working Period</h3>
          </div>
          <div className="timeline_list">
            <ul>
             {timelines.filter((item)=>item.enabled==true).map((items)=>(
              <li
                className="wow wowClass fadeInUp"
                data-wow-duration=".7s"
                data-wow-delay=".2s"
                onClick={()=>onOpenModal(items)}
                
              >
                <div className="list_inner">
                  <span>{moment(items.startDate).format('MMMM, YYYY')} - {moment(items.endDate).format('MMMM, YYYY')}</span>
                </div>
                <div className="list_inner">
                  <span>{items.jobTitle}</span>
                </div>
                <div className="list_inner">
                  <span>{items.company_name}, {items.jobLocation}</span>
                </div>
                
              </li>))}
             
             
            </ul>
          </div>
        </div>
      </div>
      <TimelineModal
        open={open}
        onCloseModal={() => onCloseModal()}
       items={modalValue}
      />
    </div>
  );}
  return null
};

export default Timeline;
