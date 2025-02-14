import { Button, Text, TextInput, View } from "react-native";

const StepTwo = ({ nextStep, prevStep, setFormData, formData }) => (
  <View>
    <Text>Address:</Text>
    <TextInput
      style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      onChangeText={(text) => setFormData({ ...formData, address: text })}
      value={formData.address}
    />
    <Button title="Back" onPress={prevStep} />
    <Button title="Next" onPress={nextStep} />
  </View>
);

export default StepTwo;
