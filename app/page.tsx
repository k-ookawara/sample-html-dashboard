export default function Dashboard() {
  return (
    <div className="dashboard">
      <header className="header">
        <h1>📊 ダッシュボード</h1>
      </header>

      <nav className="sidebar">
        <a href="#" className="nav-item active">
          🏠 ホーム
        </a>
        <a href="#" className="nav-item">
          📈 分析
        </a>
        <a href="#" className="nav-item">
          👥 ユーザー
        </a>
        <a href="#" className="nav-item">
          📋 レポート
        </a>
        <a href="#" className="nav-item">
          ⚙️ 設定
        </a>
      </nav>

      <main className="main">
        {/* 統計カード */}
        <div className="stats-grid">
          <div className="stat-card">
            <h3>総売上</h3>
            <div className="stat-value">¥2,450,000</div>
            <div className="stat-change positive">+12.5% 前月比</div>
          </div>
          <div className="stat-card">
            <h3>新規ユーザー</h3>
            <div className="stat-value">1,234</div>
            <div className="stat-change positive">+8.2% 前月比</div>
          </div>
          <div className="stat-card">
            <h3>注文数</h3>
            <div className="stat-value">856</div>
            <div className="stat-change negative">-3.1% 前月比</div>
          </div>
          <div className="stat-card">
            <h3>コンバージョン率</h3>
            <div className="stat-value">3.24%</div>
            <div className="stat-change positive">+0.8% 前月比</div>
          </div>
        </div>

        {/* チャートセクション */}
        <div className="chart-section">
          <div className="chart-card">
            <h2>月別売上推移</h2>
            <div className="bar-chart">
              <div className="bar" style={{ height: "60%" }}>
                <div className="bar-label">1月</div>
              </div>
              <div className="bar" style={{ height: "80%" }}>
                <div className="bar-label">2月</div>
              </div>
              <div className="bar" style={{ height: "45%" }}>
                <div className="bar-label">3月</div>
              </div>
              <div className="bar" style={{ height: "90%" }}>
                <div className="bar-label">4月</div>
              </div>
              <div className="bar" style={{ height: "70%" }}>
                <div className="bar-label">5月</div>
              </div>
              <div className="bar" style={{ height: "100%" }}>
                <div className="bar-label">6月</div>
              </div>
            </div>
          </div>

          <div className="chart-card">
            <h2>最近のアクティビティ</h2>
            <div className="recent-activity">
              <div className="activity-item">
                <div className="activity-icon">👤</div>
                <div className="activity-content">
                  <div className="activity-title">新規ユーザー登録</div>
                  <div className="activity-time">2分前</div>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon">💰</div>
                <div className="activity-content">
                  <div className="activity-title">注文完了 #12345</div>
                  <div className="activity-time">15分前</div>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon">📧</div>
                <div className="activity-content">
                  <div className="activity-title">メール送信完了</div>
                  <div className="activity-time">1時間前</div>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon">⚠️</div>
                <div className="activity-content">
                  <div className="activity-title">システムアラート</div>
                  <div className="activity-time">2時間前</div>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon">📊</div>
                <div className="activity-content">
                  <div className="activity-title">レポート生成完了</div>
                  <div className="activity-time">3時間前</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* データテーブル */}
        <div className="table-section">
          <div className="table-header">
            <h2>最近の注文</h2>
          </div>
          <table>
            <thead>
              <tr>
                <th>注文ID</th>
                <th>顧客名</th>
                <th>商品</th>
                <th>金額</th>
                <th>ステータス</th>
                <th>日付</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#12345</td>
                <td>田中太郎</td>
                <td>ノートパソコン</td>
                <td>¥89,800</td>
                <td>
                  <span className="status active">完了</span>
                </td>
                <td>2025-01-11</td>
              </tr>
              <tr>
                <td>#12344</td>
                <td>佐藤花子</td>
                <td>スマートフォン</td>
                <td>¥65,000</td>
                <td>
                  <span className="status pending">処理中</span>
                </td>
                <td>2025-01-11</td>
              </tr>
              <tr>
                <td>#12343</td>
                <td>鈴木一郎</td>
                <td>タブレット</td>
                <td>¥45,000</td>
                <td>
                  <span className="status active">完了</span>
                </td>
                <td>2025-01-10</td>
              </tr>
              <tr>
                <td>#12342</td>
                <td>高橋美咲</td>
                <td>イヤホン</td>
                <td>¥12,800</td>
                <td>
                  <span className="status inactive">キャンセル</span>
                </td>
                <td>2025-01-10</td>
              </tr>
              <tr>
                <td>#12341</td>
                <td>山田次郎</td>
                <td>キーボード</td>
                <td>¥8,500</td>
                <td>
                  <span className="status active">完了</span>
                </td>
                <td>2025-01-09</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}
