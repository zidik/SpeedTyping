const constantActionLogger = (logger) => (store) => (next) => (action) => {
    const stateBefore = store.getState();
    const result = next(action);
    const stateAfter = store.getState();
    if (Object.is(stateBefore, stateAfter)) {
        logger.warn("An action was dispatched that did not change state", action);
    }
    return result;
};

export default constantActionLogger