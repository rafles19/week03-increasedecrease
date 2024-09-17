import { Button, View, StyleSheet } from 'react-native'


interface ICounter{
    handleIncrement: () => void;
    handleDecrement: () => void;
    value: number;
}

const counter = ({
    handleIncrement, 
    handleDecrement, 
    value}: ICounter) => {
    return (
        <View>

            <Button title="Increment" onPress={handleIncrement} />
            <Button title="Decrement" onPress={handleDecrement} />

            
        </View>
    );
}



export default counter;