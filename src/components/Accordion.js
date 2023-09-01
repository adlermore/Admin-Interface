import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

function AccordionItem({ title, content, active, onClick }) {
  const animation = useSpring({ height: active ? 110 : 0 });
  return (
    <div className="accordion-item">
      <div className={`accordion-title ${active ? 'active' : ''}`} onClick={onClick}>
        {title}
      </div>
      <animated.div className="accordion-content" style={animation}>
        <div className="content_inner">
          {content}
        </div>
      </animated.div>
    </div>
  );
}

function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const onItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          active={activeIndex === index}
          onClick={() => onItemClick(index)}
        />
      ))}
    </div>
  );
}

export default Accordion;
