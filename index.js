const CANVAS_SIZE = 512;
const WARMUP = 25;
const ROUNDS = 100;

let ctxOriginal;
let ctxModified;
let btnOriginal;
let btnModified;
let avgOriginal;
let avgModified;

// eslint-disable-next-line no-undef
const cellNoiseXyOriginal = cell_noise_xy;
// eslint-disable-next-line no-undef
const cellNoiseXyModified = cell_noise_xy_modified;
// eslint-disable-next-line no-undef
const initRandomTable = init_random_table;

const startTestOriginal = () => {
    btnOriginal.disabled = true;
    avgOriginal.textContent = '(running...)';
    setTimeout(runTestOriginal);
};

const runTestOriginal = () => {
    console.log('[original] Running tests...');
    const imgData = ctxOriginal.getImageData(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    const data = imgData.data;
    for (let i = 0; i < WARMUP; i++) fillDataOriginal(data);
    const t0 = Date.now();
    for (let i = 0; i < ROUNDS; i++) fillDataOriginal(data);
    const t1 = Date.now();
    ctxOriginal.putImageData(imgData, 0, 0);
    const t = Math.round((t1 - t0) / ROUNDS);
    const avg = `${t}ms`;
    console.log(`[original] ...done (${avg} avg)`);
    avgOriginal.textContent = avg;
    btnOriginal.disabled = false;
};

const fillDataOriginal = (data) => {
    let i = 0, v;
    for (let y = 0; y < CANVAS_SIZE; y++) {
        for (let x = 0; x < CANVAS_SIZE; x++) {
            v = (cellNoiseXyOriginal(x, y) + 1) * 127.9999;
            data[i++] = v;
            data[i++] = v;
            data[i++] = v;
            data[i++] = 255;
        }
    }
};

const startTestModified = () => {
    btnModified.disabled = true;
    avgModified.textContent = '(running...)';
    setTimeout(runTestModified);
};

const runTestModified = () => {
    console.log('[modified] Running tests...');
    const imgData = ctxModified.getImageData(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    const data = imgData.data;
    for (let i = 0; i < WARMUP; i++) fillDataModified(data);
    const t0 = Date.now();
    for (let i = 0; i < ROUNDS; i++) fillDataModified(data);
    const t1 = Date.now();
    ctxModified.putImageData(imgData, 0, 0);
    const t = Math.round((t1 - t0) / ROUNDS);
    const avg = `${t}ms`;
    console.log(`[modified] ...done (${avg} avg)`);
    avgModified.textContent = avg;
    btnModified.disabled = false;
};

const fillDataModified = (data) => {
    let i = 0, v;
    for (let y = 0; y < CANVAS_SIZE; y++) {
        for (let x = 0; x < CANVAS_SIZE; x++) {
            v = (cellNoiseXyModified(x, y) + 1) * 127.9999;
            data[i++] = v;
            data[i++] = v;
            data[i++] = v;
            data[i++] = 255;
        }
    }
};

const init = () => {
    const canvasOriginal = document.getElementById('canvas-original');
    canvasOriginal.width = CANVAS_SIZE;
    canvasOriginal.height = CANVAS_SIZE;
    ctxOriginal = canvasOriginal.getContext('2d');

    const canvasModified = document.getElementById('canvas-modified');
    canvasModified.width = CANVAS_SIZE;
    canvasModified.height = CANVAS_SIZE;
    ctxModified = canvasModified.getContext('2d');

    console.log('Init random table...');
    initRandomTable();
    console.log('...done');

    avgOriginal = document.getElementById('avg-original');
    avgModified = document.getElementById('avg-modified');

    btnOriginal = document.getElementById('btn-original');
    btnOriginal.onclick = startTestOriginal;
    btnOriginal.disabled = false;
    btnModified = document.getElementById('btn-modified');
    btnModified.onclick = startTestModified;
    btnModified.disabled = false;
};

window.addEventListener('load', init);
