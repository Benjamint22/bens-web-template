import '../index.html';
import '../style/main.scss';
import { getMessage } from './helpers/message';

document.addEventListener('DOMContentLoaded', () => {
    const textContainer = document.getElementById('text-container');
    if (textContainer) {
        textContainer.innerText = getMessage();
    }
});
