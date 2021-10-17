function Tablet(name, size, brand) {
    this.name = name || '';
    this.size = size || '';
    this.brand = brand || '';
}

function Laptop(name, size, brand, network) {
    this.name = name || '';
    this.size = size || '';
    this.brand = brand || '';
    this.network = network || '';
}
const gadget  = {Tablet, Laptop}
function getGadgetItem(type, obj) {
    let gadgetType = gadget[type];
    return new gadgetType(obj);
}

let laptop = getGadgetItem('Laptop', {name:'Asus', size: '14.3', brand:'asus', network:'4g'})
let tablet = getGadgetItem('Tablet', {name:'IPAD', size: '10.3', brand:'Apple'})

console.log(laptop,tablet );
