interface TypographyProps {
  fontFamily?: string;
  fontSize: number;
}

export interface Typography {
  h1: TypographyProps;
  h2: TypographyProps;
  h3: TypographyProps;
  h4: TypographyProps;
  h5: TypographyProps;
  h6: TypographyProps;
  p: TypographyProps;
  caption: TypographyProps;
}

export type TypographyType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'caption';

export type TypographyFontType = 'overpass' | 'Space Grotesk';

export interface IText {
  children: string;
  typography: TypographyType;
  fontType: TypographyFontType;
  customStyles?: string;
}
