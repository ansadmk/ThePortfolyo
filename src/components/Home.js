import { Suspense, useEffect, useState } from "react";
import { HomeModal } from "./ContentModal";
import {useDispatch,useSelector} from 'react-redux'
import { FetchData } from "../../Redux/axios";
import { about, services } from "../../Redux/selectors";

const Home = () => {
  const [open, setOpen] = useState(false);
  const [modalValue, setModalValue] = useState({
    img: null,
    title: "",
    desc:''
  });
  const dispatch=useDispatch()
  const aboutData=useSelector(about)
  const service=useSelector(services)
  
  const onOpenModal = (img, title,desc) => {
    setOpen(true);
    setModalValue({ img, title,desc });
  };
  const onCloseModal = () => {
    setOpen(false);
    setModalValue({ img: null, title: "" });
  };
  useEffect(
    ()=>{
      dispatch(FetchData())
    },[]
  )
  if (aboutData.name && aboutData.title && aboutData.subTitle && aboutData.quote ) {
  return (
    <div className="kura_tm_section" id="#">
      <div className="kura_tm_hero">
        <div className="container">
          <div className="content">
            <div className="left">
              <span className="name">{aboutData.name}</span>
              <h3 className="job">{aboutData.title}</h3>
              <span className="name">{aboutData.subTitle}</span>
              <h3 className="job">&quot; {aboutData.quote} &quot;</h3>
               
              <div className="services">
                <ul>
                  {/* <li>
                    <a
                      href="#"
                      onClick={() =>
                        onOpenModal(
                          "/img/service/1.jpg",
                          "Creative Designer based in Japan"
                        )
                      }
                    >
                      <img className="image" src="/img/service/1.jpg" alt="" />
                      <span>Web Development</span>
                      <img
                        className="svg"
                        src="/img/svg/right-arrow.svg"
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() =>
                        onOpenModal("/img/service/2.jpg", "Digital Marketing")
                      }
                    >
                      <img className="image" src="/img/service/2.jpg" alt="" />
                      <span>Digital Marketing</span>
                      <img
                        className="svg"
                        src="/img/svg/right-arrow.svg"
                        alt=""
                      />
                    </a>
                  </li> */}
                  {service.length>0?service.map((item)=>(
                  <li>
                    <a
                      href="#"
                      onClick={() =>
                        onOpenModal(item.image.url, item.name,item.desc)
                      }
                    >
                      <img className="image" src="/img/service/3.jpg" alt="" />
                      <span>{item.name}</span>
                      <img
                        className="svg"
                        src="/img/svg/right-arrow.svg"
                        alt=""
                      />
                    </a>
                  </li>)):null}
                </ul>
              </div>
              <div className="short_info">
                <ul>
                  <li>
                    <div className="list_inner">
                      {aboutData.exp_year?<h3>{aboutData.exp_year}+</h3>:null}
                      <span>
                        Years of
                        <br />
                        Experience
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      {aboutData.some_total?<h3>{aboutData.some_total > 999 ?aboutData.some_total/1000+"K+":aboutData.some_total}</h3>:null}
                      <span>
                        Happy
                        <br />
                        Customers
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="right">
              <div className="image">
                <img src="/img/thumbs/3-4.jpg" alt="" />
                {aboutData?.avatar?.url ?
                <div
                  className="main"
                  style={{ backgroundImage: `url(${aboutData.avatar.url})` }}
                ></div>: null}
                
                <div className="shape"></div>
              </div>
            </div>
            <div className="down anchor">
              <a href="#portfolio">
                <img className="svg" src="/img/svg/down-arrow.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <HomeModal
        open={open}
        onCloseModal={() => onCloseModal()}
        img={modalValue.img}
        title={modalValue.title}
        desc={modalValue.desc}
      />
    </div>
  )}
  return null
};

export default Home;
