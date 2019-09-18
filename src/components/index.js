import btnPicker from './btn-picker'
import btnPopPicker from './btn-pop-picker'
import btn from './btn'
import btnFixed from './btn-fixed'
import fixedBtn from './fixed-btn'

import form from './form'
import formItem from './form-item'

import inputPicker from './input-picker'
import radio from './radio'
import wSwitch from './switch'
import select from './select'
import datePicker from './date-picker'

import scrollLoader from './scroll-loader'
import searchBar from './search-bar'
import searchTop from './search-top'

import topBar from './top-bar'
import tab from './tab'
import tabItem from './tab-item'

import table from './table'
import tableRow from './table-row'
import card from './card'
import badge from './badge'
import tag from './tag'
import popup from './popup'

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

    Vue.component('wv-form', form);
    Vue.component('wv-form-item', formItem);

    Vue.component('wv-radio', radio);
    Vue.component('wv-switch', wSwitch);
    Vue.component('wv-select', select);
    Vue.component('wv-date-picker', datePicker);

    Vue.component('wv-tab', tab);
    Vue.component('wv-tab-item', tabItem);
    Vue.component('wv-card', card);
    Vue.component('wv-badge', badge);
    Vue.component('wv-tag', tag);
    Vue.component('wv-popup', popup);

    Vue.component('wv-table-con', table);
    Vue.component('wv-table-row', tableRow);
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default{
    install
}
