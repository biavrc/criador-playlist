
document.addEventListener('DOMContentLoaded', function () {

    // obtem as referencias dos inputs e botoes pelo id 
    var playlistNameInput = document.getElementById('playlistName');
    var musicNameInput = document.getElementById('musicName');
    var artistNameInput = document.getElementById('artistName');
    var addMusicButton = document.getElementById('addMusic');
    var displayPlaylistName = document.getElementById('displayPlaylistName');
    var musicList = document.getElementById('musicList');

    // inicializa a variavel pra guardar o nome da playlist
    var playlistName = '';
    
    // inicializa o array pra guardar as musicas adicionadas
    var songs = [];

    // adiciona um evento de clique no botao de adicionar musica
    addMusicButton.addEventListener('click', function () {
        // captura os valores dos inputs
        playlistName = playlistNameInput.value.trim();
        var musicName = musicNameInput.value.trim();
        var artistName = artistNameInput.value.trim();

        // verifica se o campo do nome da playlist, cantor e musica estao preenchidos
        if (playlistName && musicName && artistName) {
            // adiciona a nova musica ao array
            songs.push({ musicName: musicName, artistName: artistName });

            // exibe o nome da playlist
            displayPlaylistName.textContent = playlistName;

            // limpa e atualiza a lista de musicas
            musicList.innerHTML = '';
            songs.forEach(function (song, index) {
                var li = document.createElement('li');
                li.textContent = `${index + 1}. ${song.musicName} - ${song.artistName}`;
                musicList.appendChild(li);
            });

            // limpa os campos de entrada pra nova musica
            musicNameInput.value = '';
            artistNameInput.value = '';
            // foca no campo de nome da musica pra facilitar a adicao de musicas
            musicNameInput.focus();
        }
    });

    // move o foco pro proximo campo quando enter é pressionado
    playlistNameInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // evita o comportamento padrao do enter
            musicNameInput.focus(); // move o foco pro campo de nome da musica
        }
    });

    //move o foco pro proximo campo quando enter é pressionado
    musicNameInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // evita o comportamento padrao do enter
            artistNameInput.focus(); // move o foco pro campo de nome do artista
        }
    });

    artistNameInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // evita o comportamento padrao do enter
            addMusicButton.click(); // clique no botão de adicionar música
        }
    });
});
