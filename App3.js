import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import sleep from './sleep'

/*********** Task ************
 *  Render a button
 *    - define async function
 *    - sleeps for 2 seconds
 *    - returns num results
 *    - experiemtn with promise
 *    - then introduce fetch
 *    - create a new async function 
 *  (1) SINGLE ASYNC FUNCTION
 *    - trigger async function once app comes up
 *  (2) TWO ASYNC FUNCTIONS
 *    - call two instances of async function - 1 sec and 3 second
 *  (3) REPEATING ASYNC FUNCTIONS
 *    - generate random sleep time 500ms - 1 second
 *    - use mutex to update text in the button
 *    - have two instances of async function running simultaneously
*/

const randomInt = (a=500,b=1000) => {
  const low = Math.min(a,b)
  const range = Math.abs(a-b)
  var randomNumber = Math.floor(Math.random() * range) + low;
  // this.setState({
  //   NumberHolder : RandomNumber
  // })
  console.log("RI: ",randomNumber)
  return randomNumber
}

export default class App extends React.Component {
  state = {
    buttonName: "Button",
    running: true,
  }

  componentDidMount() {
    this.changeButtonMS('A')
    this.changeButtonMS('B')
  }

  changeButtonMS = async (label) => {
    //console.log(`CBIC: before sleeping ${sec} seconds`,Date())
    while(this.state.running) {
      let ms = randomInt(1,300)
      await sleep( ms )
      //console.log(`CBIC: after sleeping ${sec} seconds`,Date())
      if (this.state.running)
        this.setState({buttonName: `${label}: Changed after ${ms} ms`})
    }
  }

  changeButton = async (sec) => {
    //console.log(`CBIC: before sleeping ${sec} seconds`,Date())
    await sleep( sec * 1000 )
    //console.log(`CBIC: after sleeping ${sec} seconds`,Date())
    this.setState({buttonName: `CBIC: Changed after ${sec} seconds`})
  }

  render() {
    return (
      <View style={styles.screen}>
        <Button
          title   = {this.state.buttonName}
          onPress = {() => {
            this.setState({running: false},
              () => this.setState({buttonName: "pressed Button"})
            )
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#F1F1F1",
  },
});