// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import data from '__tests__/mock_data/db.json';

beforeEach(() => {
    global.fetch = jest.fn().mockImplementation((...args) =>{
        return Promise.resolve({
            json: () => Promise.resolve(data),
        })}
    )
})