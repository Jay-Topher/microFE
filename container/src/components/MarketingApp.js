import React, { useRef, useEffect } from "react";
import { mount } from "marketing/MarketingApp";

const MarketingApp = () => {
  const newRef = useRef(null);
  useEffect(() => {
    mount(newRef.current);
  }, []);
  return <div ref={newRef} />;
};

export default MarketingApp;
