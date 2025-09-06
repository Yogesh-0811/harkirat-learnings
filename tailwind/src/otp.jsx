import { useRef } from "react";

export function Otp() {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();

  return (
    <div className="flex justify-center">
      <SubOtpBox reference={ref1} onDone={() => ref2.current.focus()} />
      <SubOtpBox reference={ref2} onDone={() => ref3.current.focus()} onBack={()=>ref1.current.focus()} />
      <SubOtpBox reference={ref3} onDone={() => ref4.current.focus()} onBack={()=>ref2.current.focus()} />
      <SubOtpBox reference={ref4} onDone={() => ref5.current.focus()} onBack={()=>ref3.current.focus()}/>
      <SubOtpBox reference={ref5} onDone={() => ref6.current.focus()} onBack={()=>ref4.current.focus()}/>
      <SubOtpBox reference={ref6} onDone={() => ref6.current.blur()} onBack={()=>ref5.current.focus()}/>
    </div>
  );
}

function SubOtpBox({ reference, onDone = () => {},onBack = () => {} }) {
  return (
    <input
      ref={reference}
      inputMode="numeric"
      pattern="[0-9]"
      maxLength={1}
      onChange={(e) => {
        if (/^[0-9]$/.test(e.target.value) && e.target.value.length === 1) {
          onDone();
        }else{
            e.target.value = ""
        }
      }}
      onKeyDown={(e)=>{
        if(e.key === "Backspace" && e.target.value === ""){
            onBack();
        }
      }}
      type="text"
      className="m-1 w-[40px] h-[50px] rounded-xl bg-gray-800 outline-none text-center text-white"
    />
  );
}
