import { FunctionComponent } from "react";

const ContainerBox: FunctionComponent = () => {
  return (
    <div className="absolute top-[233px] left-[0px] w-[1206px] h-16 text-left text-lg text-darkslategray-100 font-poppins">
      <div className="absolute top-[0px] left-[0px] bg-lavender-100 shadow-[2px_4px_10px_#89fff5] w-[1206px] h-16" />
      <div className="absolute top-[12px] left-[15px] w-[929px] h-[41px]">
        <div className="absolute top-[9px] left-[0px] w-[300px] h-6 text-base text-brown">
          <div className="absolute top-[2px] left-[0px] text-xl leading-[20px] font-semibold">
            3
          </div>
          <div className="absolute top-[0px] left-[125px] w-[175px] h-6 text-gray1-400">
            <div className="absolute top-[3px] left-[32px] tracking-[2.83px] leading-[18px] font-medium">
              Arlene McCoy
            </div>
            <img
              className="absolute top-[0px] left-[0px] rounded-[50%] w-6 h-6 object-cover"
              alt=""
              src="/ellipse-133@2x.png"
            />
          </div>
          <div className="absolute top-[2px] left-[81px] w-[18px] h-5 text-seagreen-100">
            <div className="absolute top-[0px] left-[12px] leading-[20px]">
              1
            </div>
            <img
              className="absolute h-[56.5%] w-[55.56%] top-[20%] right-[50%] bottom-[23.5%] left-[-5.56%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector.svg"
            />
          </div>
        </div>
        <div className="absolute top-[11px] left-[631px] leading-[20px] font-medium">
          798
        </div>
        <div className="absolute top-[11px] left-[777px] leading-[20px] font-medium">
          877
        </div>
        <div className="absolute top-[11px] left-[897px] leading-[20px] font-medium">
          877
        </div>
        <div className="absolute top-[11px] left-[519px] leading-[20px] font-medium">
          994
        </div>
        <div className="absolute top-[0px] left-[339px] w-[148px] h-[41px] text-white">
          <div className="absolute top-[0px] left-[0px] rounded bg-blueviolet shadow-[0px_4px_19px_#2e53ff] w-[148px] h-[41px]" />
          <div className="absolute top-[11px] left-[19px] leading-[20px] font-medium">
            Kyoto Swing
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerBox;
