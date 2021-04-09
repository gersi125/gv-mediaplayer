<template>
    <div class="sidebar-spotify overflow-y-auto">
        <div class="hidden md:block sidebar bg-gray-900-spotify w-48 overflow-y-auto flex flex-col justify-between font-semibold">
            <nav>
            <ul class="py-6">
                <li>
                    <router-link to="/main" class="flex items-center mx-4 mt-4 group">
                        <svg class="w-6 h-6 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
                            </path>
                        </svg>
                        <span class="ml-4 group-hover:text-white">Home</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/artists" class="flex items-center mx-4 mt-4 group">
                        <svg class="w-6 h-6 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4">
                            </path>
                        </svg>
                        <span class="ml-4 group-hover:text-white">Browse</span>
                    </router-link>
                </li>
                <li>
                    <a href="#" class="flex items-center mx-4 mt-4 group">
                        <svg class="w-6 h-6 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                  d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0">
                            </path>
                        </svg>
                        <span class="ml-4 group-hover:text-white">Radio</span>
                    </a>
                </li>
            </ul>
            </nav>
            <div class="sidebar-spotify overflow-y-auto px-5 mt-2">
                <h3 class="uppercase tracking-widest text-gray-500 font-normal text-xs">Your Library</h3>
                <ul class="leading-10">
                    <li class="truncate"><a href="#" class="hover:text-white">Made For You</a></li>
                    <li class="truncate"><a href="#" class="hover:text-white">Recently Played</a></li>
                    <li class="truncate"><a href="#" class="hover:text-white">Liked Songs</a></li>
                    <li class="truncate"><a href="#" class="hover:text-white">Albums</a></li>
                    <li class="truncate"><a href="#" class="hover:text-white">Artists</a></li>
                    <li class="truncate"><a href="#" class="hover:text-white">Podcasts</a></li>
                </ul>
                <h3 class="uppercase tracking-widest text-gray-500 font-normal text-xs">Playlists</h3>
                <ul class="leading-10">
                    <li class="truncate"><a href="#" class="hover:text-white">Mix</a></li>
                    <li class="truncate"><a href="#" class="hover:text-white">This is so 90's</a></li>
                    <li class="truncate"><a href="#" class="hover:text-white">Hip-Hop</a></li>
                    <li class="truncate"><a href="#" class="hover:text-white">Pop</a></li>
                    <li class="truncate"><a href="#" class="hover:text-white">Blues/Jazz</a></li>
                    <li class="truncate"><a href="#" class="hover:text-white">Rock'n'Roll</a></li>
                    <li class="truncate"><a href="#" class="hover:text-white">Top os the Tops</a></li>
                    <li class="truncate"><a href="#" class="hover:text-white">Trending</a></li>
                    <li class="truncate"><a href="#" class="hover:text-white">The Weeknd Mix</a></li>
                    <li class="truncate"><a href="#" class="hover:text-white">2000's</a></li>
                    <li class="truncate"><a href="#" class="hover:text-white">Dua Lipa</a></li>
                    <li class="truncate"><a href="#" class="hover:text-white">Rita Ora</a></li>
                </ul>
            </div>
            <div class="border-t border-gray-800 h-16 px-4 py-2 flex ">
                <a href="#" class="flex items-center mt-2 group hover:text-white">
                    <svg class="w-6 h-6 hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z">
                        </path>
                    </svg>
                    <span class="ml-4 ">New Playlist</span>
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped>
 .sidebar-spotify::-webkit-scrollbar 
 {
     width: 8px;
     background-color: #121212;
 }

  .sidebar-spotify::-webkit-scrollbar-thumb
  {
      border-radius: 8px;
      background-color: #535353;
  }
</style>