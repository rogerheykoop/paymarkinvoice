import invoice from '../data/invoice.json';

export function setStyle() {
  const mystyles = invoice.style.css;
  const mycss = [];
  for (const selector of Object.keys(mystyles)) {
    let style = selector + ' {';
    if (selector === '@import') {
      style = selector + ' ' + mystyles[selector] + ';';
    } else {
      for (const prop of Object.keys(mystyles[selector])) {
        style += prop + ':' + mystyles[selector][prop] + ';\n';
      }
      style += '}';
    }
    mycss.push(style);
  }
  console.log(mycss);
  return mycss.join('\n');
}
