import React from "react";

const Blogs = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-10">
      <div className=" p-2 rounded shadow-lg bg-orange-300">
        <h1 className="text-2xl pb-2">
          How to improve the performance of React App?
        </h1>
        <p className="text-lg">
          For improve the performance of react app, we can keeping the component
          state local where is necessary,Memoizing react components to prevent
          unnecessary re-rendering, optimize images
        </p>
      </div>
      <div className=" p-2 rounded shadow-lg bg-purple-300">
        <h1 className="text-2xl pb-2">
          Different ways to manage a state in a React application?
        </h1>
        <p className="text-lg">
          There four ways to manage our React state,(1) Local state - in local
          state we can manage our data in one or another components.(2) Global
          state - in global state we can manage data in multiple components. (3)
          Server state - server state is simple to use but can be hard to manage
          alongside all of our local and global state. and (4) URL state - it's
          often missing as a category of state, but is an important one.
        </p>
      </div>
      <div className=" p-2 rounded shadow-lg bg-amber-300">
        <h1 className="text-2xl pb-2">
          How does prototypical inheritance work?
        </h1>
        <p className="text-lg">
          The Prototypal Inheritance is a feature in javascript used to add
          methods and properties in objects. It is a method by which an object
          can inherit the properties and methods of another object.
          Traditionally, in order to get and set the Prototype of an object, we
          use Object.getPrototypeOf and Object.
        </p>
      </div>
      <div className=" p-2 rounded shadow-lg bg-rose-300 ">
        <h1 className="text-2xl pb-2">
          Why you do not set the state directly in React.js?
        </h1>
        <p className="text-lg">
          if we update directly on the state , the state doesn't change
          immediately. it create a pending state transition, and accessing it
          after calling this method will only return the present value, we lost
          control all component states.
        </p>
      </div>
      <div className=" p-2 rounded shadow-lg bg-sky-300">
        <h1 className="text-2xl pb-2">
          What is a unit test? Why should write unit tests?
        </h1>
        <p className="text-lg">
          Unit tests are typically automated tests written and run by software
          developers to ensure that a section of an application meets its design
          and behaves as intended. In procedural programming, a unit could be an
          entire module, but it is more commonly an individual function or
          procedure.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
