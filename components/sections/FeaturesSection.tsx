import {
  Zap,
  Palette,
  Layout,
  Shield,
  Box,
  Code,
} from "lucide-react"
import { Container } from "@/components/Container"
import { Section } from "@/components/Section"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"

const features = [
  {
    icon: Zap,
    title: "초고속 성능",
    description: "Next.js 15의 App Router로 최적화된 성능",
  },
  {
    icon: Palette,
    title: "아름다운 디자인",
    description: "Tailwind CSS v4와 다크모드 기본 지원",
  },
  {
    icon: Layout,
    title: "반응형 레이아웃",
    description: "모바일부터 데스크톱까지 완벽한 대응",
  },
  {
    icon: Shield,
    title: "보안 우선",
    description: "안전하고 신뢰할 수 있는 구조로 설계",
  },
  {
    icon: Box,
    title: "재사용 가능",
    description: "shadcn 컴포넌트로 빠른 개발",
  },
  {
    icon: Code,
    title: "깔끔한 코드",
    description: "전문가 수준의 코드 구조",
  },
]

export function FeaturesSection() {
  return (
    <Section id="features">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            강력한 기능들
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            모던 웹 개발에 필요한 모든 것을 갖춰 제공합니다.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <Card key={feature.title}>
                <CardHeader>
                  <Icon className="mb-2 h-6 w-6 text-primary" />
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
