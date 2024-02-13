import timekeeper from 'timekeeper';

/**
 * Mock Date
 */
timekeeper.freeze(new Date('2020-01-01'));

/**
 * Hide dirt errors
 */
console.error = () => {};
console.warn = () => {};
