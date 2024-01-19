import {
  CypressIcon,
  ExpressIcon,
  FigmaIcon,
  JavascriptIcon,
  GitIcon,
  MongoIcon,
  NextIcon,
  NestIcon,
  NodeIcon,
  PostgreIcon,
  ReactIcon,
  SassIcon,
  SocketIcon,
  StorybookIcon,
  TailwindIcon,
  TypescriptIcon,
} from "@/components";
export function IconList() {
  const iconList = [
    {
      svg: <JavascriptIcon />,
      text: "Javascript",
    },
    {
      svg: <TypescriptIcon />,
      text: "Typescript",
    },
    {
      svg: <ReactIcon />,
      text: "React",
    },
    {
      svg: <NextIcon />,
      text: "Next.js",
    },
    {
      svg: <NodeIcon />,
      text: "Node.js",
    },
    {
      svg: <ExpressIcon />,
      text: "Express.js",
    },
    {
      svg: <NestIcon />,
      text: "Nest.js",
    },
    {
      svg: <SocketIcon />,
      text: "Socket.io",
    },
    {
      svg: <PostgreIcon />,
      text: "PostgreSQL",
    },
    {
      svg: <MongoIcon />,
      text: "MongoDB",
    },
    {
      svg: <SassIcon />,
      text: "Sass/Scss",
    },
    {
      svg: <TailwindIcon />,
      text: "Tailwindcss",
    },
    {
      svg: <FigmaIcon />,
      text: "Figma",
    },
    {
      svg: <CypressIcon />,
      text: "Cypress",
    },
    {
      svg: <StorybookIcon />,
      text: "Storybook",
    },
    {
      svg: <GitIcon />,
      text: "Git",
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-4 md:flex md:justify-between md:flex-wrap md:gap-12">
      {iconList.map((e) => {
        return (
          <div className="flex flex-col justify-center items-center gap-2">
            <div>{e.svg}</div>
            <p>{e.text}</p>
          </div>
        );
      })}
    </div>
  );
}
