<script>
  let { sidebarOpen, toggleSidebar } = $props();

  const menuItems = [
    { name: 'ダッシュボード', icon: '📊', active: true },
    { name: '分析', icon: '📈', active: false },
    { name: 'ユーザー', icon: '👥', active: false },
    { name: '設定', icon: '⚙️', active: false },
    { name: 'レポート', icon: '📋', active: false }
  ];
</script>

<div class="fixed inset-0 flex z-40 md:hidden" class:hidden={!sidebarOpen}>
  <div class="fixed inset-0 bg-gray-600 bg-opacity-75" role="button" tabindex="0" onclick={toggleSidebar}></div>
  <div class="relative flex-1 flex flex-col max-w-xs w-full bg-white">
    <div class="absolute top-0 right-0 -mr-12 pt-2">
      <button
        onclick={toggleSidebar}
        class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
      >
        <span class="sr-only">サイドバーを閉じる</span>
        <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    <div class="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
      <nav class="mt-5 px-2 space-y-1">
        {#each menuItems as item}
          <a
            href="/"
            class="group flex items-center px-2 py-2 text-base font-medium rounded-md transition-colors duration-150 ease-in-out"
            class:bg-blue-100={item.active}
            class:text-blue-900={item.active}
            class:text-gray-600={!item.active}
            class:hover:bg-gray-50={!item.active}
            role="button" tabindex="0" onkeydown={(e) => { if (e.key === 'Enter') alert(item.name); }}
          >
            <span class="mr-3 text-lg">{item.icon}</span>
            {item.name}
          </a>
        {/each}
      </nav>
    </div>
  </div>
</div>

<div class="hidden md:flex md:flex-shrink-0">
  <div class="flex flex-col w-64">
    <div class="flex flex-col h-0 flex-1 bg-white shadow">
      <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
        <div class="flex items-center flex-shrink-0 px-4">
          <h2 class="text-xl font-bold text-gray-900">管理パネル</h2>
        </div>
        <nav class="mt-5 flex-1 px-2 space-y-1">
          {#each menuItems as item}
            <a
              href="/"
              class="group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors duration-150 ease-in-out"
              class:bg-blue-100={item.active}
              class:text-blue-900={item.active}
              class:text-gray-600={!item.active}
              class:hover:bg-gray-50={!item.active}
              role="button" tabindex="0" onkeydown={(e) => { if (e.key === 'Enter') alert(item.name); }}
            >
              <span class="mr-3 text-lg">{item.icon}</span>
              {item.name}
            </a>
          {/each}
        </nav>
      </div>
    </div>
  </div>
</div>
