<script>
  const activities = [
    {
      id: 1,
      user: '佐藤花子',
      action: '新しい注文を作成しました',
      time: '2分前',
      avatar: '/placeholder.svg?height=40&width=40'
    },
    {
      id: 2,
      user: '山田次郎',
      action: 'プロフィールを更新しました',
      time: '15分前',
      avatar: '/placeholder.svg?height=40&width=40'
    },
    {
      id: 3,
      user: '鈴木三郎',
      action: 'レポートをダウンロードしました',
      time: '1時間前',
      avatar: '/placeholder.svg?height=40&width=40'
    },
    {
      id: 4,
      user: '田中四郎',
      action: '新しいコメントを投稿しました',
      time: '2時間前',
      avatar: '/placeholder.svg?height=40&width=40'
    },
    {
      id: 5,
      user: '高橋五郎',
      action: 'ファイルをアップロードしました',
      time: '3時間前',
      avatar: '/placeholder.svg?height=40&width=40'
    }
  ];
</script>

<div class="bg-white shadow rounded-lg p-6">
  <h3 class="text-lg font-medium text-gray-900 mb-4">最近のアクティビティ</h3>
  
  <div class="flow-root">
    <ul class="-mb-8">
      {#each activities as activity, i}
        <li>
          <div class="relative pb-8">
            {#if i !== activities.length - 1}
              <span class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"></span>
            {/if}
            <div class="relative flex space-x-3">
              <div>
                <img 
                  class="h-8 w-8 rounded-full" 
                  src={activity.avatar || "/placeholder.svg"} 
                  alt="{activity.user}のアバター"
                />
              </div>
              <div class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                <div>
                  <p class="text-sm text-gray-500">
                    <span class="font-medium text-gray-900">{activity.user}</span>
                    {activity.action}
                  </p>
                </div>
                <div class="text-right text-sm whitespace-nowrap text-gray-500">
                  {activity.time}
                </div>
              </div>
            </div>
          </div>
        </li>
      {/each}
    </ul>
  </div>
</div>
