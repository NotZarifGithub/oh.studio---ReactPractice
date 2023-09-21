import React from "react";
import { CSSTransition } from "react-transition-group";
import "tailwindcss/tailwind.css"; // Import your Tailwind CSS

function DelayedAnimation() {
  // State to control when the animation should start
  const [isAnimated, setIsAnimated] = React.useState(false);

  // Function to trigger the animation
  const startAnimation = () => {
    setIsAnimated(true);
  };

  return (
    <div>
      <button onClick={startAnimation}>Start Animation</button>
      <CSSTransition
        in={isAnimated}
        timeout={1000} // Duration of the animation in milliseconds
        classNames="my-animation" // CSS class name prefix
        unmountOnExit
      >
        <div className="my-element">Animated Content</div>
      </CSSTransition>
    </div>
  );
}

export default DelayedAnimation;
