import { useState } from "react";

import { PricingCard } from "../components";

const Pricing = () => {
  const [switchVal, setSwitchVal] = useState(false);

  console.log(switchVal)

  return <div className="mt-36">
    <div className="wrapper">
      <h1 className="head_text text-center"> See our <span className="green_text">pricing plan</span></h1>
      <div className="py-9 flex items-center justify-center gap-7">
        <p className={`font-bold ${
          switchVal ? "text-primary-black" : "text-primary-green"
          } trnsition-all duration-300 ease-in`}>
            Monthly
          </p>
          <label className="relative infline-flex items-center mb-r cursor-pointer">
        <input type="checkbox" className="sr-only peer" value={switchVal} onChange={() => setSwitchVal((prev) => !prev)}/>
        <div className="w-11 h-6 bg-gray-200 rounded-full peer
                        dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white
                        after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full
                        after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-green"/>
      </label>
      </div>

    </div>
    
  </div>;
};

export default Pricing;
