import { FunctionComponent } from "react";

const ContainerGroup: FunctionComponent = () => {
  return (
    <div className="absolute top-[393px] left-[0px] w-[1206px] h-16 text-left text-lg text-darkslategray-100 font-poppins">
      <div className="absolute top-[0px] left-[0px] w-[1206px] h-16">
        <div className="absolute top-[0px] left-[0px] bg-cornsilk shadow-[0px_4px_10px_rgba(0,_0,_0,_0.25)] w-[1206px] h-16" />
        <div className="absolute top-[20px] left-[15px] w-[930px] h-6">
          <div className="absolute top-[0px] left-[0px] w-[303px] h-6 text-base text-black">
            <div className="absolute top-[2px] left-[0px] text-lg leading-[20px]">
              5
            </div>
            <div className="absolute top-[3px] left-[157px] tracking-[2.83px] leading-[18px] font-medium text-gray1-400">
              Annette Black
            </div>
            <img
              className="absolute top-[0px] left-[125px] rounded-[50%] w-6 h-6 object-cover"
              alt=""
              src="/ellipse-135@2x.png"
            />
            <div className="absolute top-[2px] left-[81px] w-[22px] h-5 text-seagreen-100">
              <div className="absolute top-[0px] left-[12px] leading-[20px]">
                3
              </div>
              <img
                className="absolute h-[56.5%] w-[45.45%] top-[20%] right-[59.09%] bottom-[23.5%] left-[-4.55%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector.svg"
              />
            </div>
          </div>
          <div className="absolute top-[2px] left-[346px] leading-[20px] font-medium">
            Hiroshima Putt
          </div>
          <div className="absolute top-[2px] left-[630px] leading-[20px] font-medium">
            994
          </div>
          <div className="absolute top-[2px] left-[775px] leading-[20px] font-medium">
            556
          </div>
          <div className="absolute top-[2px] left-[895px] leading-[20px] font-medium">
            556
          </div>
        </div>
      </div>
      <div className="absolute top-[22px] left-[534px] leading-[20px] font-medium">
        324
      </div>
    </div>
  );
};

export default ContainerGroup;
