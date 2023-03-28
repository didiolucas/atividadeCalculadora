import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Botao from './Botao';

export default function App() {
    
    console.disableYellowBox  = true;
    const[fistNumber, setfistNumber] = useState(0);
    const[secondNumber, setSecondNumber] = useState(0);
    const[signal, setSignal] = useState('');
    const[stringCalculo, setStringCalculo] = useState('0');

    var numeros = [];

  for(var i = 0; i <= 9; i++){
      numeros.push(i);
  }

  function logicaCalculadora(n){
        if(n == "C"){
            setfistNumber(0);
            setSecondNumber(0);
            setSignal("");
            setStringCalculo("0");
        }

        if(signal == ""){
            setfistNumber(parseInt(fistNumber.toString() + n.toString()));
            setStringCalculo(parseInt(fistNumber.toString() + n.toString()));
        }

        if((n == "/" || n == "*" || n == "+" || n =="-") && secondNumber == 0){
            setStringCalculo(fistNumber.toString() + n);
            setSignal(n);
        }

        if(signal != ""){
            setSecondNumber(parseInt(secondNumber.toString() + n.toString()));
            setStringCalculo(fistNumber+signal+parseInt(secondNumber.toString() + n.toString()));
        }

        if(n == "="){
            let resultado = 0;
            if(signal == "+"){
                resultado = fistNumber+secondNumber;
            }else if(signal == "-"){
              resultado = fistNumber-secondNumber;
            }
            else if(signal == "/"){
              resultado = fistNumber/secondNumber;
            }
            else if(signal == "*"){
              resultado = fistNumber*secondNumber;
            }
            setStringCalculo(resultado);
            setSignal("");
            setfistNumber(resultado);
            setSecondNumber(0);
        }
       
  }

    return (

        <View style={{flex:1,backgroundColor:'black'}}>

            <StatusBar hidden />
            <View style={styles.topo}><Text style={{fontSize:24,color:'white'}}>{stringCalculo}</Text></View>
            <View style={{flexDirection:'row',flexWrap:'wrap',height:'16.6%'}}>
                <TouchableOpacity onPress={()=>logicaCalculadora('C')} style={{width:'25%',backgroundColor:'rgb(20,20,20)',justifyContent:'center',alignItems:'center',height:'100%'}}>
                    <Text style={{fontSize:24,color:'white'}}>C</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>logicaCalculadora('+')} style={{width:'15%',backgroundColor:'rgb(20,20,20)',justifyContent:'center',alignItems:'center',height:'100%'}}>
                    <Text style={{fontSize:24,color:'white'}}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>logicaCalculadora('-')} style={{width:'15%',backgroundColor:'rgb(20,20,20)',justifyContent:'center',alignItems:'center',height:'100%'}}>
                    <Text style={{fontSize:24,color:'white'}}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>logicaCalculadora('/')} style={{width:'15%',backgroundColor:'rgb(20,20,20)',justifyContent:'center',alignItems:'center',height:'100%'}}>
                    <Text style={{fontSize:24,color:'white'}}>/</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>logicaCalculadora('*')} style={{width:'15%',backgroundColor:'rgb(20,20,20)',justifyContent:'center',alignItems:'center',height:'100%'}}>
                    <Text style={{fontSize:24,color:'white'}}>*</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>logicaCalculadora('=')} style={{width:'15%',backgroundColor:'rgb(20,20,20)',justifyContent:'center',alignItems:'center',height:'100%'}}>
                    <Text style={{fontSize:24,color:'white'}}>=</Text>
                </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row',flexWrap:'wrap',borderTopColor:'black',borderTopWidth:2,height:'66.8%'}}>
                {
                    numeros.map(function(e){
                    return (<Botao logicaCalculadora={logicaCalculadora} numero={e}></Botao>);
                    })
                }
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    topo:{
      backgroundColor:'rgb(20,20,20)',
      height:'16.6%',
      justifyContent:'center',
      paddingLeft:20
    }
});