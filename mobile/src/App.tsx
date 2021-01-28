import React from 'react';

import { View, StatusBar, Text } from 'react-native';

const App: React.FC = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#312e38" />
    <View style={{ flex: 1, backgroundColor: '#312e38' }}>
      <Text>Inicio</Text>
    </View>
  </>
);

export default App;
