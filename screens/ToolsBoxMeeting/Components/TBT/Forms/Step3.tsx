import { Button, Text, View } from "react-native";

const StepThree = ({ prevStep, submitForm }) => (
  <View>
    <Text>Review and Submit</Text>
    <Button title="Back" onPress={prevStep} />
    <Button title="Submit" onPress={submitForm} />
  </View>
);

export default StepThree;
