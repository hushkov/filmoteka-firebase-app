import * as PNotify from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

function showStackBarTop(type) {
  if (typeof window.stackBarTop === 'undefined') {
    window.stackBarTop = new PNotify.Stack({
      modal: false,
      dir1: 'down',
      firstpos1: 25,
      spacing1: 0,
      push: 'top',
      maxOpen: Infinity,
    });
  }
  const opts = {
    title: 'Over Here',
    text: "Check me out. I'm in a different stack.",
    addClass: 'stack-bar-top',
    shadow: false,
    width: '100%',
    mouseReset: true,
    animation: 'none',
    delay: 1500,
    sticker: false,
    closer: false,
    stack: window.stackBarTop,
  };
  switch (type) {
    case 'error':
      opts.title = 'Oh No!';
      opts.text = 'You still didn`t login!';
      opts.type = 'error';
      break;
    case 'info':
      opts.title = 'Breaking News';
      opts.text = 'Have you met Ted?';
      opts.type = 'info';
      break;
    case 'success':
      opts.title = 'Good News Everyone';
      opts.text = "I've invented a device that bites shiny metal asses.";
      opts.type = 'success';
      break;
    case 'success-signup':
      opts.title = 'Congratulation!';
      opts.text = 'You`ve been successfully signed up';
      opts.type = 'success';
      break;
      break;
    case 'success-login':
      opts.title = 'Welcome back!';
      opts.text = 'Glad to see you again (❁´◡`❁)';
      opts.type = 'success';
      break;
  }
  PNotify.alert(opts);
}

export default showStackBarTop;

// npm install --save-dev @pnotify/core

// showStackBarTop('success or error or info');
