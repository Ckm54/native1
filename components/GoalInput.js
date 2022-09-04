import React from "react";
import { Button, StyleSheet, TextInput, View, Modal } from "react-native";

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
      <TextInput style={styles.textInput} value={enteredGoalText} placeholder='Your course goal here' onChangeText={goalInputHandler}/>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title='Add Goal' onPress={addGoalHandler} />
        </View>
        <View style={styles.button}>
          <Button title='Cancel' style={styles.buttonContainer} onPress={props.onCancel} />
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
    marginBottom: 24,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '100%',
    padding: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  }
})