import React from "react";
import WhatElseBox from "./WhatElseBox";
const WhatElse = ({ data }) => {
  return (
    <section className="WhatElse">
      <div className="WhatElse__Heading">What else you will get?</div>
      <div className="WhatElse__Content">
        {data?.map((item, i) => (
          <WhatElseBox key={`sdt4dfg@35${i}`} data={item} />
        ))}
      </div>
    </section>
  );
};

export default React.memo(WhatElse);
