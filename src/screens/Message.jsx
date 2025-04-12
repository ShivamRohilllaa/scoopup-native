import React, { useState } from 'react';
import { SafeAreaView, Text, View, TextInput, TouchableOpacity, FlatList, Image, StyleSheet, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';

const MessageScreen = () => {
    const [activeTab, setActiveTab] = useState('Messages');

    const activities = [
        { id: '1', name: 'Liam', image: require('../assets/profile.jpg') },
        { id: '2', name: 'Noah', image: require('../assets/profile.jpg') },
        { id: '3', name: 'Oliver', image: require('../assets/profile.jpg') },
        { id: '4', name: 'Elijah', image: require('../assets/profile.jpg') },
        { id: '5', name: 'James', image: require('../assets/profile.jpg') },
        { id: '6', name: 'William', image: require('../assets/profile.jpg') },
    ];

    const messages = [
        { id: '1', name: 'Elizabeth', lastMessage: 'Ok, see you then.', time: '33 min' },
        { id: '2', name: 'Emelie', lastMessage: 'Sticker 😊', time: '23 min', unread: 1 },
        { id: '3', name: 'Abigail', lastMessage: 'Typing..', time: '27 min', unread: 2 },
        { id: '4', name: 'Chloe', lastMessage: 'You: Hello how are you?', time: '55 min' },
        { id: '5', name: 'Penelope', lastMessage: 'You: Hey! What\'s up, long time..', time: '50 min' },
        { id: '6', name: 'Grace', lastMessage: 'You: Great I will write later..', time: '1 hour' },
    ];

    const renderActivity = ({ item }) => (
        <View style={styles.activityContainer}>
            <View style={styles.profileImageContainer}>
                <Image source={item.image} style={styles.profileImage} />
                <View style={styles.gradientBorder} />
            </View>
            <Text style={styles.activityName}>{item.name}</Text>
        </View>
    );

    const renderMessage = ({ item }) => (
        <View style={styles.messageItem}>
            <Image source={require('../assets/profile.jpg')} style={styles.messageImage} />
            <View style={styles.messageContent}>
                <Text style={styles.messageName}>{item.name}</Text>
                <Text style={styles.messageText}>{item.lastMessage}</Text>
            </View>
            <View style={styles.messageInfo}>
                <Text style={styles.messageTime}>{item.time}</Text>
                {item.unread > 0 && (
                    <View style={styles.unreadBadge}>
                        <Text style={styles.unreadCount}>{item.unread}</Text>
                    </View>
                )}
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.title}>Messages</Text>
                <TouchableOpacity onPress={() => {
                    // Handle filter action
                }}>
                    <FontAwesomeIcon icon={faBars} size={24} color="black" />
                </TouchableOpacity>
            </View>

            {/* Search Bar */}
            <View style={styles.searchBar}>
                <FontAwesomeIcon icon={faSearch} size={16} color="#BDBDBD" style={styles.searchIcon} />
                <TextInput
                    placeholder="Search"
                    placeholderTextColor="#BDBDBD"
                    style={styles.searchInput}
                />
            </View>

            {/* Activities */}
            <View style={styles.activitiesSection}>
                <Text style={styles.activitiesTitle}>Activities</Text>
                <FlatList
                    horizontal
                    data={activities}
                    renderItem={renderActivity}
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.activitiesList}
                />
            </View>

            {/* Tabs */}
            <View style={styles.tabs}>
                <TouchableOpacity style={styles.tab} onPress={() => setActiveTab('Messages')}>
                    <Text style={[styles.tabText, activeTab === 'Messages' && styles.activeTabText]}>Messages</Text>
                    {activeTab === 'Messages' && <View style={styles.activeTabIndicator} />}
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab} onPress={() => setActiveTab('Requests')}>
                    <Text style={[styles.tabText, activeTab === 'Requests' && styles.activeTabText]}>Requests</Text>
                    {activeTab === 'Requests' && <View style={styles.activeTabIndicator} />}
                </TouchableOpacity>
            </View>

            {/* Messages List */}
            <FlatList
                data={messages}
                renderItem={renderMessage}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.messagesList}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F2F2F7',
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 20,
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        height: 40,
        fontSize: 16,
        color: '#333',
    },
    activitiesSection: {
        marginBottom: 20,
    },
    activitiesTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    activitiesList: {
        paddingRight: 20,
    },
    activityContainer: {
        marginRight: 15,
        alignItems: 'center',
    },
    profileImageContainer: {
        width: 60,
        height: 60,
        borderRadius: 30,
        overflow: 'hidden',
        borderWidth: 2,
        borderColor: '#E0E0E0',
    },
    profileImage: {
        width: '100%',
        height: '100%',
        borderRadius: 30,
    },
    gradientBorder: {
        position: 'absolute',
        top: -2,
        left: -2,
        right: -2,
        bottom: -2,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: 'transparent',
    },
    activityName: {
        marginTop: 5,
        fontSize: 14,
        color: '#333',
    },
    tabs: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    tab: {
        flex: 1,
        paddingBottom: 10,
        alignItems: 'center',
    },
    tabText: {
        fontSize: 16,
        color: '#999',
    },
    activeTabText: {
        color: '#5856D6',
        fontWeight: 'bold',
    },
    activeTabIndicator: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 2,
        backgroundColor: '#5856D6',
    },
    messagesList: {
        paddingBottom: 20,
    },
    messageItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#F2F2F7',
    },
    messageImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 15,
    },
    messageContent: {
        flex: 1,
    },
    messageName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    messageText: {
        fontSize: 14,
        color: '#999',
        marginTop: 3,
    },
    messageInfo: {
        alignItems: 'flex-end',
    },
    messageTime: {
        fontSize: 12,
        color: '#BDBDBD',
    },
    unreadBadge: {
        backgroundColor: '#5856D6',
        width: 20,
        height: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
    },
    unreadCount: {
        color: 'white',
        fontSize: 12,
    },
});

export default MessageScreen;