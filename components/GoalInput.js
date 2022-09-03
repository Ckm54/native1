import React from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

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
    <View style={styles.inputContainer}>
      <TextInput style={styles.textInput} value={enteredGoalText} placeholder='Your course goal here' onChangeText={goalInputHandler}/>
      <Button title='Add Goal' onPress={addGoalHandler} />
     </View>
  )
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
})