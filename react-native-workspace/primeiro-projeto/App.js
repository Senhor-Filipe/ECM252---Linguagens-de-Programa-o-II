import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';
import { Button } from 'react-native';

/*export default function App() {
  const [outputText, setOutputText] = useState('Texto inicial');
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <StatusBar style="auto" />
      <Button title="Alterar texto" onPress={() => {setOutputText("Novo Texto")}}/>
    </View>
  );
}*/

export default class App extends React.Component{
  constructor (props){
    super (props);
    this.state = {
      outputText: "Novo Texto"
  }
}
  render (){
    return (
      <View style={styles.container}>
      <Text>{this.state.outputText}</Text>
      <StatusBar style="auto"/>
      <Button
        title="Alterar texto"
        onPress={() => {this.setState({contador: this.state.contador + 1})}}
      />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
