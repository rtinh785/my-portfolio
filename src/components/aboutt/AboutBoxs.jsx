import Box from "./Box";

const AboutBox = () => {
  return (
    <div>
      <div className="about__boxs grid grid-cols-2 lg:grid-cols-4 gap-x-[1.875rem] mt-[4.25rem] gap-y-[1.875rem]">
        <Box icon="icon-fire" title="2" subTitle="Project completed" />
        <Box icon="icon-cup" title="122" subTitle="Cup of coffe" />
        <Box icon="icon-people" title="&&&" subTitle="Satisfied clients" />
        <Box icon="icon-badge" title="&&&" subTitle="Nominees winner" />
      </div>
    </div>
  );
};

export default AboutBox;
