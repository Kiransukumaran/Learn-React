import { combineReducers } from 'redux'

export const songsReducer = () => {
    return [
        {
            title: 'No Scrubs',
            duration: '4.05'
        },
        {
            title: 'My bad',
            duration: '3.10'
        },
        {
            title: 'WEho noews',
            duration: '2.98'
        },
        {
            title: 'Newbie',
            duration: '5.24'
        },
    ];
}

export const selectedSongReducer = (selectedSong = null, action) => {
    
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});