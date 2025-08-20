import { useNavigate } from 'react-router-dom'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Brain, CloudCog, CloudCheck, RefreshCcw, User2Icon, BellIcon } from 'lucide-react'
import '../projects.css'

type Project = { id: string; title: string; date: string; state?: string }

const PROJECTS: ReadonlyArray<Project> = [
	{ id: 'p1', title: '물류 관리 시스템 물류', state: '요구사항 수집 진행중', date: '2025-02-01' },
	{ id: 'p2', title: '콘텐츠 분석 에이전트', state: '요구사항 수집 확인 대기중', date: '2025-01-28' },
	{ id: 'p3', title: '이커머스 대시보드', state: '배포 진행중', date: '2025-01-15' },
	{ id: 'p4', title: '물류 관리 시스템', state: '배포 완료', date: '2025-02-01' },
	{ id: 'p5', title: '콘텐츠 분석 에이전트', state: '배표 실패', date: '2025-01-28' },
	{ id: 'p6', title: '이커머스 대시보드', state: '생성 확인 대기중', date: '2025-01-15' },
	{ id: 'p7', title: '물류 관리 시스템', state: '생성 확인 대기중', date: '2025-02-01' },
	{ id: 'p8', title: '콘텐츠 분석 에이전트', state: '생성 확인 대기중', date: '2025-01-28' },
	{ id: 'p9', title: '이커머스 대시보드', state: '생성 확인 대기중', date: '2025-01-15' },
	{ id: 'p10', title: '물류 관리 시스템', state: '생성 확인 대기중', date: '2025-02-01' },
	{ id: 'p11', title: '콘텐츠 분석 에이전트', state: '생성 확인 대기중', date: '2025-01-28' },
	{ id: 'p12', title: '이커머스 대시보드', state: '생성 확인 대기중', date: '2025-01-15' },
	{ id: 'p13', title: '물류 관리 시스템', state: '생성 확인 대기중', date: '2025-02-01' },
	{ id: 'p14', title: '콘텐츠 분석 에이전트', state: '생성 확인 대기중', date: '2025-01-28' },
	{ id: 'p15', title: '이커머스 대시보드', date: '2025-01-15' },
]

const ensureTrailingSlash = (value: string): string => (value.endsWith('/') ? value : value + '/')
const BASE_URL = ensureTrailingSlash(import.meta.env.BASE_URL)

function Projects() {
	const navigate = useNavigate()
	const navigateDashboard = () => navigate(BASE_URL + 'dashboard')

	return (
		<div className="layout-container">
			<header>
        <h1><a href="/">CALS Agents</a></h1>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon"><User2Icon /></Button>
          <Button variant="ghost" size="icon"><BellIcon /></Button>
        </div>
      </header>
			<main>
				<div className="sub-container">
					<div className="projects-wrap">
						<div className="projects-header flex justify-between items-center mb-[1rem]">
							<h2>프로젝트 목록</h2>
							<div className="projects-header-actions flex items-center gap-4">
								<Button variant="ghost" size="icon" className="p-0">
									<RefreshCcw aria-hidden="true" size={16} />
								</Button>
								<Button variant="default" size="sm" className="px-[2rem] rounded-full">
									새 프로젝트 시작하기
								</Button>
							</div>
						</div>
						<ScrollArea className="projects-scroll">					
							<div className="projects-list">
								{PROJECTS.map(p => (
									<Card key={p.id} className="card-item">
										<CardTitle className="card-item-title">{p.title}</CardTitle>
										<CardDescription className="card-item-description">
												<span className="project-state">
														{p.state && <span className="project-state-text">{p.state}</span>}
														<span className="project-state-time">최근 업데이트 : {p.date}</span>
												</span>
										</CardDescription>
										<CardContent className="card-item-content">
											<div className="card-item-actions">
												<Button variant="ghost" aria-label='Agent' onClick={navigateDashboard}>
													<Brain aria-hidden="true" size={20} /><span>Agent</span></Button>
												<Button variant="ghost" aria-label='CALS Studio'>
													<CloudCog aria-hidden="true" size={20} /><span>CALS Studio</span></Button>
												<Button variant="ghost" aria-label='CALS App'>
													<CloudCheck aria-hidden="true" size={20} /><span>CALS App</span></Button>
											</div>
										</CardContent>
									</Card>
								))}
							</div>					
						</ScrollArea>
					</div>
				</div>
			</main>
		</div>
	)
}

export default Projects