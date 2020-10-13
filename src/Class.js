import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
    }

    render() {
        return (
            <>
                <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <Text style={{ fontSize: 200 }}>{this.state.counter}</Text>

                    <Button
                        title = 'Up!'
                        onPress = {() => this.setState({
                            counter: this.state.counter + 1
                        })}
                    />
                </View>
            </>
        )
    }
}

export default App;