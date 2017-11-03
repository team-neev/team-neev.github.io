// JS
import 'jquery';
import 'bootstrap';
import 'owl.carousel';
import 'slicknav/dist/jquery.slicknav';
import 'magnific-popup/dist/jquery.magnific-popup';
import './animated-headline';
import './jquery.nav.js';
import './main.js';

// CSS
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import 'slicknav/dist/slicknav.css';
import 'magnific-popup/dist/magnific-popup.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'animate.css/animate.css';
import '../css/animated-heading.css';
import '../css/style.css';
import '../css/responsive.css';

const jQueryBridget = require('jquery-bridget');
const Isotope = require('isotope-layout');
// Make Isotope a jQuery plugin
jQueryBridget( 'isotope', Isotope, $ );