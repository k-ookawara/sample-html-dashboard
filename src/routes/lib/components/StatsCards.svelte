<script>
  const stats = [
    {
      title: '総売上',
      value: '¥2,450,000',
      change: '+12.5%',
      changeType: 'increase',
      icon: '💰'
    },
    {
      title: '新規ユーザー',
      value: '1,234',
      change: '+8.2%',
      changeType: 'increase',
      icon: '👥'
    },
    {
      title: '注文数',
      value: '856',
      change: '-2.1%',
      changeType: 'decrease',
      icon: '📦'
    },
    {
      title: '変換率',
      value: '3.24%',
      change: '+0.5%',
      changeType: 'increase',
      icon: '📈'
    }
  ];
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {#each stats as stat}
    <div class="bg-white overflow-hidden shadow rounded-lg">
      <div class="p-5">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <span class="text-2xl">{stat.icon}</span>
          </div>
          <div class="ml-5 w-0 flex-1">
            <dl>
              <dt class="text-sm font-medium text-gray-500 truncate">
                {stat.title}
              </dt>
              <dd class="flex items-baseline">
                <div class="text-2xl font-semibold text-gray-900">
                  {stat.value}
                </div>
                <div class="ml-2 flex items-baseline text-sm font-semibold"
                     class:text-green-600={stat.changeType === 'increase'}
                     class:text-red-600={stat.changeType === 'decrease'}>
                  {stat.change}
                </div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  {/each}
</div>
