const oneSecond = () => 1000;
const getCurrentTime = () => new Date();

export const abstractClockTime = date =>
    ({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
    });

export const appendAMPM = clockTime =>
    ({
        ...clockTime,
        ampm: (clockTime.hours >= 12) ? "pm" : "am"
    });

export const civilianHours = clockTime =>
    ({
        ...clockTime,
        hours: (clockTime.hours > 12) ?
            clockTime.hours - 12 :
            clockTime.hours
    });

export const prependZero = key => clockTime =>
    ({
        ...clockTime,
        [key]: (clockTime[key] < 10) ?
            "0" + clockTime[key] :
            clockTime[key]
    });

export const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

export const convertToCivilianTime = clockTime =>
    pipe(
        appendAMPM,
        civilianHours
    )(clockTime);

export const doubleDigits = civilianTime =>
    pipe(
        prependZero("hours"),
        prependZero("minutes"),
        prependZero("seconds")
    )(civilianTime);

export const getClockTime = pipe(
    getCurrentTime,
    abstractClockTime,
    convertToCivilianTime,
    doubleDigits
);
