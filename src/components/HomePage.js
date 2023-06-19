import React from "react";
import Layout from "./Layout/Layout";
import Card from "./Card";
const HomePage = () => {
  return (
    <Layout>
      <div style={{ position: "relative" }}>
        <img
          src="images/bg.png"
          alt=""
          style={{ width: "30vw", position: "absolute", right: "0" }}
        />
        <div style={{ background: "url(images/back.png)", height: "50vh" }}>
          <div>
            <div className="row">
              <div className="col-md-4">
                <h3 style={{ color: "blue", margin: "15px", padding: "10px" }}>
                  Expertly matching digital talent with business
                </h3>
                <p className="" style={{ margin: "15px", padding: "10px" }}>
                  We promote innovation, growth, and success in the digital
                  sphere by connecting businesses with the best digital talent.
                </p>
                <button
                  className="btn btn-primary"
                  style={{ marginRight: "15px", margin: "15px" }}
                >
                  SEARCH JOBS
                </button>
                <button className="btn btn-primary">REQUEST TALENT</button>
              </div>
            </div>
            {/* <img src="images/bg.png" alt="" style={{ width: "30vw" }} /> */}
          </div>
        </div>
      </div>

      {/* ************ */}
      <div>
        <h3
          className="text-center"
          style={{ marginTop: "20px", padding: "10px" }}
        >
          Our Services
        </h3>
        <div className="row">
          <div className="col-md-4">
            <img
              src="images/p1.png"
              alt=""
              className="m-3"
              style={{ width: "20vw", height: "20ch" }}
            />
          </div>
          <div className="col-md-8">
            <h4 className="m-3">Marketing</h4>
            <p className="m-3">
              Grow your business with our marketing services! We offer the tools
              and expertise you need to make your brand stand out in a crowded
              market. Our experienced team is dedicated to helping you develop a
              customized marketing plan tailored to your unique goals and
              objectives. With our help, you can reach your target audience and
              maximize your business success.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <h4 className="m-3">Application Development</h4>
            <p className="m-3">
              Are you looking for a reliable application development service
              that will help you stay ahead of the competition? Look no further!
              From web-based applications to mobile ones, our team is dedicated
              to delivering the best possible outcome for your project. We
              guarantee that you will be satisfied with the results. Contact us
              today and get started on your application development project!
            </p>
          </div>
          <div className="col-md-4">
            <img
              src="images/p2.png"
              alt=""
              className="m-3"
              style={{ width: "20vw", height: "20ch" }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <img
              src="images/p3.png"
              className="m-3"
              alt=""
              style={{ width: "20vw", height: "20ch" }}
            />
          </div>
          <div className="col-md-8">
            <h4 className="m-3">User experience design</h4>
            <p className="m-3">
              Designing a great user experience is essential for any successful
              website. Let us take the hassle for you. Our team of UX designers
              can create an intuitive and responsive design to make sure your
              website delivers a great user experience. We will ensure your
              website is effective in meeting your business goals. Let us help
              you create a better user experience today.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <h4 className="m-3">Management consulting</h4>
            <p className="m-3">
              Need help managing your business? Look no further than our
              management consulting services. Our experienced professionals are
              here to help you develop cost-effective strategies and solutions
              to maximize profits and minimize losses. With our help, you can
              improve operations, enhance customer service and increase
              efficiency. Let us help you make your business a success.
            </p>
          </div>
          <div className="col-md-4">
            <img
              src="images/p4.png"
              alt=""
              className="m-3"
              style={{ width: "20vw", height: "20ch" }}
            />
          </div>
        </div>
      </div>

      <div className="container">
        <h3 className="text-center m-5 " style={{ margin: "15px" }}>
          Advantages of working with us
        </h3>
        <div className="row m-5">
          <button
            className="btn btn-primary col-md-4 "
            style={{ marginRight: "3px" ,width:"20vw"}}
          >
            For Employers
          </button>
          <button

            className="btn  col-md-4 "
            style={{ border: "1px solid black",width:"20vw" }}
          >
            For Job Seekers
          </button>
        </div>
        <div className="row">
          <div className="col-md-4">
            <h1 style={{ color: "blue" }} className="m-3" >01</h1>
            <h5 className="m-3" >Skilled Talent</h5>
            <p className="m-3" >
              We have candidates who can meet any requirement. Hiring qualified
              candidates is a difficult business challenge. We collaborate with
              you to swiftly, efficiently, and successfully attract the right
              professionals to your company.
            </p>
          </div>
          <div className="col-md-4">
            <h1 style={{ color: "blue" }} className="m-3" >02</h1>
            <h5 className="m-3" >Time Saving solutions</h5>
            <p className="m-3" >
              Say goodbye to endless hours of searching and interviewing. Say
              goodbye to time-wasting hiring processes. Experience a stress-free
              and efficient talent recruitment process today."
            </p>
          </div>
          <div className="col-md-4">
            <h1 style={{ color: "blue" }} className="m-3" >03</h1>
            <h5 className="m-3" >Cost effective results</h5>
            <p className="m-3" >
              Unlock savings and maximize ROI. Our flexible solutions provide
              greater cost optimization. Choose us for cost-effective and
              quality-driven talent acquisition that drives your success and
              saves you money."
            </p>
          </div>
        </div>
      </div>
      <div className="text-center m-3 p-4" style={{ backgroundColor: "#C1EBF3" }}>
        <h3 style={{paddingBottom:"30px"}} >What our customers say</h3>

        <div className="row">
          <div className="col-md-4">
            <Card
              desc="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
              name="Amy Smith"
              details="Software engineer, Bangalore"
            />
          </div>
          <div className="col-md-4">
            <Card
              desc="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
              name="Amy Smith"
              details="Software engineer, Bangalore"
            />
          </div>
          <div className="col-md-4">
            <Card
              desc="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
              name="Amy Smith"
              details="Software engineer, Bangalore"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
