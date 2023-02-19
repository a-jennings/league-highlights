import { CSSProperties } from "react";

export interface Styles {
  [key: string]: CSSProperties | { [key: string]: CSSProperties };
}
