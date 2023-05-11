const xhr1 = new XMLHttpRequest();
xhr1.open('GET', 'service0.html');
xhr1.onload = function() {
  if (xhr1.status === 200) {
    document.querySelector('.content').innerHTML = xhr1.responseText;
  }
};
xhr1.send();

const xhr2 = new XMLHttpRequest();
xhr2.open('GET', 'banner.html');
xhr2.onload = function() {
  if (xhr2.status === 200) {
    document.querySelector('#banner').innerHTML = xhr2.responseText;
  }
};
xhr2.send();

const buttons = document.querySelectorAll('.box-overlay');
const overlays = document.querySelectorAll('.box-overlay');

const titles = 
['동해물과 백두산이 마르고 닳도록 <br> IT CONSULTANT',
'범호아이티는 다양한 서비스를 제공합니다.',
'범호아이티는 다양한 서비스를 제공합니다.',
'범호아이티는 다양한 서비스를 제공합니다.' ]

overlays.forEach((overlay,idx) => {
  overlay.addEventListener('click', () => {
    overlay.classList.add('service-button-active');
    overlay.style.opacity = '1';
     // Set opacity to 0 for all other overlays
     overlays.forEach(otherOverlay => {
        if (otherOverlay !== overlay) {
          otherOverlay.style.opacity = '0';
          otherOverlay.classList.remove('service-button-active')
        }
      });
      const xhr = new XMLHttpRequest();
      xhr.open('GET', `${overlay.id}.html`);
      xhr.onload = function(e) {
        e.preventDefault();
        if (xhr.status === 200) {
            document.getElementById('content').innerHTML = xhr.responseText;
            document.getElementById('service-title').innerHTML = titles[idx];
        }

        
      };
      xhr.send();
    
  });
});
