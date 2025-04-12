import { create } from 'zustand'
import secure from './secure'
import api, { ADDRESS } from './api'

const useGlobal = create((set) => ({
    // here we store all the global state

    // Initialization

    initialized: false,

    init: async () =>{
        const credentials = await secure.get('credentials')
        if (credentials){
            try{
                const response = await api({
                    method:'POST',
                    url: '/login/',
                    data: {
                        username: credentials.username,
                        password: credentials.password,
                    }
                })
                if (response.status !== 200){
                    throw 'Authentication Error'
                }
                const user = response.data.user
                const tokens = response.data.tokens

                secure.set('tokens', tokens)

                set((state) => ({
                    initialized: true,
                    authenticated: true,
                    user: user,
        
                }))
                return
            } catch (error) {
                console.log('useGlobal.init:', error)
            }
        }
        set((state) => ({
            initialized: true,
        }))
    },


    // Authentication

    authenticated: false,
    user: {},

    login: (credentials, user, tokens) => {
        secure.set('credentials', credentials)
        secure.set('tokens', tokens)
        set((state) => ({
            authenticated: true,
            user: user,

        }))
    },

    logout: () => {
        secure.wipe()
        set((state) => ({
            authenticated: false,
            user: {}

        }))
    },

    // WebSocket Management
    socket: null,

    socketConnect: async () => {
        try {
            const tokens = await secure.get('tokens');

            if (!tokens || !tokens.access) {
                console.error("Token not found!");
                return;
            }

            // Determine WebSocket protocol based on backend protocol
            const protocol = ADDRESS.startsWith('https') ? 'wss' : 'ws';

            // Construct WebSocket URL
            const socket = new WebSocket(
                `${protocol}://${ADDRESS.replace(/^https?:\/\//, '')}ws/chat/?token=${tokens.access}`
            );

            // WebSocket Event Handlers
            socket.onopen = () => {
                console.log("WebSocket connection established!");
            };

            socket.onmessage = (event) => {
                console.log("Message received:", event.data);
            };

            socket.onerror = (error) => {
                console.error("WebSocket error:", error);
            };

            socket.onclose = (event) => {
                console.log("WebSocket closed:", event);
            };

            // Save socket in state
            set((state) => ({
                socket: socket
            }));

            console.log("TOKENS:", tokens);
        } catch (error) {
            console.error("Error connecting to WebSocket:", error);
        }
    },

    socketClose: () => {
        set((state) => {
            if (state.socket) {
                state.socket.close();
                console.log("WebSocket connection closed!");
            }
            return { socket: null };
        });
    },



}))

export default useGlobal