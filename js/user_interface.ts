import * as $ from 'jquery';
const AColorPicker = require('a-color-picker');


function bindEvents(callback: any) {
    $('#render').click(callback);

    $('#a_value_end').change(callback);
    $('#b_value_end').change(callback);
    $('#c_value_end').change(callback);
    $('#d_value_end').change(callback);

    $('#a_value_start').change(callback);
    $('#b_value_start').change(callback);
    $('#c_value_start').change(callback);
    $('#d_value_start').change(callback);

    $('#gamma_value').change(callback);
    $('#iters_value').change(callback);
    $('#frames_value').change(callback);
}

function readValue(name: string): number {
    let value = $('#' + name).val();

    return Number(value);
}

function readColor(name: string): number[] {
    let value = $('#' + name).val();
    let parsed = <number[]>AColorPicker.parseColor(value, "rgb");

    return parsed;
}

function getCanvas() {
    let j_canvas = $('#canvas');

    let canvas = <HTMLCanvasElement>j_canvas[0];

    return canvas;
}

export {
    bindEvents,
    readValue,
    readColor,
    getCanvas
}