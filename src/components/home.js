import React, { useState, useRef, useEffect } from "react";
import { SectionWrapper } from "../styles/sameStyle";
import {
  CanvasWrapper,
  HomeWrapper,
  HomeText,
  Title,
  Span1,
  Lines,
  ClickMe,
} from "../styles/home";

const Home = () => {
  const canvasRef = useRef(null);
  const [animateLines, setAnimateLines] = useState(false);
  const [showSecondLine, setShowSecondLine] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let points = [];

    // Generate 200 random points
    for (let i = 0; i < 200; i++) {
      points.push({
        x: Math.random() * width,
        y: Math.random() * height,
        dx: Math.random() * 0.5 - 0.25,
        dy: Math.random() * 0.5 - 0.25,
      });
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);

      // Center point (like space.center in Pts.js)
      const centerX = width / 2;
      const centerY = height / 2;

      points.forEach((p) => {
        // Move points slightly in a circular pattern
        const dx = centerX - p.x;
        const dy = centerY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const moveDist = Math.min(1, 1 - dist / (width / 2)) * 2;

        p.x += p.dx * moveDist;
        p.y += p.dy * moveDist;

        // Bounce points within canvas bounds
        if (p.x < 0 || p.x > width) p.dx *= -1;
        if (p.y < 0 || p.y > height) p.dy *= -1;

        // Draw the points
        ctx.fillStyle = ["#f03", "#09f", "#0c6"][Math.floor(Math.random() * 3)];
        ctx.beginPath();
        ctx.arc(p.x, p.y, 3, 0, 2 * Math.PI);
        ctx.fill();

        // Draw a line from the point to the center
        ctx.strokeStyle = `rgba(255, 255, 255, ${Math.max(
          0.1,
          1 - dist / (width / 2)
        )})`;
        ctx.lineWidth = Math.max(0.5, 1 - dist / (width / 2));
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(centerX, centerY);
        ctx.stroke();
      });

      requestAnimationFrame(draw);
    }

    // Start animation
    draw();

    // Resize canvas on window resize
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    // Start the typewriter animation
    const timer1 = setTimeout(() => {
      setAnimateLines(true);
    }, 100);

    // Show the second line after the first line animation ends
    const timer2 = setTimeout(() => {
      setShowSecondLine(true);
    }, 4000); // Adjust the delay to match the duration of the typewriter effect

    // Show the button after both lines are done
    const timer3 = setTimeout(() => {
      setIsButtonVisible(true);
    }, 8000); // Adjust delay to be after both lines
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div id="home">
      <SectionWrapper>
        <HomeWrapper>
          <CanvasWrapper>
            <canvas
              ref={canvasRef}
              style={{ background: "#0A0A29", height: "100vh", width: "100vw" }}
            ></canvas>
            <HomeText>
              {/* Title Section */}
              <Title>
                <Lines animate={animateLines}>
                  Hello, I'm Nuzhat Tabassum Tani
                </Lines>
                {showSecondLine && (
                  <>
                    <Lines animate={animateLines}>
                      I am a Full Stack Software Engineer
                    </Lines>
                    <Span1 />
                  </>
                )}
              </Title>

              <ClickMe href="#about" visible={isButtonVisible}>
                <span>Learn More About Me &#8594;</span>
              </ClickMe>
            </HomeText>
          </CanvasWrapper>
        </HomeWrapper>
      </SectionWrapper>
    </div>
  );
};

export default Home;
