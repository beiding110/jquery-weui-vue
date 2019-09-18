import btnPicker from './btn-picker'
import btnPopPicker from './btn-pop-picker'
import btn from './btn'
import btnFixed from './btn-fixed'
import formItem from './form-item'
import inputPicker from './input-picker'
import scrollLoader from './scroll-loader'
import searchBar from './search-bar'
import searchTop from './search-top'
import table from './table'
import tableRow from './table-row'
import topBar from './top-bar'

import wForm from './w-form'
import wRadio from './w-radio'
import wSwitch from './w-switch'
import wSelect from './w-select'
import wDatePicker from './w-date-picker'

import wTab from './w-tab'
import wTabItem from './w-tab-item'
import card from './card'
import badge from './badge'
import tag from './tag'
import fixedBtn from './fixed-btn'
import wPopup from './popup'

function install(Vue) {
    Vue.component('wv-btn-picker', btnPicker);
    Vue.component('wv-btn-pop-picker', btnPopPicker);
    Vue.component('wv-btn', btn);
    Vue.component('wv-btn-fixed', btnFixed);

    Vue.component('wv-input-picker', inputPicker);
    Vue.component('wv-scroll-loader', scrollLoader);

    Vue.component('wv-search-bar', searchBar);
    Vue.component('wv-search-top', searchTop);

    Vue.component('wv-top-bar', topBar);
    Vue.component('wv-fixed-btn', fixedBtn);

    Vue.component('wv-form', wForm);
    Vue.component('wv-form-item', formItem);

    Vue.component('wv-radio', wRadio);
    Vue.component('wv-switch', wSwitch);
    Vue.component('wv-select', wSelect);
    Vue.component('wv-date-picker', wDatePicker);

    Vue.component('wv-tab', wTab);
    Vue.component('wv-tab-item', wTabItem);
    Vue.component('wv-card', card);
    Vue.component('wv-badge', badge);
    Vue.component('wv-tag', tag);
    Vue.component('wv-popup', wPopup);

    Vue.component('wv-table-con', table);
    Vue.component('wv-table-row', tableRow);
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default{
    install
}
