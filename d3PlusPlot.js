
const data = [{"x": 10.0, "y": 1.35, "p": "H", "shape": "Circle"}, {"x": 9.28419, "y": 1.35238, "p": "H", "shape": "Circle"}, {"x": 8.72115, "y": 1.35477, "p": "H", "shape": "Circle"}, {"x": 8.18085, "y": 1.35716, "p": "H", "shape": "Circle"}, {"x": 7.66324, "y": 1.35955, "p": "H", "shape": "Circle"}, {"x": 7.16827, "y": 1.36195, "p": "H", "shape": "Circle"}, {"x": 6.69588, "y": 1.36435, "p": "H", "shape": "Circle"}, {"x": 6.24603, "y": 1.36676, "p": "H", "shape": "Circle"}, {"x": 5.81866, "y": 1.36917, "p": "H", "shape": "Circle"}, {"x": 5.41373, "y": 1.37158, "p": "M", "shape": "Circle"}, {"x": 5.03117, "y": 1.374, "p": "M", "shape": "Circle"}, {"x": 4.67095, "y": 1.37642, "p": "M", "shape": "Circle"}, {"x": 4.33301, "y": 1.37885, "p": "M", "shape": "Circle"}, {"x": 4.01729, "y": 1.38128, "p": "M", "shape": "Circle"}, {"x": 3.72376, "y": 1.38372, "p": "M", "shape": "Circle"}, {"x": 3.45235, "y": 1.38616, "p": "M", "shape": "Circle"}, {"x": 3.20301, "y": 1.3886, "p": "M", "shape": "Circle"}, {"x": 2.97569, "y": 1.39105, "p": "M", "shape": "Circle"}, {"x": 2.77035, "y": 1.39351, "p": "M", "shape": "Circle"}, {"x": 2.58693, "y": 1.39597, "p": "M", "shape": "Circle"}, {"x": 2.42538, "y": 1.39843, "p": "M", "shape": "Circle"}, {"x": 2.28565, "y": 1.40089, "p": "M", "shape": "Circle"}, {"x": 2.16769, "y": 1.40336, "p": "M", "shape": "Circle"}, {"x": 1.97443, "y": 1.40584, "p": "M", "shape": "Circle"}, {"x": 2.12587, "y": 1.40832, "p": "M", "shape": "Circle"}, {"x": 2.29384, "y": 1.4108, "p": "M", "shape": "Circle"}, {"x": 2.47896, "y": 1.41329, "p": "M", "shape": "Circle"}, {"x": 2.68183, "y": 1.41578, "p": "M", "shape": "Circle"}, {"x": 2.90305, "y": 1.41828, "p": "M", "shape": "Circle"}, {"x": 3.14324, "y": 1.42078, "p": "M", "shape": "Circle"}, {"x": 3.403, "y": 1.42329, "p": "M", "shape": "Circle"}, {"x": 3.68293, "y": 1.4258, "p": "M", "shape": "Circle"}, {"x": 3.98365, "y": 1.42831, "p": "M", "shape": "Circle"}, {"x": 4.30576, "y": 1.43083, "p": "M", "shape": "Circle"}, {"x": 4.64986, "y": 1.43336, "p": "M", "shape": "Circle"}, {"x": 5.01656, "y": 1.43588, "p": "M", "shape": "Circle"}, {"x": 5.40647, "y": 1.43842, "p": "M", "shape": "Circle"}, {"x": 5.8202, "y": 1.44095, "p": "M", "shape": "Circle"}, {"x": 6.25835, "y": 1.4435, "p": "M", "shape": "Circle"}, {"x": 6.72153, "y": 1.44604, "p": "M", "shape": "Circle"}, {"x": 7.21034, "y": 1.44859, "p": "M", "shape": "Circle"}, {"x": 7.72539, "y": 1.45115, "p": "M", "shape": "Circle"}, {"x": 8.26729, "y": 1.45371, "p": "M", "shape": "Circle"}, {"x": 8.83664, "y": 1.45627, "p": "M", "shape": "Circle"}, {"x": 9.43405, "y": 1.45884, "p": "M", "shape": "Circle"}, {"x": 10.06013, "y": 1.46141, "p": "M", "shape": "Circle"}, {"x": 10.0, "y": 1.46399, "p": "L", "shape": "Square"}, {"x": 9.28419, "y": 1.46657, "p": "L", "shape": "Square"}, {"x": 8.72115, "y": 1.46916, "p": "L", "shape": "Square"}, {"x": 8.18085, "y": 1.47175, "p": "L", "shape": "Square"}, {"x": 7.66324, "y": 1.47434, "p": "L", "shape": "Square"}, {"x": 7.16827, "y": 1.47694, "p": "L", "shape": "Square"}, {"x": 6.69588, "y": 1.47955, "p": "L", "shape": "Square"}, {"x": 6.24603, "y": 1.48216, "p": "M", "shape": "Circle"}, {"x": 5.81866, "y": 1.48477, "p": "M", "shape": "Circle"}, {"x": 5.41373, "y": 1.74302, "p": "M", "shape": "Circle"}, {"x": 5.03117, "y": 1.73995, "p": "H", "shape": "Circle"}, {"x": 4.67095, "y": 1.73689, "p": "H", "shape": "Circle"}, {"x": 4.33301, "y": 1.73383, "p": "H", "shape": "Circle"}, {"x": 4.01729, "y": 1.73078, "p": "H", "shape": "Circle"}, {"x": 3.72376, "y": 1.72773, "p": "H", "shape": "Circle"}, {"x": 3.45235, "y": 1.72469, "p": "M", "shape": "Circle"}, {"x": 3.20301, "y": 1.72165, "p": "M", "shape": "Circle"}, {"x": 2.97569, "y": 1.71862, "p": "M", "shape": "Circle"}, {"x": 2.77035, "y": 1.7156, "p": "L", "shape": "Square"}, {"x": 2.58693, "y": 1.71258, "p": "L", "shape": "Square"}, {"x": 2.42538, "y": 1.70956, "p": "L", "shape": "Square"}, {"x": 2.28565, "y": 1.70655, "p": "L", "shape": "Square"}, {"x": 2.16769, "y": 1.70355, "p": "L", "shape": "Square"}, {"x": 1.97443, "y": 1.70055, "p": "L", "shape": "Square"}, {"x": 2.12587, "y": 1.69755, "p": "L", "shape": "Square"}, {"x": 2.29384, "y": 1.69456, "p": "L", "shape": "Square"}, {"x": 2.47896, "y": 1.69158, "p": "L", "shape": "Square"}, {"x": 2.68183, "y": 1.6886, "p": "M", "shape": "Circle"}, {"x": 2.90305, "y": 1.68563, "p": "M", "shape": "Circle"}, {"x": 3.14324, "y": 1.68266, "p": "M", "shape": "Circle"}, {"x": 3.403, "y": 1.96838, "p": "M", "shape": "Circle"}, {"x": 3.68293, "y": 1.97185, "p": "M", "shape": "Circle"}, {"x": 3.98365, "y": 1.97533, "p": "M", "shape": "Circle"}, {"x": 4.30576, "y": 1.97881, "p": "M", "shape": "Circle"}, {"x": 4.64986, "y": 1.9823, "p": "M", "shape": "Circle"}, {"x": 5.01656, "y": 1.9858, "p": "M", "shape": "Circle"}, {"x": 5.40647, "y": 1.9893, "p": "M", "shape": "Circle"}, {"x": 5.8202, "y": 1.99281, "p": "M", "shape": "Circle"}, {"x": 6.25835, "y": 1.99633, "p": "H", "shape": "Circle"}, {"x": 6.72153, "y": 1.99985, "p": "H", "shape": "Circle"}, {"x": 7.21034, "y": 2.00337, "p": "H", "shape": "Circle"}, {"x": 7.72539, "y": 2.00691, "p": "H", "shape": "Circle"}, {"x": 8.26729, "y": 2.01045, "p": "H", "shape": "Circle"}, {"x": 8.83664, "y": 2.01399, "p": "H", "shape": "Circle"}, {"x": 9.43405, "y": 2.01755, "p": "H", "shape": "Circle"}, {"x": 10.06013, "y": 2.0211, "p": "H", "shape": "Circle"}, {"x": 10.0, "y": 2.02467, "p": "H", "shape": "Circle"}, {"x": 9.28419, "y": 2.02824, "p": "M", "shape": "Circle"}, {"x": 8.72115, "y": 2.03182, "p": "M", "shape": "Circle"}, {"x": 8.18085, "y": 2.0354, "p": "M", "shape": "Circle"}, {"x": 7.66324, "y": 2.03899, "p": "M", "shape": "Circle"}, {"x": 7.16827, "y": 2.04259, "p": "M", "shape": "Circle"}, {"x": 6.69588, "y": 2.04619, "p": "M", "shape": "Circle"}, {"x": 6.24603, "y": 2.0498, "p": "M", "shape": "Circle"}, {"x": 5.81866, "y": 2.05341, "p": "M", "shape": "Circle"}, {"x": 5.41373, "y": 2.05703, "p": "M", "shape": "Circle"}, {"x": 5.03117, "y": 2.06066, "p": "M", "shape": "Circle"}, {"x": 4.67095, "y": 2.0643, "p": "M", "shape": "Circle"}, {"x": 4.33301, "y": 2.06794, "p": "L", "shape": "Square"}, {"x": 4.01729, "y": 2.07159, "p": "L", "shape": "Square"}, {"x": 3.72376, "y": 2.07524, "p": "L", "shape": "Square"}, {"x": 3.45235, "y": 2.0789, "p": "L", "shape": "Square"}, {"x": 3.20301, "y": 2.08257, "p": "L", "shape": "Square"}, {"x": 2.97569, "y": 2.08624, "p": "L", "shape": "Square"}, {"x": 2.77035, "y": 2.08992, "p": "L", "shape": "Square"}, {"x": 2.58693, "y": 2.0936, "p": "L", "shape": "Square"}, {"x": 2.42538, "y": 2.0973, "p": "L", "shape": "Square"}, {"x": 2.28565, "y": 2.101, "p": "L", "shape": "Square"}, {"x": 2.16769, "y": 2.1047, "p": "M", "shape": "Circle"}, {"x": 1.97443, "y": 2.10841, "p": "M", "shape": "Circle"}, {"x": 2.12587, "y": 2.79023, "p": "M", "shape": "Circle"}, {"x": 2.29384, "y": 2.78531, "p": "M", "shape": "Circle"}, {"x": 2.47896, "y": 2.78041, "p": "M", "shape": "Circle"}, {"x": 2.68183, "y": 2.77551, "p": "M", "shape": "Circle"}, {"x": 2.90305, "y": 2.77063, "p": "M", "shape": "Circle"}, {"x": 3.14324, "y": 2.76575, "p": "M", "shape": "Circle"}, {"x": 3.403, "y": 2.76088, "p": "M", "shape": "Circle"}, {"x": 3.68293, "y": 2.75602, "p": "M", "shape": "Circle"}, {"x": 3.98365, "y": 2.75117, "p": "M", "shape": "Circle"}, {"x": 4.30576, "y": 2.74632, "p": "H", "shape": "Circle"}, {"x": 4.64986, "y": 2.74149, "p": "H", "shape": "Circle"}, {"x": 5.01656, "y": 2.73666, "p": "H", "shape": "Circle"}, {"x": 5.40647, "y": 2.73184, "p": "H", "shape": "Circle"}, {"x": 5.8202, "y": 2.72703, "p": "H", "shape": "Circle"}, {"x": 6.25835, "y": 2.72223, "p": "H", "shape": "Circle"}, {"x": 6.72153, "y": 2.71744, "p": "H", "shape": "Circle"}, {"x": 7.21034, "y": 2.71265, "p": "H", "shape": "Circle"}, {"x": 7.72539, "y": 2.70788, "p": "H", "shape": "Circle"}, {"x": 8.26729, "y": 2.70311, "p": "H", "shape": "Circle"}, {"x": 8.83664, "y": 2.69835, "p": "H", "shape": "Circle"}, {"x": 9.43405, "y": 2.6936, "p": "H", "shape": "Circle"}, {"x": 10.06013, "y": 2.68886, "p": "H", "shape": "Circle"}, {"x": 10.0, "y": 2.68412, "p": "H", "shape": "Circle"}]

// const data = [
//   {x: 10.0, y: 1.3, g: "Y"},
//   {x: 9.3, y: 1.4, g: "N"},
//   {x: 8.7, y: 1.6, g: "N"}
// ]
// https://github.com/d3plus/d3plus-plot#Plot
let plot = new d3plus.Plot()
  .select("body")
  .data(data)
  .discrete("x")
  .discrete("y")
  // .discrete("p")
  // .discrete("shape")
  .groupBy("p")
  .shape(d => d.shape)
  // .render();

// size shapes
// plot.shapeConfig({
//   Circle: {
//     r: x => x.value
//   },
//   Rect: {
//     width: x => x.value,
//     height: x => x.value
//   },
//   Line: {
//     strokeWidth: x => x.value,
//   },
// });

// Axis config
plot.yConfig({
  domain: [1, 3],
  labels: [1, 1.5, 2, 2.5, 3]
});

plot.xConfig({
  domain: [1.5, 10.5],
  labels: [1.5, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10.5]
});

// Let's give them titles
plot.yConfig({
  title: "Calcium"
}).xConfig({
  title: "Voltage"
});

plot.render();