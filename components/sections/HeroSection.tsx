import { Container } from "@/components/Container"
import { Section } from "@/components/Section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <Section className="py-20 sm:py-28 lg:py-32">
      <Container>
        <div className="text-center">
          <Badge variant="outline" className="mb-4">
            웹 개발을 위한 모던 스타터
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Next.js 15로 빠르게 시작하세요
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Tailwind CSS, React 19, shadcn 컴포넌트로 구성된 모던한 웹 스타터킷입니다.
            프로덕션 레디 템플릿으로 즉시 개발을 시작할 수 있습니다.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg">시작하기</Button>
            <Button variant="outline" size="lg">
              문서 보기
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
