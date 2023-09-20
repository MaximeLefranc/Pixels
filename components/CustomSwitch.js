// React Native
import { Text, View, Switch } from 'react-native';

// PropTypes
import PropTypes from 'prop-types';

// Style
import { globalStyles } from '../styles/AppStyles';
import Colors from '../styles/Colors';
import { isEnabled } from 'react-native/Libraries/Performance/Systrace';

const CustomSwitch = ({ label, value, handleSwitch }) => {
  return (
    <View style={globalStyles.switchContainer}>
      <Text style={globalStyles.settingsLabel}>{label}</Text>
      <Switch
        value={value}
        onValueChange={handleSwitch}
        trackColor={{ false: Colors.lightGrey, true: Colors.cliked }}
        thumbColor={value && Colors.white}
      />
    </View>
  );
};

CustomSwitch.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  handleSwitch: PropTypes.func.isRequired,
};

export default CustomSwitch;
