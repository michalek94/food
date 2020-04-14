import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultsDetailsScreen from './src/screens/ResultsDetailsScreen';

const navigator = createStackNavigator({
    Search: SearchScreen,
    ResultsDetails: ResultsDetailsScreen
}, {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
        title: 'Business Search'
    }
});

export default createAppContainer(navigator);
