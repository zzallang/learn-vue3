import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

// 전역등록
// 장점 : 전역으로 등록된 컴포넌트는 어디든 사용할 수 있다.
// 단점 : 1. 컴포넌트를 사용하지 않더라도 계속해서 최종 빌드에 해당 컴포넌트가 포함 되는 것을 의미
//           이는 사용자가 다운로드하는 자바스크립트 파일의 크기를 불필요하게 증가시킴
//        2. 종속관계를 파악하기 힘들어 유지보수를 하기에 어려워짐.
// app.component('AppCard', AppCard);

app.mount('#app');
import 'bootstrap/dist/js/bootstrap.min.js';
