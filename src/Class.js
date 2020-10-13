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
        console.log('Render class...')
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
                    <Button
                        title = 'Down!'
                        onPress = {() => this.setState({
                            counter: this.state.counter - 1
                        })}
                    />
                    <Button
                        title = 'Reset!'
                        onPress = {() => this.setState({
                            counter: 0
                        })}
                    />
                </View>
            </>
        )
    }
}

export default App;