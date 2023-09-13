// React Navigation Header Button
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import PropTypes from 'prop-types';

// Component
import MaterialIconsHeader from './MaterialIconsHeader';

const MenuDropboxComponent = ({ toggleMenu }) => {
  return (
    <HeaderButtons HeaderButtonComponent={MaterialIconsHeader}>
      <Item title="Menu" iconName="menu" onPress={() => toggleMenu()} />
    </HeaderButtons>
  );
};

MenuDropboxComponent.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
};

export default MenuDropboxComponent;
