import axios from 'axios'

const SC = require('soundcloud');
const CLIENT_ID = 'ggX0UomnLs0VmW7qZnCzw';
const SEARCH_LIMIT = 6;

SC.initialize({
  client_id: CLIENT_ID
});

export const musicService = {
  getTracks,
  getNextTracks,
  loadView,
  changeView
}

async function getTracks(query) {
  try {
    return await SC.get('/tracks', {
      linked_partitioning: 1,
      limit: SEARCH_LIMIT,
      q: query
    }).then(tracks => tracks)
  } catch (error) {
    console.log('Something Went Wrong With The Folowing ', error);
  }
}

async function getNextTracks(src) {
  try {
    return await axios.get(src)
      .then(res => res.data)
  } catch (error) {
    console.log('Something Went Wrong With The Folowing ', error);
  }
}

function loadView() {
  let view = _loadFromStorage('view');
  if (!view) view = 'list';
  return view;
}

function changeView(selectedView) {
  _saveToStorage('view', selectedView)
}

function _saveToStorage(key, val) {
  localStorage.setItem(key, JSON.stringify(val));
}

function _loadFromStorage(key) {
  var val = localStorage.getItem(key);
  return JSON.parse(val);
}