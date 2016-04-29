"use strict";
export const TICK = 'TICK';

let interval;
export function startTicking(period = 100) {
    return (dispatch) => {
        // This keeps the clock ticking
        interval = setInterval(
            () => dispatch(tick(Date.now())),
            period
        );
    }
}

export function stopTicking() {
    clearInterval(interval);
}


export const tick = (time) => ({
    type: TICK, time
});