---
name: 프로젝트 코드 패턴 및 아키텍처
description: claude-nextjs-starters 프로젝트의 코드 패턴, 관례, 아키텍처 결정 사항
type: project
---

## 컴포넌트 분류
- Server Components: Footer, HeroSection, FeaturesSection, Container, Section, app/page.tsx, app/docs/page.tsx
- Client Components: Header("use client"), ThemeToggle("use client"), MobileMenu("use client"), ThemeProvider("use client"), sheet.tsx("use client"), use-theme.ts("use client")
- Header는 "use client"이지만 사실 ThemeToggle/MobileMenu를 자식으로 가져오기 때문에 Client Component로 선언되었다. 단, Header 자체가 상태를 가지지 않아도 내부 Child가 Client라서 "use client" 선언이 필요한 상황.

## 테마 시스템
- React Context + localStorage 기반
- ThemeProvider: theme state 관리, localStorage 읽기/쓰기, html 클래스 토글
- FOUC 방지: app/layout.tsx head에 인라인 스크립트
- useTheme 훅: Provider 바깥이면 Error throw (SSR 문서와 달리 에러 던지는 방식)
- 초기 상태: "light"로 하드코딩 → 하이드레이션 전 깜빡임 가능성 있음

## 레이아웃 패턴
- Container: max-w-7xl + 반응형 패딩 (px-4 / sm:px-6 / lg:px-8)
- Section: 반응형 수직 패딩 (py-12 / sm:py-16 / lg:py-20)
- HeroSection: Section 안에 Container 중첩 패턴 사용 (정상)
- docs/page.tsx: Container 안에 Section 중첩 패턴 사용 (정상)

## 타입 정의
- Container, Section: React.ReactNode + className?: string 인라인 타입
- ThemeContext: 별도 interface ThemeContextType 정의
- navLinks: 타입 어노테이션 없음 (추론에 의존)

## shadcn 컴포넌트 패턴
- card.tsx: React.forwardRef 패턴 사용, displayName 설정
- CardTitle: ref 타입 불일치 (HTMLParagraphElement ref에 h3 렌더링)
- badge.tsx: export interface BadgeProps 방식
- button.tsx: React.ComponentProps<"button"> 확장 패턴, data-slot/data-variant/data-size 속성 사용
- sheet.tsx: @radix-ui/react-dialog 기반

## 스타일링
- Tailwind CSS v4 사용 (@import "tailwindcss")
- oklch 색상 공간 사용
- @custom-variant dark (&:is(.dark *)) - 클래스 기반 다크모드
- sidebar 관련 CSS 변수 존재하지만 Sidebar 컴포넌트가 없음 (미사용 변수)
- chart 색상 변수도 미사용
- globals.css에 @import "shadcn/tailwind.css" 참조 (패키지에서 import)

## 네비게이션
- nav-links.ts: 타입 어노테이션 없는 단순 배열 export
- 링크 라벨이 영어 (Features, Docs) - 코드 주석/문서는 한국어인데 UI 텍스트 혼용

## 접근성
- ThemeToggle: aria-label="테마 전환" 정상 적용
- MobileMenu: sr-only span으로 스크린리더 지원
- sheet.tsx 닫기 버튼: <span className="sr-only">Close</span> - 영어 사용 (일관성 없음)
- Header nav: aria-label 없음
- Footer 링크: href="#" 임시값 사용

## 버전 불일치
- metadata title: "Next.js 15" 언급
- docs/page.tsx Badge: "Next.js 16.1.6" 언급
- package.json: next 16.1.6 실제 사용
