import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const[enteredGoalText, setenteredGoalText] = React.useState('')
  const [courseGoals, setCourseGoals] = React.useState([])
  const goalInputHandler = (enteredText) => {
    setenteredGoalText(enteredText)
  }

  const addGoalHandler = () => {
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, enteredGoalText])
    setenteredGoalText('')
  }

  return (
    <View style={styles.appContainer}>
     <View style={styles.inputContainer}>
      <TextInput style={styles.textInput} value={enteredGoalText} placeholder='Your course goal here' onChangeText={goalInputHandler}/>
      <Button title='Add Goal' onPress={addGoalHandler} />
     </View>
     <View style={styles.goalsContainer}>
      {courseGoals.map((goal, index) => <Text key={index}>{goal}</Text>)}
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
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
  goalsContainer: {
    flex: 5,
  }
});
