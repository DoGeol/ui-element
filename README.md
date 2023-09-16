# ui-element 
엘리먼트 컴포넌트를 직접 구현해보고 이해하기 위한 프로젝트

## 프로젝트 목표
1. 엘리먼트 컴포넌트를 구현하고 이해한다.
2. react-hook-form을 쉽게 적용할 수 있도록 구현한다.
3. Nextjs v13 버전에서 호환되는 컴포넌트를 구현한다 (SSR, SSG, CSR)
4. nextjs app router의 설정 및 세팅을 이해한다(테스트)


## 시작하기
- node : v18.16.1
- npm : v9.5.1
- nextjs : v13.4.19
- react: v18.2.0

```bash
npm install

npm run dev
```

## 설치 라이브러리
```bash
npm i react-hook-form dayjs
```
```bash
npm i --D cross-env autoprefixer
```

### 라이브러리 상세 설명
1. cross-env
2. autoprefixer  
    css vender prefix를 자동으로 추가해주는 라이브러리  
    package.json에 browserslist를 추가하여 사용
    ```text
    "browserslist": [
        "> 1%", // 전세게 점유율 1% 이상인 브라우저 
        "last 2 versions" // 해당하는 브라우저의 마지막 두개의 버전 까지는 지원하겠다는 옵션
    ]
    ```