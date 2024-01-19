import { IconList } from "./IconList";
export function Skills() {
  return (
    <div className="py-16 px-4 flex flex-col gap-6 md:py-24 mds:px-20">
      <div className="flex flex-col gap-4">
        <div className="flex justify-center items-center">
          <p className="px-5 py-1 bg-gray-200 rounded-xl text-gray-600">
            Skills
          </p>
        </div>
        <div className="flex justify-center items-center">
          <p>The skills, tools and technologies I am really good at:</p>
        </div>
      </div>
      <IconList />
    </div>
  );
}
