import express from 'express';
import basket from './basket.js'

/**
 * Will configure all of the routes
 * @param {express} app The app
 */
export default function(app) {
    app.get(('/basket'), basket);
}
