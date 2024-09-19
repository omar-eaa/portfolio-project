import { useState, useEffect } from 'react';

export default function AnimateText() {
  const texts = ["A Web Developer", "A Digital designer"];
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = texts[loopNum % texts.length]; // Current sentence to type out

      if (isDeleting) {
        setCurrentText(fullText.substring(0, charIndex - 1)); // Remove characters
        setTypingSpeed(50); // Speed up the deletion
      } else {
        setCurrentText(fullText.substring(0, charIndex + 1)); // Add characters
        setTypingSpeed(150); // Standard typing speed
      }

      setCharIndex((prevIndex) => (isDeleting ? prevIndex - 1 : prevIndex + 1));

      // If the word is complete, set to deleting mode after a pause
      if (!isDeleting && charIndex === fullText.length) {
        setTimeout(() => setIsDeleting(true), 1000); // Wait before starting deletion
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setLoopNum((prevLoop) => prevLoop + 1); // Move to next text
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed); // Execute every `typingSpeed` ms

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, [charIndex, isDeleting, loopNum, typingSpeed]);

  return (
    <h2 className="animate-text">
      {currentText}
      <span className="cursor">|</span> {/* Blinking cursor effect */}
    </h2>
  );
}
