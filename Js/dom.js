const searchInput=document.querySelector('.search-box')
searchInput.addEventListener('keypress', searchByName(searchInput.value))