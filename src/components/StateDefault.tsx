import { FunctionComponent, useMemo, type CSSProperties } from "react";

type StateDefaultType = {
  search?: string;

  /** Style props */
  stateDefaultWidth?: CSSProperties["width"];
  stateDefaultPosition?: CSSProperties["position"];
  stateDefaultTop?: CSSProperties["top"];
  stateDefaultLeft?: CSSProperties["left"];
  stateDefaultBorder?: CSSProperties["border"];
  stateDefaultHeight?: CSSProperties["height"];
  searchFontSize?: CSSProperties["fontSize"];
};

const StateDefault: FunctionComponent<StateDefaultType> = ({
  search,
  stateDefaultWidth,
  stateDefaultPosition,
  stateDefaultTop,
  stateDefaultLeft,
  stateDefaultBorder,
  stateDefaultHeight,
  searchFontSize,
}) => {
  const stateDefaultStyle: CSSProperties = useMemo(() => {
    return {
      width: stateDefaultWidth,
      position: stateDefaultPosition,
      top: stateDefaultTop,
      left: stateDefaultLeft,
      border: stateDefaultBorder,
      height: stateDefaultHeight,
    };
  }, [
    stateDefaultWidth,
    stateDefaultPosition,
    stateDefaultTop,
    stateDefaultLeft,
    stateDefaultBorder,
    stateDefaultHeight,
  ]);

  const searchStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: searchFontSize,
    };
  }, [searchFontSize]);

  return (
    <div
      className="rounded-md bg-white shadow-[0px_1px_2px_rgba(0,_0,_0,_0.06),_0px_0px_0px_1px_rgba(104,_113,_130,_0.16)] w-80 overflow-hidden flex flex-row items-center justify-start py-1.5 px-3 box-border gap-[8px] text-left text-sm text-gray-300 font-body-b2"
      style={stateDefaultStyle}
    >
      <img className="relative w-4 h-4" alt="" src="/search.svg" />
      <div className="flex-1 relative leading-[20px]" style={searchStyle}>
        {search}
      </div>
    </div>
  );
};

export default StateDefault;
