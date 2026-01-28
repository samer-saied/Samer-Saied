export default function SkillsWidget() {
  const skills = [
    "Flutter FrameWork",
    "Dart Language",
    "Next.js & React",
    "Tailwind CSS",
    "JavaScript (ES6+)",
    "Node.js & Express",
    "Databases (MongoDB, MySQL)",
    "Firebase Services",
    "Responsive Design",
    "Version Control (Git)",
    "API Development",
    "UI/UX Design Principles",
    "Testing & Debugging",
    "Clean Architecture",
    "Dependency Injection",
    "Asynchronous Programming",
    "RESTful Services",
    "Problem Solving",
  ];

  return (
    <div className="container mx-auto flex flex-col justify-center items-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        My Skills
      </h2>
      <div className=" grid grid-flow-row grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-16 p-8 text-lg">
        {skills.map((skill, index) => (
          <div key={index} className="mb-0 text-center">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
