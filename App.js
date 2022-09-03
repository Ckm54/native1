import React from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [courseGoals, setCourseGoals] = React.useState([])
  const [modalVisible, setModalVisible] = React.useState(false)

  function startAddGoalHandler() {
    setModalVisible(true)
  }

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, {text: enteredGoalText, id: Math.random().toString()}])
  }

  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter(item => item.id !== id);
    })
  }

  return (
    <View style={styles.appContainer}>
      <Button title='Add New Goal' color={'#5e0acc'} onPress={startAddGoalHandler}/>
     {modalVisible && <GoalInput visible={modalVisible} addGoalHandler={addGoalHandler} />}
     <View style={styles.goalsContainer}>
      <FlatList data={courseGoals} renderItem={(itemData) => {
        return (
          <GoalItem id={itemData.item.id} onDeleteItem={deleteGoalHandler} text={itemData.item.text}/>
        )
      }}
      keyExtractor={(item, index) => {
        return item.id
      }}
      />
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
  goalsContainer: {
    flex: 5,
  },
  
});
