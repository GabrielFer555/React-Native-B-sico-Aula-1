
import { useState } from "react"
import { Dimensions } from "react-native"
import { StyleSheet, TextInput, View, Pressable, Text } from "react-native-web"
const dimensionWidth = Dimensions.get('window').width
const dimensionHeight = Dimensions.get('window').height





export default function Calculadora() {
const [valorACalcular, setValorACalcular] = useState('')

    const handleCalcular = () => {
        try{
            const result = eval(valorACalcular)
            console.log(result)
            setValorACalcular(result)
        }catch(err){
            setValorACalcular('ERRO')
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.visor}>
                <TextInput style={styles.visorField} readOnly={true} value={valorACalcular} />
            </View>
            <View style={styles.grid}>
                <View style={styles.gridItem}>
                    <Pressable style={styles.button} onPress={()=>setValorACalcular(valorACalcular + '1')}>
                        <Text style={styles.buttonText}>1</Text>
                    </Pressable>
                    <Pressable style={styles.button} onPress={()=>setValorACalcular(valorACalcular + '2')}>
                        <Text style={styles.buttonText}>2</Text>
                    </Pressable>
                    <Pressable style={styles.button} onPress={()=>setValorACalcular(valorACalcular + '3')}>
                        <Text style={styles.buttonText}>3</Text>
                    </Pressable>
                </View>
                <View style={styles.gridItem}>
                    <Pressable style={styles.button} onPress={()=>setValorACalcular(valorACalcular + '4')}>
                        <Text style={styles.buttonText}>4</Text>
                    </Pressable>
                    <Pressable style={styles.button} onPress={()=>setValorACalcular(valorACalcular + '5')}>
                        <Text style={styles.buttonText}>5</Text>
                    </Pressable>
                    <Pressable style={styles.button} onPress={()=>setValorACalcular(valorACalcular + '6')}>
                        <Text style={styles.buttonText}>6</Text>
                    </Pressable>
                </View>
                <View style={styles.gridItem}>
                    <Pressable style={styles.button} onPress={()=>setValorACalcular(valorACalcular + '7')}>
                        <Text style={styles.buttonText}>7</Text>
                    </Pressable>
                    <Pressable style={styles.button} onPress={()=>setValorACalcular(valorACalcular + '8')}>
                        <Text style={styles.buttonText}>8</Text>
                    </Pressable>
                    <Pressable style={styles.button} onPress={()=>setValorACalcular(valorACalcular + '9')}>
                        <Text style={styles.buttonText}>9</Text>
                    </Pressable>
                </View>
                <View style={styles.gridItem}>
                    <Pressable style={styles.button} onPress={()=>setValorACalcular(valorACalcular + '0')}>
                        <Text style={styles.buttonText}>0</Text>
                    </Pressable>
                    <Pressable style={styles.button} onPress={()=>setValorACalcular(valorACalcular + '+')}>
                        <Text style={styles.buttonText}>+</Text>
                    </Pressable>
                    <Pressable style={styles.button} onPress={()=>setValorACalcular(valorACalcular + '-')}>
                        <Text style={styles.buttonText}>-</Text>
                    </Pressable>
                </View>
                <View style={styles.gridItem}>
                    <Pressable style={styles.button} onPress={()=>setValorACalcular(valorACalcular + '*')}>
                        <Text style={styles.buttonText}>*</Text>
                    </Pressable>
                    <Pressable style={styles.button} onPress={()=>setValorACalcular(valorACalcular + '/')}>
                        <Text style={styles.buttonText}>/</Text>
                    </Pressable>
                    <Pressable style={styles.button} onPress={()=>setValorACalcular('')}>
                        <Text style={styles.buttonText}>{"<"}
                        </Text>
                    </Pressable>
                </View>
                <View style={styles.gridItem}>
                    <Pressable style={[styles.button, {width:dimensionWidth, backgroundColor:'#3742fa'}]} onPress={()=>handleCalcular()}>
                        <Text style={styles.buttonText}>=</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },
    visor: {
        flex: 1,
        backgroundColor: 'white',
        width: dimensionWidth,
    },
    visorField: {
        width: dimensionWidth,
        height: dimensionHeight * 0.3,
        borderBottomWidth: 2,
        borderStyle: 'solid',
        borderColor: '#000',
        borderCurve: 'circular',
        fontSize: 40,
        padding:20

    },
    grid: {
        flex: 5,
        backgroundColor: '#fff',
        width:dimensionWidth

    },
    gridItem: {
        flex:1,
        flexDirection:'row'
    },
    button: {
        width: dimensionWidth * 0.33,
        height: dimensionHeight * 0.21,
        backgroundColor:'#95a5a6',
        borderWidth: 0.3,
        borderStyle: 'solid',
        borderColor: 'purple',
        borderCurve: 'circular',
        paddingVertical:15,
    },
    buttonText:{
        textAlign:'center',
        fontSize:20,
        color:'#fff'

    }
})