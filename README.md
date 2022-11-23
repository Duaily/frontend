# Duaily - 빈집 거래 중개 플랫
<img width="450" alt="image" src="https://user-images.githubusercontent.com/61505572/203564675-616e80f0-4e87-493c-8aaa-a0ef3b9dd4bf.png">

## 🎙 프로젝트 설명

듀얼리는 흩어져 있던 듀얼 라이프 정보를 제공할뿐만 아니라 빈집 거래를 통해 
듀얼 라이프 실현까지 도우며 빈집 문제까지도 해결하는 것을 목표로 하는 플랫폼입니다.

핵심 기능은 다음과 같습니다.

- 빈 집 게시글을 작성하고 조회
- 빈 집 게시글을 통한 거레
- 듀얼 라이프에 관심 있는 사용자들간의 커뮤니티

## 🖥️ 배포 링크

https://duaily.vercel.app

## 🛠 기술 스택

<div style="display: flex; align-items: flex-start;">
  <img src="https://techstack-generator.vercel.app/react-icon.svg" alt="icon" width="80" height="80" />
  <img src="https://techstack-generator.vercel.app/ts-icon.svg" alt="icon" width="80" height="80" />
</div>

<div style="display: flex; align-items: flex-start;">
    <img src="https://img.shields.io/badge/React Query-FF4154?style=for-the-badge&logo=React Query&logoColor=white" alt="icon" />
    <img src="https://img.shields.io/badge/ReactRouter-CA4245?style=for-the-badge&logo=ReactRouter&logoColor=white" alt="icon" />
    <img alt="StyledComponents" src ="https://img.shields.io/badge/StyledComponents-DB7093.svg?&style=for-the-badge&logo=StyledComponents&logoColor=white"/>
    
</div>
<div style="display: flex; align-items: flex-start;">
    <img src="https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white" alt="icon" />
    <img src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white" alt="icon" />
    <img src="https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E" alt="icon" />
</div>

**Recoil**
<br />
<img src="https://user-images.githubusercontent.com/54137044/184468356-2f0a1d08-2aa1-4128-984b-a8ce8244bf50.svg" alt="Recoil logo" height="50" width="50" style="max-width: 100%;">
<br />
**Framer-motion**
<br />
<img src="https://user-images.githubusercontent.com/83197138/195970734-ed0c40d7-77ae-448f-9633-e36c8f7dd3f0.png" alt="Emotion logo" height="50" width="50" style="max-width: 100%;"> <br />


`React`를 사용하여 사용자와의 상호작용을 하는 앱화면을 효율적으로 구성하고, <br />
`Recoil`을 이용하여 유동적인 값들의 상태를 관리했습니다. <br />
`React Query`를 사용하여 비동기 관련 로직 및 상태를 관리하고, <br />
`Framer-Motion`을 사용하여 `styled-components`에서도 쉽게 사용 가능하고 다양한 애니메이션 기능을 간편하게 사용했습니다.

## 시스템 아키텍처
![Group 954](https://user-images.githubusercontent.com/61505572/203553960-81cc4755-aebd-4c25-b5fb-1ea53d1b40a5.png)


## CI/CD Workflow
![밋업데이-아키텍처-cicd-flow drawio (2)](https://user-images.githubusercontent.com/61505572/203554103-523c4306-3dd3-46c0-acf9-2d371c742628.png)

1. 로컬 feature 브랜치에서 origin의 feature 브랜치로 push
2. origin의 feature 브랜치에서 upstream의 develop 브랜치로 PR
3. upstream의 develop 브랜치와 main 브랜치를 merge
4. Vercel CI / CD 실행
 
가장 최근 배포 시간 기준,  1분 4초 소요.

