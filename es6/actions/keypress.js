export const GLOBAL_KEY_PRESSED = "GLOBAL_KEY_PRESSED";

export const keyPressed = (key) => {
    return {
        type: GLOBAL_KEY_PRESSED,
        key
    }
};