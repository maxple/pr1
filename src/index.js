import storeFactory from './components/redux/store'
import {addColor, rateColor, removeColor, sortColors} from './components/redux/actions'

const store = storeFactory();

window.store = store;
window.addColor = addColor;
window.removeColor = removeColor;
window.rateColor = rateColor;
window.sortColors = sortColors;

console.log('current state', store.getState());
console.log('Go ahead, dispatch some actions...');

console.group("Examples");
console.log('store.dispatch(addColor("Bonkers Blue", "#1122FF"))');
console.log('store.dispatch(rateColor("744be8b4-2fc9-4a79-b1f3-d2ad445a5881", 5))');
console.log('store.dispatch(sortColors("title"))');
console.log('store.dispatch(removeColor("a5685c39-6bdc-4727-9188-6c9a00bf7f95"))');
console.groupEnd();
