import React from "react";
import Layout from "../../component/Layout";
import Footer from "../../component/Footer";

const Registration = () => {
  return (
    <Layout>
      <div className="text-white login_div" data-aos="fade-right">
        <form className="p-4">
            <h2 className="text-center my-2 text-warning">
              <u>
                <b>Sign Up..!</b>
              </u>
            </h2>
            <br />
            <div className="md:flex gap-4">
              <div className="form-group py-2">
                <input
                  type="text"
                  required
                  placeholder="First name"
                  className="inputBoxCSS"
                />
              </div>
              <div className="form-group py-2">
                <input
                  type="text"
                  required
                  placeholder="Last name"
                  className="inputBoxCSS"
                />
              </div>
            </div>
            <div className="form-group my-4">
              <input
                type="email"
                required
                placeholder="Enter email"
                className="inputBoxCSS"
              />
            </div>

            <div className="form-group mb-4">
              <input
                type="text"
                required
                placeholder="Address"
                className="inputBoxCSS"
              />
            </div>
            {/* Continue with similar structure for other form fields */}
            <hr />
            <div className="">
              <div className="w-full my-2">
                <span className="badge bg-info text-dark">
                  Login Credentials...!
                </span>
              </div>
            </div>
            <div className="md:flex gap-4">
              <div className="form-group py-2">
                <input
                  type="text"
                  required
                  placeholder="First name"
                  className="inputBoxCSS"
                />
              </div>
              <div className="form-group py-2">
                <input
                  type="text"
                  required
                  placeholder="Last name"
                  className="inputBoxCSS"
                />
              </div>
            </div>
            {/* Continue with the remaining form fields */} 
            <div className="block mt-2">
              <button className="btnCss">Save</button>
              <a href="/" className="btnCss">Back</a>
            </div>
            <p className="mt-4">
              You have an account..!{" "}
              <a href="/login" className="text-green-500">
                Sign In
              </a>
            </p>
        </form>
      </div>
      <Footer/>
    </Layout>
  );
};

export default Registration;
