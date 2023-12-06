import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  bgColour?: string | undefined;
}

const SocialButton: React.FC<Props> = ({ children, bgColour = "black" }) => {
  let bgHoverColorClass;

  switch (bgColour) {
    case "instagram":
      bgHoverColorClass = "hover:bg-instagram";
      break;
    case "github":
      bgHoverColorClass = "hover:bg-github";
      break;
    case "linkedin":
      bgHoverColorClass = "hover:bg-linkedin";
      break;
  }

  return (
    <button
      className={`group h-12 w-12 bg-white ${bgHoverColorClass} rounded-full transition-colors duration-200 ease-in-out flex justify-center items-center`}
    >
      <div className="fill-black group-hover:fill-white transition-colors duration-200 ease-in-out">
        {children}
      </div>
    </button>
  );
};

export default SocialButton;
