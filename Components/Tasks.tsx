import { useState } from "react";
import { TextInput, FlatList, Button, View, Text } from "react-native";

const Tasks = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  const add = () => {
    setTasks([...tasks, task]);
    setTask("");
  };

  const clear = () => {
    setTasks([]);
    setTask("");
  };

  return (
    <View style={{ marginTop: 20 }}>
      <TextInput onChangeText={setTask} value={task} />
      <Button title="+" onPress={add} />
      <Button title="Clear" onPress={clear} />
      <FlatList data={tasks} renderItem={({ item }) => <Text>{item}</Text>} />
    </View>
  );
};

export default Tasks;
