import type { ReactNode } from "react";

export interface CardProps {
  children: ReactNode;
  styles?: CardStyles;
}

export interface CardStyles {
  bgTheme?: string;
  colorTheme?: string;
  shadow?: boolean;
}
