
/* Episode:53955951 */
function encode_string() {
    url = document.getElementById('url').value;
    episode_num =  url.slice(-8);
    episode = "Episede:" + episode_num;
    encoded_episode = btoa(episode);
    embed_URL = "https://www.stream.cz/embed/index?id=" + encoded_episode
    document.getElementById("embed_URL").innerHTML = embed_URL;
}
