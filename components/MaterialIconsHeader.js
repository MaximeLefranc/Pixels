// React navigation header buttons
import { HeaderButton } from 'react-navigation-header-buttons';

// Icon
import { MaterialIcons } from '@expo/vector-icons';

// Colors Variables
import Colors from '../styles/Colors';

const MaterialIconsHeader = (props) => {
  return (
    <HeaderButton
      IconComponent={MaterialIcons}
      iconSize={30}
      {...props}
      color={Colors.white}
    />
  );
};

export default MaterialIconsHeader;
