import React, { createRef, useRef } from "react";
import Pdf from "react-to-pdf";

const Blog = () => {
  const pageref = createRef();
  return (
    <div className="my-24 flex flex-col items-center lg:mx-40">
      <div ref={pageref}>
        <div className=" text-center text-5xl font-bold underline mb-10">
          Q/A
        </div>
        <div>
          <div>
            <h4 className=" text-xl text-black">
              1. Tell us the differences between uncontrolled and
              controlled components.
            </h4>
            <p className="my-4">
              <span className="underline font-bold">Ans:</span>
              {"  "}
              Uncontrolled component: is controlled by its internal
              state. here data flows in own component and difficult to
              manage the component as it is complex,also difficult to
              debug
              <br />
              controlled component: is controlled by react state. Data
              flows from parent to component and easy to use and debug
              with faster state management
            </p>
          </div>
          <div>
            <h4 className=" text-xl text-black">
              How to validate React props using PropTypes{" "}
            </h4>
            <p className="my-4">
              <span className="underline font-bold">Ans:</span>{" "}
              PropTypes is a type checking library for validation of
              the props that are passed in react component.
              <br />
              for example:
              <br /> email:PropTypes.string, name:PropTypes.string,
              mobile:PropTypes.number.isRequired <br />
              also to achieve the PropTypes we need to import the
              PropTypes from prop-types library. we can check
              booleans, functions array objext symbol etc
            </p>
          </div>
          <div>
            <h4 className=" text-xl text-black">
              Tell us the difference between nodejs and express js.
            </h4>
            <p className="my-4">
              <span className="underline font-bold">Ans:</span>Nodejs:
              is javascript runtime engine to build server side
              created on chrome v8. here controllers routing is not
              provided
              <br />
              Expressjs: is a framework of nodejs for handling request
              and response. more features than nodejs and controllers
              routing is provided
            </p>
          </div>
          <div>
            <h4 className=" text-xl text-black">
              What is a custom hook, and why will you create a custom
              hook?
            </h4>
            <p className="my-4">
              <span className="underline font-bold">Ans:</span> Custom
              hook are just reusable functions. these hooks are
              created for specific purpose with unique facilities for
              react apps. naming convention for the custom hook start
              with "use". Custom hooks has more reusability, more
              readable and can be tested easily.If there is one or
              multiple React hooks that will be used at multiple
              locations in app, custom hooks helps in making the code
              more reusable and make the code clean.
            </p>
          </div>
        </div>
      </div>
      <div>
        <Pdf targetRef={pageref} filename="QA.pdf">
          {({ toPdf }) => (
            <button className="button mt-10" onClick={toPdf}>
              Convert to PDF
            </button>
          )}
        </Pdf>
      </div>
    </div>
  );
};

export default Blog;
