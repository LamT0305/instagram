import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Divider} from 'react-native-elements';
import styles from './style/BottomTabStyle'

const BottomTabs = ({icons}) => {
  const [activeTab, setActiveTab] = useState('Home');

  const Icon = ({icon}) => (
    <View>
      <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
        <Image
          source={{uri: activeTab === icon.name ? icon.active : icon.inactive}}
          style={[
            styles.icon,
            icon.name === 'Profile' ? styles.profilePic() : null,
            activeTab === 'Profile' && icon.name === activeTab
              ? styles.profilePic(activeTab)
              : null,
          ]}
        />
      </TouchableOpacity>
    </View>
  );
  return (
    <View>
      <Divider width={1} />
      <View style={styles.container}>
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </View>
    </View>
  );
};


export default BottomTabs;
