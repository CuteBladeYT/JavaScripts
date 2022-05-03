// ==UserScript==
// @name         Synergia Średnia
// @version      0.1.1
// @description  Pokaż średnią ważoną
// @author       UnitedCatdom
// @match        https://synergia.librus.pl/gateway/ms/studentdatapanel/ui/oceny
// @icon         https://www.google.com/s2/favicons?sz=64&domain=librus.pl
// @grant        none
// ==/UserScript==

let markTable = document.querySelector("#content-main > div > div:nth-child(2) > div > table:nth-child(2) > tbody");
const markTableStart = 1;

(function() {
    "use strict";

    function updateAvgMarks() {
        markTable = document.querySelector("#content-main > div > div:nth-child(2) > div > table:nth-child(2) > tbody");
        for (let child = markTableStart; child < markTable.childElementCount; child++) {
            let prevel = markTable.children[child - 1];
            let el = markTable.children[child];
            let subjName = el.children[0].textContent;
            if (el.childElementCount == 1) {
                let marks = [];
                let marksTable = el.children[0].children[0].children[2];
                for (let markIdx = 0; markIdx < marksTable.childElementCount; markIdx++) {
                    let markEl = marksTable.children[markIdx];
                    let mark = markEl.children[0].textContent;
                    if (mark.length > 1) {
                        if (mark.endsWith("+")) {
                            mark = Number(mark.replace("+", "")) + 0.5;
                        } else if (mark.endsWith("-")) {
                            mark = Number(mark.replace("-", "")) - 0.5;
                        };
                        // } else {
                        //     mark = Number(mark);
                        //     if (mark == NaN) mark = 0;
                        // };
                    };
                    if (mark == "nb" || mark == "bz") mark = 0;
                    else mark = Number(mark);
                    let markWeight = Number(markEl.children[2].textContent);
                    marks.push({
                        "mark": mark,
                        "weight": markWeight
                    });
                };
                let markSum = 0;
                let markLength = marks.length;
                marks.forEach(mark => {
                    markSum += mark.mark;
                    if (mark.mark == 0) markLength -= 1;
                });
                markSum = (markSum / markLength).toFixed(2);
                prevel.children[2].textContent = markSum;
            };
        };
    };

    let inv = setInterval(() => {
        markTable = document.querySelector("#content-main > div > div:nth-child(2) > div > table:nth-child(2) > tbody");
        if (markTable) {
            // markTable.children.forEach(child => {
            //     if (child.childElementCount > 1) {
            //         let el = child.children[4].children[0];
            //         el.click();
            //         updateAvgMarks();
            //         setTimeout(el.click(), 100);
            //     };
            // });
            for (let i = 0; i < markTable.childElementCount; i++) {
                let child = markTable.children[i];
                if (child.childElementCount > 1) {
                    setTimeout(() => {
                        let el = child.children[4].children[0];
                        el.click();
                        updateAvgMarks();
                        setTimeout(el.click(), 100);
                    }, 100);
                };
            };
            clearInterval(inv);
        };
    }, 1000);
})();
