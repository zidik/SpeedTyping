import {
    connectionRequested,
    sendMessage,
    WEBSOCKET_CONNECTION_ESTABLISHED,
    WEBSOCKET_CONNECTION_DROPPED,
} from './../../es6/actions/websocket'

import { WebSocket, Server } from 'mock-socket'

const actualWebSocket = window.WebSocket;
let clock, dispatch, getState;

describe('Websocket actions', () => {
    let mockServer;

    before(() => {
        global.WebSocket = WebSocket;
        clock = sinon.useFakeTimers()
    });
    after(() => {
        global.WebSocket = actualWebSocket;
        clock.restore()
    });

    beforeEach(() => {
        dispatch = sinon.stub();
        getState = sinon.stub();
        mockServer = new Server('ws://localhost:8081')
    });

    afterEach(() => {
        mockServer.close()
    });

    describe("connectionRequested", () => {
        it("dispatches established action when connected to server", () => {
            connectionRequested()(dispatch, getState);
            // There is delay before onopen is called in the mock websocket
            // https://github.com/thoov/mock-socket/blob/master/src/helpers/delay.js
            clock.tick(100);

            expect(dispatch).to.have.been.calledWith({
                type: WEBSOCKET_CONNECTION_ESTABLISHED,
                payload: {}
            })
        });

        it("dispatches dropped action when disconnected from server", () => {
            connectionRequested()(dispatch, getState);
            mockServer.close();
            expect(dispatch).to.have.been.calledWith({
                type: WEBSOCKET_CONNECTION_DROPPED,
                payload: {}
            })
        })
    });

    describe("sendMessage", () => {
        it("sends stringified message to server", () => {
            connectionRequested()(dispatch, getState);
            const onMessage = sinon.stub();
            mockServer.on('message', onMessage);
            sendMessage({a: 1});

            expect(onMessage).to.have.been.calledWith('{"a":1}')
        })
    });

    describe("receiving websocket messages", () => {
        const messageActionCreator = sinon.stub();
        beforeEach(() => connectionRequested(messageActionCreator)(dispatch, getState));

        it("hands over parsed message to action creator", () => {
            mockServer.send('[{"argA": "valA", "argB": 10}]');
            expect(messageActionCreator).to.have.been.calledWith([{argA: 'valA', argB: 10}]);
        });

        it('ignores unparseable messages', () => {
            mockServer.send('[}');
            //noinspection BadExpressionStatementJS
            expect(dispatch).to.not.have.been.called
        })
    })

});