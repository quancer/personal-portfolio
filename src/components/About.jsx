export function About() {
  return (
    <div className="py-16 px-4 flex flex-col gap-6 bg-gray-50">
      <div className="flex justify-center">
        <p className="px-5 py-1 bg-gray-200 rounded-xl text-gray-600">About</p>
      </div>
      <div className="flex flex-col gap-12 justify-start  md:flex-row ">
        <div className="flex justify-center items-start relative  h-[380px]  md:flex-[1_0_0] ">
          <img
            className="border-8 border-white max-w-[280px] h-[360px] z-[2]"
            src="https://s3-alpha-sig.figma.com/img/8781/bda6/7a25952db5724f48492cd455a6e81952?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iD776LocC9a2IKsEEOaYst01NN5Lo3uvEsPe-g-xHHCoZ3YH2nTx6vngudPrjvMx9V8fPVT4IK3s3nj1Myeef6xBPc9vfd3E4iP1c2fe7QC-nBR2k~YbfdlJNFiyDEEFAXF6TtkbM5EehR2t8RehwXWG5DL-QW2AgEX4WhHCUHTCwg8YVAk0fK5PiQ2zyyV9zL0bfPyOdcr7ihc1WFlz7Tdf-PKy6ukX3mjD0Vo2wuGgontjFSSetothS6hfcwSOXmbzezxEO4NmD29qL1pCYvp2iVoFU~lu0h6JaoLlT3hc0LVsjWRZdSiwGHT0XXpjzdYHAbrDM70dMS1aH~n-hw__"
            alt=""
          />
          <div className="absolute	w-[320px] h-[360px] bg-gray-200 z-[1] bottom-0 border-8 border-gray-50"></div>
        </div>
        <div className="flex flex-col h-auto gap-6  md:flex-[1_0_0] ">
          <div className="text-2xl font-semibold leading-8 text-gray-900	">
            <p>Curious about me? Here you have it:</p>
          </div>
          <div className="flex flex-col text-gray-600 gap-4">
            <p>
              I'm a passionate, self-proclaimed designer who specializes in full
              stack development (React.js & Node.js). I am very enthusiastic
              about bringing the technical and visual aspects of digital
              products to life. User experience, pixel perfect design, and
              writing clear, readable, highly performant code matters to me.
            </p>
            <p>
              I began my journey as a web developer in 2015, and since then,
              I've continued to grow and evolve as a developer, taking on new
              challenges and learning the latest technologies along the way.
              Now, in my early thirties, 7 years after starting my web
              development journey, I'm building cutting-edge web applications
              using modern technologies such as Next.js, TypeScript, Nestjs,
              Tailwindcss, Supabase and much more.
            </p>
            <p>
              I am very much a progressive thinker and enjoy working on products
              end to end, from ideation all the way to development.
            </p>
            <p>
              When I'm not in full-on developer mode, you can find me hovering
              around on twitter or on indie hacker, witnessing the journey of
              early startups or enjoying some free time. You can follow me on
              Twitter where I share tech-related bites and build in public, or
              you can follow me on GitHub.
            </p>
            <p>Finally, some quick bits about me.</p>
            <ul className="list-disc grid-cols-2	grid gap-2.5 px-5">
              <li>B.E. in Computer Engineering</li>
              <li>Avid learner</li>
              <li>Full time freelancer</li>
              <li>Aspiring indie hacker</li>
            </ul>
            <p>
              One last thing, I'm available for freelance work, so feel free to
              reach out and say hello! I promise I don't bite 😉
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
