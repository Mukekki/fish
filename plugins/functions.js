import Json from "~/plugins/json";
import Moment from "moment";

const functions = {
    compare(obj1, obj2) {
        for (const p in obj1) {
            if (obj1.p !== obj2.p) {
                return false;
            }

            switch (typeof obj1[p]) {
                case "object":
                    if (!this.compare(obj1[p], obj2[p])) {
                        return false;
                    }
                    break;
                case "function":
                    if (
                        typeof obj2[p] === "undefined" ||
                        (p !== "compare" &&
                            obj1[p].toString() !== obj2[p].toString())
                    ) {
                        return false;
                    }
                    break;
                default:
                    // eslint-disable-next-line no-case-declarations
                    const var1 =
                        typeof obj1[p] === "string" ? obj1[p].trim() : obj1[p];
                    // eslint-disable-next-line no-case-declarations
                    const var2 =
                        typeof obj2[p] === "string" ? obj2[p].trim() : obj2[p];
                    if (var1 !== var2) {
                        return false;
                    }
            }
        }

        for (const p in obj2) {
            if (typeof obj1[p] === "undefined") {
                return false;
            }
        }
        return true;
    },
    copy(obj) {
        return Json.decode(Json.encode(obj));
    },
    isEmpty(value) {
        if (value === null) {
            return true;
        } else if (typeof value === "object") {
            return Object.keys(value).length === 0;
        } else if (typeof value === "string") {
            return value.length === 0;
        } else if (typeof value === "number") {
            return false;
        } else {
            return !value;
        }
    },
    hexToRGB(hex, alpha) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);

        if (alpha) {
            return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
        } else {
            return "rgb(" + r + ", " + g + ", " + b + ")";
        }
    },
    lockBody() {
        return document.documentElement.setAttribute("lock-body", true);
    },
    unlockBody() {
        return document.documentElement.setAttribute("lock-body", false);
    },
    greyBody() {
        document.documentElement.setAttribute("grey-body", true);
    },
    blueBody() {
        return document.documentElement.setAttribute("grey-body", false);
    },
    removeHash() {
        history.pushState(
            "",
            document.title,
            window.location.pathname + window.location.search
        );
    },
    getClearMoney(money, ceil) {
        const negative = money < 0;
        const fixedTo = (money, decimals) => {
            if (ceil) {
                const k = Math.pow(10, decimals);
                return Math.ceil(money * k) / k;
            } else {
                return parseFloat(money).toFixed(decimals);
            }
        };

        if (negative) {
            money = money * -1;
        }

        if (parseFloat(money) > 0.00001) {
            let clear, before, after;

            if (money.toString().includes(".")) {
                const ar = money.toString().split(".");
                let decimals = 5;

                before = ar[0].length;
                after = ar[1].length;
                if (before + after > 6) {
                    if (before > 6) {
                        decimals = 0;
                    } else if (after > 5 && before <= 2) {
                        decimals = 5;
                    } else {
                        decimals = 7 - before;
                    }

                    clear = fixedTo(money, decimals);
                } else {
                    if (after > 4) {
                        clear = fixedTo(money, 4);
                    } else if (after === 1) {
                        clear = fixedTo(money, 2);
                    } else {
                        clear = money;
                    }
                }
            } else {
                clear = money;
            }

            if (negative) {
                clear = clear * -1;
            }

            if (clear.toString().includes(".")) {
                const ar = clear.toString().split(".");

                clear = Number(ar[0]).toLocaleString("ru") + "." + ar[1];
            } else {
                clear = Number(clear).toLocaleString("ru");
            }

            return clear;
        } else {
            return 0;
        }
    },
    firstSymbolToUpperCase(string) {
        return string[0].toUpperCase() + string.slice(1);
    },
    percentage(partialValue, totalValue) {
        return (100 * partialValue) / totalValue;
    },
    shuffle(arr) {
        let j, x, i;

        for (i = arr.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = arr[i];
            arr[i] = arr[j];
            arr[j] = x;
        }

        return arr;
    },
    shortNumber(value) {
        if (value >= 1100000) {
            return (value / 1000000).toFixed(1) + "M";
        }
        if (value >= 1000000) {
            return (value / 1000000).toFixed(0) + "M";
        }
        if (value >= 100000) {
            return (value / 1000).toFixed(0) + "K";
        }
        if (value >= 10000) {
            return (value / 1000).toFixed(0) + "K";
        }
        if (value >= 1200) {
            return (value / 1000).toFixed(1) + "K";
        }
        if (value >= 1000) {
            return (value / 1000).toFixed(0) + "K";
        }
        return value;
    },
    shortSite(value) {
        let string = value.replace("https", "").replace(":", "");

        let i = 0;

        while (i <= string.length) {
            if (string[i] === "/") {
                string = string.replace("/", "");
            } else if (string[i] === ":") {
                string = string.replace(":", "");
            } else {
                return null;
            }
            i++;
        }

        return string;
    },
    shortAddress(value) {
        return (
            value.slice(0, 6) +
            "..." +
            value.slice(value.length - 4, value.length)
        );
    },
    equalArrays(a, b) {
        // ?????????????????? ????????????????
        if (a.length !== b.length) {
            return false;
        }

        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
                return false;
            }
        }

        return true;
    },
    getSessionLength(created, closed) {
        const duration = Moment.duration(closed - created, "seconds");
        let length = "";

        if (duration.asDays() >= 1) {
            length = Math.floor(duration.asDays()) + " d ";
        }

        if (duration.hours() >= 1) {
            length = length + duration.hours() + " h ";
        }

        if (duration.minutes() >= 1) {
            length = length + duration.minutes() + " mins";
        }

        if (!length.length) {
            length = "1 min";
        }

        return length;
    },
    shortCard(value) {
        return value.slice(-4);
    },
};

export default (context, inject) => {
    inject("functions", functions);
};
