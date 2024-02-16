export const formatViews = (views: number) => {
    const million = 1_000_000;
    const thousand = million / 1000;
    let count;
    if (views > million) {
        const rounded = (views / million).toFixed(1);
        count = `${rounded}M views`;
    } else if (views > thousand) {
        const rounded = (views / thousand).toFixed(0);
        count = `${rounded}K views`;
    } else {
        count = `${views} views`;
    }
    return count;
};

export const formatPublishDate = (date: Date) => {
    let age: string;
    let divide: number;

    const newDate = new Date(date);
    const today = new Date();
    const difference = Number(today) - Number(newDate);

    const second = 1000;
    const secondLimit = second * 59;

    const minute = 60 * second;
    const minuteLimit = minute * 59;

    const hour = minute * 60;
    const hourLimit = hour * 23;

    const day = hour * 24;
    const dayLimit = day * 29;

    const month = day * 30;
    const monthLimit = 11 * month;

    const year = month * 12;

    if (difference < secondLimit) {
        divide = Math.floor(difference / second);
        if (divide < 2) {
            age = `1 second ago`;
        } else {
            age = `${divide} seconds ago`;
        }
    } else if (difference < minuteLimit) {
        divide = Math.floor(difference / minute);
        if (divide < 2) {
            age = `1 minute ago`;
        } else {
            age = `${divide} minutes ago`;
        }
    } else if (difference < hourLimit) {
        divide = Math.floor(difference / hour);
        if (divide < 2) {
            age = `1 hour ago`;
        } else {
            age = `${divide} hours ago`;
        }
    } else if (difference < dayLimit) {
        divide = Math.floor(difference / day);
        if (divide < 2) {
            age = `1 day ago`;
        } else {
            age = `${divide} hours ago`;
        }
    } else if (difference < monthLimit) {
        divide = Math.floor(difference / month);
        if (divide < 2) {
            age = `1 month ago`;
        } else {
            age = `${divide} months ago`;
        }
    } else {
        divide = Math.floor(difference / year);
        if (divide < 2) {
            age = `1 year ago`;
        } else {
            age = `${divide} years ago`;
        }
    }
    return age;
};

export const formatShortenTitle = (title: string) => {
    const limit = 60;
    return title.length > limit ? `${title.slice(0, limit)}...` : title;
};
