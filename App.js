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

// function sleep (milliseconds) {
//   return new Promise(resolve => setTimeout(resolve, milliseconds))
// }

// const af = async (sec, work) => {
//   await sleep( sec * 1000 )
//   work();
// }

// async function changeButton (sec, parent) {
//   await sleep( sec * 1000 )
//   parent.setState({
//     buttonName: `Changed after ${sec} seconds.`
//   })
// }

// async function changeButton (sec) {
//   this.setState({
//     buttonName: `About to sleep ${sec} seconds`
//   })
//   console.log(`changeButton: before sleeping ${sec} seconds`,Date())
//   await sleep( sec * 1000 )
//   console.log(`changeButton: after sleeping ${sec} seconds`,Date())
//   this.setState({
//     buttonName: `Changed after ${sec} seconds.`
//   })
// }

const myFunc = (event) => { console.log(event.target);  }

export default class App extends React.Component {
  state = {
    buttonName: "Button",
  }

  componentDidMount() {
    //af( 2, () => { this.setState({ buttonName: "Changed after 2 seconds" }) } )
    this.changeButton( 2 )
    this.changeButton( 4 )
    // af(4,() => {
    //   this.setState({ buttonName: "Changed after 4 seconds" })
    // })
    console.log("looping through this.refs")
    { for (const prop in this.refs) { console.log(`${prop}: ${this.refs[a]}`) } }
  }

  changeButton = async (sec) => {
    //console.log(`CBIC: before sleeping ${sec} seconds`,Date())
    await sleep( sec * 1000 );
    //console.log(`CBIC: after sleeping ${sec} seconds`,Date())
    this.setState({buttonName: `CBIC: Changed after ${sec} seconds`})
  }

  render() {
    // console.log("button name =", this.state.buttonName)
    return (
      <View style={styles.screen}>
        <Button
          title   = {this.state.buttonName}
          // title = "Button"
          //onPress = {() => this.setState({buttonName: "pressed Button"}) }
          onPress = {(e) => { console.log(this.props) }}
        />
        {/* <Button
          title="News"
          id={this.props.prop_where_id_is}
          onPress={() => this.setCategory(this.props.prop_where_id_is)}
        /> */}


        <Button
          //title   = {this.state.buttonName}
          id = '5'
          ref={ref => this.button = ref}
          title = "Button"
          //onPress = {() => this.setState({buttonName: "pressed Button"}) }
          // onPress = {myFunc}
          onPress = { () => { for (const prop in this.refs) { console.log(`${prop}: ${this.refs[a]}`) } } }
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