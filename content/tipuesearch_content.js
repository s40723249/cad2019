var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n \n', 'tags': '', 'url': 'Develop.html'}, {'title': 'WEEK', 'text': '', 'tags': '', 'url': 'WEEK.html'}, {'title': 'WEEK2~WEEK5', 'text': 'week2 \n 建立自己倉儲 \n 將2019fall可攜式套件載入自己隨身碟裡 \n git\xa0 clone倉儲網址 \n \xa0git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add\xa0 git commit\xa0 git push 將內容推到遠端. \n \n \n week3 \n Solvespace 編譯 流程 \n 將Solvespace載至自己隨身碟中 \n 先將 Y:\\portablegit\\bin\\sh.exe 改名為 sh_rename_for_solvespace.exe \n 輸入git clone --recurse-submodules https://github.com/solvespace/solvespace.git solvespace取得子模組資料 \n 進入到Y:\\tmp\\solvespace\\extlib\\angle\\CMakeLists.txt並將713714行前面加上# \n 把\xa0libpng.dll.a\xa0改名為libpng_static.a並放到編譯系統的 lib 目錄中 \n 接著到solvespace裡面的 extlib再到libpng裡面建立一資料夾build \n cd build裡面打入 cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release \n 好了後再輸入mingw32-make以及\xa0 \n (mingw32-make -Wl,-static) \n 接著回到 solvespace 原始碼目錄, 建立 build 目錄後進入 build 目錄 \n 執行 cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release 以及mingw32-make \n \n \n \n week5 \n solvespace練習 \n \n', 'tags': '', 'url': 'WEEK2~WEEK5.html'}, {'title': 'WEEK6~WEEK9', 'text': 'week6 \n 利用Solvespace畫出車子 \n \n 利用vrep3遠端控制模型車的移動 \n \n week7 \n 將solvespace about裡改成自己學號 \n', 'tags': '', 'url': 'WEEK6~WEEK9.html'}]};