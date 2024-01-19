import { Upcome } from "@/components";
export function Experience() {
  const exp = [
    {
      logo: <Upcome />,
      infoHead: "Sr. Frontend Developer",
      infoList: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Ut pretium arcu et massa semper, id fringilla leo semper.",
        "Sed quis justo ac magna.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
      date: "Nov 2021 - Present",
    },
    {
      logo: <Upcome />,
      infoHead: "Team Lead",
      infoList: [
        "Sed quis justo ac magna.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Sed quis justo ac magna.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
      date: "Jul 2017 - Oct 2021",
    },
    {
      logo: <Upcome />,
      infoHead: "Full Stack Developer",
      infoList: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      ],
      date: "Dec 2015 - May 2017",
    },
  ];

  return (
    <div className="flex flex-col px-4 gap-12 items-center bg-gray-50 py-16 md:mx-20 md:my-24">
      <div className="flex flex-col md:mx-8 ">
        <div className="flex flex-col gap-4">
          <div className="flex justify-center items-center">
            <p className="px-5 py-1 bg-gray-200 rounded-xl text-gray-600">
              Experience
            </p>
          </div>
          <div className="flex justify-center items-center">
            <p>Here is a quick summary of my most recent experiences:</p>
          </div>
        </div>
      </div>
      {exp.map((e) => {
        return (
          <div className="flex justify-between max-w-[832px] p-8 gap-12">
            <div>{e.logo}</div>
            <div className="flex flex-col gap-4">
              <p className="text-xl font-semibold	">{e.infoHead}</p>
              <ul>
                {e.infoList.map((item) => {
                  return <li>{item}</li>;
                })}
              </ul>
            </div>
            <div>{e.date}</div>
          </div>
        );
      })}
    </div>
  );
}
