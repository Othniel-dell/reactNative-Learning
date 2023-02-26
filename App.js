import {HomeScreen, LoginScreen, SignupScreen, ContactScreen,DetailedScreen} from './screens'
import {HistoryScreen,CustomerServices,Installation,UsageGraph,InternetBills} from './screens/Screen2'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="SignUP" component={SignupScreen}/>
        <Stack.Screen name="Contacts" component={ContactScreen}/>
        <Stack.Screen name="Installation" component={Installation}/>
        <Stack.Screen name="Detailed" component={DetailedScreen}/>
        <Stack.Screen name="History" component={HistoryScreen} />
        <Stack.Screen name="customer" component={CustomerServices}/>
        <Stack.Screen name="UsageGraph" component={UsageGraph} />
        <Stack.Screen name="InternetBills" component={InternetBills}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;