import React from "react";
import { Button, StyleSheet, TextInput, View, Modal, Image } from "react-native";

function GoalInput(props) {
  const[enteredGoalText, setenteredGoalText] = React.useState('')

  const goalInputHandler = (enteredText) => {
    setenteredGoalText(enteredText)
  }

  function addGoalHandler() {
    props.addGoalHandler(enteredGoalText)
    setenteredGoalText('')
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/goal.png')} />
      <TextInput style={styles.textInput} value={enteredGoalText} placeholder='Your course goal here' onChangeText={goalInputHandler}/>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title='Cancel' style={styles.buttonContainer} onPress={props.onCancel} color={'#f31282'} />
        </View>
        <View style={styles.button}>
          <Button title='Add Goal' onPress={addGoalHandler} color={'#b180f0'} />
        </View>
        
      </View>
     </ View>
    </Modal>
  )
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    width: '100%',
    padding: 16,
    borderRadius: 6
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  }
})