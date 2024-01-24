(function (win) {
    'use strict';
    let winbody = win.querySelector('body');
    if (win.ThemeColor === undefined || win.ThemeColor === '5') {
        if (win.isInside)
            winbody.style='--main-color: #7f7f7f; --dark-main-color: #000000;';
        else winbody.style='--main-color: #000000; --dark-main-color: #7f7f7f;';
    }
    if (win.ThemeColor === '1') {
        if (win.isInside)
            winbody.style='--main-color: #1a5a40; --dark-main-color: #36c48e;';
        else winbody.style='--main-color: #36c48e; --dark-main-color: #1a5a40;';
    }
    if (win.ThemeColor === '2') {
        if (win.isInside)
            winbody.style='--main-color: #753432; --dark-main-color: #ea6965;';
        else winbody.style='--main-color: #ea6965; --dark-main-color: #753432;';
    }
    if (win.ThemeColor === '3') {
        if (win.isInside)
            winbody.style='--main-color: #1e5f77; --dark-main-color: #3dbeee;';
        else winbody.style='--main-color: #3dbeee; --dark-main-color: #1e5f77;';
    }
    if (win.isInside || win.ThemeColor === undefined || win.ThemeColor === '5')
        winbody.style.setProperty("--opa", 0.3),
        winbody.style.setProperty("--text-color", '#bbbbbb'),
        winbody.style.setProperty("--outside-display", 'none'),
        winbody.style.setProperty("--inside-display", 'default'),
        win.querySelectorAll('link')[0].href = "https://xyix.github.io/images/favicon32-2.png",
        win.querySelectorAll('link')[1].href = "https://xyix.github.io/images/favicon16-2.png";
    else 
        winbody.style.setProperty("--opa", 0.7),
        winbody.style.setProperty("--text-color", '#555555'),
        winbody.style.setProperty("--outside-display", 'default'),
        winbody.style.setProperty("--inside-display", 'none');
})(document);