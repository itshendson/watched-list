const express = require('express');

module.exports = {
    // Visitors should only be able to see pages if they are authenticated
    ensureAuth: (req, res, next) => {
        if (req.isAuthenticated()) {
            return next();
        } else {
            res.redirect('/');
        }
    },

    // Users that are logged in, should not be able to see the login page
    ensureGuest: (req, res, next) => {
        if (req.isAuthenticated()) {
            res.redirect('/');
        } else {
            return next();
        }
    }
}