import invoice from '../data/invoice.json';

export  function setStyle() {
  let styles = invoice.style.css;
  let mycss = [];
  for (let selector in styles) {
    let style = selector + " {";
    if (selector == "@import")
    {
      style = selector + " " + styles[selector] + ";";
    }
    else
    {
      for (let prop in styles[selector])
      {
        style += prop + ":" + styles[selector][prop] + ";\n";
      }
      style += "}";
    }
    mycss.push(style);
  }
  console.log(mycss);
  return mycss.join("\n");
};
