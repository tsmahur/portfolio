function closeCurrentWindow(){
    window.close();
}

var checkboxSetting = document.getElementById('setting-sync-device-checkbox')
checkboxSetting.addEventListener('change', function() {
    if (this.checked) {
      localStorage.setItem('sync-with-device-mode', 'true');
    } else {
      localStorage.setItem('sync-with-device-mode', 'false');
    }
  });

  checkboxSetting.checked = localStorage.getItem('sync-with-device-mode')==='true' ? true : false;