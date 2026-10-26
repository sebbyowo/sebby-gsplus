// ==UserScript==
// @name         Gamesensical - Sebby Button
// @namespace    https://gamesensical.wtf/
// @version      1.0
// @description  Adds a "sebby" button directly before Profile
// @match        https://gamesensical.wtf/forums/*
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    function addSebby() {
        const profile = document.getElementById('navprofile');

        if (!profile) return;

        // Don't create it twice
        if (document.getElementById('navsebby')) return;

        const li = document.createElement('li');
        li.id = 'navsebby';

        const a = document.createElement('a');
        a.href = 'https://gamesensical.wtf/forums/profile.php?id=22';
        a.textContent = 'sebby';

        // Appearance
        a.style.color = '#79be2f';
        a.style.fontWeight = 'bold';

        li.appendChild(a);

        // Put sebby directly BEFORE Profile
        profile.parentElement.insertBefore(li, profile);
    }

    // Wait until the navigation exists
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', addSebby);
    } else {
        addSebby();
    }
})();
