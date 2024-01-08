import React from "react";
import Arrow from "../public/arrow.svg";
import Image from "next/image";
import Link from "next/link";

interface Props {
  name?: string | undefined;
  description?: string | undefined;
  imageUrl?: string | undefined;
  projectUrl?: string | undefined;
  bgColour?: string | undefined;
  altTag?: string | undefined;
  dark?: boolean | undefined;
}

const ProjectCard: React.FC<Props> = ({
  name = "Block name",
  description = "This is an amazing block",
  imageUrl = "/project-1.png",
  projectUrl = "/",
  bgColour = "#e4e4e7",
  altTag = "project image",
  dark = false,
}) => {
  return (
    <div
      className={`h-[30rem] rounded-3xl overflow-hidden ${dark ? "dark" : ""}`}
      style={{ background: `${bgColour}` }}
    >
      <div className="h-full w-full px-10 py-6 duration-[500ms] transition-all ease-in-out hover:scale-105 bg-cover bg-no-repeat bg-center">
        <div className="flex justify-between">
          <div>
            <h2 className="font-medium text-lg dark:text-white">{name}</h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-300">
              {description}
            </p>
          </div>
          <Link target={projectUrl === "/" ? "" : "_blank"} href={projectUrl}>
            <div className="h-12 w-12 bg-white rounded-full flex justify-center items-center cursor-pointer">
              <Arrow className="w-6 h-6" />
            </div>
          </Link>
        </div>
        <div className="h-full pb-6 flex justify-center items-center">
          <Image
            src={imageUrl}
            width="350"
            height="350"
            alt={altTag}
            quality={100}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
