import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import useGlobal from "../core/global";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {launchImageLibrary} from 'react-native-image-picker';

function ProfileImage() {
    return (
        <TouchableOpacity
         style={{marginBottom: 20}}
         onPress={() => launchImageLibrary({ includeBase64: true }, (response) =>{
            console.log('launchImageLibrary', response)
            if (response.didCancel) return
            const file=response.assets[0]

         }
        )}
         >
            <Image 
                source={require('../assets/profile.jpg')} 
                style={{ width:200, height:200}}
                />
                <View style={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    backgroundColor: '#202020',
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderWidth: 3,
                    borderColor: 'grey',
                }}>
                    <FontAwesomeIcon icon='pencil' size={15} color='#d0d0d0'  />

                </View>
        </TouchableOpacity>
    )

}

const ProfileScreen = () => {
    const logout = useGlobal(state => state.logout)
    const user = useGlobal(state => state.user)


    return (
        <View style={styles.container}>
            <ProfileImage />
            
            <Text style={styles.name}>{user.username}</Text>
            <Text style={styles.username}>@{user.username}</Text>

            <TouchableOpacity style={styles.logoutButton} onPress={logout}>
                <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
        backgroundColor: '#ccc',
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 20,
    },
    username: {
        fontSize: 16,
        color: '#666',
        marginBottom: 20,
    },
    logoutButton: {
        width: "30%",
        height: 50,
        backgroundColor: "#8a2487",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        marginBottom: 15,
    },
    logoutText: {
        color: '#fff',
        fontSize: 18,
        marginLeft: 10,
    },
    icon: {
        marginRight: 5,
    },
});

export default ProfileScreen;