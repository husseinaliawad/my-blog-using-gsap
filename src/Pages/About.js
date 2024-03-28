import React from "react";
import { useTrail, animated } from "react-spring";

const About = () => {
  const people = [
    {
      id: 1,
      name: "Hussin Awad",
      designation: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      id: 2,
      name: "Omar Hadid",
      designation: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    // Rest of the people array...
  ];

  const trail = useTrail(people.length, {
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
  });

  const personCardStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "10px",
  };

  const personImageStyle = {
    width: "200px", /* Adjust the width as per your requirement */
    height: "auto", /* Maintain aspect ratio */
    borderRadius: "50%",
  };

  const personNameStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    marginTop: "10px",
  };

  const personDesignationStyle = {
    fontSize: "14px",
    color: "#888",
    marginTop: "5px",
  };

  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      {trail.map((animation, index) => (
        <animated.div
          key={people[index].id}
          style={{ ...personCardStyle, ...animation }}
        >
          <animated.img
            src={people[index].image}
            alt={people[index].name}
            style={personImageStyle}
          />
          <div>
            <animated.p style={personNameStyle}>{people[index].name}</animated.p>
            <animated.p style={personDesignationStyle}>{people[index].designation}</animated.p>
          </div>
        </animated.div>
      ))}
    </div>
  );
};

export default About;