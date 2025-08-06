<?php
// ================== PLAYER SETTINGS ==================
$player_font = "Poppins";
$player_bg_color = "000000";
$player_font_color = "ffffff";
$player_primary_color = "34cfeb";
$player_secondary_color = "6900e0";
$player_loader = 1;
$preferred_server = 0;
$player_sources_toggle_type = 2;
// ======================================================

if (isset($_GET['video_id'])) {
    $video_id = $_GET['video_id'];
    $is_tmdb = isset($_GET['tmdb']) ? $_GET['tmdb'] : 0;
    $season = isset($_GET['season']) ? $_GET['season'] : (isset($_GET['s']) ? $_GET['s'] : 0);
    $episode = isset($_GET['episode']) ? $_GET['episode'] : (isset($_GET['e']) ? $_GET['e'] : 0);

    if (!empty(trim($video_id))) {
        // Use VIP directstream method
        $player_url = "https://multiembed.mov/directstream.php?video_id={$video_id}&tmdb={$is_tmdb}&s={$season}&e={$episode}";

        echo "<!DOCTYPE html>
        <html>
        <head>
            <meta charset='UTF-8'>
            <meta name='referrer' content='origin'>
            <title>Video Player</title>
            <style>
                body { margin:0; background:#000; }
                iframe { border:none; width:100%; height:100vh; }
            </style>
        </head>
        <body>
            <iframe src='{$player_url}' referrerpolicy='origin' allowfullscreen></iframe>
        </body>
        </html>";
    } else {
        echo "Missing video_id";
    }
} else {
    echo "Missing video_id";
}
?>
