import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Divider} from 'react-native-elements';

export const bottomTabIcons = [
  {
    name: 'Home',
    active: 'https://img.icons8.com/ios-filled/32/000000/home.png',
    inactive: 'https://img.icons8.com/ios/32/000000/home--v1.png',
  },
  {
    name: 'Search',
    inactive: 'https://img.icons8.com/material/32/000000/search--v1.png',
    active: 'https://img.icons8.com/ios-filled/32/000000/search--v3.png',
  },
  {
    name: 'Reels',
    active: 'https://img.icons8.com/ios-filled/32/000000/instagram-reel.png',
    inactive: 'https://img.icons8.com/ios/32/000000/instagram-reel.png',
  },
  {
    name: 'Shop',
    active: 'https://img.icons8.com/ios-filled/32/000000/online-store.png',
    inactive: 'https://img.icons8.com/ios/32/000000/online-store.png',
  },
  {
    name: 'Profile',
    active:
      'https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/304577153_1697711327264641_725881397812782957_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=KBN9aMADFIAAX9CqyTw&tn=EM3rWr3wDa4fO78D&_nc_ht=scontent.fhan14-3.fna&oh=00_AT-nnYw2rDNekqEsFcES689iNMnr3IyT1_jasw3shn5asg&oe=63305F7C',
    inactive:
      'https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/304577153_1697711327264641_725881397812782957_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=KBN9aMADFIAAX9CqyTw&tn=EM3rWr3wDa4fO78D&_nc_ht=scontent.fhan14-3.fna&oh=00_AT-nnYw2rDNekqEsFcES689iNMnr3IyT1_jasw3shn5asg&oe=63305F7C',
  },
];

const BottomTabs = ({icons}) => {
  const [activeTab, setActiveTab] = useState('Home');

  const Icon = ({icon}) => (
    <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
      <Image
        source={{uri: activeTab === icon.name ? icon.active : icon.inactive}}
        style={[
          styles.icon,
          icon.name === 'Profile' ? styles.ProfilePic() : null,
          activeTab==='Profile' && icon.name === 'Profile' ? styles.ProfilePic(activeTab): null
        ]}
      />
    </TouchableOpacity>
  );
  return (
    <View>
      <Divider width={1} orientation="horizontal" />
      <View style={styles.container}>
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height:50,
    paddingTop:8,
  },
  icon: {
    width: 30,
    height: 30,
  },
  ProfilePic: (activeTab = '') => ({
    borderRadius: 50,
    borderWidth: activeTab === 'Profile' ? 0 : 2,
    borderColor: '#fff',
  }),
});
export default BottomTabs;
