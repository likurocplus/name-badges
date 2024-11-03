import React from "react";
const NameBadges = () => {
  return (
    <div
      className="bg-contain h-[297mm] w-[210mm]"
      style={{
        backgroundImage: `url("https://cdn.discordapp.com/attachments/1277824538419265578/1300937267619172414/Fixed_Alignments_1.jpg?ex=6727edbe&is=67269c3e&hm=4d88efddf923e17eed6bc044fec0d70d71ca5c46e9298efef1be850c64282200&")`,
      }}
    >
      <div className="flex">
        <div className="flex flex-col space-y-[130px] w-1/2">
          <div className="w-full mt-[130px] pt-[30px] ">
            <p className="font-bold text-3xl text-cyan-900 pb-8 block text-center">
              Nguyen An
            </p>
            <p className="text-2xl block text-center">Software Engineer </p>
            <p className="text-2xl block text-center">TechCorp</p>
          </div>
          <div className="w-full mt-[130px] pt-[30px] ">
            <p className="font-bold text-3xl text-cyan-900 pb-8 block text-center">
              Nguyen An
            </p>
            <p className="text-2xl block text-center">Software Engineer </p>
            <p className="text-2xl block text-center">TechCorp</p>
          </div>
          <div className="w-full mt-[130px] pt-[30px] ">
            <p className="font-bold text-3xl text-cyan-900 pb-8 block text-center">
              Nguyen An
            </p>
            <p className="text-2xl block text-center">Software Engineer </p>
            <p className="text-2xl block text-center">TechCorp</p>
          </div>
        </div>
        {/* Column 2  */}
        <div className="flex flex-col space-y-[130px] w-1/2">
          <div className="w-full mt-[130px] ml-[-10px] pt-[30px] ">
            <p className="font-bold text-3xl text-cyan-900 pb-8 block text-center">
              Nguyen An
            </p>
            <p className="text-2xl block text-center">Software Engineer </p>
            <p className="text-2xl block text-center">TechCorp</p>
          </div>
          <div className="w-full mt-[130px] ml-[-10px] pt-[30px] ">
            <p className="font-bold text-3xl text-cyan-900 pb-8 block text-center">
              Nguyen An
            </p>
            <p className="text-2xl block text-center">Software Engineer </p>
            <p className="text-2xl block text-center">TechCorp</p>
          </div>
          <div className="w-full mt-[130px] ml-[-10px] pt-[30px] ">
            <p className="font-bold text-3xl text-cyan-900 pb-8 block text-center">
              Nguyen An
            </p>
            <p className="text-2xl block text-center">Software Engineer </p>
            <p className="text-2xl block text-center">TechCorp</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NameBadges;
