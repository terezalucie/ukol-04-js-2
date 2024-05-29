import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { BookingSummary } from '../components/BookingSummary/bookingSummary';

document.querySelector('#root').innerHTML = render(
  <>
    <BookingSummary />
  </>
);