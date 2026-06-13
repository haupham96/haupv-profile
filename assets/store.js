/* =============================================================================
 *  Profile / CV — localStorage wrapper
 * ========================================================================== */
(function () {
    'use strict';

    window.CV_STORE = {
        get: function (key) {
            try {
                return localStorage.getItem(key);
            } catch (error) {
                return null;
            }
        },
        set: function (key, value) {
            try {
                localStorage.setItem(key, value);
            } catch (error) {
            }
        }
    };
})();
