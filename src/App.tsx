import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from './components/ui/button'
import { Textarea } from './components/ui/textarea'
import { Card, CardContent, CardTitle } from './components/ui/card'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './components/ui/collapsible'
import { Globe } from 'lucide-react'
import './App.css'

function App() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  const featuresData: { title: string; text: string }[] = [
    {
      title: "아이디어 한 줄이면 시작할 수 있어요.",
      text: "생각 중인 아이디어를 프롬프트로 입력하면, CALSAgents가 자동으로 프로젝트를 시작합니다. 복잡한 설정이나 학습 없이 누구나 바로 시도할 수 있어요.",
    },
    {
      title: "자동으로 기획 문서를 만들어드립니다.",
      text: "입력된 아이디어를 바탕으로, 서비스 목적과 핵심 기능을 분석하여 PRD(기획 문서)를 자동 구성해드려요.<br /> 아이디어가 구체적이지 않아도 괜찮습니다. CALSAgents의 인터뷰 기능을 통해 자연스럽게 아이디어를 확장할 수 있어요.",
    },
    {
      title: "전문가 역할의 에이전트들이 함께 만듭니다.",
      text: "CALSAgents는 Multi-Agent 시스템을 기반으로 작동합니다. 기획자, 디자이너, 개발자처럼 각 전문 역할을 수행하는 AI 이전트들이 분업과 협업을 통해 완성형 앱을 자동으로 만들어줍니다.",
    },
    {
      title: "생성 후 운영까지, 코딩 없이 가능합니다.",
      text: "완성된 앱은 로우코드 솔루션 CALS를 통해 UI 수정, 기능 추가, 데이터 관리까지 쉽게 운영할 수 있어요. 개발 지식 없이도 앱을 직접 운영해보세요.",
    },
  ];

  const audiencesData: { title: string; content: string; }[] = [
    {
      title: "막연한 아이디어를 정리하고 싶을 때",
      content:
        "에이전트가 생각을 끌어내고 PRD를 자동으로 만들어드립니다. 아이디어가 구체적이지 않아도 시작할 수 있어요."
    },
    {
      title: "개발 없이 아이디어를 검증하고 싶을 때",
      content:
        "프롬프트만 입력하면 기획부터 앱 생성까지 자동으로 진행됩니다. 개발자 없이도 아이디어를 바로 테스트할 수 있어요."
    },
    {
      title: "빠르게 MVP를 테스트하고 싶을 때",
      content:
        "실행 가능한 앱을 즉시 만들고, 사용자 피드백을 통해 빠르게 개선하세요. 기획과 개발을 기다리지 않아도 됩니다."
    },
  ];

  const faqData: { title: string; content: string; }[] = [
    {
      title: "CALSAgents는 어떤 서비스 인가요?",
      content: "Multi Agent 기반 AI 앱 생성 플랫폼입니다.<br /> 프롬프트 한 줄만 입력하면, 여러 AI 에이전트가 협력하여 기획, 설계, 개발까지 자동으로 처리해드려요.<br /> 개발 지식 없이도 완성형 앱을 손쉽게 만들 수 있습니다. "
    },
    {
      title: "회원가입 없이도 사용해볼 수 있나요?",
      content: "아니요, CALSAgents는 회원가입 후에만 사용 가능합니다.<br /> 생성된 앱의 저장 및 수정 기능, Studio 연동 등 대부분의 주요 기능이 계정 기반으로 제공됩니다."
    },
    {
      title: "서비스는 무료인가요?",
      content: "베타 기간 동안은 모든 기능을 무료로 제공합니다.<br /> 정식 출시 이후에는 일부 기능이 유료화될 수 있으며, 자세한 이용 정책은 추후 안내드릴 예정입니다."
    },
    {
      title: "정말 코딩 지식 없이도 앱을 만들고 운영할 수 있나요?",
      content: "네, 가능합니다.<br /> 프롬프트에 아이디어만 입력하면, AI 에이전트가 앱 구조를 자동으로 설계하고 구현해줍니다.<br /> 별도의 개발 지식 없이도 앱 생성부터 운영까지 이어지는 흐름을 경험하실 수 있어요."
    },
    {
      title: "생성된 앱은 수정할 수 있나요?",
      content: "네, 수정 가능합니다.<br /> 앱 생성 후 배포 전에는 프롬프트 기반으로, 배포 후에는 CALS Studio를 통해 화면, 텍스트, 기능 흐름 등을 자유롭게 편집할 수 있습니다.<br /> CALS의 로우코드 환경 덕분에, 코딩 없이도 손쉽게 운영할 수 있어요."
    },
    {
      title: "생성된 앱은 상업적으로 사용할 수 있나요?",
      content: "베타 기간에는 자유롭게 테스트 및 개인/팀 프로젝트에 활용하실 수 있습니다.<br /> 상업적 이용은 정식 출시 후 라이선스 정책 공개에 따라 가능하며, 세부 내용은 추후 안내드릴 예정입니다."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="layout-container">
      <header>
        <h1><a href="/">CALS Agents</a></h1>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm">로그인</Button>
          <Button variant="default" className="btn-start" onClick={() => navigate(import.meta.env.BASE_URL + 'dashboard')}>무료 시작하기</Button>
        </div>
      </header>
      <main>

        <div className="main-container">
          <section className="section1">
            <div className="inner">
              <h2><em className="text-gradient">한 줄의 프롬프트,</em><br />에이전트 팀이 완성합니다.</h2>
              <p className="text1">기획부터 완성, 운영까지 <span className="bar"></span> 에이전트로 만들고, 로우코드로 운영하세요.</p>
              <p className="text2">에이전트 팀이 대기 중입니다. 아이디어를 입력하세요.</p>
              <div className="prompt-wrap">
                <Textarea placeholder="만들고 싶은 서비스를 입력해 보세요." />
                <Button variant="default" size="lg">에이전트 호출</Button>
              </div>
              <p className="text3">
                <span>100가지 제품의 입고, 출고, 재고 관리를 할 수 있는 물류 관리 시스템을 만들어줘.</span>
              </p>
            </div>
          </section>
          <section className="section2">
            <div className="inner">
              <div className="box">
                앱 생성 화면 이미지 or 영상(Agent 단계)
              </div>
            </div>
          </section>
          <section className="section3">
            <div className="inner">
              <h2>아이디어만으로 앱 생성, 운영까지</h2>
              <p className="description">아이디어 한 줄이면 충분해요.<br />CALSAgents의 에이전트들이 앱을 생성하고, 로우코드 솔루션 'CALS'에서 운영까지 이어집니다.<br />개발 지식 없이도, 지금 바로 시작해보세요.</p>
              <div className="features-wrap">
                {featuresData.map((feature, index) => (
                  <dl key={index}>
                    <dt></dt>
                    <dd>
                      <h3>{feature.title}</h3>
                      <p className="text1" dangerouslySetInnerHTML={{ __html: feature.text }} />
                    </dd>
                  </dl>
                ))}
              </div>
            </div>
          </section>
          <section className="section4">
            <div className="inner">
              <h2>여러 분들을 위한 CALSAgensts</h2>
              <p className="description">지금 떠오른 아이디어, CALSAgents로 바로 시작해보세요.</p>
              <div className="audiences-wrap">
                {audiencesData.map((item, index) => (
                  <Card key={index} className="audiences-item">
                    <CardTitle className="audiences-item__title">{item.title}</CardTitle>
                    <CardContent className="audiences-item__content">{item.content}</CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
          <section className="section5">
            <div className="inner">
              <h2>FAQ</h2>
              <p className="description">궁금한 점이 있으신가요? 저희가 도와드릴게요.</p>
              <div className="faq-list">
                {faqData.map((item, index) => (
                  <Collapsible key={index} open={openFaqIndex === index} onOpenChange={() => toggleFaq(index)} className="faq-list-item">
                    <CollapsibleTrigger className="faq-list-item__trigger" data-state={openFaqIndex === index ? 'open' : 'closed'}>{item.title}</CollapsibleTrigger>
                    <CollapsibleContent className="faq-list-item__content overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
                      <div dangerouslySetInnerHTML={{ __html: item.content }} />
                    </CollapsibleContent>
                  </Collapsible>
                ))}
              </div>
            </div>
          </section>
          <section className="section6">
            <div className="inner">
              <h2>지금 바로 체험해 보세요</h2>
              <p className="description">
                베타 기간 동안 CALSAgents를 무료로 체험해보세요.<br />
                아이디어가 아직 구체적이지 않아도, 개발 지식이 없어도 <br />
                CALSAgents와 함께라면 앱 생성부터 운영까지 문제 없습니다.
              </p>
              <div className="flex justify-center py-4">
                <Button variant="default" size="lg" className="btn-start" onClick={() => navigate(import.meta.env.BASE_URL + 'dashboard')}>무료 시작하기</Button>
              </div>
            </div>
          </section>
        </div>

      </main >
      <footer>
        <div className="inner">
          <ul>
            <li>
              <strong className="block">CALSAgents</strong>
              <div className="flex items-center gap-2">
                <a href="/">개인정보처리방침</a>
                <a href="/">이용약관</a>
                <a href="/">문의</a>
              </div>
            </li>
            <li>
              <a href="/" className="flex items-center gap-1"><Globe size='16' />한국어(KR)</a>
            </li>
          </ul>
          <p className="pt-2 pb-4 text-center text-xs">Copyright 2025 CALSAgents. All rights reserved.</p>
        </div>
      </footer>
    </div >
  )
}

export default App
