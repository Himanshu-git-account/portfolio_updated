import "./index.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const TimeLines = () => {
  return (
    <div className="timeline-container">
      <div className="aboutme-container">
        <h1 className="aboutme-heading">Journey</h1>
      </div>
      <VerticalTimeline className="vertical">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          // contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
         // contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="1993"
          dateClassName={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          //icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">First Cry</h3>
          <h4 className="vertical-timeline-element-subtitle">Daltonganj - Jharkhand</h4>
          <p>
            Born on 7th Nov 1993
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="1995-2011"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          //icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Schooling</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Daltonganj, Ranchi - Jharkhand
          </h4>
          <p>
            <div>Started schooling from LKG to 10th - MK DAV Public School, Daltonganj</div>
            <div>11th & 12th - Oxford Public School, Ranchi</div>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2012 - 2016"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          //icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Graduation</h3>
          <h4 className="vertical-timeline-element-subtitle">
            SJBIT, Bangalore
          </h4>
          <p><div>Completed my B. Tech in 2016 from SJB Institute of Technology, Bangalore</div>
          <div> Branch - Computer Science & Engineering</div>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2016 - 2019"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          //icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Tata Consultancy Services</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bangalore
          </h4>
          <p>Started working as Frontend Developer in TCS from 26th Dec,2016</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019-2021"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          //icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Publicis Sapient
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Bangalore</h4>
          <p>Started working as React Developer in Publicis Sapient from 30th Dec,2019</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021-Present"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          //icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Paytm
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Bangalore</h4>
          <p>Currently Working as Senior Software Engineer (SDE II) in Paytm from 6th Dec, 2021 </p>
        </VerticalTimelineElement>
 
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          //icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
};

export default TimeLines;
