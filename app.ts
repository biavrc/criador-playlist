document.addEventListener('DOMContentLoaded', () => {

    //obtem as referencias dos elementos html com seus tipos
    const playlistNameInput = document.getElementById('playlistName') as HTMLInputElement;
    const musicNameInput = document.getElementById('musicName') as HTMLInputElement;
    const artistNameInput = document.getElementById('artistName') as HTMLInputElement;
    const addMusicButton = document.getElementById('addMusic') as HTMLButtonElement;
    const displayPlaylistName = document.getElementById('displayPlaylistName') as HTMLHeadingElement;
    const musicList = document.getElementById('musicList') as HTMLUListElement;

    //variavel pra armazenar o nome da playlist e array pra armazenar as musicas adicionadas
    let playlistName = '';
    let songs: { musicName: string, artistName: string }[] = [];

    //funcao pra adicionar as musicas na playlist
    const addMusic = () => {
        playlistName = playlistNameInput.value;
        const musicName = musicNameInput.value;
        const artistName = artistNameInput.value;

        //verifica se todos os campos estao preenchidos e adiciona a musica no array
        if (playlistName && musicName && artistName) {
            songs.push({ musicName, artistName });

            // mostra o nome da playlist
            displayPlaylistName.textContent = playlistName;

            // limpa a lista e renderiza
            musicList.innerHTML = '';
            songs.forEach((song, index) => {
                const li = document.createElement('li'); //cria um novo item de lista
                li.textContent = `${index + 1}. ${song.musicName} - ${song.artistName}`; //adiciona o texto com o nome da musica-artista
                musicList.appendChild(li); //adiciona o item na lista de musica
            });

            // limpa os campos de entrada pra adicionar nova
            musicNameInput.value = '';
            artistNameInput.value = '';
        }
    };

    addMusicButton.addEventListener('click', addMusic);

    // adiciona evento para funcionar o Enter
    [playlistNameInput, musicNameInput, artistNameInput].forEach(input => {
        input.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                addMusic();
            }
        });
    });
});
