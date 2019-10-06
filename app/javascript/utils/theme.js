import {theme} from '@chakra-ui/core';

const colors = {
  primary: '#201E45',
  light_primary: '#484666',
  dark_primary: '#191734',
  accent: '#F07B7B',
  background: '#E4E4E4',
  text: '#FFFFFF',
  primary_text: '#212121',
  secondary_text: '#757575',
  divider: '#BDBDBD',
};

const customTheme = {
  ...theme,
  colors: {...theme.colors, ...colors},
};

export {customTheme as theme};
