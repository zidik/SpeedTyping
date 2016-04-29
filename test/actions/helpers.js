export const shouldCreateAction = (creator, actionName, ...args) =>
    it('should create ' + actionName + ' action', () => {
        expect(creator(...args).type).to.eq(actionName)
    });