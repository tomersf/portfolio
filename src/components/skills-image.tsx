import Image from "next/image";
import React from "react";

type Props = {};

const SkillsImage = (props: Props) => {
  return (
    <>
      <Image
        src="https://cdn-icons-png.flaticon.com/512/10255/10255704.png"
        alt="Skills"
        width={256}
        height={256}
        className="hidden md:block"
      />
      <Image
        src="https://cdn-icons-png.flaticon.com/512/10255/10255704.png"
        alt="Skills"
        width={126}
        height={256}
        className="md:hidden"
      />
    </>
  );
};

export default SkillsImage;
