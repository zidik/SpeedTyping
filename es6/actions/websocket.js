export const WEBSOCKET_CONNECTION_ESTABLISHED = "WEBSOCKET_CONNECTION_ESTABLISHED";
export const WEBSOCKET_CONNECTION_DROPPED = "WEBSOCKET_CONNECTION_DROPPED";
export const WEBSOCKET_CONNECTION_UNAVAILABLE = "WEBSOCKET_CONNECTION_UNAVAILABLE";

const conf = {
    port: 8081,
    host: 'localhost'
};

let connection;

export function connectionRequested(messageActionCreator) {
    return (dispatch) => {
        connection = new WebSocket(
            `ws://${conf.host}:${conf.port}/`,
            'echo-protocol'
        );

        connection.onopen = () => {
            dispatch(connectionEstablished())
        };

        connection.onclose = () => {
            dispatch(connectionDropped())
        };

        connection.onmessage = (message) => {
            let parsedMessage;
            try {
                parsedMessage = JSON.parse(message.data);
            } catch (error) {
                console.error("error parsing websocket message", message.data);
                return;
            }

            const action = messageActionCreator(parsedMessage);
            dispatch(action);

        }
    };
}

// This should not be used directly in containers.
// It is impure and is not an action.
// Other action creators should import this and wrap with the domain action
export const sendMessage = (message) => {
    let jsonMessage;
    try {
        jsonMessage = JSON.stringify(message);
    } catch (error) {
        console.error("Cannot stringify websocket message", error, message);
        return;
    }
    connection.send(jsonMessage);
};

const connectionEstablished = () => {
    console.log("connected to websocket");
    return {
        type: WEBSOCKET_CONNECTION_ESTABLISHED,
        payload: {}
    }
};

const connectionDropped = () => {
    console.log("disconnected from websocket");
    return {
        type: WEBSOCKET_CONNECTION_DROPPED,
        payload: {}
    }
};
