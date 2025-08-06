let jwPlayerInstance = null;
let activeChannelName = null;

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;
  document.getElementById('clock').textContent =
    `${String(hours).padStart(2, '0')}:${minutes}:${seconds} ${ampm}`;
}

function populateCategoryDropdown() {
  const categorySelect = document.getElementById('categoryFilter');
  const categories = Array.from(new Set(channels.map(c => c.category))).sort();
  categories.forEach(cat => {
    const option = document.createElement('option');
    option.value = cat;
    option.textContent = cat;
    categorySelect.appendChild(option);
  });
}

function setupChannelList() {
  const list = document.getElementById('channelList');
  const countDisplay = document.getElementById('channelCount');
  const search = document.getElementById('searchInput').value.toLowerCase();
  const selectedCategory = document.getElementById('categoryFilter').value;
  list.innerHTML = '';
  let visibleCount = 0;
  [...channels].sort((a,b)=>a.name.localeCompare(b.name)).forEach(channel=>{
    const matchCategory = selectedCategory==='all'||channel.category===selectedCategory;
    const matchSearch = channel.name.toLowerCase().includes(search);
    if(matchCategory&&matchSearch){
      visibleCount++;
      const li = document.createElement('li');
      li.textContent = channel.name;
      li.onclick=()=>loadChannelByName(channel.name);
      if(channel.name===activeChannelName) li.classList.add('active');
      list.appendChild(li);
    }
  });
  countDisplay.textContent = `Total Channels: ${visibleCount}`;
}

function initPlayer() {
  jwPlayerInstance = jwplayer("player").setup({
    width:"100%", height:"100%",
    autostart:false,
    stretching:"exactfit", aspectratio:"16:9",
    primary:"html5", hlshtml:true, displaytitle:false,
    logo:{hide:true}
  });
  jwPlayerInstance.on('error',()=>showFallbackMessage());
  jwPlayerInstance.on('play',()=>hideFallbackMessage());
}

function loadChannelByName(name) {
  const channel = channels.find(c=>c.name===name);
  if(!channel) return;
  activeChannelName = name;
  setupChannelList();
  const config={ file:channel.url, title:channel.name, autostart:true };
  if(channel.type==='mpd'&&channel.drm) config.drm=channel.drm;
  document.title = `${channel.name} | MaruyaTV`;
  hideFallbackMessage();
  jwPlayerInstance.setup(config);
}

function showFallbackMessage(){document.getElementById('fallbackMessage').style.display='block';}
function hideFallbackMessage(){document.getElementById('fallbackMessage').style.display='none';}

window.addEventListener('load',()=>{
  initPlayer();
  populateCategoryDropdown();
  setupChannelList();
  updateClock();
  setInterval(updateClock,1000);

  // Auto-play the first channel
  if(channels && channels.length>0){
    loadChannelByName(channels[0].name);
  }

  setTimeout(()=>{
    document.getElementById('loadingScreen').classList.add('hidden');
  },4000);
});

document.addEventListener('contextmenu', e => e.preventDefault());
