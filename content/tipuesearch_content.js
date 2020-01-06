var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n \n', 'tags': '', 'url': 'Develop.html'}, {'title': 'WEEK', 'text': '', 'tags': '', 'url': 'WEEK.html'}, {'title': 'WEEK2~WEEK5', 'text': 'week2 \n 建立自己倉儲 \n 將2019fall可攜式套件載入自己隨身碟裡 \n git\xa0 clone倉儲網址 \n \xa0git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add\xa0 git commit\xa0 git push 將內容推到遠端. \n \n \n week3 \n Solvespace 編譯 流程 \n 將Solvespace載至自己隨身碟中 \n 先將 Y:\\portablegit\\bin\\sh.exe 改名為 sh_rename_for_solvespace.exe \n 輸入git clone --recurse-submodules https://github.com/solvespace/solvespace.git solvespace取得子模組資料 \n 進入到Y:\\tmp\\solvespace\\extlib\\angle\\CMakeLists.txt並將713714行前面加上# \n 把\xa0libpng.dll.a\xa0改名為libpng_static.a並放到編譯系統的 lib 目錄中 \n 接著到solvespace裡面的 extlib再到libpng裡面建立一資料夾build \n cd build裡面打入 cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release \n 好了後再輸入mingw32-make以及\xa0 \n (mingw32-make -Wl,-static) \n 接著回到 solvespace 原始碼目錄, 建立 build 目錄後進入 build 目錄 \n 執行 cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release 以及mingw32-make \n \n \n \n week5 \n solvespace練習 . \n \n', 'tags': '', 'url': 'WEEK2~WEEK5.html'}, {'title': 'WEEK6~WEEK9', 'text': 'week6 \n 利用Solvespace畫出車子 \n \n 利用vrep3遠端控制模型車的移動 \n \n week7 \n 將solvespace about裡改成自己學號 \n \n 繪圖認證 \n \n \n week8 \n 1.打開LEO並且把pelican.leo拖進去 \n 2.到 pelican設定的@edit貼上自己的biog網址 \n 3.對local-blog按右鍵Goto Script 複製裡面指令 \n 4.到自己資料夾內輸入這段指令 \n 5.到近端確認是否完成 \n \n 1.首先先把start複製下來 \n 2.到2019/data/webots貼上剛剛複製的start \n 3.把剛剛複製的改名並且拖到編輯器裡面 \n 4.增加set path_webots=%Disk%:\\Webots_2019b_rev1\\msys64\\mingw64\\bin;%Disk%:\\Webots_2019b_rev1\\msys64\\usr\\bin \n 5.並在path=%..這段後面新增%path_webots% \n 6.在下面再新增一段start Y:\\Webots_2019b_rev1\\msys64\\mingw64\\bin\\webots.exe \n 7.啟動 \n \n', 'tags': '', 'url': 'WEEK6~WEEK9.html'}, {'title': 'week10~week14', 'text': '第五章 \n NX 12 Drafting應用程序使您可以創建工程圖，視圖，幾何形狀，尺寸和起草製造所需的註釋以及對工業設計的理解。本章的目的是為設計人員/製圖員提供有關起草工具的足夠知識，以便創建其設計的基本圖紙。製圖應用程序支持工程製圖符合ANSI標準的模型。在解釋了起草申請的基礎之後，我們將逐步介紹起草一些先前創建的模型的方法。 \n 5-1總覽 \n 製圖應用程序旨在允許您制定和維護行業標準直接從3D模型或裝配零件製造工程圖。Drafting應用程序提供了一組2D繪圖，滿足2D中心設計和佈局要求的工具。可以製作獨立的2D工程圖。繪圖應用程序基於如下圖所示的實體模型創建視圖。通過繪圖，可以輕鬆地創建具有正交視圖，剖面圖，導入視圖，輔助視圖，尺寸和其他註釋。 \n \n 5.2建立草圖 \n 打開文件Arborpress_rack.prt 從NX 12界面中，選擇File→Draft如圖所示或選擇Application選項然後選擇製圖 \n 可選擇圖紙的大小，以及投影第一角法或第三角法 \n 5.3尺寸 \n 現在，我們繼續為這些視圖創建尺寸。 尺寸標註如下所述的兩種方式之一： 選擇菜單→插入→尺寸 不然就是 單擊尺寸工具欄，如下圖所示 \n \n 單擊“點和邊”，移動鼠標，然後單擊適當的位置進行繪製 \n 5.4剖面圖 \n 為同一零件創建一個剖面圖，以顯示孔的深度和輪廓。 \n 選擇插入→視圖→截面或從視圖組中單擊視圖截面圖標 在功能區欄中 單擊基本視圖底部，如圖所示。這將顯示幻影 帶有兩個箭頭標記的線表示剖面平面的方向（橙色虛線 向上箭頭）。 \n 單擊視圖的中間，如圖所示。這將確定剖麵線的位置 （剖面圖） 現在，在視圖周圍移動光標以獲取剖面平面的方向。保持箭頭 垂直向上指點並將截面圖拖動到基本視圖的底部 \n \n 5.5產品和製造信息 \n 產品和製造信息（PMI）是NX中的重要應用之一，提供用於在3D環境中記錄產品的註釋工具。 PMI申請包括一個全面的3D註釋環境，允許設計團隊共享細節例如幾何尺寸和公差（GD＆T），表面光潔度，焊接信息，材料規格、評論、政府安全訊息或專有訊息，等直接添加到3D模型中。 PMI符合行業標準的3D產品定義，從事協作項目的產品團隊將使用3D模型作為合法的完整記錄產品和製造信息的方法。 \n 5.6例子 \n 打開模型Impeller_hexa-bolt.prt 選擇文件→起草或在應用程序選項卡中選擇起草 在圖紙窗口中，選擇圖紙E-34 X 44並將比例值更改為8.0：1.0 點擊確定 選擇插入→視圖→基本視圖或單擊基本視圖圖標 通過重複添加前視圖 最後一個示例中說明的過程 添加包括右視圖在內的正交視圖 視圖和頂視圖 選擇首選項→起草 取消選中顯示邊框下的框 查看標籤 屏幕將具有以下三個視圖。 \n 為了可視化隱藏線， 選擇首選項→草圖→查看，或者 選擇視圖，單擊鼠標右鍵，然後選擇“設置”，如下所示 將彈出一個窗口，其中包含與視圖有關的各種選項。 單擊隱藏線選項卡 如下所示，將“進程隱藏線”更改為“虛線”，然後單擊“確定”。 \n \n 您可以看到隱藏線，如右圖所示 現在，我們將繼續進行尺寸標註。 選擇插入→尺寸→線性或 點擊“線性尺寸”圖標 尺寸組 給出所有距離的垂直尺寸 如下圖所示 \n \n 對於線程，我們將使用引導線。 單擊工具欄中顯示的註釋圖標 在打開的註釋窗口中，輸入以下內容 文本。您可以在上找到O和度數符號 符號選項卡 右螺紋直徑0.20 x 1.5 節距0.05，角度60度 單擊側視圖中的螺紋軸， 按住鼠標並將“引線”行拖動到視圖。放開鼠標，然後再次單擊以放置文本 \n \n \n 關閉註釋編輯器 由於刻字的高度很小，因此我們將放大字符大小以及箭頭尺寸。 右鍵單擊Lead並選擇Settings 單擊刻字選項 在參數部分，增加高度以使引線清晰 單擊“行/箭頭”選項 在格式部分，增加引線的長度 現在，我們將添加其他尺寸和視圖。 選擇插入→尺寸→徑向或在尺寸組 在上視圖中單擊螺栓的圓以給出直徑尺寸 單擊插入→視圖→基本視圖，然後單擊基本視圖圖標 選擇等軸測視圖並將其放置在屏幕上的某個位置 最終圖如下所示。記得保存。 \n \n \n week10 \n 組長建立好整組要用的倉儲後，組員要到倉儲下去fork這樣才可以讓每個人都可以push,利用指令 git clone --recurse-submodules將組倉儲clone進隨身碟中，而每次要push之前都要先git pull 以確保資料的錯誤，在push之後組員也必須按pull new request才能請組長確保push成功 \n \n week12 \n webot tutorial - 1 \n 1.先創建儲存檔案的資料夾 \n 2.創建一個新生成的世界 \n 3.創建好之後先用加號加入一個木箱並更改其尺寸 \n 4.添加完成了之後我們要複製並貼上木箱直到場面上有三個木箱 \n 5.添加e-puck robot並且啟動試試看是否可以運動 \n 6.增加控制器操縱e-puck robot添加指令後機器人應該會直走並旋轉後停下 \n 7.修改這個控制器的功能貼上另一個指令如果成功機器人因該會緩慢行走 \n 8.修改機器人馬達的動力使其達到原地旋轉 \n \n \n week12 \n 個人進度 \n \n', 'tags': '', 'url': 'week10~week14.html'}, {'title': 'week15', 'text': '進度回報 \n \n', 'tags': '', 'url': 'week15.html'}, {'title': 'WEEK16', 'text': '16周小考 \n \n \n', 'tags': '', 'url': 'WEEK16.html'}, {'title': 'WEEK17個人任務', 'text': "個人分組翻譯 \n This tutorial will guide you step-by-step into building a clean simulation model, of a robot, or any other item. This is a very important topic, maybe the most important aspect, in order to. have a nice looking, fast displaying, fast simulating and stable simulation model. \n To illustrate the model building process, we will be building following manipulator: \n 在構建新模型時，首先，我們僅處理它的視覺方面：動態方面（其簡化，優化模型的不合理之處），關節，傳感器等將在以後階段進行處理。 \n Building the visible shapes. \n When building a new model, first, we handle only the visual aspect of it: the dynamic aspect (its undelying even more simplified/optimized model), joints, sensors, etc. will be handled at a later stage. \n We could now directly create primitive shapes in CoppeliaSim with [Menu bar --> Add --> Primitive shape --> ...]. When doing this, we have the option to create pure shapes, or regular shapes. Pure shape will be optimized for dynamic interaction, and also directly be dynamically enabled (i.e. fall, collide, but this can be disabled at a later stage). Primitive shapes will be simple meshes, which might not contain enough details or geometric accuracy for our application. Our other option in that case would be to import a mesh from an external application. When importing CAD data from an external application, the most important is to make sure that the CAD model is not too heavy, i.e. doesn't contain too many triangles. This requirement is important since a heavy model will be slow in display, and also slow down various calculation modules that might be used at a later stage (e.g. minimum distance calculation, or dynamics). Following example is typically a no-go (even if, as we will see later, there are means to simplify the data within CoppeliaSim): \n 標題:建立可見的形狀 現在，我們可以使用[菜單欄->添加->基本形狀-> ...]在CoppeliaSim中直接創建基本形狀。 這樣做時，我們可以選擇創建純形狀或常規形狀。 純形狀將針對動態交互進行優化，也可以直接動態啟用（例如，跌落，碰撞，但可以在以後禁用）。 基本形狀將是簡單的網格，對於我們的應用程序，可能沒有足夠的細節或幾何精度。 在這種情況下，我們的另一個選擇是從外部應用程序導入網格。 \n 從外部應用程序導入CAD數據時，最重要的是確保CAD模型不會太重，即不包含太多三角形。 這項要求很重要，因為重型模型的顯示速度會很慢，並且還會減慢以後可能使用的各種計算模塊（例如最小距離計算或動力學）。 以下示例通常是一事無成（即使我們會在後面看到，即使有方法可以簡化CoppeliaSim中的數據）： \n Above CAD data is very heavy: it contains many triangles (more than 47'000), which would be ok if we would just use a single instance of it in an empty scene. But most of the time you will want to simulate several instances of a same robot, attach various types of grippers, and maybe have those robots interact with other robots, devices, or the environment. In that case, a simulation scene can quickly become too slow. Generally, we recommend to model a robot with no more than a total of 20'000 triangles, but most of the time 5'000-10'000 triangles would just do fine as well. Remember: less is better, in almost every aspect. What makes above model so heavy? First, models that contain holes and small details will require much more triangular faces for a correct representation. So, if possible, try to remove all the holes, screws, the inside of objects, etc. from your original model data. If you have the original model data represented as parametric surfaces/objects, then it is most of the time a simple matter of selecting the items and deleting them (e.g. in Solidworks).. The second important step is to export the original data with a limited precision: most CAD applications let you specify the level of details of exported meshes. It might also be important to export the objects in several steps, when the drawing consists of large and small objects; this is to avoid having large objects too precisely defined (too many triangles) and small objects too roughly defined (too few triangles): simply export large objects first (by adjusting the desired precision settings), then small objects (by adjusting up precision settings). CoppeliaSim supports currently following CAD data formats: OBJ, STL, DXF, 3DS (Windows only), and Collada. URDF is also supported, but not mentionned here since it is not a pure mesh-based file format. Now suppose that we have applied all possible simplifications as described in previous section. We might still end-up with a too heavy mesh after import: \n 上面的CAD數據非常重：它包含許多三角形（超過47'000個），如果我們只在空的場景中使用單個三角形的實例，這是可以的。 但是大多數時候，您將需要模擬同一機器人的多個實例，連接各種類型的抓手，並可能使這些機器人與其他機器人，設備或環境進行交互。 在這種情況下，模擬場景可能很快變得太慢。通常，我們建議對不超過2萬個三角形的機器人進行建模，但是在大多數情況下，5 000至10 000個三角形也可以。 記住：在幾乎所有方面，少即是好。. \n 是什麼使上述模型如此重？首先，包含孔和小細節的模型將需要更多的三角形面才能正確表示。. 因此，如果可能，請嘗試從原始模型數據中刪除所有的孔，螺釘，物體的內部等。如果您將原始模型數據表示為參數化曲面/對象，則通常在大多數情況下只需選擇並刪除它們即可（例如在Solidworks中）。 第二個重要步驟是以有限的精度導出原始數據：大多數CAD應用程序都允許您指定導出的網格的細節級別。 當工程圖由大小對象組成時，分幾步導出對象可能也很重要。這是為了避免大對象定義太精確（三角形太多）和小對象定義太粗（三角形太少）：首先簡單地導出大對象（通過調整所需的精度設置），然後導出小對象（通過調整精度設置） ）。 CoppeliaSim當前支持以下CAD數據格式：OBJ，STL，DXF，3DS（僅Windows）和Collada。還支持URDF，但此處未提及，因為它不是基於純網格的文件格式。 現在，假設我們已按照上一節中所述應用了所有可能的簡化。導入後，我們可能最終仍然會留下一個過重的網格： 您會注意到整個機器人是作為單個網格導入的。稍後我們將看到如何對其進行適當劃分。 還要注意導入的網格的方向錯誤：最好保持其方向不變，直到構建整個模型為止，因為如果在以後的階段中我們要導入與同一機器人相關的其他項目，它們將自動具有相對於原始網格的正確位置/方向。 在此階段，我們可以使用多種功能來簡化網格： 自動網格劃分：允許為未通過公共邊鏈接在一起的所有元素生成新形狀。這並不總是適用於選定的網格，但是總是值得一試的，因為與必須同時處理所有元素相比，處理網格元素可以為我們提供更多的控制權。 可以通過[菜單欄->編輯->分組/合併->分割所選形狀]訪問該功能。 有時，網格劃分會超出預期。在這種情況下，只需將邏輯上屬於一起的元素（即，具有相同的視覺屬性並且屬於同一鏈接的一部分）合併回一個單一形狀（[菜單欄->編輯->分組/合併->合併選定的形狀]）。 提取凸包：通過將其轉換為凸包來簡化網格。可以通過[菜單欄->編輯->將選擇變形為凸形]來訪問該功能。 抽取網格：減少網格中包含的三角形數量。可以通過[菜單欄->編輯->縮小所選形狀...]訪問該功能。 刪除網格的內部：允許通過刪除其內部來簡化網格。此功能基於視覺傳感器，根據所選設置可能會或多或少地令人滿意。可以通過[菜單欄->編輯->提取選定形狀的內部]訪問該功能。 沒有/可以應用上述功能的預定義順序（列表中的第一項除外，應始終首先嘗試該項），它在很大程度上取決於我們要簡化的網格的幾何形狀。下圖說明了應用於導入的網格的上述功能（假設列表中的第一項對我們不起作用）： \n \n Notice how the convex hull doesn't help us at this stage. We decide to use the mesh decimation function first, and run the function twice in order to divide the number of triangles by a total of 50. Once that is done, we extract the inside of the simplified shape and discard it. We end-up with a mesh containing a total of 2'660 triangles (the original imported mesh contained more than 136'000 triangles!). The number of triangles/vertices a shape contains can be seen in the shape geometry dialog. 2'660 triangles are extremely few triangles for a whole robot model, and the visual appearance might suffer a little bit from it. At this stage we can start to divide the robot into separate links (remember, we currently have only a single shape for the whole robot). You can do this in two different ways: Automatic mesh division: this function, which was already described in previous section, will inspect the shape and generate a new shape for all elements that are not linked together via a common edge. This does not always work, but is always worth a try. The function can be accessed with [Menu bar --> Edit --> Grouping/merging --> Divide selected shapes]. Manual mesh division: via the the triangle edit mode, you can manually select the triangles than logically belong together, then click Extract shape. This will generate a new shape in the scene. Delete the selected triangles after that operation. In the case of our mesh, method 1 worked fine: \n \n 請注意，凸包在現階段如何對我們沒有幫助。我們決定首先使用網格抽取功能，然後運行兩次該功能，以將三角形的數量總共除以50。 完成後，我們提取簡化形狀的內部並將其丟棄。我們最終得到的網格總共包含2'660個三角形（原始導入的網格包含了136'000個三角形！）。形狀包含的三角形/頂點的數量可以在形狀幾何對話框中看到。 對於整個機器人模型，2'660三角形是極少的三角形，因此視覺外觀可能會因此受到影響。 在這一階段，我們可以開始將機器人劃分為單獨的鏈接（請記住，我們目前整個機器人只有一個形狀）。您可以通過兩種不同的方式執行此操作： 自動網格劃分：此功能已在上一節中進行了描述，它將檢查形狀並為未通過公共邊鏈接在一起的所有元素生成新形狀。這並不總是有效，但總是值得嘗試的。可以通過[菜單欄->編輯->分組/合併->分割所選形狀]訪問該功能。 手動網格劃分：通過三角形編輯模式，您可以手動選擇邏輯上不屬於邏輯的三角形，然後單擊“提取形狀”。這將在場景中生成新形狀。完成該操作後，刪除選定的三角形。 對於我們的網格，方法1可以正常工作： \n \n Now, we could further refine/simplify individual shapes. Sometimes also, a shape might look better if its convex hull is used instead. Othertimes, you will have to use several of above's described techniques iteratively, in order to obtain the desired result. Take for instance following mesh: \n 現在，我們可以進一步細化/簡化單個形狀。 有時，如果改用凸包，形狀可能會看起來更好。 有時，您將不得不反複使用上述幾種技術，以獲得所需的結果。 以以下網格為例： \n \n The problem with above's shape is that we cannot simplify it nicely,because of the holes it contains. So we have to go the more complicated way via the shape edit mode, where we can extract individual elements that logically belong to the same convex sub-entityThis process can take several iterations: we first extract 3 approximate convex elements. For now, we ignore the triangles that are part of the two holes. While editing a shape in the shape edit mode, it can be convenient to switch the visibility layers,in order to see what is covered by other scene items. \n \n \n 上面形狀的問題是，由於其中包含孔，我們無法很好地簡化它 因此，我們必須通過形狀編輯模式進行更複雜的處理，在該模式下，我們可以提取邏輯上屬於同一凸形子實體的單個元素。 此過程可能需要進行多次迭代：我們首先提取3個近似凸元素。 現在，我們忽略作為兩個孔的一部分的三角形。 在形狀編輯模式下編輯形狀時，可以方便地切換可見性圖層，以查看其他場景項所覆蓋的內容。 \n \n We end up with a toal of three shapes, but two of them will need further improvement. Now we can erase the triangles that are part of the holes. Finally, we extract the convex hull individually for the 3 shapes, then merge them back together with [Menu bar --> Edit --> Grouping/Merging --> merge selected shapes]: \n \n 我們最終得到三個形狀的總和，但是其中兩個將需要進一步改進。 現在我們可以擦除作為孔的一部分的三角形。 最後，我們分別提取3種形狀的凸包，然後將其與[菜單欄->編輯->分組/合併->合併所選形狀]合併在一起： \n \n In CoppeliaSim, we can enable/disable edge display for each shape. We can also specify an angle that will be taken into account for the edge display. A similar parameter is the shading angle, that dictates how facetted the shape will display. Those parameters, and a few others such as the shape color, can be adjusted in the shape properties. Remember that shapes come in various flavours. In this tutorial we have only dealt with simple shapes up to now: a simple shape has a single set of visual attributes (i.e. one color, one shading angle, etc.). If you merge two shapes, then the result will be a simple shape. You can also group shapes, in which case, each shape will retain its visual attributes. In next step, we can merge elements that logically belong together (if they are part of the same rigid element, and if they have the same visual attributes). Then we change the visual attributes of the various elements. The easiest ist to adjust a few shapes that have different colors and visual attributes, and if we name the color with a specific string, we can later easily programmatically change that color, also if the shape is part of a compound shape. Then, we select all the shapes that have the same visual attributes, then control-select the shape that was already adjusted, then click Apply to selection, once for the Colors, once for the other properties, in the shape properties: this transfers all visual attributes to the selected shapes (including the color name if you provided one). We end up with 17 individual shapes: \n 在CoppeliaSim中，我們可以啟用/禁用每種形狀的邊緣顯示。我們還可以指定邊緣顯示時要考慮的角度。 相似的參數是陰影角，它指示形狀將在多方面顯示。這些參數以及其他一些參數（例如形狀顏色）可以在形狀屬性中進行調整。 請記住，形狀有多種風味。到目前為止，在本教程中，我們僅處理簡單的形狀：簡單的形狀具有一組視覺屬性（即一種顏色，一個陰影角度等）。如果合併兩個形狀，則結果將是一個簡單的形狀。 您還可以對形狀進行分組，在這種情況下，每個形狀將保留其視覺屬性。 在下一步中，我們可以合併邏輯上屬於一起的元素（如果它們屬於同一剛性元素，並且具有相同的視覺屬性）。然後，我們更改各種元素的視覺屬性。 調整具有不同顏色和視覺屬性的幾種形狀的最簡便方法，如果我們使用特定的字符串來命名顏色，則以後可以輕鬆地以編程方式更改該顏色，即使該形狀是複合形狀的一部分。然後，我們選擇所有具有相同視覺屬性的形狀，然後控制選擇已調整的形狀，然後單擊“應用於選擇”，一次是“顏色”，一次是其他屬性，在形狀屬性中：這將轉移所有所選形狀的視覺屬性（如果提供的話，還包括顏色名稱）。 我們最終得到17個單獨的形狀： \n Now we can group the shapes that are part of the same link with [Menu bar --> Edit --> Grouping/merging -> Group selected shapes]. We end up with 7 shapes: the base of the robot (or base of the robot's hierarchy tree), and 6 mobile links. It is also important to correctly name your objects: you we do this with a double-click on the object name in the scene hierarchy. The base should always be the robot or model name, and the other objects should always contain the base object name, like: robot (base), robot_link1, robot_proximitySensor, etc. By defaut, shapes will be assigned to visibility layer 1, but can be changed in the object common properties. By default, only visibility layers 1-8 are activated for the scene. We now have following (the model ResizableFloor_5_25 was temporarily made invisible in the model properties dialog): \n \n 現在，我們可以使用[菜單欄->編輯->分組/合併->分組所選形狀]對屬於同一鏈接的形狀進行分組。 我們最終得到7個形狀：機器人的基礎（或機器人的層次結構樹的基礎）和6個移動鏈接。 正確命名對像也很重要：您可以通過雙擊場景層次結構中的對象名稱來做到這一點。 基礎應始終是機械手或模型名稱，其他對象應始終包含基礎對象名稱，例如：robot（基礎），robot_link1，robot_proximitySensor等。通過默認，形狀將分配給可見性層1，但可以 在對象通用屬性中進行更改。 默認情況下，僅激活場景的可見性層1-8。 現在，我們有了以下內容（模型ResizableFloor_5_25模型在模型屬性對話框中暫時不可見）： \n \n When a shape is created or modified, CoppeliaSim will automatically set its reference frame position and orientation. A shape's reference frame will always be positioned at the shape's geometric center. The frame orientation will be selected so that the shape's bounding box remains as small as possible. This does not always look nice, but we can always reorient a shape's reference frame at any time. We now reorient the reference frames of all our created shapes with [Menu bar --> Edit --> Reorient bounding box --> with reference frame of world]. You have more options to reorient a reference frame in the shape geometry dialog. \n \n \n 創建或修改形狀時，CoppeliaSim將自動設置其參考框架的位置和方向。 形狀的參考框架將始終位於形狀的幾何中心。 將選擇框架方向，以便形狀的邊界框保持盡可能小。 這並不總是看起來不錯，但是我們隨時可以隨時調整形狀的參考框架的方向。 現在，我們可以使用[菜單欄->編輯->重定向邊界框->使用世界參考框架]重新調整所有已創建形狀的參考框架。 您有更多選項可以在形狀幾何對話框中重新定向參考框架。 \n \n Building the joints Now we will take care of the joints/motors. Most of the time, we know the exact position and orientation of each of the joints. In that case, we simply add the joints with [Menu bar --> Add --> Joints --> ...], then we can change their position and orientation with the position dialog and orientation dialog. In other situations, we only have the Denavit-Hartenberg (i.e. D-H) parameters. In that case, we can build our joints via the tool model located in Models/tools/Denavit-Hartenberg joint creator.ttm, in the model browser. Othertimes, we have no information about the joint locations and orientations. Then, we need to extract them from the imported mesh. Let's suppose this is our case. Instead of working on the modified, more approximate mesh, we open a new scene, and import the original CAD data again. Most of the time, we can extract meshes or primitive shapes from the original mesh. The first step is to subdivide the original mesh. If that does not work, we do it via the triangle edit mode. Let's suppose that we could divide the original mesh. We now have smaller objects that we can inspect. We are looking for revolute shapes, that could be used as reference to create joints at their locations, with the same orientation. First, remove all objects that are not needed. It is sometimes also useful to work across several opened scenes, for easier visualization/manipulation. In our case, we focus first on the base of the robot: it contains a cylinder that has the correct position for the first joint. In the triangle edit mode, we have: \n \n 建立關節 現在，我們將照顧關節/馬達。大多數時候，我們知道每個關節的確切位置和方向 在這種情況下，我們只需使用[菜單欄->添加->關節-> ...]添加關節，然後可以使用位置對話框和方向對話框更改它們的位置和方向。 在其他情況下，我們只有Denavit-Hartenberg（即D-H）參數。在這種情況下，我們可以通過模型瀏覽器中位於Models / tools / Denavit-Hartenberg聯合creator.ttm中的工具模型來構建關節。 有時，我們沒有關於關節位置和方向的信息。然後，我們需要從導入的網格中提取它們。讓我們假設這是我們的情況。無需處理修改過的，更近似的網格，而是打開一個新場景，然後再次導入原始CAD數據。 大多數時候，我們可以從原始網格中提取網格或基本形狀。第一步是細分原始網格。如果那不起作用，我們將通過三角形編輯模式進行操作。假設我們可以劃分原始網格。現在，我們可以檢查較小的對象。 我們正在尋找旋轉形狀，可以用作在其位置以相同方向創建關節的參考。首先，刪除所有不需要的對象。有時在多個打開的場景中工作也很有用，以便於可視化/操作。 在我們的案例中，我們首先關注機器人的基座：它包含一個圓柱體，該圓柱體的第一個關節的位置正確。在三角形編輯模式下，我們有： \n", 'tags': '', 'url': 'WEEK17個人任務.html'}]};