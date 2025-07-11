<script>
  let { toggleSidebar } = $props();
</script>

<header class="bg-white shadow-sm border-b border-gray-200">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between h-16">
      <div class="flex items-center">
        <button
          onclick={toggleSidebar}
          class="md:hidden -ml-2 mr-2 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
        >
          <span class="sr-only">メニューを開く</span>
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <h1 class="text-xl font-semibold text-gray-900">ダッシュボード</h1>
      </div>
      
      <div class="flex items-center space-x-4">
        <button class="text-gray-500 hover:text-gray-700">
          <span class="sr-only">通知</span>
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5 5v-5zM10.5 3.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v6.5C3 9.88 3.88 11 5.5 11H9c1.62 0 2.5-1.12 2.5-2.5V2l-1.5 1.5z" />
          </svg>
        </button>
        
        <div class="flex items-center space-x-2">
          <img class="h-8 w-8 rounded-full" src="/placeholder.svg?height=32&width=32" alt="ユーザーアバター" />
          <span class="text-sm font-medium text-gray-700">田中太郎</span>
        </div>
      </div>
    </div>
  </div>
</header>
