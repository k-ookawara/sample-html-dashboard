<script>
  import Sidebar from './lib/components/Sidebar.svelte';
  import Header from './lib/components/Header.svelte';
  import StatsCards from './lib/components/StatsCards.svelte';
  import Chart from './lib/components/Chart.svelte';
  import RecentActivity from './lib/components/RecentActivity.svelte';

  let sidebarOpen = $state(false);

  function toggleSidebar() {
    sidebarOpen = !sidebarOpen;
  }
</script>

<div class="flex h-screen bg-gray-100">
  <Sidebar {sidebarOpen} {toggleSidebar} />
  
  <div class="flex-1 flex flex-col overflow-hidden">
    <Header {toggleSidebar} />
    
    <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
      <div class="max-w-7xl mx-auto">
        <h1 class="text-3xl font-bold text-gray-900 mb-8">ダッシュボード</h1>
        
        <StatsCards />
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <Chart />
          <RecentActivity />
        </div>
      </div>
    </main>
  </div>
</div>
