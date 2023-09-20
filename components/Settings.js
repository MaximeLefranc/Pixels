// React
import { useCallback, useState } from 'react';

// React Native
import { View, Text, TouchableOpacity } from 'react-native';

// Redux
import { useDispatch } from 'react-redux';

// Actions
import { actionSetCategoriesSettings } from '../redux/actions/settingsAction';

// Components
import CustomSwitch from './CustomSwitch';

// PropTypes
import PropTypes from 'prop-types';

// Style
import { globalStyles } from '../styles/AppStyles';
import Colors from '../styles/Colors';

const Settings = ({ toggleModal }) => {
  const dispatch = useDispatch();

  const [isAnimals, setIsAnimals] = useState(true);
  const [isTravel, setIsTravel] = useState(true);
  const [isCars, setIsCars] = useState(true);

  const allSettingsAreFalse = !isAnimals && !isTravel && !isCars;

  const saveSettings = useCallback(() => {
    const savedSettings = {
      animals: isAnimals,
      travels: isTravel,
      cars: isCars,
    };
    dispatch(actionSetCategoriesSettings(savedSettings));
    toggleModal();
  }, [isAnimals, isTravel, isCars]);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.settingsTitle}>Réglages</Text>
      <Text style={globalStyles.settingsText}>
        Utilisez les paramètres ci-dessous pour gérer les catégories à afficher
      </Text>
      <View style={globalStyles.divider} />
      <CustomSwitch
        label="Voyages"
        value={isTravel}
        handleSwitch={(newVal) => setIsTravel(newVal)}
      />
      <CustomSwitch
        label="Animaux"
        value={isAnimals}
        handleSwitch={(newVal) => setIsAnimals(newVal)}
      />
      <CustomSwitch
        label="Voitures"
        value={isCars}
        handleSwitch={(newVal) => setIsCars(newVal)}
      />
      <View style={globalStyles.validationContainer}>
        {allSettingsAreFalse ? (
          <Text style={{ ...globalStyles.settingsText, color: Colors.cliked }}>
            Veuillez Sélectionner au moins une catégorie
          </Text>
        ) : (
          <TouchableOpacity
            style={globalStyles.settingsValidationButton}
            onPress={saveSettings}
          >
            <Text style={globalStyles.settingsValidationButtonText}>
              Valider les paramètres
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

Settings.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};

export default Settings;
