<?php
$player_font = "Poppins";
$player_bg_color = "000000";
$player_font_color = "ffffff";
$player_primary_color = "34cfeb";
$player_secondary_color = "6900e0";
$player_loader = 1;
$preferred_server = 1;
$player_sources_toggle_type = 2;
$player_ads_toggle = 1;

$video_id = $_GET['video_id'] ?? '';
$is_tmdb = $_GET['tmdb'] ?? 0;
$season = $_GET['season'] ?? 0;
$episode = $_GET['episode'] ?? 0;

if (empty($video_id)) {
  die("Error: Missing video_id.");
}

$is_tv = ($season > 0 && $episode > 0);

$servers = [
  'vidsrc' => [
    'name' => 'Vidsrc',
    'url' => $is_tv ? "https://vidsrc.net/embed/tv/{$video_id}/{$season}/{$episode}" : "https://vidsrc.net/embed/movie/{$video_id}",
  ],
  'vipstream' => [
    'name' => 'Vipstream',
    'url' => $is_tv ? "https://vipstream.tv/embed-2/tv?tmdb={$video_id}&season={$season}&episode={$episode}" : "https://vipstream.tv/embed-2/movie?tmdb={$video_id}",
  ],
  // Add more servers here if needed
];

$default_server_url = $servers['vidsrc']['url'];

echo "<!DOCTYPE html>
<html>
<head>
  <meta charset='UTF-8'>
  <title>Maruya Player</title>
  <style>
    body { margin:0; background:#000; color: #fff; font-family: '{$player_font}', sans-serif; }
    .server-selection { padding: 10px; background: #222; }
    select { padding: 8px; font-size: 16px; background: #333; color: #fff; border: none; border-radius: 4px; }
    iframe { border: none; width: 100%; height: 100vh; }
  </style>
</head>
<body>
  <div class='server-selection'>
    <label for='server-select'>Select Server:</label>
    <select id='server-select' onchange='changeServer()'>";
foreach ($servers as $key => $server) {
  $selected = ($key === 'vidsrc') ? 'selected' : '';
  echo "<option value='{$server['url']}' {$selected}>{$server['name']}</option>";
}
echo "</select>
  </div>
  <iframe id='player_iframe' src='{$default_server_url}' referrerpolicy='origin'></iframe>

  <script>
    function changeServer() {
      const selectElement = document.getElementById('server-select');
      const iframeElement = document.getElementById('player_iframe');
      iframeElement.src = selectElement.value;
    }
  </script>
</body>
</html>";
?>
