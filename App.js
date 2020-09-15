import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button } from 'native-base';
import {Entypo} from "@expo/vector-icons";

var itemArray=new Array(9).fill("empty");
export default class App extends React.Component {
 
  constructor(props){
    super(props);
    this.state={
      isCross:false,
      winMessage:""
    }
  }

  drawItem= itemNumber => {
     if(itemArray[itemNumber] === 'empty'){
       itemArray[itemNumber] = this.state.isCross;
       this.setState({isCross: !itemArray[itemNumber]}, ()=>{});
     }
     this.winGame();
  };

  chooseItemIcon = itemNumber =>{
    if(itemArray[itemNumber]!=="empty"){
      return itemArray[itemNumber]? "cross": "circle"
    
    }
    return "pencil";
  };

  chooseItemColor= itemNumber=>{
    if(itemArray[itemNumber]!=="empty"){
      return itemArray[itemNumber]?"red":"green";
    }
    return "black";
  };
  resetGame =() => {
    itemArray.fill("empty")
    this.setState({winMessage:""})
    //force update to component
    this.forceUpdate();
  };

  winGame =()=>{
    if((itemArray[0] !== "empty")&& (itemArray[0]==itemArray[1])&& (itemArray[1]==itemArray[2])){
      this.setState({winMessage:(itemArray[0]?'Cross':"Circle").concat(' win')})
    }
    else if((itemArray[3] !== "empty")&& (itemArray[3]==itemArray[4])&& (itemArray[4]==itemArray[5])){
      this.setState({winMessage:(itemArray[0]?'Cross':"Circle").concat(' win')})
    }
    else if((itemArray[6] !== "empty")&& (itemArray[3]==itemArray[7])&& (itemArray[7]==itemArray[8])){
      this.setState({winMessage:(itemArray[0]?'Cross':"Circle").concat(' win')})
    }
    else if((itemArray[0] !== "empty")&& (itemArray[0]==itemArray[3])&& (itemArray[3]==itemArray[6])){
      this.setState({winMessage:(itemArray[0]?'Cross':"Circle").concat(' win')})
    }
    else if((itemArray[1] !== "empty")&& (itemArray[1]==itemArray[4])&& (itemArray[4]==itemArray[7])){
      this.setState({winMessage:(itemArray[0]?'Cross':"Circle").concat(' win')})
    }
    else if((itemArray[2] !== "empty")&& (itemArray[2]==itemArray[5])&& (itemArray[5]==itemArray[8])){
      this.setState({winMessage:(itemArray[0]?'Cross':"Circle").concat(' win')})
    }
    else if((itemArray[0] !== "empty")&& (itemArray[0]==itemArray[4])&& (itemArray[4]==itemArray[8])){
      this.setState({winMessage:(itemArray[0]?'Cross':"Circle").concat(' win')})
    }
    else if((itemArray[2] !== "empty")&& (itemArray[2]==itemArray[4])&& (itemArray[4]==itemArray[6])){
      this.setState({winMessage:(itemArray[0]?'Cross':"Circle").concat(' win')})
    }
    <Text>You win</Text>
  };
render(){
  return (
    <View style={styles.container}>
      <View style={styles.grid}>
      <View style={styles.row}>
      <View style={styles.item}>
      <TouchableOpacity
      onPress={()=>this.drawItem(0)}
      >
      <Entypo
      name={this.chooseItemIcon(0)}
      size={50}
      color={this.chooseItemColor(0)}
      />
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
    <View style={styles.item}>
      <TouchableOpacity
      onPress={()=>this.drawItem(1)}
      >
      <Entypo
      name={this.chooseItemIcon(1)}
      size={50}
      color={this.chooseItemColor(1)}
      />
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
    <View style={styles.item}>
      <TouchableOpacity
      onPress={()=>this.drawItem(2)}
      >
      <Entypo
      name={this.chooseItemIcon(2)}
      size={50}
      color={this.chooseItemColor(2)}
      />
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
    </View>
    <View style={styles.row}>
      <View style={styles.item}>
      <TouchableOpacity
      onPress={()=>this.drawItem(3)}
      >
      <Entypo
      name={this.chooseItemIcon(3)}
      size={50}
      color={this.chooseItemColor(3)}
      />
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
    <View style={styles.item}>
      <TouchableOpacity
      onPress={()=>this.drawItem(4)}
      >
      <Entypo
      name={this.chooseItemIcon(4)}
      size={50}
      color={this.chooseItemColor(4)}
      />
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
    <View style={styles.item}>
      <TouchableOpacity
      onPress={()=>this.drawItem(5)}
      >
      <Entypo
      name={this.chooseItemIcon(5)}
      size={50}
      color={this.chooseItemColor(5)}
      />
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
    </View>
    <View style={styles.row}>
      <View style={styles.item}>
      <TouchableOpacity
      onPress={()=>this.drawItem(6)}
      >
      <Entypo
      name={this.chooseItemIcon(6)}
      size={50}
      color={this.chooseItemColor(6)}
      />
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
    <View style={styles.item}>
      <TouchableOpacity
      onPress={()=>this.drawItem(7)}
      >
      <Entypo
      name={this.chooseItemIcon(7)}
      size={50}
      color={this.chooseItemColor(7)}
      />
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
    <View style={styles.item}>
      <TouchableOpacity
      onPress={()=>this.drawItem(8)}
      >
      <Entypo
      name={this.chooseItemIcon(8)}
      size={50}
      color={this.chooseItemColor(8)}
      />
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
    </View>
    </View>
    <Text style={styles.winMessage}>{this.state.winMessage}</Text>
    <Button full rounded primary style={styles.button} onPress={this.resetGame}>
    <Text style={styles.btntext}>Reset</Text>
    </Button>
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
  grid:{

  },
  row:{
    flexDirection:'row'
  },
  item:{
    borderWidth:2,
    borderColor:"#000000",
    padding:30
  },
  winMessage:{
    padding:20,
    fontSize:25,
    fontWeight:"bold"
  },
  button:{
    margin:20,
    padding:10
  },
  btntext:{
    color:"#FFF",
    fontWeight:"bold"
  }
});
