import * as React from "react";
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [key: `t-${string}`]: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}
