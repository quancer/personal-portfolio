const WorkList = [
  {
    img: "https://s3-alpha-sig.figma.com/img/13a1/57f2/d0bfafa5cbd6a89dfe634a542f95ebd2?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NYitTML6jMKPuAP2IWSes8W9g5f3qjAfXibD~fym3hK6hfGSEiSfNnMVIgVnn-3CMeztC3E9FuM1OPEGmDkUijQbJM~f58GdGXoiOGFVcklsPf4GiyEtfFoxiRwc9cge2LwJ6qYOTnJVg5YcEOsoX0Loz9qCRikZoKvvZAeiE1ctnmroxdvwlyzNdOUkqi6aeYWgqJQMBf3ux3Ju-2gY2Zu~Xjf8XbYnoWZ0Syo4o6cjT4S3U82rQ2LIZLuxHxuRrUyn1gUvFxmNLJHcXfrEqvjr0Ivsh6JJZSeoST0uVK7R0~pz1rAT~Hm41H6fYGwzO4wnllp3KzEWw3nQ~tuwPA__",
    header: "Fiskil",
    paraGrap:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    programmLang: [
      "React",
      "Next.js",
      "Typescript",
      "Nest.js",
      "PostgreSQL",
      "Tailwindcss",
      "Figma",
      "Cypress",
      "Storybook",
      "Git",
    ],
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/13a1/57f2/d0bfafa5cbd6a89dfe634a542f95ebd2?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NYitTML6jMKPuAP2IWSes8W9g5f3qjAfXibD~fym3hK6hfGSEiSfNnMVIgVnn-3CMeztC3E9FuM1OPEGmDkUijQbJM~f58GdGXoiOGFVcklsPf4GiyEtfFoxiRwc9cge2LwJ6qYOTnJVg5YcEOsoX0Loz9qCRikZoKvvZAeiE1ctnmroxdvwlyzNdOUkqi6aeYWgqJQMBf3ux3Ju-2gY2Zu~Xjf8XbYnoWZ0Syo4o6cjT4S3U82rQ2LIZLuxHxuRrUyn1gUvFxmNLJHcXfrEqvjr0Ivsh6JJZSeoST0uVK7R0~pz1rAT~Hm41H6fYGwzO4wnllp3KzEWw3nQ~tuwPA__",
    header: "Fiskil",
    paraGrap:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    programmLang: [
      "React",
      "Next.js",
      "Typescript",
      "Nest.js",
      "PostgreSQL",
      "Tailwindcss",
      "Figma",
      "Cypress",
      "Storybook",
      "Git",
    ],
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/13a1/57f2/d0bfafa5cbd6a89dfe634a542f95ebd2?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NYitTML6jMKPuAP2IWSes8W9g5f3qjAfXibD~fym3hK6hfGSEiSfNnMVIgVnn-3CMeztC3E9FuM1OPEGmDkUijQbJM~f58GdGXoiOGFVcklsPf4GiyEtfFoxiRwc9cge2LwJ6qYOTnJVg5YcEOsoX0Loz9qCRikZoKvvZAeiE1ctnmroxdvwlyzNdOUkqi6aeYWgqJQMBf3ux3Ju-2gY2Zu~Xjf8XbYnoWZ0Syo4o6cjT4S3U82rQ2LIZLuxHxuRrUyn1gUvFxmNLJHcXfrEqvjr0Ivsh6JJZSeoST0uVK7R0~pz1rAT~Hm41H6fYGwzO4wnllp3KzEWw3nQ~tuwPA__",
    header: "Fiskil",
    paraGrap:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    programmLang: [
      "React",
      "Next.js",
      "Typescript",
      "Nest.js",
      "PostgreSQL",
      "Tailwindcss",
      "Figma",
      "Cypress",
      "Storybook",
      "Git",
    ],
  },
];

export function Work() {
  return (
    <div className=" flex flex-col px-4 gap-12 items-center bg-gray-50 py-16 md:px-20 md:py-24">
      <div className="flex flex-col md:mx-8 ">
        <div className="flex flex-col gap-4">
          <div className="flex justify-center items-center">
            <p className="px-5 py-1 bg-gray-200 rounded-xl text-gray-600">
              Work
            </p>
          </div>
          <div className="flex justify-center items-center">
            <p>Some of the noteworthy projects I have built:</p>
          </div>
        </div>
      </div>
      {WorkList.map((ev) => {
        return (
          <div className="rounded-xl shadow-xl md:odd:flex-row-reverse flex flex-col border md:flex-row">
            <div className="flex p-8">
              <img className="rounded-xl	" src={ev.img} alt="" />
            </div>
            <div className="flex flex-col p-8 gap-6">
              <p>{ev.header}</p>
              <p>{ev.paraGrap}</p>
              <ul className="flex gap-2 flex-wrap items-center content-center">
                {ev.programmLang.map((e) => {
                  return (
                    <li className="px-5 py-1 bg-gray-200 rounded-xl text-gray-600">
                      {e}
                    </li>
                  );
                })}
              </ul>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11"
                    stroke="#4B5563"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15 3H21V9"
                    stroke="#4B5563"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10 14L21 3"
                    stroke="#4B5563"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
