import { addClassNamesToTailwind } from '../../../utils/addClassNamesToTailwind';
import { IText, TypographyFontType, TypographyType } from './types';

const sizeMaps: Record<TypographyType, string> = {
  h1: 'text-6xl',
  h2: 'text-5xl',
  h3: 'text-3xl',
  h4: 'text-lg',
  h5: 'text-lg',
  h6: 'text-lg',
  p: 'text-base',
  caption: 'text-xs',
};

const fontFamilyMaps: Record<TypographyFontType, string> = {
  overpass: 'font-overpass',
  'Space Grotesk': 'font-grotesk',
};

const Text: React.FC<IText> = ({
  children,
  typography,
  fontType,
  customStyles,
}: IText) => {
  const styles = addClassNamesToTailwind(
    sizeMaps[typography],
    fontFamilyMaps[fontType],
    customStyles,
  );

  switch (typography) {
    case 'h1':
      return <h1 className={styles}>{children}</h1>;
    case 'h2':
      return <h2 className={styles}>{children}</h2>;
    case 'h3':
      return <h3 className={styles}>{children}</h3>;
    case 'h4':
      return <h4 className={styles}>{children}</h4>;
    case 'h5':
      return <h5 className={styles}>{children}</h5>;
    case 'h6':
      return <h6 className={styles}>{children}</h6>;
    case 'p':
      return <p className={styles}>{children}</p>;
    case 'caption':
      return <span className={styles}>{children}</span>;
  }
};

export default Text;
