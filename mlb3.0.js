const fileInput = document.getElementById('fileInput');

    fileInput.addEventListener('change', e => {
      const file = e.target.files[0];
      if (file && file.type === 'text/html') {
        const reader = new FileReader();
        reader.onload = function(ev) {
          const newTab = window.open();
          newTab.document.open();
          newTab.document.write(ev.target.result);
          newTab.document.close();
          fileInput.value = '';
        };
        reader.readAsText(file);
      } else {
        alert('Please select a valid HTML file.');
        fileInput.value = '';
      }
    });

    document.getElementById('stuffButton').addEventListener('click', () => {
      const message = document.getElementById('message');
      message.hidden = false;
    });
