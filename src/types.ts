import { CSSProperties } from "react";

export type NavigationOption = {
  label: string;
  link: string;
};

export interface Styles {
  [key: string]: CSSProperties | { [key: string]: CSSProperties };
}
