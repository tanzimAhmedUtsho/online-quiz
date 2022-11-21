import React from "react";
import { Card } from "react-bootstrap";

const Blog = () => {
  return (
    <div>
      <Card border="primary" style={{ width: "100%" }}>
        <Card.Header>Blog-01</Card.Header>
        <Card.Body>
          <Card.Title className="fs-4">
            What is the purpose of react router?
          </Card.Title>
          <Card.Text className="bg-light ">
            A tool that allows you to handle routes in a web app, using dynamic
            routing. Dynamic routing takes place as the app is rendering on your
            machine, unlike the old routing architecture where the routing is
            handled in a configuration outside of a running app. React router
            implements a component-based approach to routing. It provides
            different routing components according to the needs of the
            application and platform. React Router is a standard library for
            routing in React. It enables the navigation among views of various
            components in a React Application, allows changing the browser URL,
            and keeps the UI in sync with the URL.ReactJS Router is mainly used
            for developing Single Page Web Applications. React Router is used to
            define multiple routes in the application. When a user types a
            specific URL into the browser, and if this URL path matches any
            'route' inside the router file, the user will be redirected to that
            particular route.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />

      <Card border="secondary" style={{ width: "100%" }}>
        <Card.Header>Blog-02</Card.Header>
        <Card.Body>
          <Card.Title className="fs-4">How does context api work?</Card.Title>
          <Card.Text className="bg-light">
            React.createContext() is all you need. It returns a consumer and a
            provider. Provider is a component that as it's names suggests
            provides the state to its children. It will hold the "store" and be
            the parent of all the components that might need that store.
            Consumer as it so happens is a component that consumes and uses the
            state. The React Context API is a way for a React app to effectively
            produce global variables that can be passed around. This is the
            alternative to "prop drilling" or moving props from grandparent to
            child to parent, and so on. Context is also touted as an easier,
            lighter approach to state management using Redux.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />

      <Card border="success" style={{ width: "100%" }}>
        <Card.Header>Blog-03</Card.Header>
        <Card.Body>
          <Card.Title className="fs-4">
            What is React useRef hook and How to Use It?
          </Card.Title>
          <Card.Text className="bg-light">
            As told above, useRef is a hook introduced with other hooks in React
            version 16.8 and is mainly used for creating a reference of the DOM
            element or directly accessing it inside a functional component. But
            don't think even for a second that it's the only thing this hook is
            capable of as it can even be used for storing mutable values across
            different rerenders of the component. Like every other hook in
            React, we have to first import this hook at the very top level as
            per the rules of hooks and then only we can use it in our apps.
            Unlike other hooks like useState which returns two values, the state
            and a function, this hook returns a mutable ref object which will
            carry the value throughout the component and if any change is made
            in the component, the updated value will be carried forward across
            our React component. This object has a property called current which
            will initially contain the value with which we have initialized the
            component. Here we have made a counter app in which we have a
            counter whose value increases as we click on the update function
            button, which triggers the function using the onClick event handler
            and increases the value of the encounter by one.But here is a
            problem, with every state change, the value of the counter gets
            increased on our screen, but the counter we made as an instance of
            the app and displayed its result in the console will stay at 1. This
            is because the whole app gets re-rendered with every state change
            making the value of the counter of the console restart with zero
            every time. Now let's modify this instance variable using useRef.
            And now, the same returned object will always be used and stay
            closed to the Component for the full lifetime of the component as
            all the mutable ref values will persist with every render.useRef
            doesn’t notify us when its content changes. Mutating the .current
            property doesn’t cause a re-render. If we want to run some code when
            React attaches or detaches a ref to a DOM node, a callback ref is
            better suited.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Blog;
