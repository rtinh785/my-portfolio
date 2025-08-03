import Box from "./Box";

const AboutBox = () => {
  return (
    <div>
      <div className="about__boxs grid grid-cols-4 gap-x-[1.875rem] mt-[4.25rem]">
        <Box icon="icon-fire" title="198" subTitle="Project completed" />
        <Box icon="icon-cup" title="5670" subTitle="Cup of coffe" />
        <Box icon="icon-people" title="427" subTitle="Satisfied clients" />
        <Box icon="icon-badge" title="35" subTitle="Nominees winner" />
      </div>
    </div>
  );
};

export default AboutBox;
