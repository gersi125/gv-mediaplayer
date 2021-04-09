<template>
    <div class="content-spotify bg-gradient-to-r from-black to-gray-800 flex-1 overflow-y-auto flex-col ">
        <div class="top-bar flex items-center justify-between px-4 py-2">
            <div class="flex items-center">
                <button>
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                </button>
                <button>
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </button>
                <div class="ml-4 relative">
                    <input type="text" placeholder="Search" class="bg-white text-gray-800 rounded-full px-3 pl-8 py-1">
                    <div class="absolute top-0">
                        <svg class="w-4 h-4 ml-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </div>    
                </div>
            </div>
            <div class="flex items-center">
                <button>
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" 
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z">
                        </path>
                    </svg>
                </button>
                <a href="#" class="ml-3 hover:underline hover:text-white">gersiveshi</a>
                <button class="ml-4">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
            </div>
        </div>
        <div class="content-spotify overflow-y-auto ml-8">
            <div class="container">
                <div class="content-spotify">
                <h2 class="mt-24 text-5xl font-semibold text-white">Home</h2>
                <div class="mt-12">
                    <h3 class="font-semibold text-xl pb-2">Recently Played</h3>
                    <div class="flex items-center mt-4 -mx-4">
                        <div class="w-1/5 px-4">
                            <div>
                                <a href="#"><img src="../../assets/covers/dua_lipa_idgaf.jpg" alt="album cover"></a>
                            </div>
                            <div>
                                <a href="#" class="font-semibold block text-white text-xl mt-2">IDGAF</a>
                            </div>
                            <div class="text-gray-500  font-semibold mt-2">Dua Lipa</div>
                        </div>
                        <div class="w-1/5 px-4">
                            <div>
                                <a href="#"><img src="../../assets/covers/Rita_Ora_Bang_EP_Cover.jpg" alt="album cover"></a>
                            </div>
                            <div>
                                <a href="#" class="font-semibold block text-white text-xl mt-2">Bang EP</a>
                            </div>
                            <div class="text-gray-500 font-semibold mt-2"> Rita Ora</div>
                        </div>
                        <div class="w-1/5 px-4">
                            <div>
                                <a href="#"><img src="../../assets/covers/the-weeknd-echoes_of_silence.jpg" alt="album cover"></a>
                            </div>
                            <div>
                                <a href="#" class="font-semibold block text-white text-xl mt-2">Echoes Of Silence</a>
                            </div>
                            <div class="text-gray-500  font-semibold mt-2">The Weeknd</div>
                        </div>
                        <div class="w-1/5 px-4">
                            <div>
                                <a href="#"><img src="../../assets/covers/the_weeknd_starboy.jpg" alt="album cover"></a>
                            </div>
                            <div>
                                <a href="#" class="font-semibold block text-white text-xl mt-2">Starboy</a>
                            </div>
                            <div class="text-gray-500 font-semibold mt-2">The Weeknd</div>
                        </div>
                        <div class="w-1/5 px-4">
                            <div>
                                <a href="#"><img src="../../assets/covers/theweeknd.jpg" alt="album cover"></a>
                            </div>
                            <div>
                                <a href="#" class="font-semibold block text-white text-xl mt-2">After Hours</a>
                            </div>
                            <div class="text-gray-500 font-semibold mt-2">The Weeknd</div>
                        </div>
                    </div>
                    <h3 class="font-semibold text-xl pb-2 mt-10">Playlists Made For You</h3>
                    <div class="grid md:grid-cols-6 items-center mt-4 --mx-4">
                        <div class="w-3/5 md:w-4/5 px-2 mt-4 mb-4">
                            <div>
                                <a href="#">
                                    <img src="../../assets/covers/My_Beautiful_Dark_Twisted_Fantasy.jpg" alt="album cover" class="object-scale-down h-50 w-full mb-2">
                                </a>
                            </div>
                            <div class="truncate font-bold">
                                <a href="#" class=" font-semibold text-fill text-white text-xl mt-2">My Beautiful Dark Twisted Fantasy</a>
                            </div>
                            <div class="text-gray-500 font-semibold mt-2">Kanye West</div>
                        </div>
                        <div class="w-3/5 md:w-4/5 px-2 mt-4 mb-4">
                            <div>
                                <a href="#">
                                    <img src="../../assets/covers/dua_lipa_idgaf.jpg" alt="album cover" class="object-scale-down h-50 w-full mb-2">
                                </a>
                            </div>
                            <div class="truncate font-bold">
                                <a href="#" class="font-semibold text-fill text-white text-xl mt-2">IDGAF</a>
                            </div>
                            <div class="text-gray-500 font-semibold mt-2">Lana Del Rey</div>
                        </div>
                        <div class="w-3/5 md:w-4/5 px-2 mt-4 mb-4 truncate">
                            <div>
                                <a href="#"><img src="../../assets/covers/0602537187966.jpg" alt="album cover" class="object-scale-down h-50 w-full mb-2"></a>
                            </div>
                            <div class="truncate font-bold">
                                <a href="#" class="font-semibold text-fill text-white text-xl mt-2">Born To Die</a>
                            </div>
                            <div class="text-gray-500  font-semibold mt-2">Dua Lipa</div>
                        </div>
                        <div class="w-3/5 md:w-4/5 px-2 mt-4 mb-4">
                            <div>
                                <a href="#"><img src="../../assets/covers/rita_ora-bang.jpeg" alt="album cover" class="object-scale-down h-50 w-full mb-2"></a>
                            </div>
                            <div class="truncate font-bold">
                                <a href="#" class="font-semibold text-fill text-white text-xl mt-2">Bang EP</a>
                            </div>
                            <div class="text-gray-500 font-semibold mt-2"> Rita Ora</div>
                        </div>
                        <div class="w-3/5 md:w-4/5 px-2 mt-4 mb-4">
                            <div>
                                <a href="#">
                                    <img src="../../assets/covers/the-weeknd-echoes_of_silence.jpg" alt="album cover" class="object-scale-down h-50 w-full mb-2">
                                </a>
                            </div>
                            <div class="truncate font-bold">
                                <a href="#" class="font-semibold text-fill text-white text-xl mt-2" >Echoes Of Silence</a>
                            </div>
                            <div class="text-gray-500  font-semibold mt-2">The Weeknd</div>
                        </div>
                        <div class="w-3/5 md:w-4/5 px-2 mt-4 mb-4">
                            <div>
                                <a href="#">
                                    <img src="../../assets/covers/the_weeknd_starboy.jpg" alt="album cover" class="object-scale-down h-50 w-full mb-2">
                                </a>
                            </div>
                            <div class="truncate font-bold">
                                <a href="#" class="font-semibold text-fill text-white text-xl mt-2">Starboy</a>
                            </div>
                            <div class="text-gray-500 font-semibold mt-2">The Weeknd</div>
                        </div>
                        <div class="w-3/5 md:w-4/5 px-2 mt-4 mb-4">
                            <div>
                                <a href="#">
                                    <img src="../../assets/covers/blueprint_3.jpg" alt="album cover" class="object-scale-down h-50 w-full mb-2">
                                </a>
                            </div>
                            <div class="truncate font-bold">
                                <a href="#" class="font-semibold text-fill text-white text-xl mt-2">Blueprint 3</a>
                            </div>
                            <div class="text-gray-500 font-semibold mt-2">JAY-Z</div>
                        </div>
                        <div class="w-3/5 md:w-4/5 px-2 mt-4 mb-4">
                            <div>
                                <a href="#">
                                    <img src="../../assets/covers/drake_views.jpg" alt="album cover" class="object-scale-down h-50 w-full mb-2">
                                </a>
                            </div>
                            <div class="truncate font-bold">
                                <a href="#" class="font-semibold text-fill text-white text-xl mt-2">Views</a>
                            </div>
                            <div class="text-gray-500 font-semibold mt-2">Drake</div>
                        </div>
                        <div class="w-3/5 md:w-4/5 px-2 mt-4 mb-4">
                            <div>
                                <a href="#">
                                    <img src="../../assets/covers/Ledri_Vula-10.jpg" alt="album cover" class="object-scale-down h-50 w-full mb-2">
                                </a>
                            </div>
                            <div class="truncate font-bold">
                                <a href="#" class="font-semibold text-fill text-white text-xl mt-2">10/10</a>
                            </div>
                            <div class="text-gray-500 font-semibold mt-2">Ledri Vula</div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
  .content-spotify::-webkit-scrollbar 
  {
      width: 8px;
      background: transparent
  }

  .content-spotify::-webkit-scrollbar-thumb 
  {
      border-radius: 8px;
      background-color: #535353;
  }
</style>