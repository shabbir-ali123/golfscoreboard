import { FunctionComponent } from "react";

const ContainerSection: FunctionComponent = () => {
  return (
    <div className="absolute top-[153px] left-[0px] w-[1206px] h-16 text-left text-lg text-darkslategray-100 font-poppins">
      <div className="absolute top-[0px] left-[0px] bg-lightcyan shadow-[3px_4px_14px_#9aacfd] w-[1206px] h-16" />
      <div className="absolute top-[12px] left-[15px] w-[930px] h-[41px]">
        <div className="absolute top-[11px] left-[81px] w-[23px] h-5 text-base text-seagreen-100">
          <div className="absolute top-[0px] left-[0px] w-[23px] h-5">
            <div className="absolute top-[0px] left-[12px] leading-[20px]">
              5
            </div>
            <img
              className="absolute h-[56.5%] w-[43.48%] top-[20%] right-[60.87%] bottom-[23.5%] left-[-4.35%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector.svg"
            />
          </div>
        </div>
        <div className="absolute top-[11px] left-[0px] text-xl leading-[20px] font-semibold text-darkblue">
          2
        </div>
        <div className="absolute top-[9px] left-[125px] w-[125px] h-6 text-base text-gray1-400">
          <div className="absolute top-[3px] left-[32px] tracking-[2.83px] leading-[18px] font-medium">{`Brooklyn `}</div>
          <img
            className="absolute top-[0px] left-[0px] rounded-[50%] w-6 h-6 object-cover"
            alt=""
            src="/ellipse-132@2x.png"
          />
        </div>
        <div className="absolute top-[11px] left-[630px] leading-[20px] font-medium">
          426
        </div>
        <div className="absolute top-[11px] left-[776px] leading-[20px] font-medium">
          583
        </div>
        <div className="absolute top-[11px] left-[896px] leading-[20px] font-medium">
          583
        </div>
        <div className="absolute top-[11px] left-[520px] leading-[20px] font-medium">
          826
        </div>
        <div className="absolute top-[0px] left-[339px] w-[148px] h-[41px] text-white">
          <div className="absolute top-[0px] left-[0px] rounded bg-seagreen-100 shadow-[0px_4px_19px_#268d61] w-[148px] h-[41px]" />
          <div className="absolute top-[11px] left-[35px] leading-[20px] font-medium">
            Sapporo
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerSection;
