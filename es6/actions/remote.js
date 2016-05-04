export const REMOTE_STATE_RECEIVED = "REMOTE_STATE_RECEIVED";
export const receivedRemoteState = (remoteState) => ({
    type: REMOTE_STATE_RECEIVED,
    remoteState
});