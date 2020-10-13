import React, {useState} from 'react';
import { View, Text, Button } from 'react-native';


const App = (props) => {

    const [counter, setCounter] = useState(0)

    return (
        <>
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text style={{ fontSize: 200 }}>{counter}</Text>

                <Button
                    title='Up!'
                    onPress={() => setCounter(counter + 1)}
                />
            </View>
        </>
    )
}

export default App;