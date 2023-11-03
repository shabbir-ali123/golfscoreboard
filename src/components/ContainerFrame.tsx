import { FunctionComponent } from "react";

const ContainerFrame: FunctionComponent = () => {
  return (
    <div className="absolute top-[68px] left-[0px] w-[1206px] h-16 text-left text-lg text-darkslategray-100 font-poppins">
      <div className="absolute top-[0px] left-[0px] bg-whitesmoke shadow-[4px_6px_16px_#cf24eb] w-[1206px] h-16" />
      <div className="absolute top-[11px] left-[15px] w-[929px] h-[41px]">
        <b className="absolute top-[17px] left-[0px] text-xl leading-[20px] text-lightseagreen-100">
          1
        </b>
        <div className="absolute top-[15px] left-[125px] w-[161px] h-6 text-base text-gray1-400">
          <div className="absolute top-[3px] left-[32px] tracking-[2.83px] leading-[18px] font-medium">
            Rory McIlroy
          </div>
          <img
            className="absolute top-[0px] left-[0px] rounded-[50%] w-6 h-6 object-cover"
            alt=""
            src="/ellipse-131@2x.png"
          />
        </div>
        <div className="absolute top-[17px] left-[81px] w-[22px] h-5 text-base text-seagreen-100">
          <div className="absolute top-[0px] left-[12px] leading-[20px]">3</div>
          <img
            className="absolute h-[56.5%] w-[45.45%] top-[20%] right-[59.09%] bottom-[23.5%] left-[-4.55%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector.svg"
          />
        </div>
        <div className="absolute top-[17px] left-[630px] leading-[20px] font-medium">
          540
        </div>
        <div className="absolute top-[17px] left-[776px] leading-[20px] font-medium">
          738
        </div>
        <div className="absolute top-[17px] left-[896px] leading-[20px] font-medium">
          738
        </div>
        <div className="absolute top-[17px] left-[519px] leading-[20px] font-medium">
          600
        </div>
        <div className="absolute top-[0px] left-[339px] w-[148px] h-[41px] text-white">
          <div className="absolute top-[0px] left-[0px] rounded bg-fuchsia shadow-[0px_4px_19px_#cf24eb] w-[148px] h-[41px]" />
          <div className="absolute top-[11px] left-[7px] leading-[20px] font-medium">
            Osaka Fairway
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerFrame;
