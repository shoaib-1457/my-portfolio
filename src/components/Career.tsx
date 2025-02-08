import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Project Management Intern</h4>
                <h5>Bharat Intern</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Worked as a Project Management Intern at Bharat Intern,
              contributing to efficient flight management systems and ensuring
              seamless operations.
            </p>
          </div>
          {/* <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Position In Company</h4>
                <h5>Company Name</h5>
              </div>
              <h3>20XX</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              labore sit non ipsum temporibus quidem, deserunt eaque officiis
              mollitia ratione suscipit repellat.
            </p>
          </div> */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer for Training AI Data (Python)</h4>
                <h5>G2i Company</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Working as a Software Engineer, training AI models using Python,
              focusing on data preprocessing, model optimization, and accuracy
              enhancement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
