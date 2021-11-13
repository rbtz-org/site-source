import { createApp } from 'vue'
import App from './App.vue'

// 导入自定义字体
import './assets/css/fonts.css'
// 重置 CSS
import './assets/css/reset.css'
// 全局 CSS
import './index.css'
// import XP.css
import "xp.css/dist/XP.css";

createApp(App).mount('#app')
