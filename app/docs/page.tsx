import { Container } from "@/components/Container"
import { Section } from "@/components/Section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "문서 | Modern Starter",
  description: "Next.js 모던 스타터킷 설명서",
}

export default function DocsPage() {
  return (
    <Container>
      {/* 개요 섹션 */}
      <Section>
        <h1 className="text-4xl font-bold">문서</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Modern Starter는 최신 웹 기술을 기반으로 한 Next.js 스타터킷입니다.
        </p>
      </Section>

      {/* 기술 스택 섹션 */}
      <Section>
        <h2 className="text-2xl font-semibold">기술 스택</h2>
        <p className="mt-2 text-muted-foreground">
          이 스타터킷에 포함된 기술들입니다.
        </p>
        <div className="mt-6 grid gap-3">
          <div className="flex flex-wrap gap-2">
            <Badge>Next.js 16.1.6</Badge>
            <Badge>React 19</Badge>
            <Badge>TypeScript</Badge>
            <Badge>Tailwind CSS v4</Badge>
            <Badge>Radix UI</Badge>
          </div>
        </div>
      </Section>

      {/* 시작하기 섹션 */}
      <Section>
        <h2 className="text-2xl font-semibold">시작하기</h2>
        <p className="mt-2 text-muted-foreground">
          프로젝트 설치 및 실행 방법입니다.
        </p>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-lg">설치</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="overflow-x-auto rounded bg-slate-900 p-4 text-sm text-slate-50">
              <code>npm install</code>
            </pre>
          </CardContent>
        </Card>

        <Card className="mt-4">
          <CardHeader>
            <CardTitle className="text-lg">개발 서버 실행</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="overflow-x-auto rounded bg-slate-900 p-4 text-sm text-slate-50">
              <code>npm run dev</code>
            </pre>
            <p className="mt-2 text-sm text-muted-foreground">
              http://localhost:3000에서 브라우저를 열어 확인하세요.
            </p>
          </CardContent>
        </Card>

        <Card className="mt-4">
          <CardHeader>
            <CardTitle className="text-lg">프로덕션 빌드</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="overflow-x-auto rounded bg-slate-900 p-4 text-sm text-slate-50">
              <code>npm run build</code>
            </pre>
          </CardContent>
        </Card>
      </Section>

      {/* 프로젝트 구조 섹션 */}
      <Section>
        <h2 className="text-2xl font-semibold">프로젝트 구조</h2>
        <p className="mt-2 text-muted-foreground">
          주요 파일 및 디렉토리 구조입니다.
        </p>

        <Card className="mt-6">
          <CardContent className="pt-6">
            <pre className="overflow-x-auto text-sm leading-relaxed">
              <code>{`claude-nextjs-starters/
├── app/
│   ├── layout.tsx          # 루트 레이아웃
│   ├── page.tsx            # 홈 페이지
│   └── docs/
│       └── page.tsx        # 문서 페이지
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── MobileMenu.tsx
│   │   └── ThemeToggle.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   └── FeaturesSection.tsx
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   └── sheet.tsx
│   ├── Container.tsx
│   └── Section.tsx
├── hooks/
│   └── use-theme.ts
├── lib/
│   └── nav-links.ts
├── providers/
│   └── ThemeProvider.tsx
└── public/`}</code>
            </pre>
          </CardContent>
        </Card>
      </Section>

      {/* 컴포넌트 사용법 */}
      <Section>
        <h2 className="text-2xl font-semibold">컴포넌트 사용법</h2>
        <p className="mt-2 text-muted-foreground">
          자주 사용하는 컴포넌트들의 사용 예시입니다.
        </p>

        {/* Button */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-lg">Button</CardTitle>
            <CardDescription>기본 버튼 컴포넌트</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Button>기본</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
            <pre className="mt-4 overflow-x-auto rounded bg-slate-900 p-4 text-sm text-slate-50">
              <code>{`import { Button } from "@/components/ui/button"

<Button>Click me</Button>
<Button variant="secondary">Secondary</Button>`}</code>
            </pre>
          </CardContent>
        </Card>

        {/* Card */}
        <Card className="mt-4">
          <CardHeader>
            <CardTitle className="text-lg">Card</CardTitle>
            <CardDescription>콘텐츠를 담는 카드 컴포넌트</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded border p-4">
              <h3 className="font-semibold">Card 제목</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                카드 내용이 들어갑니다.
              </p>
            </div>
            <pre className="mt-4 overflow-x-auto rounded bg-slate-900 p-4 text-sm text-slate-50">
              <code>{`import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

<Card>
  <CardHeader>
    <CardTitle>제목</CardTitle>
  </CardHeader>
  <CardContent>내용</CardContent>
</Card>`}</code>
            </pre>
          </CardContent>
        </Card>

        {/* Badge */}
        <Card className="mt-4">
          <CardHeader>
            <CardTitle className="text-lg">Badge</CardTitle>
            <CardDescription>라벨 및 태그 표시용 배지</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
            <pre className="mt-4 overflow-x-auto rounded bg-slate-900 p-4 text-sm text-slate-50">
              <code>{`import { Badge } from "@/components/ui/badge"

<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>`}</code>
            </pre>
          </CardContent>
        </Card>
      </Section>

      {/* 다크모드 섹션 */}
      <Section>
        <h2 className="text-2xl font-semibold">다크모드</h2>
        <p className="mt-2 text-muted-foreground">
          다크모드는 React Context를 기반으로 구현되었습니다.
        </p>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-lg">useTheme 훅 사용</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="overflow-x-auto rounded bg-slate-900 p-4 text-sm text-slate-50">
              <code>{`"use client"

import { useTheme } from "@/hooks/use-theme"

export function MyComponent() {
  const { theme, setTheme } = useTheme()

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      현재 테마: {theme}
    </button>
  )
}`}</code>
            </pre>
          </CardContent>
        </Card>

        <Card className="mt-4">
          <CardHeader>
            <CardTitle className="text-lg">테마 저장</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              사용자가 선택한 테마는 localStorage에 자동으로 저장되며,
              <br />
              다음 방문 시 선택한 테마가 유지됩니다.
            </p>
          </CardContent>
        </Card>
      </Section>

      {/* Footer */}
      <Section className="pb-12">
        <div className="rounded border border-dashed p-6 text-center">
          <p className="text-sm text-muted-foreground">
            더 많은 정보는{" "}
            <a href="https://nextjs.org" className="font-medium hover:underline">
              Next.js 공식 문서
            </a>
            를 참고하세요.
          </p>
        </div>
      </Section>
    </Container>
  )
}
