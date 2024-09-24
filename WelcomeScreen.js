import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { CustomButton } from "./Src/Components/CustomButton";
import { CustomTextInput } from "./Src/Components/CustomTextInput";
import CheckBox from "expo-checkbox";
import { Picker } from "@react-native-picker/picker";
import { AppContext } from "./AppContext";

const WelcomeScreen = () => {
  const { cnic, setCnic } = useContext(AppContext);
  const { name, setName } = useContext(AppContext);
  const { regno, setRegno } = useContext(AppContext);
  const { className, setClassName } = useContext(AppContext);
  const { selectedNationality, setSelectedNationality } =
    useContext(AppContext);
  const { setSelectedTraining } = useContext(AppContext);
  const navigation = useNavigation();
  const [search, setSearch] = useState("");
  const [isSelected, setSelection] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const trainingData = [
    {
      id: "1",
      imageUrl:
        "https://images.pexels.com/photos/841131/pexels-photo-841131.jpeg?auto=compress&cs=tinysrgb&w=600",
      des: "Legs dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      title: "Legs & Abs",
      subText: "Gym Training",
    },
    {
      id: "2",
      imageUrl:
        "https://images.pexels.com/photos/3822583/pexels-photo-3822583.jpeg?auto=compress&cs=tinysrgb&w=600",
      des: "Yoga dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      title: "Yoga Experts",
      subText: "Community",
    },
    {
      id: "3",
      imageUrl:
        "https://images.pexels.com/photos/841131/pexels-photo-841131.jpeg?auto=compress&cs=tinysrgb&w=600",
      des: "Legs dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      title: "Legs & Abs",
      subText: "Gym Training",
    },
    {
      id: "4",
      imageUrl:
        "https://images.pexels.com/photos/3822583/pexels-photo-3822583.jpeg?auto=compress&cs=tinysrgb&w=600",
      des: "Yoga dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      title: "Yoga Experts",
      subText: "Community",
    },
  ];

  const mainImages = [
    "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://t4.ftcdn.net/jpg/00/99/82/15/360_F_99821575_nVEHTBXzUnTcLIKN6yOymAWAnFwEybGb.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQVRV35kxD-XuYl9kInJp5derGUxAPFOKrypsL7cyQvinGYiai8-5PVC8GqauMyt2e8eQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt1Sa_5CtRi3Qb90J-Km990mbAcTwHUvOcg8TCKWmEMb-xsSZD0ZTtaUj33iy4zpOEHII&usqp=CAU",
  ];

  const filteredData = trainingData.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleImagePress = (item) => {
    setSelectedTraining(item)
    navigation.navigate("TrainingDetailScreen")
  };

  const renderTrainingItem = ({ item }) => (
    <TouchableOpacity
      style={styles.trainingItem}
      onPress={() => handleImagePress(item)}
    >
      <Image source={{ uri: item.imageUrl }} style={styles.trainingImage} />
      <Text style={styles.trainingText}>{item.title}</Text>
      <Text style={styles.trainingSubText}>{item.subText}</Text>
      <Text style={styles.trainingDescription}>{item.des}</Text>
    </TouchableOpacity>
  );

  const renderMainImage = ({ item }) => (
    <Image source={{ uri: item }} style={styles.mainImage} />
  );

  const validateCnic = (cnic) => {
    const cleanCnic = cnic.replace(/\D/g, "");
    return cleanCnic.length === 13 && isSelected;
  };

  const handleShowCnic = () => {
    if (validateCnic(cnic)) {
      navigation.navigate(
        "DetailInfoScreen",
      );
      setSelection(false);
    } else {
      Alert.alert("Error");
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={styles.inner}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Icon name="menu-outline" size={25} style={styles.drawerIcon} />
          </TouchableOpacity>
          <Text style={styles.appName}>
            <Text style={styles.titlePurple}>FIT</Text>
            <Text style={styles.titleOriginal}>SYNC</Text>
          </Text>
        </View>
        <View style={styles.searchContainer}>
          <CustomTextInput
            mainStyle={styles.searchInput}
            keyboardType="default"
            setPlaceholder="Search courses..."
            setPlaceholderTextColor="grey"
            value={search}
            onChangeText={setSearch}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Hey! Welcome</Text>
          <Text style={styles.name}>Saad!</Text>
        </View>
        <View style={styles.mainImageContainer}>
          <FlatList
            data={mainImages}
            renderItem={renderMainImage}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <Text style={styles.sectionTitle}>Popular Training</Text>
        <FlatList
          data={filteredData}
          renderItem={renderTrainingItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.trainingContainer}
        />
        <TouchableOpacity
          onPress={() => setIsCollapsed(!isCollapsed)}
          style={styles.collapseButton}
        >
          <Text style={styles.collapseButtonText}>
            {isCollapsed ? "Show More" : "Show Less"}
          </Text>
        </TouchableOpacity>
        {!isCollapsed && (
          <>
           <CustomTextInput
              mainStyle={styles.cnicInput}
              keyboardType="text"
              setPlaceholder="Enter Your Name"
              setPlaceholderTextColor="grey"
              value={name}
              onChangeText={setName}
              maxLength={13}
            />
             <CustomTextInput
              mainStyle={styles.cnicInput}
              keyboardType="text"
              setPlaceholder="Enter Your Regno"
              setPlaceholderTextColor="grey"
              value={regno}
              onChangeText={setRegno}
              maxLength={13}
            />
                 <CustomTextInput
              mainStyle={styles.cnicInput}
              keyboardType="text"
              setPlaceholder="Enter Your Class"
              setPlaceholderTextColor="grey"
              value={className}
              onChangeText={setClassName}
              maxLength={13}
            />
            <CustomTextInput
              mainStyle={styles.cnicInput}
              keyboardType="numeric"
              setPlaceholder="Enter Your CNIC"
              setPlaceholderTextColor="grey"
              value={cnic}
              onChangeText={setCnic}
              maxLength={13}
            />
            <View style={styles.checkboxContainer}>
              <Text style={styles.checkboxText}>Have you entered CNIC?</Text>
              <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                boxType="square"
              />
            </View>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={selectedNationality}
                onValueChange={(itemValue) => setSelectedNationality(itemValue)}
                style={styles.picker}
              >
                <Picker.Item label="Select Nationality" value="" />
                <Picker.Item label="Pakistani" value="pakistani" />
                <Picker.Item label="Indian" value="indian" />
                <Picker.Item label="American" value="american" />
              </Picker>
            </View>
            <CustomButton
              mainStyle={styles.showCnicButton}
              ButtonTitle="Show Detail"
              onPress={handleShowCnic}
            />
          </>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    marginTop: 30,
  },
  inner: {
    padding: 20,
    paddingBottom: 80, // Ensure there's enough space for the button
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  drawerIcon: {
    marginRight: 15,
  },
  appName: {
    flex: 1,
    fontSize: 18,
    paddingLeft: 100,
    fontWeight: "bold",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 8,
    paddingHorizontal: 16,
    height: 40,
    marginBottom: 20,
    elevation: 3,
  },
  searchInput: {
    flex: 1,
    backgroundColor: "#FFF",
    borderRadius: 8,
    paddingHorizontal: 16,
    height: "100%",
  },
  textContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    textAlign: "center",
  },
  name: {
    fontWeight: "bold",
    fontSize: 22,
    marginTop: 10,
    textAlign: "center",
  },
  mainImageContainer: {
    marginTop: 25,
    marginBottom: 10,
  },
  mainImage: {
    width: 300,
    height: 150,
    borderRadius: 15,
    marginRight: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  trainingContainer: {},
  trainingItem: {
    width: 160,
    backgroundColor: "#fff",
    padding: 10,
    height: 220, // Increased height to accommodate description
    borderRadius: 10,
    marginRight: 10,
  },
  trainingImage: {
    width: 140,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  trainingText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  trainingSubText: {
    fontSize: 12,
    color: "#888",
  },
  trainingDescription: {
    fontSize: 12,
    color: "#666",
    marginTop: 5,
  },
  titlePurple: {
    color: "purple",
  },
  titleOriginal: {
    color: "black",
  },
  cnicInput: {
    backgroundColor: "white",
    padding: 12,
    borderRadius: 10,
    marginTop: 20,
    height: 50,
    width: "100%",
  },
  showCnicButton: {
    marginTop: 20,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 12,
    borderRadius: 10,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#ddd",
    height: 50,
    width: "100%",
  },
  checkboxText: {
    flex: 1,
    fontSize: 16,
  },
  pickerContainer: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    marginTop: 20,
  },
  picker: {
    height: 50,
    width: "100%",
  },
  collapseButton: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: "#8E44AD",
    borderRadius: 5,
    alignItems: "center",
  },
  collapseButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default WelcomeScreen;
