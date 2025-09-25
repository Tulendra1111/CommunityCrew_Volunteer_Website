import React from 'react';

const Logo = ({ className = "", size = "medium" }) => {
  const sizeClasses = {
    small: "text-lg",
    medium: "text-2xl", 
    large: "text-4xl"
  };

  return (
    <div className={`logo-container ${className}`}>
      <div className={`logo-text ${sizeClasses[size]}`}>
        <span className="logo-main">CommunityCrew</span>
        <span className="logo-sub">Volunteer</span>
      </div>
    </div>
  );
};

export default Logo;
