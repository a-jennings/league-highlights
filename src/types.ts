import { CSSProperties } from "react";

export type NavigationOption = {
  label: string;
  link: string;
};

export interface Styles {
  [key: string]: CSSProperties | Styles;
}

export type AppState = {
  spoilerMode: boolean;
  setSpoilerMode: (value: boolean) => void;
};

export type Response<T> = {
  data: {
    cargoquery: Array<T>;
  };
};
