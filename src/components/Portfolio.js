import React, { Fragment, useState } from "react";
import LightBox from "react-awesome-lightbox";
import { Swiper, SwiperSlide } from "swiper/react";
import { portfolioSlider } from "../swiperSliderProps";
import { useSelector } from "react-redux";
import { projects } from "../../Redux/selectors";

const IMAGES = [
  {
    src: "/img/portfolio/1.jpg",
    thumbnail: "/img/portfolio/1.jpg",
    title: "Magic Art",
    sub: "Image",
  },
  {
    src: "/img/portfolio/2.jpg",
    thumbnail: "/img/portfolio/2.jpg",
    title: "Bona Green",
    sub: "Image",
  },

  {
    src: "/img/portfolio/3.jpg",
    thumbnail: "/img/portfolio/3.jpg",
    title: "Leo Dandora",
    sub: "Image",
  },
  {
    src: "/img/portfolio/4.jpg",
    thumbnail: "/img/portfolio/4.jpg",
    title: "Folio Grasia",
    sub: "Image",
  },
  {
    src: "/img/portfolio/5.jpg",
    thumbnail: "/img/portfolio/5.jpg",
    title: "Viva Mercury",
    sub: "Image",
  },
  {
    src: "/img/portfolio/6.jpg",
    thumbnail: "/img/portfolio/6.jpg",
    title: "Santa Onera",
    sub: "Image",
  },
];

const Portfolio = () => {
  const [showLight, setShowLight] = useState(null);

  const showLightBox = (index) => {
    setShowLight({
      startIndex: index,
    });
  };
   const ProjectsData=useSelector(projects)
  const hideLightBox = () => {
    setShowLight(null);
  };
  if (ProjectsData.length>0) {
    
    return (
      <Fragment>
        <div className="kura_tm_section" id="portfolio">
          <div className="kura_tm_portfolio">
            <div className="container">
              <div className="kura_tm_main_title">
                <span>Portfolio</span>
                <h3>Selected Works</h3>
              </div>
              <div
                className="portfolio_list gallery_zoom wow fadeInUp"
                data-wow-duration=".7s"
              >
                <div className="swiper-container">
                  <div className="swiper-wrapper">
                    <Swiper {...portfolioSlider}>
                      {ProjectsData.length>0 ? ProjectsData.map((image, index) => (
                        <SwiperSlide key={index} className="swiper-slide">
                          <div className="list_inner">
                            <div className="image">
                              <img src={image.image.url} alt="" />
                              <div
                                className="main"
                                style={{
                                  backgroundImage: "url(" + image.image.url + ")",
                                }}
                              ></div>
                              <div className="overlay"></div>
                              <img
                                className="svg"
                                src="/img/svg/right-arrow.svg"
                                alt=""
                              />
                              <div className="details">
                                <h3>{image.title}</h3>
                                <span>{image.subtitle}</span>
                              </div>
                            </div>
                            <a
                              className="kura_tm_full_link popup-vimeo"
                              onClick={() => showLightBox(index)}
                            ></a>
                          </div>
                        </SwiperSlide>
                      )):null}
                    </Swiper>
                  </div>
                  <div className="kura_tm_swiper_progress fill">
                    <div className="my_pagination_in"></div>
                    <div className="my_navigation">
                      <ul>
                        <li>
                          <a className="my_prev">
                            <img
                              className="svg"
                              src="img/svg/right-arrow.svg"
                              alt=""
                            />
                          </a>
                        </li>
                        <li>
                          <a className="my_next">
                            <img
                              className="svg"
                              src="img/svg/right-arrow.svg"
                              alt=""
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {showLight ? (
          <LightBox
            images={ProjectsData.map((img) => ({
              url: img.image.url,
              title: img.caption,
            }))}
            startIndex={showLight.startIndex}
            onClose={hideLightBox}
          />
        ) : null}
      </Fragment>
    );
  }
  return null
};

export default Portfolio;
