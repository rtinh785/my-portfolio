import skillsData from "./SkillsData";



const Skills = () => {
  return (
    <section className="services container section" id="skills">
      <h2 className="section__title">Skills</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {skillsData.map(({ id, name, icon, color }) => {
          return (
            <div
              className={`bg-gradient-to-br ${color} rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center  hover:scale-105`}
              key={id}
            >
              <i className={`${icon} text-4xl text-white mb-4`}></i>
              <h3 className=" font-semibold text-white">{name}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;