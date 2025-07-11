<script>
  const chartData = [
    { month: '1月', value: 65 },
    { month: '2月', value: 78 },
    { month: '3月', value: 90 },
    { month: '4月', value: 81 },
    { month: '5月', value: 95 },
    { month: '6月', value: 88 }
  ];

  const maxValue = Math.max(...chartData.map(d => d.value));
</script>

<div class="bg-white shadow rounded-lg p-6">
  <h3 class="text-lg font-medium text-gray-900 mb-4">月別売上推移</h3>
  
  <div class="space-y-4">
    {#each chartData as data}
      <div class="flex items-center">
        <div class="w-12 text-sm text-gray-600">{data.month}</div>
        <div class="flex-1 ml-4">
          <div class="bg-gray-200 rounded-full h-4 relative">
            <div 
              class="bg-blue-500 h-4 rounded-full transition-all duration-500 ease-out"
              style="width: {(data.value / maxValue) * 100}%"
            ></div>
          </div>
        </div>
        <div class="w-12 text-sm text-gray-900 text-right ml-4">{data.value}%</div>
      </div>
    {/each}
  </div>
</div>
